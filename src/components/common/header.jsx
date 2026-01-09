import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services', hasDropdown: true },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Show Cases', path: '/showcases' },
        { name: 'Customer Stories', path: '/stories' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-white p-2 rounded-lg">
                            <img src="/srisai-logo.png" alt="SRISAI" className="h-12 w-auto object-contain" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors flex items-center gap-1 group"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link to="/contact">
                            <Button variant="primary">
                                Talk to Us
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-4 shadow-lg animate-in slide-in-from-top-5">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-base font-medium text-gray-600 p-2 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full justify-center">
                                Talk to Us
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
