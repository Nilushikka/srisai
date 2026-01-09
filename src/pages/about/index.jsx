import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import Button from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Zap, Shield, BookOpen } from 'lucide-react';

const About = () => {
    const values = [
        { icon: Heart, title: "Integrity First", desc: "We believe in honest communication. No hidden fees, no empty promises—just transparent partnerships." },
        { icon: BookOpen, title: "Continuous Learning", desc: "Technology never stops evolving, and neither do we. We stay ahead of the curve so you don't have to." },
        { icon: Zap, title: "Client-Centricity", desc: "Your success is our success. We align our strategies directly with your business goals and KPIs." },
        { icon: Shield, title: "Excellence", desc: "Good isn't enough. We strive for excellence in every line of code, every design pixel, and every interaction." }
    ];

    const leaders = [
        { name: "Matt Hogan", role: "CEO & Founder", desc: "With 15 years in tech leadership, Matt steers SRISAI's strategic vision.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "Priya Sharma", role: "Chief Technology Officer", desc: "Priya ensures our tech stack is cutting-edge and our security is impenetrable.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
        { name: "David Chen", role: "Head of Operations", desc: "David optimizes our workflows to deliver projects on time, every time.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-pink-50 to-white pt-32 pb-20">
                <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl opacity-90">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" className="rounded-2xl shadow-lg mt-8" alt="Team" />
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" className="rounded-2xl shadow-lg" alt="Team" />
                        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" className="rounded-2xl shadow-lg mt-4" alt="Team" />
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" className="rounded-2xl shadow-lg" alt="Team" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                        Engineering trust,<br />
                        <span className="text-secondary">building the future.</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        We started with a simple belief: software should solve problems, not create them. Today, we empower businesses worldwide with robust, scalable digital solutions.
                    </p>
                </div>
            </section>


            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office Meeting" className="rounded-3xl shadow-2xl" />

                    </div>
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-primary">Driven by Purpose</h2>
                        <p className="text-gray-500 leading-relaxed">
                            At SRISAI, we don't just write code—we build the digital backbone of modern enterprises. Our journey began in 2015 with a team of six members tired of "good enough" solutions. We realized that true digital transformation requires more than just technical skill. It requires a partnership built on transparency, relentless curiosity, and an unwavering commitment to quality.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 flex gap-4">
                                <div className="bg-orange-100 p-3 rounded-lg h-fit text-orange-600"><Target size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">Our Mission</h4>
                                    <p className="text-sm text-gray-600">Help teams ship business by software without trading off on speed or quality.</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg h-fit text-blue-600"><Eye size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">Our Vision</h4>
                                    <p className="text-sm text-gray-600">Become the trusted engineering partner for product teams across APAC and beyond.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">

                <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-900/30 blur-3xl"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold text-xs tracking-widest uppercase">OUR CORE VALUES</span>
                        <h2 className="text-4xl font-bold mt-4 text-white">The Pillars of Our Culture</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all hover:-translate-y-1">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6 ${i === 0 ? 'bg-orange-500' : i === 1 ? 'bg-blue-500' : i === 2 ? 'bg-green-500' : 'bg-purple-500'}`}>
                                    <v.icon size={24} />
                                </div>
                                <h3 className="text-white font-bold mb-3">{v.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary">Meet the Minds Behind SRISAI</h2>
                        <p className="text-gray-500 mt-4">A team of visionaries, engineers, and strategists committed to your digital success.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {leaders.map((leader, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                                <div className="mb-6 overflow-hidden rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <img src={leader.img} alt={leader.name} className="w-full h-64 object-cover object-top" />
                                </div>
                                <h3 className="text-xl font-bold text-primary">{leader.name}</h3>
                                <span className="text-secondary text-xs font-bold uppercase tracking-wider block mb-3">{leader.role}</span>
                                <p className="text-gray-500 text-sm leading-relaxed">{leader.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Ready to Build Something Extraordinary?</h2>
                    <p className="text-gray-300 mb-8">Join the hundreds of businesses that trust SRISAI for their critical software needs. Let's turn your vision into reality.</p>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact">
                            <Button className="bg-secondary text-white border-0">Schedule a Consultation</Button>
                        </Link>
                        <Link to="/showcases">
                            <Button variant="outline">View Our Portfolio</Button>
                        </Link>
                    </div>
                </div>
            </section>
            <br />

            <Footer />
        </div>
    );
};

export default About;
