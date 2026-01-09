import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import Button from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { Database, Code2, Cpu, ShieldCheck, BarChart3, PenTool, Layout, Server, Smartphone, Globe } from 'lucide-react';

const ServicesPage = () => {
    const services = [
        {
            icon: Code2, title: "Custom Development",
            desc: "Tailored software solutions that fit your unique business needs perfectly. We build from scratch to ensure your workflows are exactly how you want them.",
            points: ["Web Applications", "Mobile App Development", "Legacy Modernization"],
            color: "bg-orange-50 text-orange-600"
        },
        {
            icon: Server, title: "Cloud Excellence",
            desc: "Scalable, secure cloud infrastructure that grows with your business. We handle migration, optimization, and management seamlessly.",
            points: ["AWS & Azure Solutions", "Cloud Migration", "DevOps Automation"],
            color: "bg-orange-50 text-orange-600"
        },
        {
            icon: Cpu, title: "AI-Powered Solutions",
            desc: "Harness the power of artificial intelligence to automate tasks, predict trends, and make smarter, data-driven business decisions.",
            points: ["Machine Learning Models", "Natural Language Processing", "Predictive Analytics"],
            color: "bg-orange-50 text-orange-600"
        },
        {
            icon: ShieldCheck, title: "Rock-Solid Security",
            desc: "Protect what matters most. Enterprise-grade security protocols that keep your data safe and your mind at ease.",
            points: ["Cyber-Threat Analysis", "Compliance Audits", "Penetration Testing"],
            color: "bg-orange-50 text-orange-600"
        },
        {
            icon: BarChart3, title: "Data Analytics",
            desc: "Turn raw data into actionable insights. We implement powerful analytics dashboards and reporting tools for real-time visibility.",
            points: ["Business Intelligence", "Big Data Processing", "Custom Dashboards"],
            color: "bg-orange-50 text-orange-600"
        },
        {
            icon: PenTool, title: "Product Design",
            desc: "Design that delights. We create intuitive, engaging user experiences that are both functional and visually stunning.",
            points: ["User Research", "UI/UX Design", "Prototyping"],
            color: "bg-orange-50 text-orange-600"
        }
    ];

    const techStack = [
        { name: "React", icon: Layout }, { name: "Node.js", icon: Server }, { name: "Nature", icon: Globe },
        { name: "AWS", icon: Server }, { name: "Mongo", icon: Database }, { name: "Flutter", icon: Smartphone },
        { name: "Docker", icon: Box }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-50">
            <Header />

            {/* Hero */}
            <section className="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative z-10">
                        <span className="bg-secondary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-6 inline-block">Our Expertise</span>
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                            Comprehensive Solutions<br />for a <span className="text-secondary">Digital World</span>.
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 max-w-lg">
                            From ideation to deployment, we build robust software ecosystems that drive growth, efficiency, and innovation for enterprises worldwide.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/contact">
                                <Button className="bg-secondary border-none">Explore Services</Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline">Schedule a Consultation</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative z-10">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dashboard" className="rounded-2xl shadow-2xl border-4 border-white/10" />
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold text-xs tracking-widest uppercase">Service Offerings</span>
                        <h2 className="text-4xl font-bold text-primary mt-2">Built for Scale, Security, and Speed</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We tailor our approach to meet your specific business challenges, leveraging the latest technologies to deliver measurable results.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                                <div className={`w-12 h-12 rounded-lg ${s.color} flex items-center justify-center mb-6`}>
                                    <s.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed bg-white">{s.desc}</p>
                                <ul className="space-y-2 mb-6">
                                    {s.points.map((p, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs font-bold text-primary">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> {p}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className="text-secondary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                    Learn more <ArrowRight size={14} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Strip */}
            <section className="py-12 border-t border-b border-gray-200 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">TECHNOLOGIES WE MASTER</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                        {techStack.map((t, i) => (
                            <div key={i} className="flex items-center gap-2 font-bold text-gray-600">
                                {/* Using placeholder icons for tech logos */}
                                <t.icon size={20} /> {t.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image/Content Side */}
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-2xl grayscale" alt="Contact" />
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl"></div>
                        <div className="absolute bottom-8 left-8 text-white max-w-xs">
                            <h3 className="text-2xl font-bold mb-2 text-white">Ready to Transform Your Business?</h3>
                            <p className="text-white/80 text-sm mb-4">Our team of experts is ready to help you navigate your digital journey.</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2"><span className="text-secondary">✓</span> Free Initial Consultation</li>
                                <li className="flex items-center gap-2"><span className="text-secondary">✓</span> Custom Roadmap Development</li>
                                <li className="flex items-center gap-2"><span className="text-secondary">✓</span> Transparent Pricing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Get in Touch</h3>
                        <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">First Name</label>
                                    <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-secondary transition-colors" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Last Name</label>
                                    <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-secondary transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Work Email</label>
                                <input type="email" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-secondary transition-colors" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Message</label>
                                <textarea className="w-full border border-gray-200 rounded-lg p-3 h-32 focus:outline-none focus:border-secondary transition-colors"></textarea>
                            </div>
                            <Link to="/contact">
                                <Button className="w-full justify-center bg-secondary py-4 text-lg">Send Message <ArrowRight size={18} className="ml-2" /></Button>
                            </Link>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

// Helper Icon for Box (missing in previous list)
const Box = ({ size, className }) => <div className={className} style={{ width: size, height: size, background: 'currentColor', borderRadius: 2 }} />;
import { ArrowRight } from 'lucide-react';

export default ServicesPage;
