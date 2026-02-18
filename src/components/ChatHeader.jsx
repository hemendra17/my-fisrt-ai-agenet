import { styles } from "../styles/chatStyles";

const ChatHeader = () => (
    <header style={styles.header}>
        <div style={styles.logoArea}>
            <div style={styles.logoIcon}>A</div>
            <span style={styles.logoText}>Anamika AI</span>
            {/* <span style={styles.tag}>Pro</span> */}
        </div>
    </header>
);

export default ChatHeader;