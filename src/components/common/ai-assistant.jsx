import React, { useState } from 'react';
import { MessageCircle, X, Send, MoreVertical, Smile, Facebook, Linkedin } from 'lucide-react';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">

            {isOpen && (
                <div className="bg-white rounded-2xl shadow-2xl w-[320px] sm:w-[380px] mb-4 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300 border border-gray-100">

                    <div className="bg-[#C10C0D] p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full p-1.5 overflow-hidden flex items-center justify-center">
                                <img src="/srisai-logo.png" alt="Srisai" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Srisai Assistant</h4>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="text-[10px] opacity-90">Online</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-white/10 rounded transition-colors"><MoreVertical size={18} /></button>
                            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded transition-colors"><X size={18} /></button>
                        </div>
                    </div>


                    <div className="h-[350px] overflow-y-auto p-4 bg-white flex flex-col gap-4">
                        <div className="max-w-[85%] bg-gray-50 p-4 rounded-2xl rounded-tl-none self-start border border-gray-100 shadow-sm">
                            <p className="text-sm text-gray-800 leading-relaxed">
                                Hi there! Thanks for reaching out to Srisai. How can I assist you today?
                            </p>
                            <span className="text-[10px] text-gray-400 mt-2 block">11:07 PM</span>
                        </div>
                    </div>


                    <div className="p-4 bg-white border-t border-gray-100 flex flex-col gap-3">
                        <div className="relative flex items-center border border-red-200 rounded-full px-4 py-2 focus-within:border-red-500 transition-all shadow-sm">
                            <button className="text-gray-400 p-1 hover:text-gray-600 transition-colors"><Smile size={20} /></button>
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-1 bg-transparent px-3 py-1 text-sm outline-none text-gray-700"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                <button className="bg-red-400/80 p-2 rounded-full text-white hover:bg-red-500 transition-colors shadow-sm">
                                    <Send size={16} className="translate-x-0.5" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <p className="text-[9px] text-gray-400 flex items-center gap-1 uppercase tracking-wider">
                                <span className="w-3 h-3 border border-gray-300 rounded-full flex items-center justify-center p-0.5">
                                    <div className="w-full h-full bg-blue-400/50 rounded-full animate-pulse"></div>
                                </span>
                                powered by srisai inc
                            </p>
                            <div className="flex items-center gap-3 text-gray-400">
                                <span className="text-[10px] font-medium">Follow us:</span>
                                <div className="flex gap-2">
                                    <Facebook size={12} className="text-blue-600 hover:scale-110 transition-transform cursor-pointer" />
                                    <Linkedin size={12} className="text-blue-700 hover:scale-110 transition-transform cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="group bg-secondary p-4 rounded-full shadow-2xl text-white hover:scale-110 active:scale-95 transition-all duration-300 relative"
                >
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></div>
                    <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
                </button>
            )}
        </div>
    );
};

export default AIAssistant;
