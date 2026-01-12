import { useState } from "react";

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    rating: number;
}

const MOCK_PRODUCTS: Product[] = [
    { id: 1, name: "Wireless Headphones", price: 129.99, category: "Electronics", rating: 4.5, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500" },
    { id: 2, name: "Smart Watch Series 5", price: 349.50, category: "Electronics", rating: 4.8, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=500" },
    { id: 3, name: "Premium Leather Bag", price: 89.00, category: "Fashion", rating: 4.2, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=500" },
    { id: 4, name: "Modern Desk Lamp", price: 45.99, category: "Home", rating: 4.0, image: "https://images.unsplash.com/photo-1507473888900-52e1adad5481?auto=format&fit=crop&q=80&w=500" },
    { id: 5, name: "Running Shoes", price: 119.95, category: "Sports", rating: 4.7, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500" },
    { id: 6, name: "Ceramic Vase", price: 29.99, category: "Home", rating: 4.9, image: "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&q=80&w=500" },
    { id: 7, name: "Sunglasses", price: 159.00, category: "Fashion", rating: 4.4, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=500" },
    { id: 8, name: "Bluetooth Speaker", price: 79.99, category: "Electronics", rating: 4.3, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=500" },
];

export function useProducts() {
    const [products] = useState<Product[]>(MOCK_PRODUCTS);
    const [filters, setFilters] = useState({
        category: "All",
        minPrice: 0,
        maxPrice: 1000,
        search: "",
    });

    const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];

    const filteredProducts = products.filter((product) => {
        const matchesCategory = filters.category === "All" || product.category === filters.category;
        const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
        const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
        return matchesCategory && matchesPrice && matchesSearch;
    });

    return {
        products: filteredProducts,
        allProducts: products,
        categories: uniqueCategories,
        filters,
        setFilters,
    };
}
