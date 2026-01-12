import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { ChatWidget } from "../ui/ChatWidget";

import { PageTransition } from "./PageTransition";

export function MainLayout() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="grow pt-4">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>
            <Footer />

            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 items-end">
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-success text-white shadow-lg hover:scale-110 transition-transform"
                >
                    <Phone className="h-6 w-6" />
                </a>
                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="btn btn-circle btn-primary text-white shadow-lg hover:scale-110 transition-transform"
                >
                    {isChatOpen ? <MessageCircle className="h-6 w-6 rotate-45" /> : <MessageCircle className="h-6 w-6" />}
                </button>
            </div>

            <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
    );
}
