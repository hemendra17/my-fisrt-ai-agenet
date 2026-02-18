// // // import { useState, useRef, useEffect } from "react";
// // // import { GoogleGenerativeAI } from "@google/generative-ai";

// // // const ChatAgent = () => {
// // //     const [messages, setMessages] = useState([
// // //         {
// // //             role: "model",
// // //             text: "Hello! I am your AI agent. How can I help you today?",
// // //         },
// // //     ]);
// // //     const [input, setInput] = useState("");
// // //     const [isLoading, setIsLoading] = useState(false);
// // //     const [error, setError] = useState(null);

// // //     // Auto-scroll to bottom of chat
// // //     const messagesEndRef = useRef(null);
// // //     const scrollToBottom = () => {
// // //         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //     };
// // //     useEffect(scrollToBottom, [messages]);

// // //     // Initialize Gemini API
// // //     // WARNING: In production, move this logic to your Express backend!
// // //     const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);


// // //     const handleSend = async () => {
// // //         if (!input.trim()) return;

// // //         const userMessage = { role: "user", text: input };

// // //         // 1. Add user message to UI immediately
// // //         setMessages((prev) => [...prev, userMessage]);
// // //         setInput("");
// // //         setIsLoading(true);
// // //         setError(null);

// // //         try {
// // //             const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// // //             // 2. Prepare History for API
// // //             // FIX: We slice(1) to remove the first message (the AI greeting).
// // //             // The API only wants the *actual* conversation history.
// // //             const history = messages.slice(1).map((msg) => ({
// // //                 role: msg.role,
// // //                 parts: [{ text: msg.text }],
// // //             }));

// // //             const chat = model.startChat({
// // //                 history: history,
// // //             });

// // //             const result = await chat.sendMessage(input);
// // //             const response = await result.response;
// // //             const text = response.text();

// // //             // 3. Add AI response to UI
// // //             setMessages((prev) => [...prev, { role: "model", text: text }]);
// // //         } catch (err) {
// // //             console.error("API Error:", err);
// // //             setError("Failed to fetch response. Check console for details.");
// // //         } finally {
// // //             setIsLoading(false);
// // //         }
// // //     };

// // //     return (
// // //         <div style={styles.container}>
// // //             <div style={styles.chatWindow}>
// // //                 {messages.map((msg, index) => (
// // //                     <div
// // //                         key={index}
// // //                         style={{
// // //                             ...styles.messageBubble,
// // //                             alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
// // //                             backgroundColor: msg.role === "user" ? "#007bff" : "#e9ecef",
// // //                             color: msg.role === "user" ? "white" : "black",
// // //                         }}
// // //                     >
// // //                         {msg.text}
// // //                     </div>
// // //                 ))}
// // //                 {isLoading && <div style={styles.loader}>AI is typing...</div>}
// // //                 {error && <div style={styles.error}>{error}</div>}
// // //                 <div ref={messagesEndRef} />
// // //             </div>

// // //             <div style={styles.inputArea}>
// // //                 <input
// // //                     type="text"
// // //                     value={input}
// // //                     onChange={(e) => setInput(e.target.value)}
// // //                     onKeyDown={(e) => e.key === "Enter" && handleSend()}
// // //                     style={styles.input}
// // //                     placeholder="Ask something..."
// // //                     disabled={isLoading}
// // //                 />
// // //                 <button onClick={handleSend} style={styles.button} disabled={isLoading}>
// // //                     Send
// // //                 </button>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // // Simple inline styles for quick prototyping
// // // const styles = {
// // //     container: {
// // //         maxWidth: "600px",
// // //         margin: "0 auto",
// // //         fontFamily: "Arial, sans-serif",
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         height: "90vh",
// // //         border: "1px solid #ddd",
// // //         borderRadius: "8px",
// // //         overflow: "hidden",
// // //     },
// // //     chatWindow: {
// // //         flex: 1,
// // //         padding: "20px",
// // //         overflowY: "auto",
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         gap: "10px",
// // //     },
// // //     messageBubble: {
// // //         maxWidth: "70%",
// // //         padding: "10px 15px",
// // //         borderRadius: "15px",
// // //         lineHeight: "1.4",
// // //     },
// // //     loader: {
// // //         alignSelf: "flex-start",
// // //         color: "#888",
// // //         fontSize: "0.9rem",
// // //         margin: "10px 0",
// // //     },
// // //     error: {
// // //         color: "red",
// // //         fontSize: "0.8rem",
// // //         textAlign: "center",
// // //         margin: "10px 0",
// // //     },
// // //     inputArea: {
// // //         display: "flex",
// // //         padding: "10px",
// // //         borderTop: "1px solid #ddd",
// // //         background: "#f9f9f9",
// // //     },
// // //     input: {
// // //         flex: 1,
// // //         padding: "10px",
// // //         borderRadius: "20px",
// // //         border: "1px solid #ccc",
// // //         outline: "none",
// // //     },
// // //     button: {
// // //         marginLeft: "10px",
// // //         padding: "10px 20px",
// // //         borderRadius: "20px",
// // //         border: "none",
// // //         backgroundColor: "#007bff",
// // //         color: "white",
// // //         cursor: "pointer",
// // //         fontWeight: "bold",
// // //     },
// // // };

