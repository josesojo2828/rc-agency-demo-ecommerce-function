import { Star } from "lucide-react";

export function Testimonials() {
    const TESTIMONIALS = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Fashion Blogger",
            text: "The quality of the products is outstanding. I've ordered multiple times and I'm always impressed by the attention to detail.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Tech Enthusiast",
            text: "Fast shipping and excellent customer service. The gadget I bought works perfectly. Highly recommended!",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Valid Customer",
            text: "I love the variety of items available. The website is so easy to use and the checkout process is a breeze.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
        }
    ];

    return (
        <section className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.id} className="card bg-base-100 shadow-xl border border-base-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="card-body">
                                <div className="flex gap-1 mb-4 text-warning">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="mb-6 italic opacity-80">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={t.avatar} alt={t.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{t.name}</h4>
                                        <p className="text-xs opacity-60">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
