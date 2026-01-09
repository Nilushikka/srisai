import React, { useState } from 'react';
import { ArrowLeft, Check, Plus, Minus, Phone, MessageSquare } from 'lucide-react';
import Button from '../../components/ui/button';
import { Link } from 'react-router-dom';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';

const ContactUs = () => {
    // FAQ Data
    const faqs = [
        { question: "What services Srisai provide?", answer: "Srisai provides a wide range of services including AI solutions, full-stack development, cloud computing services, e-commerce solutions, and digital marketing strategies tailored to your business needs." },
        { question: "What services Srisai provide?", answer: "We specialize in delivering custom software solutions, mobile app development, and enterprise resource planning systems. We help businesses optimize their workflow." },
        { question: "What services Srisai provide?", answer: "Our team offers expert consulting in IT infrastructure, cybersecurity assessments, and technology roadmap planning to ensure your business stays ahead." },
        { question: "What services Srisai provide?", answer: "We provide comprehensive data analytics, business intelligence dashboards, and machine learning model development to help you make data-driven decisions." },
        { question: "What services Srisai provide?", answer: "Srisai also offers dedicated support regarding legacy system modernization and cloud migration services, ensuring a smooth transition to modern technologies." },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-10">
                {/* Header  */}
                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Contact <span className="text-secondary">Us</span>
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        Please Choose the option that best fits your needs so we can connect you with the right team
                    </p>
                </div>


                <div className="container mx-auto px-4 mb-20">
                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                        <div className="bg-[#5c6ac4] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[250px] md:min-h-0">

                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <p className="text-sm opacity-90 leading-relaxed">
                                At SRISAI , We believe every great partnership begins with a conversation. Whether you're ready to start a project, have questions about our services or simply want to explore how we can help, our team is here to listen and respond
                            </p>
                        </div>


                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between min-h-[250px]">
                            <div>
                                <div className="text-secondary mb-4">
                                    <Phone size={24} className="text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Need Technical Support ?</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                    Our dedicated support team is ready to help you resolve technical issues, provides updates and ensure your digital platforms run smoothly with minimal downtime
                                </p>
                            </div>
                            <Button
                                variant="primary"
                                className="bg-secondary text-black hover:bg-text-90 border-none w-fit px-8 rounded-md text-sm"
                            >
                                Get Support
                            </Button>
                        </div>


                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between min-h-[250px]">
                            <div>
                                <div className="text-secondary mb-4">
                                    <div className="p-2 bg-red-50 rounded-full w-fit">
                                        <MessageSquare size={20} className="text-red-500" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Have a question? Let's talk</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                    From service details to partnership opportunities, We're always open to hearing from you. Drop us a message and we'll get back to you promptly
                                </p>
                            </div>
                            <Button
                                variant="primary"
                                className="bg-secondary hover:bg-orange-600 text-white w-fit px-8 rounded-md text-sm"
                                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Reach out
                            </Button>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto px-4 mb-8 max-w-6xl">
                    <Link to="/" className="inline-flex items-center gap-2 text-red-400 border border-red-200 bg-red-50/50 px-4 py-1.5 rounded-lg hover:bg-red-50 transition-all text-xs font-medium uppercase tracking-wide">
                        <ArrowLeft size={14} /> Back
                    </Link>
                </div>


                <div id="contact-form" className="container mx-auto px-4 mb-20">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Send us a Message</h2>
                        <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
                            Have a specific inquiry? Fill out the form below and our team will get back to you within 24 hours.
                        </p>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all bg-gray-50/50"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all bg-gray-50/50"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all bg-gray-50/50"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all bg-gray-50/50"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all bg-gray-50/50 resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <div className="pt-2 flex justify-center">
                                <Button className="w-full md:w-auto min-w-[200px] justify-center text-base py-3">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="bg-[#FFF5F5] py-20 mb-20">
                    <div className="container mx-auto px-4">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm max-w-6xl mx-auto flex flex-col md:flex-row gap-12 relative">

                            <div className="flex-1 z-10 py-4">
                                <h2 className="text-3xl md:text-4xl font-bold mb-1 leading-tight text-gray-900">
                                    Contact Schedule your Consultation with
                                </h2>
                                <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6 leading-tight">
                                    Srisai .
                                </h2>
                                <p className="text-gray-600 mb-8 max-w-lg text-sm md:text-base leading-relaxed">
                                    A focused 30 min call to unpack your goals and recommend a practical path forward across products.
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    <span className="bg-secondary text-white text-[10px] uppercase font-bold px-4 py-2 rounded-full tracking-wider">20 min session</span>
                                    <span className="bg-secondary text-white text-[10px] uppercase font-bold px-4 py-2 rounded-full tracking-wider">No Obligation</span>
                                    <span className="bg-secondary text-white text-[10px] uppercase font-bold px-4 py-2 rounded-full tracking-wider">Google Meet</span>
                                </div>

                                <p className="font-bold mb-4 text-gray-900">When you book a session with our team , you will:</p>

                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Receive a Personalized discussion of your business goal and challenges",
                                        "Explore tailored solution in AI, full-stack development, cloud , e-commerce and digital marketing",
                                        "Gain expert insights to optimize operations, enhance customer experience , and derive growth"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="min-w-[24px] h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 mt-0.5">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm text-gray-600 leading-relaxed font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 h-auto text-sm font-medium rounded-lg shadow-none">
                                    Book an Appointment
                                </Button>

                                <div className="mt-6 text-xs text-gray-500 font-medium">
                                    Prefer email? <a href="mailto:info@srisai.com" className="text-red-400 hover:underline">info@srisai.com</a>
                                </div>
                            </div>


                            <div className="flex-1 relative flex items-center justify-center min-h-[400px]">

                                <div className="absolute w-[100%] h-[80%] bg-[#1A1A4E] rounded-full translate-x-[0%] -translate-y-[10%] z-0"></div>


                                <div className="relative z-10 w-full max-w-sm aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                    <img
                                        src="/contact-consultation.png"
                                        alt="Professional Consultant"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 pb-24">
                    <h2 className="text-3xl font-bold text-center mb-16 text-black">FAQ</h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300">
                                <button
                                    className="w-full px-8 py-6 text-left flex items-center justify-between font-medium text-gray-900 hover:bg-gray-100"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="text-sm md:text-base">{faq.question}</span>
                                    <span className="text-red-300 bg-red-50 rounded-full p-1">
                                        {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <div className="px-8 pb-6 text-gray-500 text-sm leading-relaxed animate-in slide-in-from-top-1">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactUs;