// // // export default ChatAgent;

// // import { useState, useRef, useEffect } from "react";
// // import { GoogleGenerativeAI } from "@google/generative-ai";

// // /* -------------------------------------------------------------------------- */
// // /* CONSTANTS                                 */
// // /* -------------------------------------------------------------------------- */
// // const GEMINI_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
// // const MODEL_NAME = "gemini-2.5-flash";

// // /* -------------------------------------------------------------------------- */
// // /* SUB-COMPONENTS                                  */
// // /* -------------------------------------------------------------------------- */

// // // 1. Typing Indicator (The "..." animation)
// // const TypingIndicator = () => (
// //     <div style={styles.typingContainer}>
// //         <div style={{ ...styles.typingDot, animationDelay: "0s" }}></div>
// //         <div style={{ ...styles.typingDot, animationDelay: "0.2s" }}></div>
// //         <div style={{ ...styles.typingDot, animationDelay: "0.4s" }}></div>
// //     </div>
// // );

// // // 2. Message Bubble
// // const MessageBubble = ({ role, text }) => {
// //     const isUser = role === "user";
// //     return (
// //         <div style={{ ...styles.messageRow, flexDirection: isUser ? "row-reverse" : "row" }}>
// //             {/* Avatar */}
// //             <div style={{
// //                 ...styles.avatar,
// //                 backgroundColor: isUser ? "#007AFF" : "#10a37f",
// //                 marginLeft: isUser ? "10px" : "0",
// //                 marginRight: isUser ? "0" : "10px"
// //             }}>
// //                 {isUser ? "U" : "AI"}
// //             </div>

// //             {/* Bubble */}
// //             <div style={{
// //                 ...styles.bubble,
// //                 backgroundColor: isUser ? "#007AFF" : "#ffffff",
// //                 color: isUser ? "#ffffff" : "#333333",
// //                 borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
// //                 border: isUser ? "none" : "1px solid #e5e5e5",
// //             }}>
// //                 {text}
// //             </div>
// //         </div>
// //     );
// // };

// // /* -------------------------------------------------------------------------- */
// // /* MAIN COMPONENT                                  */
// // /* -------------------------------------------------------------------------- */

// // const ChatAgent = () => {
// //     const [messages, setMessages] = useState([
// //         {
// //             role: "model",
// //             text: "Hello! I am your AI assistant. How can I help you regarding your projects today?",
// //         },
// //     ]);
// //     const [input, setInput] = useState("");
// //     const [isLoading, setIsLoading] = useState(false);
// //     const [error, setError] = useState(null);

// //     const messagesEndRef = useRef(null);

// //     // Auto-scroll logic
// //     const scrollToBottom = () => {
// //         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //     };

// //     useEffect(() => {
// //         scrollToBottom();
// //     }, [messages, isLoading]);

// //     const handleSend = async () => {
// //         if (!input.trim() || isLoading) return;

// //         const userText = input;
// //         setInput(""); // Clear input immediately
// //         setError(null);

// //         // Optimistic UI Update
// //         setMessages((prev) => [...prev, { role: "user", text: userText }]);
// //         setIsLoading(true);

// //         try {
// //             // Initialize API
// //             const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
// //             const model = genAI.getGenerativeModel({ model: MODEL_NAME });

// //             // Prepare history (Exclude the very first greeting if it wasn't generated by API)
// //             // We map only the necessary fields for the API
// //             const history = messages
// //                 .filter((_, i) => i > 0)
// //                 .map((msg) => ({
// //                     role: msg.role,
// //                     parts: [{ text: msg.text }],
// //                 }));

// //             const chat = model.startChat({ history });
// //             const result = await chat.sendMessage(userText);
// //             const response = await result.response;
// //             const text = response.text();

