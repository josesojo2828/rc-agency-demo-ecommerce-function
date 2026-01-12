import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export function Cart() {
    const { cart: items, updateQuantity, removeFromCart, cartTotal } = useStore();

    const subtotal = cartTotal;
    const shipping = items.length > 0 ? 15.00 : 0;
    const total = subtotal + shipping;

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <Link to="/products" className="btn btn-primary">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items */}
                <div className="grow">
                    <div className="bg-base-100 rounded-box shadow-lg p-6">
                        {items.map((item) => (
                            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b border-base-200 last:border-0">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                                <div className="grow text-center sm:text-left">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="btn btn-square btn-sm btn-ghost border-base-300">
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="btn btn-square btn-sm btn-ghost border-base-300">
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                                <div className="text-right min-w-[80px] font-bold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="btn btn-square btn-sm btn-ghost text-error">
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-96 shrink-0">
                    <div className="bg-base-100 rounded-box shadow-lg p-6 sticky top-24">
                        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div className="divider"></div>
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span className="text-primary">${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <Link to="/checkout" className="btn btn-primary w-full">
                            Proceed to Checkout <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
