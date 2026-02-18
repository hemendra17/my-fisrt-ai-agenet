import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY, MODEL_NAME, SYSTEM_INSTRUCTION } from "../config/constants";

export const useGeminiChat = () => {
    const [messages, setMessages] = useState([
        {
            role: "model",
            text: "Namaste! I am Anamika. How can I assist you with your work today?",
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async (userText) => {
        if (!userText.trim() || isLoading) return;

        setIsLoading(true);
        setError(null);
        
        // Add user message immediately
        setMessages((prev) => [...prev, { role: "user", text: userText }]);

        try {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ 
                model: MODEL_NAME,
                systemInstruction: SYSTEM_INSTRUCTION 
            });

            // Format history (excluding the very first greeting)
            const history = messages.slice(1).map((msg) => ({
                role: msg.role,
                parts: [{ text: msg.text }],
            }));

            const chat = model.startChat({ history });
            const result = await chat.sendMessage(userText);
            const response = await result.response;
            const text = response.text();

            setMessages((prev) => [...prev, { role: "model", text: text }]);
        } catch (err) {
            console.error("API Error:", err);
            setError("Anamika is having trouble connecting. Please check your internet.");
        } finally {
            setIsLoading(false);
        }
    };

    return { messages, isLoading, error, sendMessage };
};