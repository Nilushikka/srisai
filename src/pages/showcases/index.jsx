import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import Button from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Box } from 'lucide-react';

const ShowCases = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-50">
            <Header />

            {/* Hero */}
            <section className="bg-primary text-white pt-32 pb-24 relative overflow-hidden">
                {/* Matrix background effect (simulated) */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] opacity-20 bg-cover bg-center"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4 text-white">Innovation in <span className="text-secondary">Action</span>.</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                        Explore how SRISAI helps businesses design, build, and scale digital products through innovation, engineering excellence, and AI-driven solutions.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                        {['All Projects', 'FinTech', 'Healthcare', 'Enterprise SaaS', 'Cloud Migration'].map((filter, i) => (
                            <button key={i} className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${i === 0 ? 'bg-secondary border-secondary text-white' : 'bg-white text-primary border-white'}`}>
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Case Study - GlobalRetail */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">
                        <div className="bg-gray-900 p-8 flex items-center justify-center relative">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dashboard" className="rounded-xl shadow-2xl relative z-10 w-full h-auto object-cover" />
                            {/* Overlay UI element */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg p-3 flex justify-between items-center z-20">
                                <div>
                                    <p className="text-xs font-bold text-gray-500">Featured Project</p>
                                    <p className="text-sm font-bold text-primary">GlobalRetail Analytics Platform</p>
                                </div>
                                <Clock size={20} className="text-secondary" />
                            </div>
                        </div>
                        <div className="p-12 flex flex-col justify-center">
                            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded text-xs font-bold uppercase w-fit mb-6">Success Story</span>
                            <h2 className="text-3xl font-bold text-primary mb-4">Revolutionizing Supply Chain Visibility for GlobalRetail</h2>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                We partnered with GlobalRetail to rebuild their legacy logistics system into a real-time, cloud-native analytics platform. The result was a 40% reduction in shipping delays and complete transparency across 12 countries.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="text-2xl font-bold text-primary">4-8 Weeks</p>
                                    <p className="text-xs text-gray-500">Delivery Speed</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-primary">Impact & Reliability</p>
                                    <p className="text-xs text-gray-500">Focus</p>
                                </div>
                            </div>

                            <div className="flex gap-2 mb-8 flex-wrap">
                                {['Cloud Architecture', 'Big Data', 'React'].map((tag, i) => (
                                    <span key={i} className="text-xs font-bold text-gray-500 border border-gray-200 px-3 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>

                            <a href="#" className="flex items-center gap-2 text-secondary font-bold text-sm hover:gap-3 transition-all">Read Case Study <ArrowRight size={14} /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Work Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold text-xs tracking-widest uppercase">Show Cases</span>
                        <h2 className="text-4xl font-bold text-primary mt-2">Recent Work</h2>
                        <p className="text-gray-500 mt-4">A cross-section of SRISAI projects across web, mobile, AI, and cloud.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "EcoPower", type: "Energy", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Smart Grid Dashboard: Real-time monitoring interface for renewable energy." },
                            { title: "Vertex Corp", type: "Corporate", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", desc: "HR Management Portal: Automated onboarding and payroll system." },
                            { title: "TrendSetter", type: "Retail", img: "https://images.unsplash.com/photo-1556740758-90de29294d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", desc: "Omnichannel Commerce App: Seamless shopping experience across mobile/web." },
                        ].map((work, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="rounded-2xl overflow-hidden mb-6 h-64 shadow-md bg-gray-100">
                                    <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <span className="text-xs font-bold border border-gray-200 rounded-full px-3 py-1 mb-3 inline-block uppercase tracking-wider">{work.type}</span>
                                <h3 className="text-xl font-bold text-primary mt-1 mb-2">{work.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">{work.desc}</p>
                                <span className="text-secondary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">View Project <ArrowRight size={14} /></span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions That Scale (Wide Cards) */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold text-xs tracking-widest uppercase">Our Portfolio</span>
                        <h2 className="text-4xl font-bold mt-2">Solutions That Scale</h2>
                    </div>

                    <div className="grid gap-12">
                        {/* Card 1 */}
                        <div className="bg-white rounded-3xl overflow-hidden grid lg:grid-cols-2">
                            <div className="p-12 text-primary flex flex-col justify-center">
                                <span className="bg-gray-100 px-3 py-1 rounded text-xs font-bold uppercase w-fit mb-6">FinTech</span>
                                <h3 className="text-3xl font-bold mb-4">Fintech Operations Hub</h3>
                                <p className="text-gray-500 mb-6">Designed a high-security banking portal with biometric authentication and real-time fraud detection.</p>
                                <ul className="space-y-2 text-sm text-gray-600 mb-8">
                                    <li>• 20-30% efficiency gain across core workflows</li>
                                    <li>• Faster decision-making with unified dashboards</li>
                                </ul>
                                <span className="text-secondary font-bold cursor-pointer">View Project &gt;</span>
                            </div>
                            <div className="h-80 lg:h-auto relative">
                                <img src="https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Fintech" />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-3xl overflow-hidden grid lg:grid-cols-2">
                            <div className="h-80 lg:h-auto relative order-last lg:order-first">
                                <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="AI Code" />
                            </div>
                            <div className="p-12 text-primary flex flex-col justify-center">
                                <span className="bg-gray-100 px-3 py-1 rounded text-xs font-bold uppercase w-fit mb-6">AI</span>
                                <h3 className="text-3xl font-bold mb-4">AI Support Assistant</h3>
                                <p className="text-gray-500 mb-6">Domain-aware assistant that reduces L1 ticket volume by 35%.</p>
                                <ul className="space-y-2 text-sm text-gray-600 mb-8">
                                    <li>• Natural Language Understanding</li>
                                    <li>• Automated Ticket Resolution</li>
                                </ul>
                                <span className="text-secondary font-bold cursor-pointer">View Project &gt;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Strip Dark */}
            <section className="py-8 bg-gray-900 border-t border-gray-800 text-gray-400 text-xs font-bold uppercase tracking-widest text-center">
                <div className="container mx-auto flex justify-center gap-8 md:gap-16 flex-wrap">
                    <span>React Native</span>
                    <span>Full Cloud</span>
                    <span>PostgreSQL</span>
                    <span>TensorFlow</span>
                    <span>Flutter</span>
                    <span>Cybersecurity</span>
                </div>
                <div className="mt-4 text-[10px] opacity-50">Powered by modern technologies</div>
            </section>

            {/* Testimonial Quote */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 leading-relaxed">"SRISAI didn't just build software; they built the backbone of our digital operations. Their attention to security and scalability allowed us to expand into three new markets within a year."</h2>
                    <div className="flex flex-col items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="w-12 h-12 rounded-full mb-2" alt="Sarah" />
                        <p className="font-bold text-primary">Sarah Jenkins</p>
                        <p className="text-xs text-gray-400">CTO, FinanceHub</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-primary mx-4 md:mx-6 mb-6 rounded-3xl relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Success Story?</h2>
                    <p className="text-gray-300 text-sm mb-8 max-w-2xl">Whether you need a custom enterprise solution or a consumer-facing app, our team is ready to expand your vision to life.</p>
                    <div className="flex gap-4">
                        <Link to="/contact">
                            <Button className="bg-secondary text-white border-0">Start Your Project</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline">Schedule Consultation</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ShowCases;
