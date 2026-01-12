import { useState, useRef, useEffect } from "react";
import { Send, X, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: number;
    text: string;
    sender: "user" | "bot";
}

interface ChatWidgetProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hello! 👋 How can I help you regarding our products today?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now(), text: input, sender: "user" };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Simulate Bot Response
        setTimeout(() => {
            const botResponses = [
                "That's interesting! Tell me more.",
                "I can definitely help with that.",
                "Let me check our inventory for you.",
                "Great choice! Anything else?",
                "Our support team will contact you shortly."
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            setMessages(prev => [...prev, { id: Date.now() + 1, text: randomResponse, sender: "bot" }]);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="fixed bottom-24 right-4 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-base-100 rounded-2xl shadow-2xl z-50 flex flex-col border border-base-200 overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-primary text-primary-content p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="avatar placeholder">
                                <div className="bg-white/20 text-white rounded-full w-10">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold">Support Bot</h3>
                                <p className="text-xs opacity-80">Online</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-base-200/50" ref={scrollRef}>
                        {messages.map((msg) => (
                            <div key={msg.id} className={`chat ${msg.sender === "user" ? "chat-end" : "chat-start"}`}>
                                <div className="chat-image avatar">
                                    <div className="w-8 rounded-full bg-base-300 flex items-center justify-center text-base-content/50">
                                        {msg.sender === "user" ? <User className="w-5 h-5 m-auto mt-1.5" /> : <Sparkles className="w-5 h-5 m-auto mt-1.5 text-primary" />}
                                    </div>
                                </div>
                                <div className={`chat-bubble ${msg.sender === "user" ? "chat-bubble-primary" : "bg-base-100 text-base-content shadow-sm"}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-base-100 border-t border-base-200">
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            className="flex gap-2"
                        >
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="input input-bordered w-full rounded-full focus:outline-none"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button type="submit" className="btn btn-circle btn-primary">
                                <Send className="w-4 h-4 ml-0.5" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
