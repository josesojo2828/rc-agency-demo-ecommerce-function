import { Truck, ShieldCheck, Clock, CreditCard } from "lucide-react";

export function Features() {
    const FEATURES = [
        {
            icon: <Truck className="w-8 h-8 text-primary" />,
            title: "Free Shipping",
            desc: "On all orders over $50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            title: "Secure Payment",
            desc: "100% secure payment"
        },
        {
            icon: <Clock className="w-8 h-8 text-primary" />,
            title: "24/7 Support",
            desc: "Dedicated support"
        },
        {
            icon: <CreditCard className="w-8 h-8 text-primary" />,
            title: "Money Back",
            desc: "30 days guarantee"
        }
    ];

    return (
        <section className="py-12 border-b border-base-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 rounded-xl hover:bg-base-100 transition-colors">
                            <div className="p-3 bg-primary/10 rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{feature.title}</h3>
                                <p className="text-sm opacity-60">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
