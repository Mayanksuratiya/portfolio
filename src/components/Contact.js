import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-transparent relative overflow-hidden">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-perry-text to-perry-dim font-serif italic text-glow mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-perry-dim max-w-2xl mx-auto">
                        I'm always open to new opportunities and collaborations. Feel free to reach out!
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center text-center p-6 bg-transparent rounded-2xl border border-white/[0.1] hover:shadow-lg transition-shadow">
                                <div className="p-4 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                                    <Mail size={24} />
                                </div>
                                <h4 className="font-semibold text-perry-text mb-2">Email</h4>
                                <a href="mailto:mayanksuratiya84688@gmail.com" title="mayanksuratiya84688@gmail.com" className="text-sm text-perry-dim hover:text-perry-text transition-colors truncate w-full px-2 max-w-[200px]">
                                    mayanksuratiya84688@gmail.com
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center p-6 bg-transparent rounded-2xl border border-white/[0.1] hover:shadow-lg transition-shadow">
                                <div className="p-4 bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 rounded-full mb-4">
                                    <Phone size={24} />
                                </div>
                                <h4 className="font-semibold text-perry-text mb-2">Phone</h4>
                                <a href="tel:+918527324066" className="text-sm text-perry-dim hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    +91 85273 24066
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center p-6 bg-transparent rounded-2xl border border-white/[0.1] hover:shadow-lg transition-shadow">
                                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full mb-4">
                                    <MapPin size={24} />
                                </div>
                                <h4 className="font-semibold text-perry-text mb-2">Location</h4>
                                <p className="text-sm text-perry-dim">
                                    Mayur Vihar phase III, Delhi
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-transparent rounded-2xl border border-white/[0.1] text-center">
                            <p className="text-lg text-perry-dim italic font-medium">
                                "Passionate about writing clean, efficient code and continuously improving through practice and learning."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
