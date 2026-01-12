interface FilterProps {
    categories: string[];
    currentCategory: string;
    onCategoryChange: (category: string) => void;
    priceRange: [number, number];
    onPriceChange: (range: [number, number]) => void;
}

export function ProductFilters({ categories, currentCategory, onCategoryChange, priceRange, onPriceChange }: FilterProps) {
    return (
        <div className="bg-base-100 p-6 rounded-box shadow-lg h-fit">
            <h3 className="text-lg font-bold mb-4">Filters</h3>

            {/* Categories */}
            <div className="mb-6">
                <h4 className="font-semibold mb-2">Category</h4>
                <ul className="menu menu-sm bg-base-200 rounded-box">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <a
                                className={cat === currentCategory ? "active" : ""}
                                onClick={() => onCategoryChange(cat)}
                            >
                                {cat}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <h4 className="font-semibold mb-2">Price Range</h4>
                <input
                    type="range"
                    min={0}
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => onPriceChange([priceRange[0], parseInt(e.target.value)])}
                    className="range range-primary range-xs"
                />
                <div className="flex justify-between text-xs mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </div>
    );
}
