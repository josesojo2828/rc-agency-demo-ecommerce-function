import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, Search, Heart } from "lucide-react";
import { useStore } from "../../context/StoreContext";

export function Navbar() {
    const { cartCount, wishlist } = useStore();

    return (
        <div className="navbar bg-base-100/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Menu className="h-5 w-5" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-2xl font-serif font-bold tracking-tight">
                    MODERN<span className="text-primary">SHOP</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/brands">Brands</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <button className="btn btn-ghost btn-circle">
                    <Search className="h-5 w-5" />
                </button>
                <Link to="/profile" className="btn btn-ghost btn-circle relative">
                    <Heart className="h-5 w-5" />
                    {wishlist.length > 0 && (
                        <span className="badge badge-xs badge-secondary absolute top-0 right-0 scale-75">{wishlist.length}</span>
                    )}
                </Link>
                <Link to="/cart" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <ShoppingCart className="h-5 w-5" />
                        {cartCount > 0 && <span className="badge badge-sm badge-primary indicator-item">{cartCount}</span>}
                    </div>
                </Link>
                <Link to="/profile" className="btn btn-ghost btn-circle">
                    <User className="h-5 w-5" />
                </Link>
            </div>
        </div>
    );
}
