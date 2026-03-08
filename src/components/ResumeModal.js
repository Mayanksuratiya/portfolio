import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl h-[90vh] bg-[#151515] rounded-[32px] border border-white/10 overflow-hidden flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#1A1A1A]">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                    <FileText size={20} />
                                </div>
                                <h3 className="text-xl font-medium text-white tracking-tight">Mayank_Suratiya_Resume.pdf</h3>
                            </div>

                            <div className="flex items-center gap-4">
                                <a
                                    href="/resume.pdf"
                                    download="Mayank_Suratiya_Resume.pdf"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all group"
                                >
                                    <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                                    Download
                                </a>

                                <button
                                    onClick={onClose}
                                    className="p-2.5 rounded-full hover:bg-white/5 text-white/60 hover:text-white transition-colors border border-white/5"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 bg-[#101010] relative">
                            <iframe
                                src="/resume.pdf#toolbar=0"
                                className="w-full h-full border-none"
                                title="Resume PDF"
                            />

                            {/* Loading Overlay (Optional) */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 animate-pulse">
                                <p className="text-perry-dim">Loading Resume...</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
