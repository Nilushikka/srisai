
import Button from '../../components/ui/button';
import { ArrowRight, Lock, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section
            className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: 'url("/hero.png")' }}
        >

            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent/10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-2xl space-y-8 animate-in slide-in-from-left-5 duration-700">
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-primary">
                        Your Vision.<br />
                        <span className="text-secondary">Our Expertise.</span>
                    </h1>
                    <p className="text-xl text-gray-700 leading-relaxed font-medium">
                        We build software that businesses mission. Reliable, Secure, Designed to grow with you.
                        <span className="block font-bold mt-2 text-primary">No empty promises — just results.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/contact">
                            <Button variant="primary" className="h-14 px-8 text-lg shadow-xl shadow-secondary/30">
                                Start your Project <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="secondary" className="h-14 px-8 text-lg bg-white/50 backdrop-blur-sm hover:bg-white border-none shadow-lg">
                                Schedule a Consultation
                            </Button>
                        </Link>
                    </div>



                </div>
            </div>
        </section >
    );
};

export default HeroSection;
