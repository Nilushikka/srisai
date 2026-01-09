
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Amit Shen",
            role: "CTO, TechFlow",
            content: "SRISAI didn't just build our software — they revolutionized how we operate. Their team is exceptionally skilled and delivered beyond our expectations.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Michael Rodriguez",
            role: "Founder, StartUp Inc",
            content: "The best agency we’ve worked with. Professional, fast, and always accessible. They truly care about the product's success.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Emily Chen",
            role: "Director, Global Tech",
            content: "Finding a reliable technology partner is tough. SRISAI made it easy. Transparent and high-quality work throughout.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ];

    return (
        <section className="bg-blue-50/50 py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider text-sm uppercase">Success Stories</span>
                    <h2 className="text-4xl font-bold text-primary mt-4">
                        Don't Just Take Our Word For It
                    </h2>
                    <p className="text-gray-600 mt-4">Hear from the businesses we've helped transform.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                            <div className="flex gap-1 mb-6 text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 mb-8 flex-grow leading-relaxed italic">"{item.content}"</p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                                />
                                <div>
                                    <h4 className="font-bold text-primary text-sm">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
