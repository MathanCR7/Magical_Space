'use client';
import { motion, Variants } from 'framer-motion';

// Placeholder icons - you can replace these with your own SVG components
const ExpertiseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100-4 2 2 0 000 4zm6-8a2 2 0 100-4 2 2 0 000 4zm-12 0a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);

const VisualizationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const DeliveryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1zM21 11.5v-5a2 2 0 00-2-2h-4.5a2 2 0 00-2 2v5a2 2 0 002 2H19a2 2 0 002-2z" />
    </svg>
);

const features = [{
    icon: <ExpertiseIcon />,
    title: "Two Decades of Design Expertise",
    text: "With 20 years of experience, we deliver exceptional residential and commercial interior design. Our 100,000-square-foot manufacturing unit ensures quality and precision."
}, {
    icon: <VisualizationIcon />,
    title: "Realistic 3D Visualization",
    text: "Experience your future home with our breathtakingly realistic 3D renderings. Visualize every detail of your interior design project before we even begin construction."
}, {
    icon: <DeliveryIcon />,
    title: "On-Time Project Delivery",
    text: "We pride ourselves on our efficient project management, ensuring we produce stunning outcomes quickly without ever compromising on quality or craftsmanship."
}];

export function WhyUsSection() {
    // FIX: Add the 'Variants' type annotation
    const sectionVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    // FIX: Add the 'Variants' type annotation
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section
            id="why-us"
            className="py-24 relative overflow-hidden bg-brand-cream"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Animated background gradient */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-cream via-rose-50 to-amber-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2
                    className="text-4xl md:text-5xl font-semibold text-brand-brown mb-4"
                    variants={itemVariants}
                >
                    Why Choose Magical Space for Your Interiors?
                </motion.h2>
                <motion.p
                    className="text-gray-600 mb-16 max-w-3xl mx-auto text-lg"
                    variants={itemVariants}
                >
                    Our blend of two decades of expertise, state-of-the-art manufacturing, and immersive 3D visualization sets us apart in the interior design industry.
                </motion.p>
                
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    variants={sectionVariants}
                >
                    {features.map((item) => (
                        <motion.div
                            key={item.title}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <div className="bg-amber-100 p-4 rounded-full mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-brand-brown mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}