import { Hero } from "../components/layout/Hero";
import { Features } from "../components/layout/Features";
import { Categories } from "../components/layout/Categories";
import { FeaturedProducts } from "../components/layout/FeaturedProducts";
import { Brands } from "../components/layout/Brands";
import { CTA } from "../components/layout/CTA";
import { Testimonials } from "../components/layout/Testimonials";

export function Landing() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Features />
            <Categories />
            <FeaturedProducts />
            <Testimonials />
            <Brands />
            <CTA />
        </div>
    );
}
