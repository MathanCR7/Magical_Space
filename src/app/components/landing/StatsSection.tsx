'use client';
import { motion } from 'framer-motion';
import { Building, Users, Square, Smile } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

const stats = [
    { icon: <Building className="h-10 w-10 text-brand-gold" />, value: 500, label: "Projects Completed", suffix: "+" },
    { icon: <Smile className="h-10 w-10 text-brand-gold" />, value: 450, label: "Happy Clients", suffix: "+" },
    { icon: <Square className="h-10 w-10 text-brand-gold" />, value: 200000, label: "Sq. Ft. Designed", suffix: "+" },
    { icon: <Users className="h-10 w-10 text-brand-gold" />, value: 50, label: "Expert Designers", suffix: "+" },
]

export function StatsSection() {
    return (
        <section className="py-24 bg-brand-brown text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center"
                         >
                            {stat.icon}
                            <div className="text-4xl md:text-5xl font-bold mt-4">
                                <AnimatedCounter value={stat.value} />{stat.suffix}
                            </div>
                            <p className="text-gray-300 mt-2">{stat.label}</p>
                         </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}