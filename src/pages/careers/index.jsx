import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import Button from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Heart, Globe, TrendingUp, Users, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const Careers = () => {
    const benefits = [
        { icon: Briefcase, title: "Continuous Learning", desc: "Access to premium courses, certifications, and internal workshops." },
        { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance, mental wellness programs, and gym memberships." },
        { icon: Globe, title: "Remote First", desc: "Work from where you feel most productive. We focus on output and impact." }
    ];

    const values = [
        { title: "Career Growth", desc: "Clear growth paths, mentorship, and leadership opportunities." },
        { title: "Meaningful Projects", desc: "Solve real problems for real businesses using modern tech." },
        { title: "Work-Life Balance", desc: "Flexible hours, remote work, and respect for personal time." },
        { title: "Industry Experience", desc: "Get real-world experience through diverse projects." }
    ];

    const jobs = [
        { role: "Senior Frontend Developer", type: "Remote (US/Canada)", time: "Full-time", dept: "ENGINEERING", color: "bg-blue-100 text-blue-600" },
        { role: "Product Designer (UI/UX)", type: "Toronto, ON", time: "Full-time", dept: "DESIGN", color: "bg-pink-100 text-pink-600" },
        { role: "Backend Engineer", type: "Remote (Global)", time: "Contract", dept: "ENGINEERING", color: "bg-blue-100 text-blue-600" },
        { role: "Technical Project Manager", type: "New York, NY", time: "Full-time", dept: "MANAGEMENT", color: "bg-green-100 text-green-600" }
    ];

    const steps = [
        { step: "Step 1", title: "Apply Online" },
        { step: "Step 2", title: "Initial Conversation" },
        { step: "Step 3", title: "Technical / Skill Interview" },
        { step: "Step 4", title: "Final Discussion" },
        { step: "Step 5", title: "Offer & Onboarding" },
        { step: "Step 6", title: "Welcome to the our World" }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />


            <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-6">
                        <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">
                            Build the Future.<br />
                            <span className="text-secondary">Grow With Us.</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-lg">
                            Join a team of innovators, dreamers, and doers. At SRISAI, We don't just write code – We build careers, foster creativity and solve problems that matter.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button variant="primary" className="shadow-lg shadow-secondary/20">View Open Roles <ArrowRight size={18} className="ml-2" /></Button>
                            <Button variant="secondary">Our Culture</Button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-10 -right-10 bg-yellow-100 rounded-full w-64 h-64 blur-3xl opacity-50"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Office Life"
                            className="rounded-3xl shadow-2xl skew-y-3 relative z-10 border-4 border-white"
                        />
                        <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg z-20 animate-bounce-slow">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-orange-500">★</span>
                                <span className="font-bold text-primary">Customer Rating</span>
                            </div>
                            <div className="text-3xl font-bold text-secondary">4.9/5.0</div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold text-xs tracking-widest uppercase">LIFE AT SRISAI</span>
                        <h2 className="text-4xl font-bold text-primary mt-2">More Than Just a 8AM-to-5PM</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We believe that happy employees create the best products. Our culture is built on trust, continuous learning, and a healthy work-life balance.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold text-xs tracking-widest uppercase">Why Work with Us</span>
                        <h2 className="text-3xl font-bold mt-2">More than perks — we design roles that support long-term careers.</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {values.map((v, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
                                <p className="text-gray-300 text-sm">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="mb-12">
                        <span className="text-secondary font-bold text-xs tracking-widest uppercase">JOIN THE TEAM</span>
                        <h2 className="text-4xl font-bold text-primary mt-2 mb-8">Open Positions</h2>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Engineering', 'Design', 'Product'].map((filter, i) => (
                                <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-secondary text-white' : 'bg-white text-gray-600 hover:bg-gray-200'}`}>
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {jobs.map((job, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4 border border-gray-100 group cursor-pointer">
                                <div>
                                    <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{job.role}</h3>
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                                        <span className="flex items-center gap-1"><Globe size={12} /> {job.type}</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {job.time}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${job.color}`}>{job.dept}</span>
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-4xl font-bold mb-16">How we Hire</h2>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
                            {steps.map((s, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-secondary mb-4 ring-4 ring-primary ring-opacity-50"></div>
                                    <h4 className="text-secondary font-bold text-sm mb-1">{s.step}</h4>
                                    <p className="text-white text-xs opacity-80">{s.title}</p>
                                </div>
                            ))}
                        </div>


                        <div className="mt-12 md:mt-20 flex justify-center">
                            <div className="bg-white p-4 rounded-xl">
                                <img src="/srisai-logo.png" className="h-8 md:h-12 w-auto" alt="SRISAI" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary border-t border-white/10">
                <div className="container mx-auto px-4 text-center flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to make an impact?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join a company where your work is valued, your voice is heard, and your potential is limitless. Let's build something great together.</p>
                    <Link to="/contact">
                        <Button variant="primary" className="bg-secondary px-8 py-3 text-lg mx-auto">Apply Now</Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;
