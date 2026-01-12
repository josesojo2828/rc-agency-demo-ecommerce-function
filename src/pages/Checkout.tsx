import { CreditCard, CheckCircle } from "lucide-react";

export function Checkout() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center pt-8">Checkout</h1>

            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
                {/* Checkout Form */}
                <div className="grow bg-base-100 p-8 rounded-box shadow-lg">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="badge badge-primary h-8 w-8 rounded-full">1</span> Shipping Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                        <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
                        <input type="email" placeholder="Email Address" className="input input-bordered w-full md:col-span-2" />
                        <input type="text" placeholder="Address" className="input input-bordered w-full md:col-span-2" />
                        <input type="text" placeholder="City" className="input input-bordered w-full" />
                        <input type="text" placeholder="Zip Code" className="input input-bordered w-full" />
                    </div>

                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="badge badge-primary h-8 w-8 rounded-full">2</span> Payment Method
                    </h2>
                    <div className="flex gap-4 mb-6">
                        <button className="btn btn-outline btn-primary flex-1">
                            <CreditCard className="mr-2" /> Card
                        </button>
                        <button className="btn btn-outline flex-1">
                            PayPal
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <input type="text" placeholder="Card Number" className="input input-bordered w-full" />
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="MM/YY" className="input input-bordered w-full" />
                            <input type="text" placeholder="CVC" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <button className="btn btn-primary w-full btn-lg mt-8">
                        Pay Now <CheckCircle className="ml-2" />
                    </button>
                </div>

                {/* Mini Order Summary */}
                <div className="w-full lg:w-80 flex-shrink-0 opacity-80 pointer-events-none">
                    {/* Reusing Summary UI Idea */}
                    <div className="bg-base-200 p-6 rounded-box">
                        <h3 className="font-bold mb-4">In Your Bag</h3>
                        <div className="flex justify-between mb-2 text-sm">
                            <span>Wireless Headphones x1</span>
                            <span>$129.99</span>
                        </div>
                        <div className="flex justify-between mb-2 text-sm">
                            <span>Leather Bag x2</span>
                            <span>$178.00</span>
                        </div>
                        <div className="divider my-2"></div>
                        <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>$322.99</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
