'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- DATA STRUCTURE with UPDATED, VALID image URLs ---
const allProducts = [
    // Kitchens
    { id: 1, src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800", alt: "Modern Acrylic Kitchen", category: "Kitchen", subCategory: "Acrylic Kitchen" },
    { id: 2, src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800", alt: "Laminated Kitchen", category: "Kitchen", subCategory: "Laminated Kitchen" },
    { id: 3, src: "https://images.unsplash.com/photo-1578859695958-93e18a5eda2a?q=80&w=800", alt: "Elegant Lacquered Glass Kitchen", category: "Kitchen", subCategory: "Lacquered Glass Kitchen" },
    { id: 4, src: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad25?q=80&w=800", alt: "Sleek PU Kitchen", category: "Kitchen", subCategory: "PU Kitchen" },
    { id: 5, src: "https://images.unsplash.com/photo-1633533439401-4213f55a1376?q=80&w=800", alt: "Spacious Acrylic Kitchen", category: "Kitchen", subCategory: "Acrylic Kitchen" },
    { id: 6, src: "https://images.unsplash.com/photo-1633533439401-4213f55a1376?q=80&w=800", alt: "Contemporary Laminated Kitchen", category: "Kitchen", subCategory: "Laminated Kitchen" },
    // Wardrobes
    { id: 7, src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800", alt: "Modern Sliding Wardrobe", category: "Wardrobe", subCategory: "Sliding Wardrobe" },
    { id: 8, src: "https://images.unsplash.com/photo-1558992249-007a8a1c8f3e?q=80&w=800", alt: "Classic Hinged Wardrobe", category: "Wardrobe", subCategory: "Hinged Wardrobe" },
    { id: 9, src: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=800", alt: "Luxury Walk-in Wardrobe", category: "Wardrobe", subCategory: "Walk-in Wardrobe" },
    { id: 10, src: "https://images.unsplash.com/photo-1616486790830-802b5a2a2a0a?q=80&w=800", alt: "Bedroom Sliding Wardrobe", category: "Wardrobe", subCategory: "Sliding Wardrobe" },
    // TV Units
    { id: 11, src: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800", alt: "Living Room Wall Unit", category: "Wall Units", subCategory: null },
    { id: 12, src: "https://images.unsplash.com/photo-1601758177266-bc599b2b353a?q=80&w=800", alt: "Minimalist TV Unit", category: "Wall Units", subCategory: null },
    // Doors
    { id: 13, src: "https://images.unsplash.com/photo-1529859503572-5b9d1e64d942?q=80&w=800", alt: "Elegant Profile Door", category: "Profile Door", subCategory: null },
    { id: 14, src: "https://images.unsplash.com/photo-1617806118233-52839b743748?q=80&w=800", alt: "Modern Acrylic Door", category: "Acrylic Door", subCategory: null },
    { id: 15, src: "https://images.unsplash.com/photo-1567016432863-9dc1b639b785?q=80&w=800", alt: "Classic PU Door", category: "PU Door", subCategory: null },
];

const ITEMS_PER_PAGE = 6;
const mainCategories = ["All Products", "Kitchen", "Wardrobe", "Wall Units"];
const doorCategories = ["Profile Door", "Acrylic Door", "PU Door"];
const subCategoriesMap: { [key: string]: string[] } = {
    Kitchen: ["All", "Acrylic Kitchen", "Lacquered Glass Kitchen", "Laminated Kitchen", "PU Kitchen"],
    Wardrobe: ["All", "Sliding Wardrobe", "Hinged Wardrobe", "Walk-in Wardrobe"],
};

export function ProductsSection() {
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [activeSubCategory, setActiveSubCategory] = useState("All");
    const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

    const filteredProducts = useMemo(() => {
        let items = allProducts;

        if (mainCategories.includes(activeCategory) && activeCategory !== "All Products") {
            items = items.filter(p => p.category === activeCategory);
        } else if (doorCategories.includes(activeCategory)) {
            items = items.filter(p => p.category === activeCategory);
        }

        if (subCategoriesMap[activeCategory] && activeSubCategory !== "All") {
            items = items.filter(p => p.subCategory === activeSubCategory);
        }

        return items;
    }, [activeCategory, activeSubCategory]);

    const currentProducts = filteredProducts.slice(0, visibleItems);

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        setActiveSubCategory("All");
        setVisibleItems(ITEMS_PER_PAGE);
    };

    const handleSubCategoryClick = (subCategory: string) => {
        setActiveSubCategory(subCategory);
        setVisibleItems(ITEMS_PER_PAGE);
    };

    const handleLoadMore = () => {
        setVisibleItems(prev => prev + ITEMS_PER_PAGE);
    };

    return (
        <motion.section
            id="products"
            className="py-24 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-semibold text-brand-brown">Our Interior Design Products</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Explore our diverse product categories to find the perfect fit for your home interior.</p>
                </div>

                {/* --- Category Filters --- */}
                <div className="flex flex-col items-center gap-6">
                    <h3 className="text-xl font-semibold text-brand-brown">Category</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {mainCategories.map(cat => (
                             <button
                                key={cat}
                                onClick={() => handleCategoryClick(cat)}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 border ${
                                    activeCategory === cat
                                    ? 'bg-brand-brown text-white border-brand-brown'
                                    : 'bg-white text-brand-brown border-gray-300 hover:bg-gray-100'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {doorCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryClick(cat)}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 border ${
                                    activeCategory === cat
                                    ? 'bg-brand-brown text-white border-brand-brown'
                                    : 'bg-white text-brand-brown border-gray-300 hover:bg-gray-100'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Sub-Category Filters (Conditional) --- */}
                {subCategoriesMap[activeCategory] && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-10 max-w-3xl mx-auto"
                    >
                        <div className="border border-gray-300 rounded-2xl p-6 text-center">
                            <h3 className="text-xl font-semibold text-brand-brown mb-4">{activeCategory} Sub Categories</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {subCategoriesMap[activeCategory].map(subCat => (
                                     <button
                                        key={subCat}
                                        onClick={() => handleSubCategoryClick(subCat)}
                                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 border ${
                                            activeSubCategory === subCat
                                            ? 'bg-brand-brown text-white border-brand-brown'
                                            : 'bg-white text-brand-brown border-gray-300 hover:bg-gray-100'
                                        }`}
                                    >
                                        {subCat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* --- Image Grid --- */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {currentProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            className="relative aspect-square w-full overflow-hidden rounded-2xl group shadow-lg"
                        >
                            <Image src={product.src} alt={product.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* --- Load More Button --- */}
                {visibleItems < filteredProducts.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={handleLoadMore}
                            className="bg-brand-gold text-white font-bold py-3 px-12 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </motion.section>
    );
}