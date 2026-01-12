import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../../context/StoreContext";
import { type Product } from "../../hooks/useProducts"; // Ensure Product is exported or redefined if needed to match context

interface ProductCardProps extends Product { }

export function ProductCard(props: ProductCardProps) {
    const { id, name, price, image, category } = props;
    const { addToCart, toggleWishlist, isInWishlist } = useStore();
    const isWishlisted = isInWishlist(id);

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
            <figure className="relative h-64 overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-2 right-2 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                    <button
                        onClick={() => toggleWishlist(props)}
                        className={`btn btn-circle btn-sm ${isWishlisted ? 'btn-secondary text-white' : 'btn-ghost bg-base-100/80 hover:bg-base-100 hover:text-error'}`}
                    >
                        <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                    <button className="btn btn-circle btn-sm btn-ghost bg-base-100/80 hover:bg-base-100 hover:text-primary">
                        <Eye className="h-4 w-4" />
                    </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-linear-to-t from-black/50 to-transparent">
                    <button
                        onClick={() => addToCart(props)}
                        className="btn btn-primary btn-block btn-sm"
                    >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                    </button>
                </div>
            </figure>
            <div className="card-body p-4">
                <div className="text-xs uppercase tracking-wider text-base-content/60">{category}</div>
                <Link to={`/products`} className="card-title text-base hover:text-primary transition-colors line-clamp-1">{name}</Link>
                <div className="text-xl font-bold text-primary">${price.toFixed(2)}</div>
            </div>
        </div>
    );
}