// //             setMessages((prev) => [...prev, { role: "model", text: text }]);
// //         } catch (err) {
// //             console.error("Gemini API Error:", err);
// //             setError("Something went wrong. Please check your connection or API key.");
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     return (
// //         <div style={styles.pageContainer}>
// //             <div style={styles.chatCard}>

// //                 {/* Header */}
// //                 <div style={styles.header}>
// //                     <div style={styles.headerTitle}>
// //                         <span style={styles.statusDot}></span>
// //                         AI Assistant
// //                     </div>
// //                     <div style={styles.headerSubtitle}>Powered by Gemini 2.5</div>
// //                 </div>

// //                 {/* Messages Area */}
// //                 <div style={styles.messagesArea}>
// //                     {messages.map((msg, index) => (
// //                         <MessageBubble key={index} role={msg.role} text={msg.text} />
// //                     ))}

// //                     {isLoading && (
// //                         <div style={styles.messageRow}>
// //                             <div style={{ ...styles.avatar, backgroundColor: "#10a37f", marginRight: "10px" }}>AI</div>
// //                             <TypingIndicator />
// //                         </div>
// //                     )}

// //                     {error && (
// //                         <div style={styles.errorBanner}>
// //                             ⚠️ {error}
// //                         </div>
// //                     )}

// //                     <div ref={messagesEndRef} />
// //                 </div>

// //                 {/* Input Area */}
// //                 <div style={styles.inputWrapper}>
// //                     <div style={styles.inputContainer}>
// //                         <input
// //                             type="text"
// //                             value={input}
// //                             onChange={(e) => setInput(e.target.value)}
// //                             onKeyDown={(e) => e.key === "Enter" && handleSend()}
// //                             style={styles.inputField}
// //                             placeholder="Type a message..."
// //                             disabled={isLoading}
// //                         />
// //                         <button
// //                             onClick={handleSend}
// //                             style={{
// //                                 ...styles.sendButton,
// //                                 opacity: !input.trim() || isLoading ? 0.5 : 1,
// //                                 cursor: !input.trim() || isLoading ? "not-allowed" : "pointer"
// //                             }}
// //                             disabled={!input.trim() || isLoading}
// //                         >
// //                             ➤
// //                         </button>
// //                     </div>
// //                 </div>

// //             </div>

// //             {/* CSS Animation Injection for Typing Dots */}
// //             <style>{`
// //                 @keyframes bounce {
// //                     0%, 100% { transform: translateY(0); }
// //                     50% { transform: translateY(-5px); }
// //                 }
// //             `}</style>
// //         </div>
// //     );
// // };

// // /* -------------------------------------------------------------------------- */
// // /* STYLES                                   */
// // /* -------------------------------------------------------------------------- */

// // const styles = {
// //     pageContainer: {
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         height: "100vh",
// //         backgroundColor: "#f0f2f5",
// //         fontFamily: "'Inter', 'Segoe UI', sans-serif",
// //     },
// //     chatCard: {
// //         width: "100%",
// //         maxWidth: "500px", // Limits width on desktop for that "app" feel
// //         height: "90vh", // Does not touch edges vertically
// //         maxHeight: "800px",
// //         backgroundColor: "#fff",
// //         borderRadius: "20px",
// //         boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
// //         display: "flex",
// //         flexDirection: "column",
// //         overflow: "hidden",
// //         position: "relative",
// //     },
// //     header: {
// //         padding: "20px",
// //         borderBottom: "1px solid #eaeaea",
// //         backgroundColor: "#ffffff",
// //         zIndex: 10,
// //     },
// //     headerTitle: {
// //         fontWeight: "700",
// //         fontSize: "1.1rem",
// //         display: "flex",
// //         alignItems: "center",
// //         gap: "8px",
// //         color: "#1a1a1a",
// //     },
// //     headerSubtitle: {
// //         fontSize: "0.8rem",
// //         color: "#888",
// //         marginLeft: "18px", // Align with text of title
// //         marginTop: "4px",
// //     },
// //     statusDot: {
// //         width: "10px",
// //         height: "10px",
// //         backgroundColor: "#10a37f",
// //         borderRadius: "50%",
// //         display: "inline-block",
// //     },
// //     messagesArea: {
// //         flex: 1,
// //         padding: "20px",
// //         overflowY: "auto",
// //         backgroundColor: "#fafafa",
// //         display: "flex",
// //         flexDirection: "column",
// //         gap: "15px",
// //     },
// //     messageRow: {
// //         display: "flex",
// //         alignItems: "flex-end",
// //         marginBottom: "5px",
// //     },
// //     avatar: {
// //         width: "32px",
// //         height: "32px",
// //         borderRadius: "50%",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         color: "white",
// //         fontSize: "0.75rem",
// //         fontWeight: "bold",
// //         flexShrink: 0,
// //     },
// //     bubble: {
// //         padding: "12px 16px",
// //         maxWidth: "75%",
// //         lineHeight: "1.5",
// //         fontSize: "0.95rem",
// //         boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
// //         wordWrap: "break-word",
// //         whiteSpace: "pre-wrap", // Preserves paragraphs/code formatting
// //     },
// //     inputWrapper: {
// //         padding: "20px",
// //         backgroundColor: "#fff",
// //         borderTop: "1px solid #eaeaea",
// //     },
// //     inputContainer: {
// //         display: "flex",
// //         alignItems: "center",
// //         backgroundColor: "#f4f4f4",
// //         borderRadius: "30px",
// //         padding: "5px 5px 5px 20px",
// //         transition: "border 0.2s ease",
// //     },
// //     inputField: {
// //         flex: 1,
// //         border: "none",
// //         background: "transparent",
// //         padding: "10px 0",
// //         outline: "none",
// //         fontSize: "1rem",
// //         color: "#333",
// //     },
// //     sendButton: {
// //         width: "40px",
// //         height: "40px",
// //         borderRadius: "50%",
// //         border: "none",
// //         backgroundColor: "#007AFF",
// //         color: "white",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         fontSize: "1.2rem",
// //         marginLeft: "10px",
// //         transition: "all 0.2s ease",
// //     },
// //     typingContainer: {
// //         padding: "15px",
// //         backgroundColor: "#fff",
// //         borderRadius: "18px 18px 18px 4px",
// //         border: "1px solid #e5e5e5",
// //         display: "flex",
// //         gap: "5px",
// //         alignItems: "center",
// //         width: "fit-content",
// //     },
// //     typingDot: {
// //         width: "6px",
// //         height: "6px",
// //         backgroundColor: "#aaa",
// //         borderRadius: "50%",
// //         animation: "bounce 1.4s infinite ease-in-out both",
// //     },
// //     errorBanner: {
// //         padding: "10px",
// //         backgroundColor: "#ffebee",
// //         color: "#c62828",
// //         borderRadius: "8px",
// //         fontSize: "0.85rem",
// //         textAlign: "center",
// //         margin: "10px 0",
// //     }
// // };

// // export default ChatAgent;

// import { useState, useRef, useEffect } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// /* -------------------------------------------------------------------------- */
// /* CONFIGURATION                                                              */
// /* -------------------------------------------------------------------------- */
// const GEMINI_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
// const MODEL_NAME = "gemini-2.5-flash";

// /* -------------------------------------------------------------------------- */
// /* UI COMPONENTS                                                              */
// /* -------------------------------------------------------------------------- */

// const TypingIndicator = () => (
//     <div style={styles.typingContainer}>
//         <div style={{ ...styles.typingDot, animationDelay: "0s" }}></div>
//         <div style={{ ...styles.typingDot, animationDelay: "0.2s" }}></div>
//         <div style={{ ...styles.typingDot, animationDelay: "0.4s" }}></div>
//     </div>
// );

// const MessageBubble = ({ role, text }) => {
//     const isUser = role === "user";
//     return (
//         <div style={{ ...styles.messageRow, justifyContent: isUser ? "flex-end" : "flex-start" }}>

//             {/* AI Avatar (Only show for AI) */}
//             {!isUser && (
//                 <div style={styles.avatarAI}>
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
//                         <path d="M12 12 2.1 12a10 10 0 0 1 9.9-10V12z"></path>
//                         <path d="M21.9 12H12l-9.9 0"></path>
//                     </svg>
//                 </div>
//             )}

//             <div style={{
//                 ...styles.bubble,
//                 backgroundColor: isUser ? "#f4f4f4" : "transparent",
//                 color: "#1a1a1a",
//                 borderRadius: isUser ? "20px" : "0",
//                 padding: isUser ? "12px 20px" : "0", // AI text looks like a document, User text looks like a bubble
//                 maxWidth: isUser ? "70%" : "100%", // AI takes full width of the read area
//             }}>
//                 {text}
//             </div>
//         </div>
//     );
// };

// /* -------------------------------------------------------------------------- */
// /* MAIN APPLICATION                                                           */
// /* -------------------------------------------------------------------------- */

// const ChatAgent = () => {
//     const [messages, setMessages] = useState([
//         {
//             role: "model",
//             text: "Hello! I'm your professional assistant. I can help you with code, analysis, or creative writing. How shall we begin?",
//         },
//     ]);
//     const [input, setInput] = useState("");
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const messagesEndRef = useRef(null);

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     };

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages, isLoading]);

