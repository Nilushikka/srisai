
import { Search, Calendar, ChevronRight } from 'lucide-react';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import Button from '../../components/ui/button';

const Blog = () => {
    const categories = ["All Posts", "Design", "Security", "Development", "Company News"];

    const featuredPost = {
        title: "The Future of Enterprise AI: A Practical Guide for CTOs",
        date: "Oct 24, 2026",
        readTime: "8 min read",
        description: "Essential strategies for implementing artificial intelligence in large-scale organizations without compromising security or scalability. We dive deep into the practical steps needed to adopt AI responsibly.",
        author: { name: "Tom Cook", role: "Director of Product", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
        image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        tag: "Featured"
    };

    const blogPosts = [
        {
            id: 1,
            title: "Why Trust Matters More Than Ever in Software Development",
            category: "Culture",
            date: "Dec 15, 2026",
            readTime: "5 min read",
            description: "Building lasting partnerships through transparency, reliability and consistent delivery in the core software...",
            author: { name: "Sarah Chen", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Security First: Protecting Your Digital Assets",
            category: "Security",
            date: "Dec 3, 2026",
            readTime: "4 min read",
            description: "Essential strategies for safeguarding your business in an increasingly connected world. Don't let your guard down.",
            author: { name: "Michael Rodriguez", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Maximizing ROI with Data-Driven Decisions",
            category: "Analytics",
            date: "Nov 30, 2026",
            readTime: "6 min read",
            description: "How to leverage your existing data infrastructure to make smarter, faster business moves that directly impact ROI...",
            author: { name: "Emily Watson", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Microservices vs Monolith: What to Choose?",
            category: "Development",
            date: "Nov 18, 2026",
            readTime: "10 min read",
            description: "A comprehensive breakdown of architectural patterns to help you decide the best path for your next big project...",
            author: { name: "David Park", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "The Future of Enterprise AI",
            category: "AI",
            date: "Dec 05, 2026",
            readTime: "3 min read",
            description: "How businesses are successfully implementing AI without the hype and empty promises.",
            author: { name: "Daniel Park", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Cloud Migration: A Step-by-Step Checklist",
            category: "Cloud",
            date: "Oct 28, 2026",
            readTime: "9 min read",
            description: "Planning a move to the cloud? Don't miss these critical steps to ensure a smooth transition with zero downtime.",
            author: { name: "Tom Cook", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />


            <div className="w-full pt-32 pb-32 text-white" style={{ backgroundColor: '#1A1A4E' }}>
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">The Latest from <span className="text-secondary">SRISAI</span></h1>
                    <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
                        Explore our latest thoughts on technology, innovation, and digital transformation.
                        Expert advice to help your business grow securely.
                    </p>

                    <div className="max-w-md mx-auto relative mb-12">
                        <input
                            type="text"
                            placeholder="Search by Name..."
                            className="w-full py-3 px-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat, i) => (
                            <button key={i} className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${i === 0 ? 'bg-secondary border-secondary text-white' : 'border-gray-500 text-gray-300 hover:border-white hover:text-white'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 -mt-20 pb-24 relative z-10">

                {/* Featured Post */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-16 grid lg:grid-cols-2 gap-8 items-center">
                    <div className="relative rounded-2xl overflow-hidden h-64 lg:h-96 w-full">
                        <img src={featuredPost.image} alt="Featured" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-gray-900/70 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-bold uppercase">Featured</div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
                            <span>•</span>
                            <span>{featuredPost.readTime}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-primary lg:pr-10">{featuredPost.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{featuredPost.description}</p>

                        <div className="flex items-center gap-4 pt-4">
                            <img src={featuredPost.author.img} alt={featuredPost.author.name} className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="text-sm font-bold text-primary">{featuredPost.author.name}</p>
                                <p className="text-xs text-gray-500">{featuredPost.author.role}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Post Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col">
                            <div className="relative h-56">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">{post.category}</div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <span className="text-orange-500 text-xs font-bold mb-2 block">{post.date}</span>
                                <h3 className="text-xl font-bold text-primary mb-3 hover:text-secondary transition-colors cursor-pointer">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">{post.description}</p>

                                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                                    <img src={post.author.img} alt={post.author.name} className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="text-xs font-bold text-primary">{post.author.name}</p>
                                        <p className="text-[10px] text-gray-500">{post.readTime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-16">
                    {[1, 2, 3].map((page) => (
                        <button key={page} className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${page === 1 ? 'bg-secondary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>
                            {page}
                        </button>
                    ))}
                    <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white text-gray-600 hover:bg-gray-100">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary text-white py-16 m-4 md:m-6 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary blur-[100px] opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-bold mb-2 text-white">Stay in the loop</h3>
                        <p className="text-gray-300">Get the latest insights on software development and digital transformation delivered straight to your inbox.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <input type="email" placeholder="Enter your email" className="px-6 py-3 rounded-lg text-gray-900 min-w-[300px] focus:outline-none" />
                        <Button variant="primary" className="bg-secondary hover:bg-orange-600 whitespace-nowrap">Subscribe</Button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;
