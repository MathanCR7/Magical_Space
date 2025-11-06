'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

// UPDATED: Replaced all broken URLs with new, working URLs
const portfolioImages = [
  { src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800", category: "Living Room" },
  { src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800", category: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800", category: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800", category: "Dining Area" },
  { src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800", category: "Modern Living" },
  { src: "https://images.unsplash.com/photo-1542037104-e28310162a4a?q=80&w=800", category: "Kids Room" },
];

export function PortfolioSection() {
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
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl group shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Image src={image.src} alt={`Portfolio image of a ${image.category}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <h3 className="text-white text-xl font-bold">{image.category}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}