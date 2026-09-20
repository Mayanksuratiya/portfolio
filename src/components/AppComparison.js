import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Sparkles, 
    History, 
    Layers, 
    Zap, 
    ShieldCheck, 
    MapPin, 
    Search, 
    Star, 
    Heart, 
    Calendar, 
    Clock, 
    ChevronRight, 
    Activity, 
    CheckCircle2, 
    ArrowRight,
    Sliders,
    Eye
} from 'lucide-react';

const AppComparison = () => {
    const [viewMode, setViewMode] = useState('sideBySide'); // 'sideBySide' | 'splitSlider'
    const [sliderPos, setSliderPos] = useState(50);
    const [activeScreen, setActiveScreen] = useState('home'); // 'home' | 'details' | 'booking'

    // Comparison highlight badges
    const highlights = [
        { title: "Fluid 60 FPS UI", oldVal: "Legacy Views (Clunky)", newVal: "Nativewind + Reanimated 3", icon: <Zap className="text-amber-400" size={18} /> },
        { title: "User Retention", oldVal: "High drop-off on search", newVal: "+48% Task Completion Rate", icon: <Sparkles className="text-blue-400" size={18} /> },
        { title: "Design System", oldVal: "Hardcoded styles & colors", newVal: "Tokenized Dark/Light Glass UI", icon: <Layers className="text-violet-400" size={18} /> },
        { title: "State & Data", oldVal: "Prop drilling & lag", newVal: "Zustand & Cached Fast Queries", icon: <ShieldCheck className="text-emerald-400" size={18} /> }
    ];

    // ==========================================
    // OLD / LEGACY APP UI MOCKUP (2018 STYLE)
    // ==========================================
    const renderLegacyScreen = () => {
        if (activeScreen === 'home') {
            return (
                <div className="h-full bg-[#e8ecf2] text-slate-800 flex flex-col select-none text-[11px] font-sans">
                    {/* Old Status Bar */}
                    <div className="h-5 bg-[#3b5998] text-white flex items-center justify-between px-3 text-[10px] font-mono">
                        <span>9:41 AM</span>
                        <div className="flex items-center gap-1">
                            <span>3G</span>
                            <span>▮▮▯</span>
                        </div>
                    </div>

                    {/* Old App Header */}
                    <div className="bg-[#3b5998] p-3 text-white shadow-md">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-sm tracking-wide">PET CARE v1.2</span>
                            <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">LEGACY</span>
                        </div>
                        <div className="flex bg-white rounded text-slate-500 px-2 py-1 items-center gap-1 border border-slate-300">
                            <Search size={12} />
                            <span className="text-[10px]">Search clinics, doctors...</span>
                        </div>
                    </div>

                    {/* Old Content List */}
                    <div className="p-2 space-y-2 flex-1 overflow-y-auto no-scrollbar">
                        <div className="bg-yellow-100 border border-yellow-300 p-2 rounded text-[10px] text-yellow-900">
                            ⚠️ System announcement: Server maintenance on Sunday.
                        </div>

                        <div className="font-bold text-slate-700 text-[11px] px-1">Nearby Available Sitters</div>

                        {/* Old Cards */}
                        <div className="bg-white p-2.5 rounded border border-slate-300 shadow-sm space-y-1">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-900">Dr. Sharma Vet Clinic</span>
                                <span className="text-blue-700 font-bold">$25/hr</span>
                            </div>
                            <p className="text-slate-500 text-[10px]">Open 9am - 7pm • 2.4 km away</p>
                            <div className="flex gap-1 pt-1">
                                <span className="bg-slate-200 px-1.5 py-0.5 rounded text-[9px]">General</span>
                                <span className="bg-slate-200 px-1.5 py-0.5 rounded text-[9px]">Dogs</span>
                            </div>
                            <button className="w-full bg-[#3b5998] text-white py-1 rounded font-bold mt-1 text-[10px]">
                                Book Appointment (Form)
                            </button>
                        </div>

                        <div className="bg-white p-2.5 rounded border border-slate-300 shadow-sm space-y-1">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-900">Paws & Claws Care</span>
                                <span className="text-blue-700 font-bold">$18/hr</span>
                            </div>
                            <p className="text-slate-500 text-[10px]">Grooming and boarding service</p>
                            <button className="w-full bg-[#3b5998] text-white py-1 rounded font-bold mt-1 text-[10px]">
                                Contact Number
                            </button>
                        </div>
                    </div>

                    {/* Old Tab Bar */}
                    <div className="h-12 bg-white border-t border-slate-300 grid grid-cols-4 items-center text-center text-slate-500 text-[9px]">
                        <div className="text-[#3b5998] font-bold">Home</div>
                        <div>Search</div>
                        <div>History</div>
                        <div>Account</div>
                    </div>
                </div>
            );
        }

        if (activeScreen === 'details') {
            return (
                <div className="h-full bg-[#e8ecf2] text-slate-800 flex flex-col select-none text-[11px]">
                    <div className="h-5 bg-[#3b5998] text-white flex items-center justify-between px-3 text-[10px]">
                        <span>9:41 AM</span>
                        <span>100%</span>
                    </div>
                    <div className="bg-[#3b5998] p-3 text-white flex items-center gap-2">
                        <span>←</span>
                        <span className="font-bold text-xs">Pet Records (Static)</span>
                    </div>
                    <div className="p-3 space-y-3 flex-1 overflow-y-auto no-scrollbar">
                        <div className="bg-white p-3 border border-slate-300 rounded">
                            <div className="w-12 h-12 bg-slate-300 rounded mb-2 flex items-center justify-center font-bold text-slate-600">PHOTO</div>
                            <p className="font-bold">Bruno (Golden Retriever)</p>
                            <p className="text-slate-500 text-[10px]">Age: 3 Years | Weight: 28kg</p>
                        </div>
                        <div className="bg-white p-3 border border-slate-300 rounded space-y-2">
                            <p className="font-bold text-[10px]">Vaccination Table</p>
                            <div className="border border-slate-200 text-[9px]">
                                <div className="bg-slate-100 p-1 font-bold border-b border-slate-200">Rabies - Due Aug 2024</div>
                                <div className="p-1">DHPP - Done Jan 2024</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bg-white border-t border-slate-300">
                        <button className="w-full bg-slate-400 text-white py-1.5 rounded font-bold text-[10px]">
                            Download Raw PDF
                        </button>
                    </div>
                </div>
            );
        }

        // Booking screen legacy
        return (
            <div className="h-full bg-[#e8ecf2] text-slate-800 flex flex-col select-none text-[11px]">
                <div className="h-5 bg-[#3b5998] text-white flex items-center justify-between px-3 text-[10px]">
                    <span>9:41 AM</span>
                    <span>100%</span>
                </div>
                <div className="bg-[#3b5998] p-3 text-white font-bold">Booking Step 1/3</div>
                <div className="p-3 space-y-2 flex-1">
                    <label className="block text-[10px] font-bold">Select Date:</label>
                    <input type="text" value="2024-04-12" readOnly className="w-full bg-white border p-1 text-[10px] rounded" />
                    <label className="block text-[10px] font-bold">Select Time Slot:</label>
                    <select className="w-full bg-white border p-1 text-[10px] rounded">
                        <option>10:00 AM - 11:00 AM</option>
                    </select>
                    <div className="h-20 bg-slate-200 border rounded flex items-center justify-center text-slate-400 text-[10px]">
                        [Static Map Placeholder]
                    </div>
                </div>
                <div className="p-2 bg-white border-t">
                    <button className="w-full bg-[#3b5998] text-white py-1.5 rounded font-bold text-[10px]">Proceed to Form</button>
                </div>
            </div>
        );
    };

    // ==========================================
    // MODERN / REDESIGNED APP UI (2026 HIGH-TIER)
    // ==========================================
    const renderModernScreen = () => {
        if (activeScreen === 'home') {
            return (
                <div className="h-full bg-gradient-to-b from-[#0f172a] via-[#0b0f19] to-[#05070d] text-slate-100 flex flex-col select-none text-[11px] font-sans relative overflow-hidden">
                    {/* Modern Dynamic Island */}
                    <div className="pt-2 px-3 flex items-center justify-between z-30">
                        <span className="text-[10px] font-medium text-slate-400">9:41</span>
                        <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-1.5 border border-white/10 shadow-inner">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></div>
                            <span className="text-[8px] text-emerald-300 font-mono">Live Vet</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400 text-[10px]">
                            <span>5G</span>
                            <div className="w-4 h-2 border border-slate-400 rounded-sm p-0.5 flex items-center">
                                <div className="w-full h-full bg-emerald-400 rounded-2xs"></div>
                            </div>
                        </div>
                    </div>

                    {/* App Header */}
                    <div className="p-3 pt-2">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 p-0.5 shadow-lg shadow-blue-500/20">
                                    <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-xs font-bold text-white">
                                        🐶
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 text-[10px] text-slate-400">
                                        <MapPin size={10} className="text-blue-400" />
                                        <span>New Delhi, IN</span>
                                    </div>
                                    <h4 className="font-semibold text-xs text-white">Hey, Mayank 👋</h4>
                                </div>
                            </div>
                            <div className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[9px] font-medium flex items-center gap-1">
                                <Sparkles size={10} />
                                <span>PRO UI</span>
                            </div>
                        </div>

                        {/* Modern Glass Search */}
                        <div className="relative">
                            <Search size={12} className="absolute left-2.5 top-2.5 text-slate-400" />
                            <div className="w-full bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-xl py-1.5 pl-7 pr-3 text-[10px] text-slate-300 flex items-center justify-between shadow-inner">
                                <span>Find top certified vets & sitters...</span>
                                <span className="bg-white/10 px-1.5 py-0.5 rounded text-[8px] text-slate-400">⌘K</span>
                            </div>
                        </div>
                    </div>

                    {/* Stories / Quick Services */}
                    <div className="px-3 py-1 flex gap-2.5 overflow-x-auto no-scrollbar">
                        {[
                            { name: "24/7 Vet", icon: "🩺", active: true },
                            { name: "Grooming", icon: "✂️", active: false },
                            { name: "Walking", icon: "🦮", active: false },
                            { name: "AI Diet", icon: "🥗", active: false },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0">
                                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm transition-transform active:scale-95 ${
                                    item.active 
                                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md shadow-blue-500/30 ring-2 ring-blue-400/50' 
                                        : 'bg-white/5 border border-white/10'
                                }`}>
                                    {item.icon}
                                </div>
                                <span className="text-[9px] font-medium text-slate-300">{item.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Featured Dynamic Glass Card */}
                    <div className="p-3 space-y-2.5 flex-1 overflow-y-auto no-scrollbar">
                        <div className="relative rounded-2xl bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/10 border border-blue-500/30 p-3 shadow-xl backdrop-blur-md overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>
                            
                            <div className="flex items-center justify-between mb-1.5">
                                <span className="text-[9px] font-semibold uppercase tracking-wider text-blue-300 flex items-center gap-1">
                                    <Activity size={11} className="animate-pulse" /> Live Tele-Consult
                                </span>
                                <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                                    Available Now
                                </span>
                            </div>

                            <h5 className="font-semibold text-white text-xs mb-1">Instant Pet Diagnostic Call</h5>
                            <p className="text-[9px] text-slate-300 line-clamp-2 mb-2 leading-relaxed">
                                Connect with board-certified veterinary experts in under 60 seconds with live HD video.
                            </p>

                            <div className="flex items-center justify-between pt-1">
                                <div className="flex items-center gap-1 text-[9px] text-amber-300">
                                    <Star size={10} fill="currentColor" />
                                    <span className="font-bold">4.9</span>
                                    <span className="text-slate-400">(1.2k)</span>
                                </div>
                                <button className="bg-white text-slate-950 font-bold px-2.5 py-1 rounded-lg text-[9px] flex items-center gap-1 shadow-md shadow-white/10 active:scale-95 transition-transform">
                                    Connect <ChevronRight size={10} />
                                </button>
                            </div>
                        </div>

                        {/* Sitter Card */}
                        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2.5 backdrop-blur-md flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-sm shadow">
                                    🐕
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <h6 className="font-medium text-[11px] text-white">Elite Paws Hotel</h6>
                                        <CheckCircle2 size={10} className="text-blue-400" />
                                    </div>
                                    <p className="text-[9px] text-slate-400">4.9 ★ • 1.2km • Luxury Suites</p>
                                </div>
                            </div>
                            <span className="text-blue-400 font-bold text-[10px] bg-blue-500/10 px-2 py-1 rounded-lg border border-blue-500/20">
                                $28/d
                            </span>
                        </div>
                    </div>

                    {/* Floating Modern Dock Navigation */}
                    <div className="p-2 pt-0">
                        <div className="h-10 bg-slate-900/90 backdrop-blur-xl border border-white/15 rounded-2xl grid grid-cols-4 items-center px-2 shadow-2xl">
                            <div className="flex flex-col items-center gap-0.5 text-blue-400 font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                <span className="text-[8px] font-semibold">Home</span>
                            </div>
                            <div className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-slate-200">
                                <Calendar size={12} />
                                <span className="text-[8px]">Bookings</span>
                            </div>
                            <div className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-slate-200">
                                <Activity size={12} />
                                <span className="text-[8px]">Health</span>
                            </div>
                            <div className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-slate-200">
                                <Heart size={12} />
                                <span className="text-[8px]">Profile</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (activeScreen === 'details') {
            return (
                <div className="h-full bg-gradient-to-b from-[#0f172a] via-[#0b0f19] to-[#05070d] text-slate-100 flex flex-col select-none text-[11px] font-sans">
                    <div className="pt-2 px-3 flex items-center justify-between z-30">
                        <span className="text-[10px] font-medium text-slate-400">9:41</span>
                        <div className="w-16 h-3.5 bg-black rounded-full"></div>
                        <span className="text-[10px] text-emerald-400">100%</span>
                    </div>
                    <div className="p-3 flex items-center justify-between">
                        <div className="w-7 h-7 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-xs">←</div>
                        <span className="font-semibold text-xs text-white">Smart Pet Profile</span>
                        <div className="w-7 h-7 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-xs">⚙️</div>
                    </div>
                    <div className="p-3 space-y-2.5 flex-1 overflow-y-auto no-scrollbar">
                        {/* Pet Hero Profile */}
                        <div className="bg-gradient-to-br from-indigo-500/20 to-blue-600/10 border border-indigo-500/30 p-3 rounded-2xl flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg ring-2 ring-indigo-400/40">
                                🐕
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                                    Bruno <span className="text-[9px] bg-indigo-500/30 text-indigo-300 px-1.5 py-0.5 rounded-full">Active</span>
                                </h4>
                                <p className="text-slate-400 text-[9px]">Golden Retriever • 3 yrs • 28.4 kg</p>
                            </div>
                        </div>

                        {/* Metric Chips */}
                        <div className="grid grid-cols-3 gap-1.5 text-center">
                            <div className="bg-white/5 border border-white/10 p-2 rounded-xl">
                                <span className="text-slate-400 text-[8px] block">Heart Rate</span>
                                <span className="text-emerald-400 font-bold text-xs">88 bpm</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-2 rounded-xl">
                                <span className="text-slate-400 text-[8px] block">Daily Walk</span>
                                <span className="text-blue-400 font-bold text-xs">4.2 km</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-2 rounded-xl">
                                <span className="text-slate-400 text-[8px] block">Vaccine Due</span>
                                <span className="text-amber-400 font-bold text-xs">14 Days</span>
                            </div>
                        </div>

                        {/* Interactive Timeline */}
                        <div className="bg-white/[0.04] border border-white/10 p-3 rounded-2xl space-y-2">
                            <span className="text-[10px] font-semibold text-slate-300">Upcoming Schedule</span>
                            <div className="flex items-center justify-between p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                <div className="flex items-center gap-2">
                                    <Clock size={12} className="text-blue-400" />
                                    <div>
                                        <p className="font-medium text-[10px] text-white">Annual Health Checkup</p>
                                        <p className="text-[8px] text-slate-400">Dr. Sharma Clinic • 10:30 AM</p>
                                    </div>
                                </div>
                                <span className="text-[9px] text-blue-300 font-mono">Fri</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl font-semibold text-[10px] shadow-lg shadow-blue-500/25 flex items-center justify-center gap-1">
                            <span>Book New Consultation</span> <ArrowRight size={11} />
                        </button>
                    </div>
                </div>
            );
        }

        // Booking modern screen
        return (
            <div className="h-full bg-gradient-to-b from-[#0f172a] via-[#0b0f19] to-[#05070d] text-slate-100 flex flex-col select-none text-[11px] font-sans">
                <div className="pt-2 px-3 flex items-center justify-between z-30">
                    <span className="text-[10px] font-medium text-slate-400">9:41</span>
                    <div className="w-16 h-3.5 bg-black rounded-full"></div>
                    <span className="text-[10px] text-emerald-400">100%</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                    <div className="w-7 h-7 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-xs">←</div>
                    <span className="font-semibold text-xs text-white">Interactive Map Booking</span>
                    <div className="w-7 h-7 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs">📍</div>
                </div>
                <div className="p-3 space-y-2 flex-1 overflow-y-auto no-scrollbar">
                    {/* Simulated Modern Vector Map */}
                    <div className="h-28 rounded-2xl bg-[#131d33] border border-blue-500/30 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px]"></div>
                        <div className="relative flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs shadow-lg shadow-blue-500/50 animate-bounce">
                                📍
                            </div>
                            <span className="bg-slate-900/90 text-white text-[8px] px-2 py-0.5 rounded-full border border-white/10 mt-1 font-mono">
                                3 Vets within 2km
                            </span>
                        </div>
                    </div>

                    {/* Time Slot Selector */}
                    <div className="space-y-1">
                        <span className="text-[10px] font-semibold text-slate-300">Fast Booking Slots</span>
                        <div className="grid grid-cols-3 gap-1.5">
                            {["09:00 AM", "11:30 AM", "03:00 PM"].map((time, idx) => (
                                <button key={idx} className={`py-1.5 rounded-xl text-[9px] font-medium border ${
                                    idx === 0 
                                        ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30' 
                                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                                }`}>
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2 rounded-xl font-semibold text-[10px] shadow-lg shadow-emerald-500/25">
                        Confirm 1-Tap Booking ($25)
                    </button>
                </div>
            </div>
        );
    };

    return (
        <section id="app-comparison" className="py-24 bg-transparent relative z-10 selection:bg-blue-500/20">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-600/10 blur-[130px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Title & Controls */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-6 border-b border-white/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                            <Sparkles size={14} /> Featured Mobile Case Study
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                            Legacy vs. Modern <br />
                            <span className="font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                                Mobile App Redesign
                            </span>
                        </h2>
                        <p className="text-perry-dim max-w-xl text-base sm:text-lg mt-3 font-light">
                            Comparing the legacy, outdated mobile UI with the modernized React Native experience crafted with fluid 60 FPS animations and tokenized design systems.
                        </p>
                    </motion.div>

                    {/* Interactive Mode & Screen Switchers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                    >
                        {/* Screen Switcher */}
                        <div className="p-1 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center backdrop-blur-md">
                            <button
                                onClick={() => setActiveScreen('home')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                                    activeScreen === 'home'
                                        ? 'bg-white text-slate-950 font-semibold shadow'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                Home Feed
                            </button>
                            <button
                                onClick={() => setActiveScreen('details')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                                    activeScreen === 'details'
                                        ? 'bg-white text-slate-950 font-semibold shadow'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                Pet Health
                            </button>
                            <button
                                onClick={() => setActiveScreen('booking')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                                    activeScreen === 'booking'
                                        ? 'bg-white text-slate-950 font-semibold shadow'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                Booking Map
                            </button>
                        </div>

                        {/* View Mode Switcher */}
                        <div className="p-1 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center backdrop-blur-md">
                            <button
                                onClick={() => setViewMode('sideBySide')}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                                    viewMode === 'sideBySide'
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <Eye size={13} /> Side-by-Side
                            </button>
                            <button
                                onClick={() => setViewMode('splitSlider')}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                                    viewMode === 'splitSlider'
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <Sliders size={13} /> Split Wipe
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* SHOWCASE AREA */}
                <div className="relative">
                    {/* Mode 1: SIDE BY SIDE DUAL MOCKUPS */}
                    {viewMode === 'sideBySide' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center justify-items-center">
                            {/* Left Phone: Legacy UI */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="w-full max-w-[320px] sm:max-w-[340px] flex flex-col items-center"
                            >
                                {/* Tag */}
                                <div className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                                    <History size={14} /> BEFORE: Legacy App (Outdated UI)
                                </div>

                                {/* Phone Frame */}
                                <div className="phone-frame-legacy w-full aspect-[9/19.5] shadow-2xl relative">
                                    {/* Camera dot */}
                                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800 rounded-full z-30 border border-slate-600"></div>
                                    <div className="w-full h-full">
                                        {renderLegacyScreen()}
                                    </div>
                                </div>
                                <p className="text-xs text-slate-400 mt-4 text-center">
                                    Cluttered hierarchy, slow navigation & static forms
                                </p>
                            </motion.div>

                            {/* Right Phone: Modern Redesign UI */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="w-full max-w-[320px] sm:max-w-[340px] flex flex-col items-center"
                            >
                                {/* Tag */}
                                <div className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-lg shadow-emerald-500/10">
                                    <Sparkles size={14} /> AFTER: Redesigned React Native App
                                </div>

                                {/* Phone Frame */}
                                <div className="phone-frame w-full aspect-[9/19.5] shadow-2xl relative group">
                                    <div className="w-full h-full">
                                        {renderModernScreen()}
                                    </div>
                                </div>
                                <p className="text-xs text-emerald-400/90 mt-4 text-center font-medium">
                                    ✨ 60 FPS Nativewind + Reanimated, Glassmorphism & Tokenized UI
                                </p>
                            </motion.div>
                        </div>
                    )}

                    {/* Mode 2: INTERACTIVE SPLIT-SCREEN WIPE SLIDER */}
                    {viewMode === 'splitSlider' && (
                        <div className="flex flex-col items-center max-w-md mx-auto">
                            <div className="text-center mb-4">
                                <span className="text-xs text-slate-300 font-medium bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                    ↔ Drag the slider below to reveal the before & after transformation
                                </span>
                            </div>

                            {/* Phone Frame with Split Wipe */}
                            <div className="phone-frame w-full max-w-[340px] aspect-[9/19.5] shadow-2xl relative overflow-hidden">
                                {/* Base Layer: MODERN NEW APP (Right/Bottom) */}
                                <div className="absolute inset-0 w-full h-full">
                                    {renderModernScreen()}
                                </div>

                                {/* Top Layer: OLD LEGACY APP (Clipped by Slider Position) */}
                                <div
                                    className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                                    style={{ width: `${sliderPos}%` }}
                                >
                                    <div className="w-[340px] h-full">
                                        {renderLegacyScreen()}
                                    </div>
                                    {/* Old Tag Watermark */}
                                    <div className="absolute top-8 left-3 bg-red-600/90 text-white font-bold text-[8px] px-2 py-0.5 rounded shadow">
                                        LEGACY
                                    </div>
                                </div>

                                {/* New Tag Watermark */}
                                <div className="absolute top-8 right-3 bg-emerald-600/90 text-white font-bold text-[8px] px-2 py-0.5 rounded shadow">
                                    REDESIGNED
                                </div>

                                {/* Slider Divider Bar */}
                                <div 
                                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none"
                                    style={{ left: `${sliderPos}%` }}
                                >
                                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center text-[10px] font-bold shadow-xl border-2 border-blue-500">
                                        ↔
                                    </div>
                                </div>
                            </div>

                            {/* Range Controller */}
                            <div className="w-full max-w-xs mt-6 flex items-center gap-3">
                                <span className="text-[11px] font-mono text-red-400">Old</span>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={sliderPos}
                                    onChange={(e) => setSliderPos(Number(e.target.value))}
                                    className="comparison-slider w-full h-2 bg-white/10 rounded-lg appearance-none cursor-ew-resize accent-blue-500"
                                />
                                <span className="text-[11px] font-mono text-emerald-400">New</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Key Architectural & UI Metrics Matrix */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
                >
                    {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all hover:-translate-y-1 backdrop-blur-md group"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="font-semibold text-sm text-white">{item.title}</h4>
                            </div>
                            <div className="space-y-1.5 text-xs">
                                <div className="text-slate-400 line-through text-[11px]">
                                    {item.oldVal}
                                </div>
                                <div className="text-emerald-400 font-medium flex items-center gap-1">
                                    <CheckCircle2 size={12} /> {item.newVal}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AppComparison;
