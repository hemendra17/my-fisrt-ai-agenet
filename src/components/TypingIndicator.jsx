import { styles } from "../styles/chatStyles";

const TypingIndicator = () => (
    <div style={styles.typingContainer}>
        <div style={{ ...styles.typingDot, animationDelay: "0s" }}></div>
        <div style={{ ...styles.typingDot, animationDelay: "0.2s" }}></div>
        <div style={{ ...styles.typingDot, animationDelay: "0.4s" }}></div>
        {/* Inject animation keyframes globally or in CSS file */}
        <style>{`
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
        `}</style>
    </div>
);

export default TypingIndicator;