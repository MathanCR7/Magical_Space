import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-brand-brown text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-white">Magical</span>
                            <span className="text-brand-gold"> Space</span>
                        </h3>
                        <p className="text-gray-400">Transforming spaces with elegance and precision. Our dynamic quotation engine ensures quick, informed decisions for your dream interior.</p>
                    </div>

                    {/* Column 2: Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-brand-gold">Quick Connect</h3>
                        <ul className="space-y-3 text-gray-300">
                            {/* Phone Link */}
                            <li className="flex items-center">
                                <a href="tel:+917406000795" className="flex items-center hover:text-brand-gold transition-colors">
                                    <Phone size={18} className="mr-3" />
                                    +91 7406000795
                                </a>
                            </li>
                            {/* Email Link */}
                            <li className="flex items-center">
                                <a href="mailto:contact@magicalspace.in" className="flex items-center hover:text-brand-gold transition-colors">
                                    <Mail size={18} className="mr-3" />
                                    contact@magicalspace.in
                                </a>
                            </li>
                            {/* Map Link */}
                            <li className="flex items-start">
                                <a
                                    href="https://maps.app.goo.gl/heScqwCjxVUntG6T6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start hover:text-brand-gold transition-colors"
                                >
                                    <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                                    <span>Sathya Agencies, Ambattur - Electronics and Home Appliances, First Floor</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-brand-gold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-brand-gold transition-colors"><Facebook /></a>
                            <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-brand-gold transition-colors"><Instagram /></a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-brand-gold transition-colors"><Linkedin /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Notice */}
                <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Magical Space. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}