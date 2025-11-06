'use client';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: "What are the latest interior design trends for 2025?",
        answer: "Key trends include sustainable materials (biophilic design), smart home integration, curved furniture, and bold, earthy color palettes. We incorporate these modern interior design trends to create timeless yet contemporary spaces."
    },
    {
        question: "How much does interior design cost per sq ft in Bangalore?",
        answer: "The cost for interior design services varies based on scope, materials, and complexity. On average, it can range from ₹200 to ₹800+ per sq ft. We provide detailed, transparent quotations tailored to your budget and style."
    },
    {
        question: "Do you offer turnkey interior solutions?",
        answer: "Yes, we specialize in complete turnkey interior solutions. From initial design consultation and 3D visualization to manufacturing, execution, and final handover, we manage the entire project for a hassle-free experience."
    },
    {
        question: "Can you design for small spaces like a 2BHK apartment?",
        answer: "Absolutely. Our expertise lies in space planning and creating functional, beautiful interiors for apartments of all sizes. We use smart furniture, clever storage solutions, and color psychology to make small spaces feel larger."
    },
    {
        question: "What is included in your modular kitchen design service?",
        answer: "Our modular kitchen design package includes space planning, cabinet design, material selection (laminates, acrylic, PU), countertop choices, and appliance integration. We focus on creating an ergonomic and stylish kitchen that fits your needs."
    }
];

export function FAQSection() {
    return (
        <section id="faq" className="py-24 bg-brand-cream">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold text-brand-brown">Frequently Asked Questions</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Answers to common questions about our interior design services.</p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.details
                            key={index}
                            className="p-6 bg-white rounded-2xl shadow-lg open:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <summary className="text-lg font-semibold text-brand-brown cursor-pointer list-none flex justify-between items-center">
                                {faq.question}
                                <span className="text-brand-gold transform transition-transform duration-300 group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                {faq.answer}
                            </p>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
}