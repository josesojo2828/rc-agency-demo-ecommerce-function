import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-neutral text-neutral-content pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold mb-4 tracking-tighter">MODERN<span className="text-base-100">SHOP</span></h3>
                        <p className="opacity-70 mb-6">
                            Providing the best quality products for your lifestyle. Shop with confidence.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
                            <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                            <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Shop</h4>
                        <ul className="space-y-2 opacity-70">
                            <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Discounts</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">All Products</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Support</h4>
                        <ul className="space-y-2 opacity-70">
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Stay in the loop</h4>
                        <p className="opacity-70 mb-4 text-sm">Subscribe to get special offers and updates.</p>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full bg-neutral-content/10 border-neutral-content/20 text-white placeholder-white/40 focus:outline-none" placeholder="Enter your email" />
                            <button className="btn btn-primary join-item"><Mail className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>

                <div className="divider divider-neutral my-8 opacity-20"></div>

                <div className="flex flex-col md:flex-row justify-between items-center opacity-40 text-sm">
                    <p>© 2026 ModernShop Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
