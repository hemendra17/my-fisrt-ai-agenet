/* -------------------------------------------------------------------------- */
/* FULL STYLE CONFIGURATION                                                   */
/* -------------------------------------------------------------------------- */

export const styles = {
    // 1. MAIN LAYOUT: Forces the app to be exactly the screen size
    appContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",       // Full viewport height
        width: "100vw",        // Full viewport width
        backgroundColor: "#ffffff",
        fontFamily: "'Inter', sans-serif",
        color: "#1a1a1a",
        overflow: "hidden",    // Prevents double scrollbars on the body
    },

    // 2. HEADER: Fixed at the top
    header: {
        height: "60px",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #f0f0f0",
        flexShrink: 0,         // Ensures header never shrinks
        backgroundColor: "#fff",
        zIndex: 10,
    },

    logoArea: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },

    logoIcon: {
        width: "32px",
        height: "32px",
        backgroundColor: "#6D28D9", // Brand Purple
        color: "white",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "1.2rem",
    },

    logoText: {
        fontSize: "1.2rem",
        fontWeight: "700",
        letterSpacing: "-0.5px",
        color: "#333",
    },

    tag: {
        fontSize: "0.7rem",
        backgroundColor: "#EDE9FE",
        color: "#6D28D9",
        padding: "2px 6px",
        borderRadius: "4px",
        fontWeight: "600",
        marginTop: "2px",
    },

    // 3. CHAT AREA: The "Middle" part that scrolls
    chatArea: {
        flex: 1,               // Takes up all remaining vertical space
        overflowY: "auto",     // Enables scrolling ONLY here
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",  // Centers the message container
        paddingTop: "20px",
        paddingBottom: "20px",
        scrollBehavior: "smooth",
    },

    messagesContainer: {
        width: "100%",
        maxWidth: "800px",     // Limits width for better readability
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
    },

    messageRow: {
        display: "flex",
        width: "100%",
        gap: "16px",
    },

    avatarAnamika: {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "#6D28D9",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },

    bubble: {
        lineHeight: "1.6",
        fontSize: "1rem",
        wordWrap: "break-word",
        whiteSpace: "pre-wrap",
    },

    // 4. INPUT AREA: Fixed at the bottom
    inputWrapper: {
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "20px 0 30px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px solid #f0f0f0",
        flexShrink: 0,         // Ensures input area never shrinks
        boxShadow: "0 -4px 20px rgba(0,0,0,0.02)",
    },

    inputContainer: {
        width: "90%",
        maxWidth: "800px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        padding: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
        border: "1px solid #e5e5e5",
    },

    inputField: {
        flex: 1,
        border: "none",
        background: "transparent",
        padding: "12px 16px",
        fontSize: "1rem",
        outline: "none",
        color: "#333",
        minHeight: "24px",
    },

    sendButton: {
        width: "36px",
        height: "36px",
        borderRadius: "8px",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
    },

    footerText: {
        fontSize: "0.75rem",
        color: "#999",
        marginTop: "12px",
    },

    // 5. ANIMATIONS & UTILS
    typingContainer: {
        display: "flex",
        gap: "4px",
        padding: "10px",
    },

    typingDot: {
        width: "6px",
        height: "6px",
        backgroundColor: "#6D28D9",
        borderRadius: "50%",
        animation: "bounce 1.4s infinite ease-in-out both",
    },

    errorBox: {
        padding: "12px",
        backgroundColor: "#FEF2F2",
        color: "#991B1B",
        borderRadius: "8px",
        border: "1px solid #FCA5A5",
        textAlign: "center",
        fontSize: "0.9rem",
        marginBottom: "10px",
    }
};