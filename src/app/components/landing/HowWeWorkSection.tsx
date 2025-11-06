'use client';

import { motion } from 'framer-motion';
import { DraftingCompass, Lightbulb, Bot, Award } from 'lucide-react';

const processSteps = [
  {
    icon: <Lightbulb size={40} className="text-brand-gold" />,
    title: "1. Consultation & Ideation",
    description: "We start by understanding your vision, requirements, and lifestyle to create a tailored concept just for you."
  },
  {
    icon: <DraftingCompass size={40} className="text-brand-gold" />,
    title: "2. Design & 3D Visualization",
    description: "Our designers craft detailed plans and create realistic 3D renderings, allowing you to see your space before construction begins."
  },
  {
    icon: <Bot size={40} className="text-brand-gold" />,
    title: "3. Manufacturing & Execution",
    description: "Using state-of-the-art machinery, we manufacture custom pieces with precision and begin the on-site execution."
  },
  {
    icon: <Award size={40} className="text-brand-gold" />,
    title: "4. Installation & Handover",
    description: "Our expert team installs every component with care, followed by a final quality check before handing over your dream space."
  },
];

// RENAMED: from HowItWorksSection to HowWeWorkSection
export function HowWeWorkSection() {
  return (
    // RENAMED: id from "how-it-works" to "how-we-work"
    <section id="how-we-work" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-brand-brown">Our Seamless Process</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">From the first sketch to the final touch, we make transforming your space a breeze.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 bg-brand-cream rounded-2xl shadow-lg"
            >
              <div className="flex justify-center items-center mb-4 h-16 w-16 mx-auto bg-white rounded-full shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}