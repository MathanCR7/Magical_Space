'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';

const requirements = ['STANDARD', 'PREMIUM', 'LUXURY', 'ULTRA LUXURY'];
const floorplans = ['1 BHK', '2 BHK', '3 BHK', '3+ BHK'];

const checklistItems = {
  kitchen: ['Modular Kitchen', 'Tall Unit', 'Loft'],
  masterBedroom: ['Wardrobe', 'Loft', 'TV Unit', 'Dressing Unit', 'Bed', 'Study Table'],
  livingRoom: ['TV Unit', 'Crockery', 'Pooja Unit', 'Shoe Rack'],
};

export function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', requirementType: 'PREMIUM', floorplan: '1 BHK',
  });
  const [details, setDetails] = useState<{ [key: string]: string[] }>({ kitchen: [], masterBedroom: [], livingRoom: [] });
  const [status, setStatus] = useState({ submitting: false, message: '', error: false });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setDetails((prev) => {
      const currentList = prev[name] || [];
      return { ...prev, [name]: checked ? [...currentList, value] : currentList.filter((item) => item !== value) };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '', error: false });
    try {
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, details }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Something went wrong.');
      setStatus({ submitting: false, message: 'Thank you! We will get back to you shortly.', error: false });
    } catch (error: any) {
      setStatus({ submitting: false, message: error.message, error: true });
    }
  };

  return (
    <motion.section 
      id="quote-form" 
      className="py-24 bg-brand-brown text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">Get a Free Quote</h2>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <input type="text" name="name" placeholder="Name" required onChange={handleInputChange} className="bg-transparent border-b border-gray-500 p-3 focus:outline-none focus:border-brand-gold transition-colors" />
            <input type="email" name="email" placeholder="Email" required onChange={handleInputChange} className="bg-transparent border-b border-gray-500 p-3 focus:outline-none focus:border-brand-gold transition-colors" />
            <input type="tel" name="phone" placeholder="Phone" required onChange={handleInputChange} className="bg-transparent border-b border-gray-500 p-3 focus:outline-none focus:border-brand-gold transition-colors" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">YOUR REQUIREMENTS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {requirements.map((req) => (
                <button type="button" key={req} onClick={() => setFormData(prev => ({ ...prev, requirementType: req }))}
                  className={`p-3 border rounded-lg transition-all duration-300 ${formData.requirementType === req ? 'bg-brand-gold text-brand-brown font-bold' : 'border-gray-500 hover:bg-white/10'}`}>
                  {req}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">YOUR FLOORPLAN</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {floorplans.map((plan) => (
                <button type="button" key={plan} onClick={() => setFormData(prev => ({ ...prev, floorplan: plan }))}
                  className={`p-3 border rounded-lg transition-all duration-300 ${formData.floorplan === plan ? 'bg-brand-gold text-brand-brown font-bold' : 'border-gray-500 hover:bg-white/10'}`}>
                  {plan}
                </button>
              ))}
            </div>
          </div>

          <div>
             <h3 className="text-lg font-semibold mb-4 text-gray-300">YOUR REQUIREMENTS FOR {formData.floorplan}</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-600 p-8 rounded-2xl">
                {(Object.keys(checklistItems) as Array<keyof typeof checklistItems>).map(category => (
                  <div key={category}>
                    <h4 className="font-bold mb-3 uppercase tracking-wider">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                    <div className="space-y-2">
                        {checklistItems[category].map(item => (
                            <label key={item} className="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" name={category} value={item} onChange={handleCheckboxChange} className="form-checkbox bg-transparent border-gray-400 text-brand-gold focus:ring-brand-gold rounded-sm" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                </div>
                ))}
             </div>
          </div>
          
          <div className="text-center">
            <button type="submit" disabled={status.submitting} className="bg-brand-gold hover:bg-opacity-90 text-white font-bold py-3 px-16 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:scale-100 hover:shadow-gold">
              {status.submitting ? 'Submitting...' : 'Generate Quotation'}
            </button>
             {status.message && <p className={`mt-4 text-sm ${status.error ? 'text-red-400' : 'text-green-400'}`}>{status.message}</p>}
             <p className="mt-6 text-sm text-gray-400">
                Having trouble? Email us at <a href="mailto:contact@magicalspace.in" className="underline hover:text-brand-gold">contact@magicalspace.in</a>
             </p>
          </div>
        </form>
      </div>
    </motion.section>
  );
}