
import { Layers, Shield, Clock, Users, Database } from 'lucide-react';

const ClientSection = () => {
    const stats = [
        { value: "100+", label: "Projects Delivered", color: "text-secondary" },
        { value: "98%", label: "Client Retention", color: "text-secondary" },
        { value: "50+", label: "Employees Worldwide", color: "text-secondary" },
        { value: "24/7", label: "Live Active Support", color: "text-secondary" },
    ];

    const partners = [
        { name: "TechFlow", icon: Layers },
        { name: "Vertex", icon: Database },
        { name: "CloudBand", icon: Users },
        { name: "SecureNet", icon: Shield },
        { name: "FastTrack", icon: Clock },
        { name: "InnoSoft", icon: Layers },
    ];

    return (
        <section className="bg-white py-0">
            <div className="container mx-auto px-10 md:px-6">
                <div className="bg-gray-50 rounded-2xl p-8 mb-0">
                    <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Trusted by Industry Leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {partners.map((partner, idx) => (
                            <div key={idx} className="flex items-center gap-2 font-bold text-xl text-gray-700">
                                <partner.icon className="text-secondary" /> {partner.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary text-sm font-semibold">
                            OUR VALUES
                        </div>
                        <h2 className="text-4xl font-bold text-primary leading-tight">
                            Built on Trust.<br />
                            Delivered with <span className="text-secondary">Excellence.</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            History is written by those who build tomorrow. Every second, we help new companies and enterprises drive efficiency and our success.
                        </p>

                        <ul className="space-y-6 mt-8">
                            {[
                                "On-time delivery, every time",
                                "Scalable code for your pace",
                                "Visionary community & crew",
                                "Security & Compliance"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-primary font-medium">
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-secondary to-orange-400 flex items-center justify-center text-white text-xs shadow-md">
                                        ✓
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6">
                            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
                                See Our Story →
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                                <h3 className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>{stat.value}</h3>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientSection;
