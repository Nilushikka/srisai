
import { ArrowRight } from 'lucide-react';
import Button from '../../components/ui/button';

const BlogSection = () => {
    const posts = [
        {
            title: "Why Trust Matters More Than Ever in Software Development",
            category: "Culture",
            date: "Dec 15, 2025",
            excerpt: "Building successful digital products requires more than just code; it requires a partnership based on trust...",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "The Future of Enterprise AI: Practical Goals",
            category: "AI",
            date: "Dec 5, 2025",
            excerpt: "How AI is reshaping business operations and what executives need to know to stay ahead...",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Security First: Protecting Your Digital Assets",
            category: "Security",
            date: "Nov 30, 2025",
            excerpt: "In an age of cyber threats, security isn't an afterthought. It's the foundation of everything we build...",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider text-sm uppercase">The Blog</span>
                    <h2 className="text-4xl font-bold text-primary mt-4">
                        The Latest from <span className="text-secondary">SRISAI</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {posts.map((post, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-gray-400 text-xs font-semibold uppercase">{post.date}</span>
                                <h3 className="text-xl font-bold text-primary mt-2 mb-3 leading-snug group-hover:text-secondary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <a href="#" className="inline-flex items-center justify-center text-primary font-bold text-sm hover:text-secondary transition-colors">
                                    Read Article <ArrowRight size={14} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Button variant="secondary" className="px-10">
                        View All Articles
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
