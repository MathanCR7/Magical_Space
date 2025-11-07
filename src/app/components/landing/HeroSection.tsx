'use client';

import { useState } from 'react';
import Image from 'next/image';
// Import the 'Transition' type from framer-motion
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';

// Local wrap utility to cycle a value between min (inclusive) and max (exclusive)
const wrap = (min: number, max: number, v: number) => {
    const range = max - min;
    if (range === 0) return min;
    const result = ((v - min) % range + range) % range + min;
    return result;
};

// --- SLIDES DATA ---
const slides = [
    {
        id: 1,
        title: 'Modern Living',
        description: 'Experience unparalleled comfort and style with our bespoke living room designs that reflect your personality.',
        altText: 'A modern living room designed with a comfortable white sofa and minimalist decor.',
        image: '/image/hero-1.jpg',
    },
    {
        id: 2,
        title: 'Luxury Bedroom',
        description: 'Transform your bedroom into a serene sanctuary with our luxurious and elegant interior solutions.',
        altText: 'A luxury master bedroom interior design with elegant furniture and lighting.',
        image: '/image/hero-2.jpg',
    },
    {
        id: 3,
        title: 'Stylish Kitchen',
        description: 'Discover the heart of your home with our state-of-the-art, functional, and stylish kitchen designs.',
        altText: 'A stylish modular kitchen with modern cabinets and state-of-the-art appliances.',
        image: '/image/hero-3.jpg',
    },
];

// --- ANIMATION VARIANTS ---
const transition: Transition = { duration: 1, ease: "easeInOut" };

const bgVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        transition,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        transition,
    }),
};

const kenBurnsVariants: Variants = {
    animate: {
        scale: 1.1,
        x: [0, -10, 5],
        y: [0, 5, -10],
        transition: {
            duration: 15,
            ease: [0.42, 0, 0.58, 1],
            repeat: Infinity,
            repeatType: "mirror",
        }
    }
};

const fgVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
        rotateY: direction > 0 ? 60 : -60,
    }),
    center: {
        zIndex: 3,
        x: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: { ...transition, delay: 0.2 },
    },
    exit: (direction: number) => ({
        zIndex: 2,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.8,
        rotateY: direction < 0 ? 60 : -60,
        transition: { ...transition },
    }),
};

const contentVariants: Variants = {
    enter: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    center: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    exit: { transition: { staggerChildren: 0.08 } },
};

const textVariants: Variants = {
    enter: { y: 30, opacity: 0 },
    center: { y: 0, opacity: 1, transition: { ...transition, duration: 0.8 } },
    exit: { y: -30, opacity: 0, transition: { ...transition, duration: 0.3 } },
};

// --- SUB-COMPONENTS ---
const NavButton = ({ direction, onClick }: { direction: 'left' | 'right', onClick: () => void }) => (
    <button
        onClick={onClick}
        aria-label={direction === 'left' ? 'Previous Slide' : 'Next Slide'}
        className={`absolute top-1/2 -translate-y-1/2 z-50 p-2 group ${direction === 'left' ? 'left-2 md:left-5 lg:left-10' : 'right-2 md:right-5 lg:right-10'}`}
    >
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/25 group-hover:scale-110 group-active:scale-95">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 group-hover:scale-125 ${direction === 'right' ? 'rotate-180' : ''}`}>
                <path d="M20 12H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 6L4 12L10 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    </button>
);

const CTAButton = () => {
    const text = "• GET A FREE QUOTE • GET A FREE QUOTE ";
    const characters = text.split('');
    const handleContactClick = () => {
        document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <button onClick={handleContactClick} className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center group z-50">
            <motion.div
                className="absolute w-full h-full text-white"
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 12, repeat: Infinity }}
            >
                {characters.map((char, i) => (
                    <span
                        key={i}
                        className="absolute left-1/2 top-0 origin-[0_80px] md:origin-[0_96px] text-xs uppercase tracking-widest"
                        style={{ transform: `rotate(${i * (360 / characters.length)}deg)` }}>
                        {char}
                    </span>
                ))}
            </motion.div>
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <motion.svg
                    initial={{ scale: 1, rotate: 0 }}
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, ease: [0.42, 0, 0.58, 1], repeat: Infinity, repeatDelay: 1 }}
                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" />
                </motion.svg>
            </div>
        </button>
    );
};

// --- MAIN HERO COMPONENT ---
export function HeroSection() {
    const [[page, direction], setPage] = useState([0, 0]);
    const slideIndex = wrap(0, slides.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <section className="relative w-full h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center font-sans">
            {/* Background Image */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div key={page} className="absolute inset-0" custom={direction} variants={bgVariants} initial="enter" animate="center" exit="exit">
                    <motion.div className="w-full h-full" variants={kenBurnsVariants} animate="animate">
                        <Image src={slides[slideIndex].image} alt={`Background for ${slides[slideIndex].title}`} fill className="object-cover" priority />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/50 to-black/80"></div>
                </motion.div>
            </AnimatePresence>

            {/* Main Content Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full h-full max-w-7xl mx-auto px-5 md:px-10">

                {/* Left Side: Text Content */}
                <div className="w-full max-w-md mx-auto text-center lg:text-left lg:ml-[80px] lg:mr-0 mt-20 lg:mt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`content-${page}`}
                            variants={contentVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="flex flex-col items-center lg:items-start"
                        >
                            <motion.p variants={textVariants} className="font-mono text-lg text-white/70">
                                0{slides[slideIndex].id} / 0{slides.length}
                            </motion.p>
                            <motion.h1
                                variants={textVariants}
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                className="text-5xl md:text-7xl font-light tracking-wider uppercase text-white text-shadow-md my-4">
                                {slides[slideIndex].title}
                            </motion.h1>
                            <motion.p variants={textVariants} className="text-base md:text-lg text-white/80 max-w-sm leading-relaxed mb-8 lg:mb-0">
                                {slides[slideIndex].description}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Side: Foreground Image Portal & CTA */}
                <div className="relative w-full h-full flex flex-col items-center justify-center lg:justify-end">
                    <div className="relative w-[280px] h-[420px] sm:w-[350px] sm:h-[525px] md:w-[400px] md:h-[600px] [perspective:1200px]">

                        {/* Portal Frame */}
                        <div className="absolute inset-0 bg-transparent border-[1px] border-white/10 rounded-[200px] shadow-[0_0_30px_rgba(255,255,255,0.05)]"></div>

                        {/* Image Container */}
                        <div className="absolute w-full h-full p-6">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={`foreground-${page}`}
                                    className="w-full h-full"
                                    custom={direction}
                                    variants={fgVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                >
                                    <Image src={slides[slideIndex].image} alt={slides[slideIndex].altText} fill className="object-cover rounded-[170px] drop-shadow-2xl" />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* CTA for ALL screen sizes, centered in the oval */}
                        <div className="flex absolute inset-0 z-10 items-center justify-center">
                            <div className="opacity-80 hover:opacity-100 transition-opacity">
                                <CTAButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NavButton direction="left" onClick={() => paginate(-1)} />
            <NavButton direction="right" onClick={() => paginate(1)} />
        </section>
    );
}