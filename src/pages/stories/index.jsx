import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import Button from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { Search, PlayCircle, Star, ArrowRight } from 'lucide-react';

const Stories = () => {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CEO, TechFlow Inc.",
            quote: "SRISAI didn’t just build our software—they became our technology partner. Their team understood our vision and delivered beyond our expectations.",
            tag: "Startup",
            color: "bg-orange-100 text-orange-600",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Michael Rodriguez",
            role: "CTO, Vertex Solutions",
            quote: "The ROI speaks for itself. 40% cost reduction, 99.9% uptime, and a team that actually picks up the phone when we need them.",
            tag: "Startup",
            color: "bg-blue-100 text-blue-600",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Emily Watson",
            role: "Director of IT, Global Retail Corp",
            quote: "Finally, a software company that delivers on time and on budget. SRISAI has set a new standard for what we expect from technology partners.",
            tag: "Startup",
            color: "bg-red-100 text-red-600",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Sarah Chen",
            role: "CEO, TechFlow Inc.",
            quote: "SRISAI didn’t just build our software—they became our technology partner. Their team understood our vision and delivered beyond our expectations.",
            tag: "Startup",
            color: "bg-orange-100 text-orange-600",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Michael Rodriguez",
            role: "CTO, Vertex Solutions",
            quote: "The ROI speaks for itself. 40% cost reduction, 99.9% uptime, and a team that actually picks up the phone when we need them.",
            tag: "Startup",
            color: "bg-blue-100 text-blue-600",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Emily Watson",
            role: "Director of IT, Global Retail Corp",
            quote: "Finally, a software company that delivers on time and on budget. SRISAI has set a new standard for what we expect from technology partners.",
            tag: "Startup",
            color: "bg-red-100 text-red-600",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ];

    const stats = [
        { label: "Faster Time-to-Market", value: "30-60%" },
        { label: "Customer Satisfaction", value: "4.7/5+" },
        { label: "Infrastructure Cost Savings", value: "15-40%" },
        { label: "Automation Gains", value: "2d → 7d" }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-50">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-24 bg-primary text-white relative overflow-hidden">
                {/* Abstract shapes/lines */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 right-20 w-96 h-96 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-64 h-64 border border-white/20 rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12">
                    <div>
                        <span className="bg-white/10 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4 inline-block">Real Results</span>
                        <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
                            Don't Just Take Our<br />
                            <span className="text-secondary">Word For It.</span>
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 max-w-md">
                            See how we've helped ambitious businesses transform their vision into reliable, secure, and scalable software solutions.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/contact">
                                <Button className="bg-secondary border-none">Get a Quote</Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline">Get In Touch</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Search/Filter Box */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4 text-white/50 text-xs uppercase font-bold">
                            <Search size={14} /> Filter Stories
                        </div>
                        <input type="text" placeholder="Search company, tech, or outcome" className="w-full bg-white rounded-lg px-4 py-3 text-primary placeholder-gray-400 mb-6 focus:outline-none" />

                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase mb-2">Popular Tags</p>
                                <div className="flex flex-wrap gap-2">
                                    {['All', 'Enterprise', 'Startup', 'AI', 'Cloud', 'Mobile'].map((tag, i) => (
                                        <button key={i} className={`px-3 py-1 rounded-full text-xs font-medium border ${i === 1 ? 'bg-white text-primary border-white' : 'border-white/30 text-white hover:bg-white/10'}`}>
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase mb-2">Industry</p>
                                    <div className="h-10 bg-white/10 rounded-lg"></div>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase mb-2">Region</p>
                                    <div className="h-10 bg-white/10 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="text-right">
                                <button className="text-xs font-bold text-white bg-white/20 px-4 py-2 rounded">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Case Study */}
            <section className="py-12 -mt-12 relative z-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col lg:flex-row gap-8 items-center max-w-5xl mx-auto">
                        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden h-64 lg:h-80 relative">
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Office" className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                                <PlayCircle size={24} /> <span className="font-bold">Watch Success Story</span>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                                <span className="font-bold text-gray-700">TechFlow</span>
                            </div>
                            <h3 className="text-2xl font-bold text-primary">"SRISAI didn't just build our software—they became our technology partner."</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Facing scalability issues with their legacy system, TechFlow partnered with SRISAI to rebuild their core platform. The result was a 300% increase in transaction speed.</p>

                            <div className="flex items-center gap-4 pt-4">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="w-10 h-10 rounded-full" alt="Sarah" />
                                <div>
                                    <p className="text-sm font-bold text-primary">Sarah Chen</p>
                                    <p className="text-xs text-gray-500">CEO, TechFlow Inc.</p>
                                </div>
                                <button className="text-secondary font-bold text-sm ml-auto">Read Case Study →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className="flex gap-1 text-orange-400 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">"{t.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full" />
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-primary">{t.name}</p>
                                        <p className="text-[10px] text-gray-500">{t.role}</p>
                                    </div>
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded ${t.color}`}>{t.tag}</span>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-50 text-right">
                                    <span className="text-secondary text-xs font-bold cursor-pointer hover:underline">Read Case Study →</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center gap-2 mt-12">
                        {[1, 2, 3].map((page) => (
                            <button key={page} className={`w-8 h-8 rounded flex items-center justify-center font-bold text-sm ${page === 1 ? 'bg-secondary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>
                                {page}
                            </button>
                        ))}
                        <button className="w-8 h-8 rounded flex items-center justify-center bg-white text-gray-600 hover:bg-gray-100">
                            <ArrowRight size={14} />
                        </button>
                        <button className="ml-4 bg-white px-4 py-1 rounded text-sm font-bold text-primary shadow-sm hover:shadow">Read More Stories →</button>
                    </div>
                </div>
            </section>

            {/* Dark Stats Section */}
            <section className="py-20 bg-primary rounded-[3rem] mx-4 md:mx-6 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-blue-900"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4 inline-block">OUTCOMES WE DELIVER</span>
                    <h2 className="text-3xl font-bold text-white mb-12">Illustrative ranges for the kinds of improvements we<br />help teams <span className="text-secondary">unlock.</span></h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300">
                                <p className="text-gray-500 text-sm mb-2">{stat.label}</p>
                                <p className="text-4xl font-extrabold text-secondary">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logos Strip */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">JOINED BY Many INDUSTRY LEADERS</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
                        {/* Placeholder for logos */}
                        <span className="font-bold text-xl text-gray-600">TechFlow</span>
                        <span className="font-bold text-xl text-gray-600">Vertex</span>
                        <span className="font-bold text-xl text-gray-600">Global</span>
                        <span className="font-bold text-xl text-gray-600">PowerHub</span>
                        <span className="font-bold text-xl text-gray-600">MedTech</span>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-primary mx-4 md:mx-6 mb-6 rounded-3xl relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white">
                        <h2 className="text-3xl font-bold mb-2 text-white">Ready to Write Your Success Story?</h2>
                        <p className="text-gray-300 text-sm">Join the hundreds of businesses that trust SRISAI for their critical software infrastructure. Let's build something great together.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link to="/contact">
                            <Button className="bg-secondary text-white border-0">Start Your Project</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline">Schedule a Consultation</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Stories;