//     const handleSend = async () => {
//         if (!input.trim() || isLoading) return;

//         const userText = input;
//         setInput("");
//         setError(null);
//         setMessages((prev) => [...prev, { role: "user", text: userText }]);
//         setIsLoading(true);

//         try {
//             const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//             const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//             // Filter history to fit API requirements
//             const history = messages
//                 .filter((_, i) => i > 0)
//                 .map((msg) => ({
//                     role: msg.role,
//                     parts: [{ text: msg.text }],
//                 }));

//             const chat = model.startChat({ history });
//             const result = await chat.sendMessage(userText);
//             const response = await result.response;
//             const text = response.text();

//             setMessages((prev) => [...prev, { role: "model", text: text }]);
//         } catch (err) {
//             console.error("Gemini API Error:", err);
//             setError("Connection failed. Please check your API Key or internet.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div style={styles.appContainer}>

//             {/* Top Navigation Bar */}
//             <header style={styles.header}>
//                 <div style={styles.logoArea}>
//                     <span style={styles.logoText}>Gemini Pro UI</span>
//                     <span style={styles.tag}>Beta</span>
//                 </div>
//                 <div style={styles.headerActions}>
//                     {/* Add buttons like "Clear Chat" or "Settings" here later */}
//                 </div>
//             </header>

