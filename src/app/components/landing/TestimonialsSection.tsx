'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import React from 'react';

const testimonials = [
  {
    quote: "Magical Space turned our house into a home. The attention to detail was impeccable, and the 3D visualization was a game-changer. Highly recommended!",
    name: "Karthik & Priya",
    location: "Adyar, Chennai"
  },
  {
    quote: "The entire process was smooth and professional. Their team understood our vision perfectly and delivered beyond our expectations. We couldn't be happier.",
    name: "Suresh Kumar",
    location: "T. Nagar, Chennai"
  },
  {
    quote: "From the quality of materials to the craftsmanship, everything was top-notch. They finished the project on time and within budget. A truly magical experience!",
    name: "Meenakshi V.",
    location: "Ambattur, Chennai"
  },
  {
    quote: "I was amazed at how quickly they transformed our cramped apartment into a spacious, functional, and beautiful living area. The team is incredibly talented.",
    name: "Ganesh Murthy",
    location: "Velachery, Chennai"
  },
  {
    quote: "Planning our new office interior with Magical Space was a breeze. They handled everything, ensuring a productive and inspiring workspace for our team.",
    name: "Lakshmi Srinivasan",
    location: "Nungambakkam, Chennai"
  },
  {
    quote: "The custom furniture they designed and built for us is the centerpiece of our home. The quality and design are simply outstanding.",
    name: "Arun Pandian",
    location: "Anna Nagar, Chennai"
  },
  {
    quote: "Adopting their design for our cafe has significantly improved customer flow and ambiance. We've seen a noticeable increase in business!",
    name: "Saravanan R.",
    location: "Guindy, Chennai"
  },
  {
    quote: "With their help, we managed to create a stunning yet practical kitchen. Task lighting, storage, and workflow are all perfect.",
    name: "Deepa Krishnan",
    location: "Mylapore, Chennai"
  },
  {
    quote: "Their user-friendly process and robust design features supported our diverse needs for a multi-generational family home.",
    name: "Anand Raj",
    location: "Sholinganallur, Chennai"
  },
];

// Split testimonials into three columns for the layout
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// Reusable component for a single scrolling column
const TestimonialColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-8 pb-8"
    >
      {/* We duplicate the content to create the seamless scrolling effect */}
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-brand-cream p-8 rounded-2xl shadow-xl flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-brand-gold fill-current" />)}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-brand-brown">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

// The main section component
export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-brand-brown">What Our Clients Say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We take pride in making our clients happy. Here's what they think about us.</p>
        </motion.div>

        {/* This container creates the fading effect at the top and bottom */}
        <div className="relative flex justify-center gap-8 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[750px] overflow-hidden">
          <TestimonialColumn testimonials={firstColumn} duration={25} />
          <TestimonialColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={30}
          />
          <TestimonialColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={27}
          />
        </div>
      </div>
    </section>
  );
}