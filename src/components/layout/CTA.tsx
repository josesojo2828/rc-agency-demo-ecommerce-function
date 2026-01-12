import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
    return (
        <section className="py-20 relative overflow-hidden bg-primary text-primary-content">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Upgrade Your Life?</h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who have transformed their daily routine with our premium products.</p>
                <div className="flex justify-center gap-4">
                    <Link to="/products" className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none shadow-xl">
                        Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
