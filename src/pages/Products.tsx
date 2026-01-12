import { Search } from "lucide-react";
import { ProductFilters } from "../components/layout/ProductFilters";
import { ProductCard } from "../components/ui/ProductCard";
import { useProducts } from "../hooks/useProducts";

export function Products() {
    const { products, categories, filters, setFilters } = useProducts();

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold">All Products</h1>
                <div className="relative w-full md:w-96">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="input input-bordered w-full pl-10"
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content/50" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-64 shrink-0">
                    <ProductFilters
                        categories={categories}
                        currentCategory={filters.category}
                        onCategoryChange={(cat) => setFilters({ ...filters, category: cat })}
                        priceRange={[filters.minPrice, filters.maxPrice]}
                        onPriceChange={(range) => setFilters({ ...filters, minPrice: range[0], maxPrice: range[1] })}
                    />
                </div>

                {/* Product Grid */}
                <div className="grow">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-base-content/50">
                                No products found matching your criteria.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
