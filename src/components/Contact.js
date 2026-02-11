import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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
                            <div className="flex flex-col items-center text-center p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                                <div className="p-4 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                                    <Mail size={24} />
                                </div>
                                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Email</h4>
                                <a href="mailto:mayanksuratiya84688@gmail.com" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                                    mayanksuratiya84688@gmail.com
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                                <div className="p-4 bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 rounded-full mb-4">
                                    <Phone size={24} />
                                </div>
                                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Phone</h4>
                                <a href="tel:+918527324066" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    +91 85273 24066
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full mb-4">
                                    <MapPin size={24} />
                                </div>
                                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Location</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Mayur Vihar phase III, Delhi
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                            <p className="text-lg text-slate-600 dark:text-slate-400 italic font-medium">
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
