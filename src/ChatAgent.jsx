import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatAgent = () => {
    const [messages, setMessages] = useState([
        {
            role: "model",
            text: "Hello! I am your AI agent. How can I help you today?",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Auto-scroll to bottom of chat
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);

    // Initialize Gemini API
    // WARNING: In production, move this logic to your Express backend!
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);


    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", text: input };

        // 1. Add user message to UI immediately
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);
        setError(null);

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            // 2. Prepare History for API
            // FIX: We slice(1) to remove the first message (the AI greeting).
            // The API only wants the *actual* conversation history.
            const history = messages.slice(1).map((msg) => ({
                role: msg.role,
                parts: [{ text: msg.text }],
            }));

            const chat = model.startChat({
                history: history,
            });

            const result = await chat.sendMessage(input);
            const response = await result.response;
            const text = response.text();

            // 3. Add AI response to UI
            setMessages((prev) => [...prev, { role: "model", text: text }]);
        } catch (err) {
            console.error("API Error:", err);
            setError("Failed to fetch response. Check console for details.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.chatWindow}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.messageBubble,
                            alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                            backgroundColor: msg.role === "user" ? "#007bff" : "#e9ecef",
                            color: msg.role === "user" ? "white" : "black",
                        }}
                    >
                        {msg.text}
                    </div>
                ))}
                {isLoading && <div style={styles.loader}>AI is typing...</div>}
                {error && <div style={styles.error}>{error}</div>}
                <div ref={messagesEndRef} />
            </div>

            <div style={styles.inputArea}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    style={styles.input}
                    placeholder="Ask something..."
                    disabled={isLoading}
                />
                <button onClick={handleSend} style={styles.button} disabled={isLoading}>
                    Send
                </button>
            </div>
        </div>
    );
};

// Simple inline styles for quick prototyping
const styles = {
    container: {
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
    },
    chatWindow: {
        flex: 1,
        padding: "20px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    messageBubble: {
        maxWidth: "70%",
        padding: "10px 15px",
        borderRadius: "15px",
        lineHeight: "1.4",
    },
    loader: {
        alignSelf: "flex-start",
        color: "#888",
        fontSize: "0.9rem",
        margin: "10px 0",
    },
    error: {
        color: "red",
        fontSize: "0.8rem",
        textAlign: "center",
        margin: "10px 0",
    },
    inputArea: {
        display: "flex",
        padding: "10px",
        borderTop: "1px solid #ddd",
        background: "#f9f9f9",
    },
    input: {
        flex: 1,
        padding: "10px",
        borderRadius: "20px",
        border: "1px solid #ccc",
        outline: "none",
    },
    button: {
        marginLeft: "10px",
        padding: "10px 20px",
        borderRadius: "20px",
        border: "none",
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold",
    },
};

export default ChatAgent;