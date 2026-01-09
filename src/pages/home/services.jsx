
import { Code2, Cloud, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/button';

const Services = () => {
    const services = [
        {
            title: "Custom Development",
            description: "Tailor-made software built from scratch to fit your exact business needs with scalability in mind.",
            icon: Code2,
            color: "bg-orange-100 text-orange-600"
        },
        {
            title: "Cloud Excellence",
            description: "Enable your business with scalable infrastructure that grows with you. Seamless migration and orchestration.",
            icon: Cloud,
            color: "bg-orange-100 text-orange-600"
        },
        {
            title: "AI-Powered Solutions",
            description: "Leverage the power of artificial intelligence to automate processes and uncover new insights.",
            icon: Cpu,
            color: "bg-orange-100 text-orange-600"
        },
        {
            title: "Rock-Solid Security",
            description: "Protect your data with enterprise-grade security protocols. We prioritize your privacy and trust.",
            icon: ShieldCheck,
            color: "bg-orange-100 text-orange-600"
        }
    ];

    return (
        <section className="bg-primary py-24 relative overflow-hidden">

            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-semibold tracking-wider text-sm uppercase">Our Services</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Solutions That Drive Real Results
                    </h2>
                    <p className="text-gray-300 text-lg">
                        From concept to launch and beyond — we build end-to-end solutions that help your business thrive.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-5px] group">
                            <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 text-secondary`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <a href="#" className="inline-flex items-center text-primary font-semibold group-hover:text-secondary transition-colors">
                                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button className=" text-black hover:bg-gray-200 px-8 py-4 h-auto rounded-full font-bold shadow-lg mx-auto text-black">
                        Explore All Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Services;