//             {/* Main Chat Area */}
//             <main style={styles.chatArea}>
//                 <div style={styles.messagesContainer}>
//                     {messages.map((msg, index) => (
//                         <MessageBubble key={index} role={msg.role} text={msg.text} />
//                     ))}

//                     {isLoading && (
//                         <div style={styles.messageRow}>
//                             <div style={styles.avatarAI}>...</div>
//                             <TypingIndicator />
//                         </div>
//                     )}

//                     {error && (
//                         <div style={styles.errorBox}>
//                             ⚠️ {error}
//                         </div>
//                     )}

//                     <div ref={messagesEndRef} style={{ height: "20px" }} />
//                 </div>
//             </main>

//             {/* Fixed Input Area at Bottom */}
//             <footer style={styles.inputWrapper}>
//                 <div style={styles.inputContainer}>
//                     <input
//                         type="text"
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         onKeyDown={(e) => e.key === "Enter" && handleSend()}
//                         style={styles.inputField}
//                         placeholder="Message Gemini..."
//                         disabled={isLoading}
//                         autoFocus
//                     />
//                     <button
//                         onClick={handleSend}
//                         style={{
//                             ...styles.sendButton,
//                             backgroundColor: input.trim() ? "#1a1a1a" : "#e5e5e5",
//                             color: input.trim() ? "white" : "#a5a5a5",
//                             cursor: input.trim() ? "pointer" : "default"
//                         }}
//                         disabled={!input.trim() || isLoading}
//                     >
//                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                             <line x1="22" y1="2" x2="11" y2="13"></line>
//                             <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
//                         </svg>
//                     </button>
//                 </div>
//                 <div style={styles.footerText}>
//                     AI can make mistakes. Please double-check responses.
//                 </div>
//             </footer>

//             {/* Global Animations */}
//             <style>{`
//                 @keyframes bounce {
//                     0%, 100% { transform: translateY(0); }
//                     50% { transform: translateY(-5px); }
//                 }
//             `}</style>
//         </div>
//     );
// };

// /* -------------------------------------------------------------------------- */
// /* PROFESSIONAL STYLING (CSS-IN-JS)                                           */
// /* -------------------------------------------------------------------------- */

