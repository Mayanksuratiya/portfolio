import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const email = "mayanksuratiya84688@gmail.com";
    const phone = "+91 85273 24066";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 bg-transparent relative z-10 selection:bg-blue-500/20">
            {/* Ambient Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <MessageSquare size={14} /> Get In Touch
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                        Let's Build Something <br />
                        <span className="font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            Extraordinary Together
                        </span>
                    </h2>
                    <p className="text-perry-dim max-w-xl mx-auto text-base sm:text-lg font-light">
                        Open to full-time roles, high-impact contract work, and challenging mobile & web engineering projects.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Email Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-6 rounded-3xl bg-[#12161f]/80 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-blue-500/40 transition-all"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                <Mail size={22} />
                            </div>
                            <h4 className="font-semibold text-white text-lg mb-1">Direct Email</h4>
                            <p className="text-xs text-slate-400 mb-4">Reach out anytime for opportunities</p>
                            <p className="text-sm font-mono text-slate-200 break-all mb-4">{email}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <a
                                href={`mailto:${email}`}
                                className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20 transition-all"
                            >
                                <Send size={13} /> Send Email
                            </a>
                            <button
                                onClick={handleCopyEmail}
                                aria-label="Copy Email"
                                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
                            >
                                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                            </button>
                        </div>
                    </motion.div>

                    {/* Phone / WhatsApp Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-3xl bg-[#12161f]/80 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-violet-500/40 transition-all"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                                <Phone size={22} />
                            </div>
                            <h4 className="font-semibold text-white text-lg mb-1">Phone & WhatsApp</h4>
                            <p className="text-xs text-slate-400 mb-4">Quick calls & instant messaging</p>
                            <p className="text-sm font-mono text-slate-200 mb-4">{phone}</p>
                        </div>

                        <a
                            href={`tel:${phone.replace(/\s+/g, '')}`}
                            className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs flex items-center justify-center gap-1.5 border border-white/10 transition-all"
                        >
                            <Phone size={13} /> Call Direct
                        </a>
                    </motion.div>

                    {/* Location & Relocation Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-6 rounded-3xl bg-[#12161f]/80 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:border-emerald-500/40 transition-all"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                                <MapPin size={22} />
                            </div>
                            <h4 className="font-semibold text-white text-lg mb-1">Base Location</h4>
                            <p className="text-xs text-slate-400 mb-4">Available for remote & onsite</p>
                            <p className="text-sm text-slate-200 mb-4">Mayur Vihar Phase III, New Delhi, India</p>
                        </div>

                        <div className="py-2 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium text-center">
                            Open to Remote & Relocation
                        </div>
                    </motion.div>
                </div>

                {/* Quote Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-white/10 text-center backdrop-blur-md"
                >
                    <p className="text-base sm:text-lg text-slate-200 italic font-light max-w-2xl mx-auto">
                        "Focused on writing clean, scalable architecture, crafting buttery smooth micro-animations, and turning complex problems into elegant user experiences."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
