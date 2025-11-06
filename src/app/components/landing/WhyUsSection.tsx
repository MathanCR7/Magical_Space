'use client';
import { motion } from 'framer-motion';

export function WhyUsSection() {
    return (
        <motion.section 
            id="why-us" 
            className="py-24 bg-brand-cream"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-6 text-center">
                {/* SEO UPDATE: Keyword-rich heading and subheading */}
                <h2 className="text-4xl md:text-5xl font-semibold text-brand-brown mb-4">Why Choose Magical Space for Your Interiors?</h2>
                <p className="text-gray-600 mb-16 max-w-2xl mx-auto">Our blend of two decades of expertise, state-of-the-art manufacturing, and immersive 3D visualization sets us apart in the interior design industry.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[{
                        title: "Two Decades of Design Expertise",
                        // SEO UPDATE: Added keywords like 'commercial', 'residential'
                        text: "With 20 years of experience, we deliver exceptional residential and commercial interior design. Our 100,000-square-foot manufacturing unit ensures quality and precision."
                    }, {
                        title: "Realistic 3D Visualization",
                        text: "Experience your future home with our breathtakingly realistic 3D renderings. Visualize every detail of your interior design project before we even begin construction."
                    }, {
                        title: "On-Time Project Delivery",
                        text: "We pride ourselves on our efficient project management, ensuring we produce stunning outcomes quickly without ever compromising on quality or craftsmanship."
                    }].map((item, index) => (
                        <motion.div 
                            key={item.title}
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* SEO UPDATE: Using h3 for subheadings */}
                            <h3 className="text-xl font-semibold text-brand-brown mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}