import { ProductCard } from "../ui/ProductCard";

const FEATURED_PRODUCTS = [
    { id: 101, name: "Wireless Headphones", price: 129.99, category: "Electronics", rating: 4.5, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500" },
    { id: 102, name: "Smart Watch Series 5", price: 349.50, category: "Electronics", rating: 4.8, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=500" },
    { id: 103, name: "Premium Leather Bag", price: 89.00, category: "Fashion", rating: 4.2, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=500" },
    { id: 104, name: "Modern Desk Lamp", price: 45.99, category: "Home", rating: 4.0, image: "https://images.unsplash.com/photo-1507473888900-52e1adad5481?auto=format&fit=crop&q=80&w=500" },
];

export function FeaturedProducts() {
    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Trending Now</h2>
                    <p className="text-base-content/60 max-w-2xl mx-auto">Discover the hottest products of the season. Handpicked for quality and style.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {FEATURED_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