// const styles = {
//     appContainer: {
//         display: "flex",
//         flexDirection: "column",
//         height: "100vh",
//         width: "100vw",
//         backgroundColor: "#ffffff",
//         fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
//         color: "#1a1a1a",
//     },
//     header: {
//         height: "60px",
//         padding: "0 2rem",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         borderBottom: "1px solid #f0f0f0",
//         flexShrink: 0, // Prevents header from shrinking
//     },
//     logoText: {
//         fontSize: "1.1rem",
//         fontWeight: "600",
//         letterSpacing: "-0.5px",
//     },
//     tag: {
//         fontSize: "0.7rem",
//         backgroundColor: "#f4f4f4",
//         padding: "2px 6px",
//         borderRadius: "4px",
//         marginLeft: "8px",
//         color: "#666",
//         fontWeight: "500",
//     },
//     chatArea: {
//         flex: 1,
//         overflowY: "auto",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center", // Centers the message column
//         paddingTop: "20px",
//         scrollBehavior: "smooth",
//     },
//     messagesContainer: {
//         width: "100%",
//         maxWidth: "800px", // Controls the width of the text column (Like ChatGPT)
//         padding: "0 20px",
//         display: "flex",
//         flexDirection: "column",
//         gap: "24px", // More breathing room between messages
//         paddingBottom: "150px", // Space for the fixed input box
//     },
//     messageRow: {
//         display: "flex",
//         width: "100%",
//         gap: "16px",
//     },
//     avatarAI: {
//         width: "30px",
//         height: "30px",
//         borderRadius: "50%",
//         border: "1px solid #e5e5e5",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#333",
//         flexShrink: 0,
//     },
//     bubble: {
//         lineHeight: "1.6",
//         fontSize: "1rem",
//         wordWrap: "break-word",
//         whiteSpace: "pre-wrap",
//     },
//     inputWrapper: {
//         position: "fixed",
//         bottom: 0,
//         left: 0,
//         width: "100%",
//         backgroundColor: "#ffffff", // Make sure background is solid behind input
//         padding: "20px 0 30px 0",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         zIndex: 100,
//         background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #ffffff 20%)",
//     },
//     inputContainer: {
//         width: "100%",
//         maxWidth: "800px",
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         backgroundColor: "#f4f4f4",
//         borderRadius: "12px",
//         padding: "8px",
//         boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
//         border: "1px solid transparent",
//         transition: "border 0.2s, box-shadow 0.2s",
//     },
//     inputField: {
//         flex: 1,
//         border: "none",
//         background: "transparent",
//         padding: "12px 16px",
//         fontSize: "1rem",
//         outline: "none",
//         color: "#333",
//         minHeight: "24px",
//     },
//     sendButton: {
//         width: "36px",
//         height: "36px",
//         borderRadius: "8px",
//         border: "none",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         transition: "all 0.2s ease",
//     },
//     footerText: {
//         fontSize: "0.75rem",
//         color: "#999",
//         marginTop: "12px",
//     },
//     typingContainer: {
//         display: "flex",
//         gap: "4px",
//         padding: "10px",
//     },
//     typingDot: {
//         width: "6px",
//         height: "6px",
//         backgroundColor: "#666",
//         borderRadius: "50%",
//         animation: "bounce 1.4s infinite ease-in-out both",
//     },
//     errorBox: {
//         padding: "12px",
//         backgroundColor: "#FEF2F2",
//         color: "#991B1B",
//         borderRadius: "8px",
//         border: "1px solid #FCA5A5",
//         textAlign: "center",
//         fontSize: "0.9rem",
//     }
// };

// export default ChatAgent;

import React, { useRef, useEffect } from "react";
import ChatHeader from "./components/ChatHeader";
import MessageBubble from "./components/MessageBubble";
import TypingIndicator from "./components/TypingIndicator";
import ChatInput from "./components/ChatInput";
import { useGeminiChat } from "./hooks/useGeminiChat";
import { styles } from "./styles/chatStyles";

const ChatAgent = () => {
    const { messages, isLoading, error, sendMessage } = useGeminiChat();
    const messagesEndRef = useRef(null);

    // Auto-scroll logic
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    return (
        <div style={styles.appContainer}>
            <ChatHeader />

            <main style={styles.chatArea}>
                <div style={styles.messagesContainer}>
                    {messages.map((msg, index) => (
                        <MessageBubble key={index} role={msg.role} text={msg.text} />
                    ))}

                    {isLoading && (
                        <div style={styles.messageRow}>
                            <div style={styles.avatarAnamika}>A</div>
                            <TypingIndicator />
                        </div>
                    )}

                    {error && (
                        <div style={styles.errorBox}>
                            ⚠️ {error}
                        </div>
                    )}

                    <div ref={messagesEndRef} style={{ height: "20px" }} />
                </div>
            </main>

            <ChatInput onSend={sendMessage} isLoading={isLoading} />
        </div>
    );
};

export default ChatAgent;