import { useState } from "react";
import { styles } from "../styles/chatStyles";

const ChatInput = ({ onSend, isLoading }) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            onSend(input);
            setInput("");
        }
    };

    return (
        <footer style={styles.inputWrapper}>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    style={styles.inputField}
                    placeholder="Ask Anamika anything..."
                    disabled={isLoading}
                    autoFocus
                />
                <button
                    onClick={handleSend}
                    style={{
                        ...styles.sendButton,
                        backgroundColor: input.trim() ? "#6D28D9" : "#e5e5e5",
                        color: input.trim() ? "white" : "#a5a5a5",
                        cursor: input.trim() ? "pointer" : "default"
                    }}
                    disabled={!input.trim() || isLoading}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
            <div style={styles.footerText}>
                Anamika can make mistakes. Please verify important information.
            </div>
        </footer>
    );
};

export default ChatInput;