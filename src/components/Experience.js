import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "ZoodleApp",
            role: "React Native Developer",
            period: "2026 - Present",
            location: "New Delhi, India",
            badge: "Current Role",
            badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
            description: "Leading the core mobile app development for iOS & Android, delivering performant pet-care commerce and tele-vet consultations.",
            achievements: [
                "Built and scaled core cross-platform React Native features with Nativewind and TypeScript.",
                "Crafted fluid 60 FPS gesture-based interactions, smooth list virtualization, and offline caching.",
                "Integrated secure payment gateways, RESTful endpoints, and live video consulting sessions.",
                "Reduced app load times by 35% through bundle optimization and asset compression."
            ],
            links: [
                { label: "Website", url: "https://www.zoodleapp.com/en" },
                { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.zoodleapp&hl=en_IN" }
            ],
            accent: "from-blue-500/20 via-indigo-500/10 to-transparent"
        },
        {
            company: "Freelance Client Work",
            role: "Frontend & UI Developer",
            period: "2025 - December",
            location: "Remote",
            badge: "Freelance",
            badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/30",
            description: "Crafted tailored web applications, landing pages, and interactive UI components for diverse client requirements.",
            achievements: [
                "Engineered responsive React single-page applications with Tailwind CSS and Framer Motion.",
                "Built custom dashboards, interactive calculators, and media streaming proof-of-concepts.",
                "Collaborated closely with founders and designers to turn Figma prototypes into production code.",
                "Maintained 100% on-time delivery with zero critical post-release bugs."
            ],
            links: [],
            accent: "from-violet-500/20 via-purple-500/10 to-transparent"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-transparent relative z-10 selection:bg-blue-500/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Briefcase size={14} /> Career & Journey
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
                        Professional <span className="font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Experience</span>
                    </h2>
                    <p className="text-perry-dim max-w-2xl mx-auto text-base sm:text-lg font-light">
                        Hands-on track record building high-impact mobile and web products for real users.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="p-6 sm:p-8 rounded-3xl bg-[#12161f]/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all"
                        >
                            {/* Accent Glow */}
                            <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${exp.accent} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none rounded-full`}></div>

                            {/* Header details */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${exp.badgeColor}`}>
                                            {exp.badge}
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                                            <Calendar size={13} /> {exp.period}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                        {exp.role}
                                    </h3>
                                    <p className="text-base text-blue-400 font-medium mt-0.5 flex items-center gap-2">
                                        <span>{exp.company}</span>
                                        <span className="text-slate-500">•</span>
                                        <span className="text-xs text-slate-400 flex items-center gap-1 font-normal">
                                            <MapPin size={12} /> {exp.location}
                                        </span>
                                    </p>
                                </div>

                                {exp.links.length > 0 && (
                                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
                                        {exp.links.map((link, lIndex) => (
                                            <a
                                                key={lIndex}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 rounded-xl bg-blue-600/90 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/20 flex items-center gap-1.5"
                                            >
                                                <span>{link.label}</span>
                                                <ExternalLink size={13} />
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Role Overview */}
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                                {exp.description}
                            </p>

                            {/* Key Contributions */}
                            <div className="space-y-2.5">
                                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                    Key Accomplishments & Impact
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {exp.achievements.map((item, i) => (
                                        <div key={i} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
                                            <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
