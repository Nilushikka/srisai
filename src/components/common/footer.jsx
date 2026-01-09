
import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-12 pb-6">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">

                    <div className="space-y-6">
                        <div className="bg-white p-2 rounded-lg inline-flex items-center">
                            <img src="/srisai-logo.png" alt="SRISAI" className="h-12 w-auto object-contain" />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Trusted by businesses worldwide. We transform ideas into powerful software solutions that drive growth and innovation.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Careers', path: '/careers' },
                                { name: 'Services', path: '/services' },
                                { name: 'Show Cases', path: '/showcases' },
                                { name: 'Customer Stories', path: '/stories' },
                                { name: 'Blog', path: '/blog' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="hover:text-secondary transition-colors">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            {['Custom Development', 'Cloud Solutions', 'AI & Analytics', 'Digital Strategy'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="hover:text-secondary transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-secondary" size={20} />
                                <span>123 Innovation Drive,<br />Toronto, ON M5V 3A8</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-secondary" size={20} />
                                <span>+1 (416) 555-0123</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-secondary" size={20} />
                                <span>hello@srisai.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© 2026 SRISAI. All rights reserved. Building trust through technology.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
