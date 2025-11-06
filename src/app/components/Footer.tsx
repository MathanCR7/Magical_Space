import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-brand-brown text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-white">Magical</span>
                            <span className="text-brand-gold"> Space</span>
                        </h3>
                        <p className="text-gray-400">Transforming spaces with elegance and precision. Our dynamic quotation engine ensures quick, informed decisions for your dream interior.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-brand-gold">Quick Connect</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center hover:text-brand-gold transition-colors"><Phone size={18} className="mr-3" /> +91 7406000795</li>
                            <li className="flex items-center hover:text-brand-gold transition-colors"><Mail size={18} className="mr-3" /> contact@magicalspace.in</li>
                            <li className="flex items-start"><MapPin size={18} className="mr-3 mt-1 flex-shrink-0" /> Sy.no.9/13, Kannamangala Main Road, Goravigere, Bangalore-560067</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-brand-gold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-brand-gold transition-colors"><Facebook /></a>
                            <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-brand-gold transition-colors"><Instagram /></a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-brand-gold transition-colors"><Linkedin /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Magical Space. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}