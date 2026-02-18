import { styles } from "../styles/chatStyles";

const MessageBubble = ({ role, text }) => {
    const isUser = role === "user";
    return (
        <div style={{ ...styles.messageRow, justifyContent: isUser ? "flex-end" : "flex-start" }}>
            
            {/* Anamika's Avatar */}
            {!isUser && (
                <div style={styles.avatarAnamika}>
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>A</span>
                </div>
            )}

            <div style={{
                ...styles.bubble,
                backgroundColor: isUser ? "#f4f4f4" : "transparent",
                color: "#1a1a1a",
                borderRadius: isUser ? "20px" : "0",
                padding: isUser ? "12px 20px" : "0",
                maxWidth: isUser ? "70%" : "100%",
            }}>
                {text}
            </div>
        </div>
    );
};

export default MessageBubble;