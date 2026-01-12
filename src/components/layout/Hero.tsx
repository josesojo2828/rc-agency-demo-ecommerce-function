import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1920",
        title: "Summer Collection",
        subtitle: "Discover the hottest trends of the season.",
        cta: "Shop Now",
        color: "from-black/80 to-gray-800/80"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920",
        title: "New Arrivals",
        subtitle: "Be the first to wear our latest styles.",
        cta: "View Collection",
        color: "from-gray-900/80 to-black/80"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1920",
        title: "Exclusive Deals",
        subtitle: "Up to 50% off on selected items.",
        cta: "Grab Deal",
        color: "from-neutral-800/80 to-neutral-900/80"
    }
];

export function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

    return (
        <div className="relative h-[600px] w-full overflow-hidden bg-base-300">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src={SLIDES[current].image}
                        alt={SLIDES[current].title}
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-linear-to-r ${SLIDES[current].color} mix-blend-multiply opacity-60`} />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 z-10">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`title-${current}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-lg"
                        >
                            {SLIDES[current].title}
                        </motion.h1>
                        <motion.p
                            key={`sub-${current}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl mb-8 opacity-90 font-light"
                        >
                            {SLIDES[current].subtitle}
                        </motion.p>
                        <motion.div
                            key={`btn-${current}`}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link to="/products" className="btn btn-primary btn-lg border-none shadow-xl hover:scale-105 transition-transform text-white">
                                {SLIDES[current].cta} <ArrowRight className="ml-2" />
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Controls */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white hover:bg-white/20 z-20">
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white hover:bg-white/20 z-20">
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"}`}
                    />
                ))}
            </div>
        </div>
    );
}
