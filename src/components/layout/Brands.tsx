import { motion } from "framer-motion";

const BRANDS = [
    { id: 1, name: "Brand A", logo: "A" },
    { id: 2, name: "Brand B", logo: "B" },
    { id: 3, name: "Brand C", logo: "C" },
    { id: 4, name: "Brand D", logo: "D" },
    { id: 5, name: "Brand E", logo: "E" },
    { id: 6, name: "Brand F", logo: "F" },
];

export function Brands() {
    return (
        <section className="py-16 bg-base-100 border-y border-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-sm font-bold text-center mb-10 uppercase tracking-[0.3em] text-base-content/40">Trusted by Top Brands</h2>
                <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                    {BRANDS.map((brand) => (
                        <motion.div
                            key={brand.id}
                            className="text-4xl font-black text-base-content/20 hover:text-primary cursor-pointer transition-colors select-none"
                            whileHover={{ scale: 1.1, opacity: 1 }}
                            initial={{ opacity: 0.5 }}
                        >
                            {/* Visual Placeholder for Logos */}
                            <span className="italic">{brand.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
