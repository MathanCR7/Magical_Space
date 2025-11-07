'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// --- DATA ---
// Make sure you have these images in your /public/image/ folder.
const portfolioImages = [
  { src: "/image/modern_living_room.jpg", category: "Serene Living Room" },
  { src: "/image/luxury_bedroom.jpg", category: "Luxury Bedroom" },
  { src: "/image/modern_kitchen.jpg", category: "Modern Kitchen" },
  { src: "/image/elegant_dining_area.jpg", category: "Elegant Dining Area" },
  { src: "/image/minimalist_living.jpg", category: "Minimalist Modern Living" },
  { src: "/image/creative_kids_room.jpg", category: "Creative Kids Room" },
];

// --- MAIN COMPONENT ---
export function PortfolioSection() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const showNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % portfolioImages.length);
        }
    };

    const showPrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + portfolioImages.length) % portfolioImages.length);
        }
    };
    
    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedImageIndex(null);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex !== null) {
                if (e.key === 'ArrowRight') showNextImage(e as any);
                else if (e.key === 'ArrowLeft') showPrevImage(e as any);
                else if (e.key === 'Escape') handleCloseModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex]);

    return (
        <section id="portfolio" className="py-24 bg-brand-cream">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold text-brand-brown">Our Interior Design Portfolio</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">A glimpse into the beautiful and functional spaces we've transformed.</p>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl group shadow-lg cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => handleImageClick(index)}
                            layoutId={`portfolio-image-${index}`}
                        >
                            <Image 
                                src={image.src}
                                alt={`Portfolio image of a ${image.category}`} 
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.category}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                        onClick={handleCloseModal}
                    >
                        {/* Wrapper for the Image and Title */}
                        <div
                            className="relative w-full max-w-5xl flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside this area
                        >
                            {/* Main Image Display */}
                            <motion.div
                                layoutId={`portfolio-image-${selectedImageIndex}`}
                                className="relative w-full h-[70vh] mb-4" // Adjusted height and added margin-bottom
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedImageIndex}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="relative w-full h-full"
                                    >
                                        <Image
                                            src={portfolioImages[selectedImageIndex].src}
                                            alt={portfolioImages[selectedImageIndex].category}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>

                            {/* Category Title (Positioned Below Image) */}
                            <motion.h3
                                key={`title-${selectedImageIndex}`} // Add key for re-animation on change
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="text-white text-lg md:text-xl font-semibold text-center"
                            >
                                {portfolioImages[selectedImageIndex].category}
                            </motion.h3>
                        </div>

                        {/* Prev Button */}
                        <motion.button
                            onClick={showPrevImage}
                            aria-label="Previous Image"
                            className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/25 transition-colors duration-300"
                        >
                            <ChevronLeft className="h-8 w-8 text-white" />
                        </motion.button>
                        
                        {/* Next Button */}
                        <motion.button
                            onClick={showNextImage}
                            aria-label="Next Image"
                            className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/25 transition-colors duration-300"
                        >
                            <ChevronRight className="h-8 w-8 text-white" />
                        </motion.button>

                        {/* Close Button */}
                        <motion.button
                            onClick={handleCloseModal}
                            aria-label="Close Gallery"
                            className="absolute top-4 right-4 p-3 bg-white/10 rounded-full hover:bg-white/25 transition-colors duration-300"
                        >
                            <X className="h-6 w-6 text-white" />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}