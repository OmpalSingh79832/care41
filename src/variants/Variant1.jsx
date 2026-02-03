// import React, { useState, useEffect } from 'react';
// import Navbar from '../component/Navbar';
// import Footer from '../component/Footer';
// import {
//     FaUser, FaHandsHelping, FaCheckCircle, FaPhoneAlt,
//     FaChartLine, FaFileContract, FaMoneyCheckAlt, FaStar,
//     FaChevronRight, FaChevronLeft, FaEnvelope, FaShieldAlt, FaGlobe, FaHeadset, FaPlay
// } from 'react-icons/fa';

// const Variant1 = () => {
//     const [currentTestimonial, setCurrentTestimonial] = useState(0);
//     const [formData, setFormData] = useState({
//         name: '', email: '', phone: '', countryCode: '+91', message: ''
//     });

//     const countryCodes = [
//         { code: '+91', name: 'IN' }, { code: '+1', name: 'US' }, { code: '+44', name: 'UK' },
//         { code: '+61', name: 'AU' }, { code: '+971', name: 'UAE' }, { code: '+65', name: 'SG' },
//     ];

//     const testimonials = [
//         {
//             name: "Monica Chatterjee",
//             location: "Singapore",
//             image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
//             text: "Care41 has been exceptional in managing my parents' financial needs. Their local expertise in Mumbai gives me complete peace of mind while I'm abroad.",
//             rating: 5
//         },
//         {
//             name: "Nikhil Sharma",
//             location: "London, UK",
//             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
//             text: "Professional, transparent, and truly caring. They handled my father's estate planning with incredible sensitivity and attention to detail.",
//             rating: 5
//         },
//         {
//             name: "Priya Menon",
//             location: "New York, USA",
//             image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
//             text: "The best investment for my parents' wellbeing. The coordination and regular updates bridge the distance between continents.",
//             rating: 5
//         }
//     ];

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, []);

//     const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

//     return (
//         <div className="bg-white text-slate-800 font-sans">
//             <Navbar />

//             {/* Hero Section - Split Layout with Image */}
//             <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>

//                 <div className="container mx-auto px-6 relative z-10">
//                     <div className="grid lg:grid-cols-2 gap-16 items-center">
//                         {/* Left Content */}
//                         <div className="space-y-8">
//                             <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/10 rounded-full">
//                                 <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
//                                 <span className="text-blue-700 font-semibold text-sm">Trusted by 1,200+ NRI Families</span>
//                             </div>

//                             <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
//                                 Expert Care for Your
//                                 <span className="text-blue-600 block">Parents in Mumbai</span>
//                             </h1>

//                             <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
//                                 Professional on-ground coordination, financial planning, and estate management for NRI families. Be there for your parents, even from miles away.
//                             </p>

//                             <div className="flex flex-wrap gap-4">
//                                 <a href="#contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2">
//                                     Start Free Consultation <FaChevronRight size={14} />
//                                 </a>
//                                 <a href="#how" className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2">
//                                     <FaPlay size={12} /> Watch How It Works
//                                 </a>
//                             </div>

//                             {/* Trust Badges */}
//                             <div className="flex items-center gap-8 pt-8 border-t border-slate-100">
//                                 <div className="flex items-center gap-2">
//                                     <FaShieldAlt className="text-green-600" size={20} />
//                                     <span className="text-sm font-medium text-slate-600">100% Secure</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <FaGlobe className="text-blue-600" size={20} />
//                                     <span className="text-sm font-medium text-slate-600">Global NRI Support</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <FaHeadset className="text-purple-600" size={20} />
//                                     <span className="text-sm font-medium text-slate-600">24/7 Available</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right - Hero Image + Form Card */}
//                         <div className="relative">
//                             <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-10 blur-2xl"></div>

//                             {/* Background Image */}
//                             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
//                                     alt="Happy senior couple"
//                                     className="w-full h-[500px] object-cover"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

//                                 {/* Floating Form */}
//                                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                                     <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
//                                         <h3 className="text-lg font-bold text-slate-900 mb-4">Get Your Free Consultation</h3>
//                                         <form className="grid grid-cols-2 gap-3" id="contact">
//                                             <input
//                                                 className="col-span-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all"
//                                                 placeholder="Full Name"
//                                             />
//                                             <input
//                                                 className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none transition-all"
//                                                 placeholder="Email"
//                                             />
//                                             <input
//                                                 className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-600 outline-none transition-all"
//                                                 placeholder="Phone"
//                                             />
//                                             <button className="col-span-2 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
//                                                 Request Callback →
//                                             </button>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="py-16 bg-slate-900">
//                 <div className="container mx-auto px-6">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                         {[
//                             { value: "1,200+", label: "Families Helped" },
//                             { value: "98%", label: "Satisfaction Rate" },
//                             { value: "12+", label: "Years Experience" },
//                             { value: "₹500Cr+", label: "Assets Managed" },
//                         ].map((stat, i) => (
//                             <div key={i} className="text-center">
//                                 <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
//                                 <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section className="py-24 bg-white" id="services">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center max-w-3xl mx-auto mb-16">
//                         <div className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">What We Offer</div>
//                         <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Comprehensive Care Services</h2>
//                         <p className="text-xl text-slate-600">End-to-end solutions designed specifically for NRI families with aging parents in India.</p>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 icon: FaChartLine,
//                                 title: "Financial Planning",
//                                 desc: "Expert retirement planning, investment management, and income optimization for your parents.",
//                                 image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400"
//                             },
//                             {
//                                 icon: FaFileContract,
//                                 title: "Estate & Legal",
//                                 desc: "Will preparation, property documentation, and succession planning with verified legal partners.",
//                                 image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400"
//                             },
//                             {
//                                 icon: FaHandsHelping,
//                                 title: "Local Coordination",
//                                 desc: "On-ground support for healthcare, daily needs, and emergency situations in Mumbai.",
//                                 image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400"
//                             },
//                         ].map((service, i) => (
//                             <div key={i} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
//                                 <div className="h-48 overflow-hidden">
//                                     <img
//                                         src={service.image}
//                                         alt={service.title}
//                                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                                     />
//                                 </div>
//                                 <div className="p-8">
//                                     <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
//                                         <service.icon size={24} />
//                                     </div>
//                                     <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
//                                     <p className="text-slate-600 mb-6">{service.desc}</p>
//                                     <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
//                                         Learn More <FaChevronRight size={12} />
//                                     </a>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* How It Works */}
//             <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="how">
//                 <div className="container mx-auto px-6">
//                     <div className="grid lg:grid-cols-2 gap-16 items-center">
//                         <div>
//                             <div className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">Simple Process</div>
//                             <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">How Care41 Works</h2>

//                             <div className="space-y-8">
//                                 {[
//                                     { step: "01", title: "Schedule a Call", desc: "Book a free consultation with our senior care advisors at your convenience." },
//                                     { step: "02", title: "Get Your Plan", desc: "Receive a customized care and financial plan tailored to your family's needs." },
//                                     { step: "03", title: "We Execute", desc: "Our Mumbai team handles everything with regular updates and complete transparency." },
//                                 ].map((item, i) => (
//                                     <div key={i} className="flex gap-6 group">
//                                         <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shrink-0 group-hover:scale-110 transition-transform">
//                                             {item.step}
//                                         </div>
//                                         <div>
//                                             <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
//                                             <p className="text-slate-600">{item.desc}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="relative">
//                             <img
//                                 src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=800"
//                                 alt="Professional consultation"
//                                 className="rounded-3xl shadow-2xl"
//                             />
//                             <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
//                                 <div className="flex items-center gap-4">
//                                     <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
//                                         <FaCheckCircle className="text-white" size={24} />
//                                     </div>
//                                     <div>
//                                         <div className="text-2xl font-bold text-slate-900">99.8%</div>
//                                         <div className="text-sm text-slate-500">Success Rate</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials Slider */}
//             <section className="py-24 bg-slate-900" id="testimonials">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-16">
//                         <div className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-4">Testimonials</div>
//                         <h2 className="text-4xl lg:text-5xl font-bold text-white">What Our Clients Say</h2>
//                     </div>

//                     <div className="relative max-w-4xl mx-auto">
//                         {/* Slider */}
//                         <div className="overflow-hidden">
//                             <div
//                                 className="flex transition-transform duration-500 ease-out"
//                                 style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//                             >
//                                 {testimonials.map((t, i) => (
//                                     <div key={i} className="w-full flex-shrink-0 px-4">
//                                         <div className="bg-white rounded-3xl p-10 text-center">
//                                             <img
//                                                 src={t.image}
//                                                 alt={t.name}
//                                                 className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
//                                             />
//                                             <div className="flex justify-center gap-1 mb-6">
//                                                 {[...Array(t.rating)].map((_, j) => (
//                                                     <FaStar key={j} className="text-amber-400" size={20} />
//                                                 ))}
//                                             </div>
//                                             <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">"{t.text}"</p>
//                                             <div className="font-bold text-slate-900 text-lg">{t.name}</div>
//                                             <div className="text-slate-500">{t.location}</div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Navigation */}
//                         <button
//                             onClick={prevTestimonial}
//                             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-all"
//                         >
//                             <FaChevronLeft size={16} />
//                         </button>
//                         <button
//                             onClick={nextTestimonial}
//                             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-all"
//                         >
//                             <FaChevronRight size={16} />
//                         </button>

//                         {/* Dots */}
//                         <div className="flex justify-center gap-2 mt-8">
//                             {testimonials.map((_, i) => (
//                                 <button
//                                     key={i}
//                                     onClick={() => setCurrentTestimonial(i)}
//                                     className={`w-3 h-3 rounded-full transition-all ${i === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-white/30'
//                                         }`}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
//                 <div className="container mx-auto px-6 text-center">
//                     <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
//                     <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
//                         Join 1,200+ NRI families who trust Care41 with their parents' wellbeing.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <a href="#contact" className="px-10 py-5 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-lg">
//                             Book Free Consultation
//                         </a>
//                         <a href="tel:+919876543210" className="px-10 py-5 bg-transparent text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-lg">
//                             <FaPhoneAlt /> Call Us Now
//                         </a>
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// };

// export default Variant1;







import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import {
    FaChevronRight, FaChevronLeft, FaQuoteLeft, FaStar,
    FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
    FaShieldAlt, FaUsers, FaEye, FaHeartbeat, FaCalendarCheck,
    FaHeadset, FaCertificate, FaGlobe, FaLock, FaClipboardCheck,
    FaHandHoldingHeart, FaUserMd, FaBrain, FaHome, FaDumbbell,
    FaAppleAlt, FaVideo, FaChartLine, FaMobileAlt, FaClock,
    FaAward, FaRibbon, FaMedal, FaHeart, FaUserFriends,
    FaHandsHelping, FaUserCheck, FaHospital, FaPills,
    FaProcedures, FaStethoscope, FaTint, FaUtensils, FaMoneyCheckAlt, FaBuilding, FaPlay, FaArrowRight
} from 'react-icons/fa';
import { HiSparkles, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Variant1 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeService, setActiveService] = useState(0);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', countryCode: '+91', careNeeds: ''
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const statsRef = useRef(null);
    const [stats, setStats] = useState({ families: 0, caregivers: 0, cities: 0, satisfaction: 0 });
    const [hoveredFeature, setHoveredFeature] = useState(null);

    const countryCodes = [
        { code: '+91', name: 'India' }, { code: '+1', name: 'USA' }, { code: '+44', name: 'UK' },
        { code: '+61', name: 'Australia' }, { code: '+971', name: 'UAE' }, { code: '+65', name: 'Singapore' },
        { code: '+81', name: 'Japan' }, { code: '+49', name: 'Germany' }
    ];

    // Animated stats counter
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const interval = setInterval(() => {
                        setStats(prev => ({
                            families: prev.families < 1500 ? prev.families + 30 : 1500,
                            caregivers: prev.caregivers < 450 ? prev.caregivers + 15 : 450,
                            cities: prev.cities < 12 ? prev.cities + 1 : 12,
                            satisfaction: prev.satisfaction < 98 ? prev.satisfaction + 2 : 98
                        }));
                    }, 50);
                    setTimeout(() => clearInterval(interval), 2000);
                }
            },
            { threshold: 0.5 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            name: "Dr. Anjali Verma",
            role: "NRI Cardiologist - Boston",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
            text: "As a medical professional, I'm exceptionally particular about care standards. Care41 exceeded all expectations with their clinical expertise and compassionate approach towards my parents.",
            rating: 5
        },
        {
            name: "Rohan Mehta",
            role: "Tech Executive - Silicon Valley",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
            text: "The digital monitoring platform is revolutionary. I get real-time updates, medication tracking, and even video check-ins. It's like being there without being there.",
            rating: 5
        },
        {
            name: "Priya & Sameer Kapoor",
            role: "NRI Couple - London",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
            text: "Both sets of parents in Mumbai are under Care41's care. Their personalized attention to each parent's unique needs shows their commitment to excellence.",
            rating: 5
        }
    ];

    const services = [
        {
            title: "Clinical Geriatric Care",
            shortDesc: "Comprehensive medical management",
            description: "Board-certified geriatricians providing medication supervision, chronic disease care, and daily vital monitoring with specialist coordination.",
            icon: FaUserMd,
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
            features: ["Daily Vital Monitoring", "Medication Management", "Chronic Care Plan", "Doctor Coordination"]
        },
        {
            title: "Cognitive Wellness",
            shortDesc: "Memory & brain health programs",
            description: "Specialized interventions for dementia, Alzheimer's, and age-related cognitive decline with certified neurologist oversight and family counseling.",
            icon: FaBrain,
            image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600",
            features: ["Memory Exercises", "Cognitive Therapy", "Behavior Management", "Family Counseling"]
        },
        {
            title: "Lifestyle Support",
            shortDesc: "Holistic daily living assistance",
            description: "Premium lifestyle support encompassing nutrition planning, fitness routines, social engagement, and comprehensive daily activity management.",
            icon: FaHome,
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
            features: ["Nutrition Planning", "Mobility Exercises", "Social Activities", "Daily Routine Management"]
        },
        {
            title: "Emergency Response",
            shortDesc: "24/7 critical care support",
            description: "Immediate medical response team with hospital coordination and critical care management for any emergency situation, anytime.",
            icon: FaHeartbeat,
            image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80&w=600",
            features: ["Emergency Response", "Hospital Liaison", "Critical Care", "Family Notification"]
        }
    ];

    const processSteps = [
        {
            number: "01",
            title: "Discovery Call",
            description: "In-depth video consultation to understand health, lifestyle, and specific care requirements.",
            icon: FaPhoneAlt,
            duration: "30-45 mins"
        },
        {
            number: "02",
            title: "Custom Care Blueprint",
            description: "Our multidisciplinary team creates a personalized care strategy tailored to your family.",
            icon: FaClipboardCheck,
            duration: "24-48 hours"
        },
        {
            number: "03",
            title: "Caregiver Matching",
            description: "Matching with certified caregivers based on personality, skills, and specific needs.",
            icon: FaUserCheck,
            duration: "1-2 days"
        },
        {
            number: "04",
            title: "Care Activation",
            description: "Seamless care delivery begins with continuous monitoring and quality assessments.",
            icon: FaHeartbeat,
            duration: "Ongoing"
        }
    ];

    const carePackages = [
        {
            tier: "Essential",
            tagline: "For independent seniors",
            price: "₹45,000",
            period: "/month",
            features: [
                "Daily caregiver visits (4 hours)",
                "Basic health monitoring",
                "Medication reminders",
                "Weekly progress report",
                "Emergency response"
            ]
        },
        {
            tier: "Premium",
            tagline: "Most popular choice",
            price: "₹75,000",
            period: "/month",
            popular: true,
            features: [
                "Dedicated caregiver (8 hours)",
                "Comprehensive health tracking",
                "Nutrition planning",
                "Weekly doctor consultation",
                "Physical therapy sessions",
                "Monthly family conference"
            ]
        },
        {
            tier: "Platinum",
            tagline: "Complete luxury care",
            price: "₹1,20,000",
            period: "/month",
            features: [
                "24/7 live-in caregiver",
                "Full medical management",
                "Specialist consultations",
                "Cognitive therapy",
                "Luxury transportation",
                "Personal chef services",
                "Quarterly wellness retreat"
            ]
        }
    ];

    return (
        <div className="bg-white font-sans antialiased">
            <Navbar />

            {/* ========== HERO SECTION - Elegant Split Design ========== */}
            <section className="relative min-h-screen overflow-hidden">
                {/* Sophisticated Background - Blue Theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
                    {/* Animated Gradient Orbs */}
                    <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>

                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-28 pb-20">
                    <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
                        {/* Left Content - 7 columns */}
                        <div className="lg:col-span-7 space-y-8">
                            {/* Premium Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                                    <span className="text-blue-300 text-sm font-medium">Trusted by 1,500+ NRI Families</span>
                                </span>
                                <span className="text-white/30">|</span>
                                <span className="text-white/60 text-sm">Mumbai Exclusive</span>
                            </div>

                            {/* Main Headline */}
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                                    Compassionate
                                    <span className="block mt-2 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 bg-clip-text text-transparent">
                                        Senior Care
                                    </span>
                                    <span className="block text-white/90 text-4xl md:text-5xl lg:text-5xl font-medium mt-4">
                                        in Mumbai
                                    </span>
                                </h1>
                            </div>

                            {/* Subtitle */}
                            <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                                Premium on-ground care & monitoring for NRI families. Professional caregiving with complete remote visibility — your parents' wellbeing, our priority.
                            </p>

                            {/* Trust Indicators - Horizontal */}
                            <div className="flex flex-wrap gap-6 py-6 border-y border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <FaShieldAlt className="text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">Certified Professionals</div>
                                        <div className="text-white/50 text-xs">Background verified</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-400/20 rounded-lg flex items-center justify-center">
                                        <FaVideo className="text-blue-300" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">24/7 Monitoring</div>
                                        <div className="text-white/50 text-xs">Real-time updates</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                        <FaGlobe className="text-blue-200" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">Global Payments</div>
                                        <div className="text-white/50 text-xs">All currencies accepted</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons - Yellow for primary CTA */}
                            <div className="flex flex-wrap gap-4">
                                <a href="#contact" className="group relative px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/25 hover:-translate-y-0.5">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Schedule Free Assessment
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>
                                <a href="tel:+912234567890" className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-3">
                                    <FaPhoneAlt className="text-blue-300" />
                                    <span>+91 22 3456 7890</span>
                                </a>
                            </div>
                        </div>

                        {/* Right - Assessment Form - 5 columns */}
                        <div className="lg:col-span-5" id="contact">
                            <div className="relative">
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-500/20 rounded-3xl blur-xl"></div>

                                <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                                    {/* Form Header */}
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                                            <HiSparkles className="text-blue-500" />
                                            Free Consultation
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">Start Your Care Journey</h3>
                                        <p className="text-slate-500 mt-2 text-sm">Get a personalized care plan within 24 hours</p>
                                    </div>

                                    {isFormSubmitted ? (
                                        <div className="text-center py-8">
                                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <FaCheckCircle className="text-blue-600 text-4xl" />
                                            </div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h4>
                                            <p className="text-slate-600">Our senior care advisor will contact you within 2 hours.</p>
                                        </div>
                                    ) : (
                                        <form className="space-y-5">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                                                <input
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-800"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                                                <input
                                                    type="email"
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-800"
                                                    placeholder="your.email@domain.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                                                <div className="flex gap-2">
                                                    <select
                                                        className="w-24 px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-700 font-medium"
                                                        value={formData.countryCode}
                                                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                                    >
                                                        {countryCodes.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                                                    </select>
                                                    <input
                                                        className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none transition-all text-slate-800"
                                                        placeholder="Phone number"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Care Requirements</label>
                                                <textarea
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none text-slate-800"
                                                    rows="3"
                                                    placeholder="Brief description of care needs..."
                                                    value={formData.careNeeds}
                                                    onChange={(e) => setFormData({ ...formData, careNeeds: e.target.value })}
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setIsFormSubmitted(true)}
                                                className="w-full py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-0.5"
                                            >
                                                Request Free Assessment
                                            </button>
                                            <p className="text-center text-xs text-slate-400">
                                                <FaLock className="inline mr-1" /> Your information is secure and confidential
                                            </p>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-white/40 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* ========== STATS SECTION - Elegant Cards ========== */}
            <section ref={statsRef} className="py-16 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { value: stats.families, suffix: "+", label: "NRI Families Served", sublabel: "Across 25+ countries", icon: FaUsers },
                            { value: stats.caregivers, suffix: "+", label: "Certified Caregivers", sublabel: "Trained professionals", icon: FaUserCheck },
                            { value: stats.cities, suffix: "", label: "Mumbai Locations", sublabel: "Complete coverage", icon: FaMapMarkerAlt },
                            { value: stats.satisfaction, suffix: "%", label: "Client Satisfaction", sublabel: "Based on surveys", icon: FaStar }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-100 text-blue-600">
                                    <stat.icon className="text-xl" />
                                </div>
                                <div className="text-4xl font-bold text-slate-900 mb-1">
                                    {stat.value}<span className="text-blue-600">{stat.suffix}</span>
                                </div>
                                <div className="font-semibold text-slate-800">{stat.label}</div>
                                <div className="text-sm text-slate-500">{stat.sublabel}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== SERVICES - Interactive Showcase ========== */}
            <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="services">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <FaRibbon /> Our Services
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Comprehensive Care <span className="text-blue-600">Solutions</span>
                        </h2>
                        <p className="text-xl text-slate-600">
                            Tailored senior care services designed for the unique needs of NRI families
                        </p>
                    </div>

                    {/* Interactive Service Showcase */}
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Service Tabs - Left Side */}
                        <div className="lg:col-span-4 space-y-3">
                            {services.map((service, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveService(index)}
                                    className={`w-full text-left p-5 rounded-xl transition-all duration-300 group ${activeService === index
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                        : 'bg-white hover:bg-blue-50 text-slate-800 border border-slate-100'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeService === index
                                            ? 'bg-white/20'
                                            : 'bg-blue-100 group-hover:bg-blue-200'
                                            }`}>
                                            <service.icon className={`text-xl ${activeService === index ? 'text-white' : 'text-blue-600'
                                                }`} />
                                        </div>
                                        <div>
                                            <div className={`font-semibold ${activeService === index ? 'text-white' : 'text-slate-900'}`}>
                                                {service.title}
                                            </div>
                                            <div className={`text-sm ${activeService === index ? 'text-white/80' : 'text-slate-500'}`}>
                                                {service.shortDesc}
                                            </div>
                                        </div>
                                        <FaChevronRight className={`ml-auto transition-transform ${activeService === index ? 'text-white rotate-90' : 'text-slate-400'
                                            }`} />
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Service Detail - Right Side */}
                        <div className="lg:col-span-8">
                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                                {/* Image */}
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={services[activeService].image}
                                        alt={services[activeService].title}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <h3 className="text-2xl font-bold text-white mb-2">{services[activeService].title}</h3>
                                        <p className="text-white/80">{services[activeService].description}</p>
                                    </div>
                                </div>

                                {/* Features Grid */}
                                <div className="p-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        {services[activeService].features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl group hover:bg-blue-100 transition-colors">
                                                <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center group-hover:bg-blue-300 transition-colors">
                                                    <FaCheckCircle className="text-blue-700 text-sm" />
                                                </div>
                                                <span className="font-medium text-slate-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                                        Learn more about {services[activeService].title}
                                        <HiOutlineArrowNarrowRight className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PROCESS SECTION - Elegant Timeline ========== */}
            <section className="py-24 bg-blue-950 relative overflow-hidden" id="how">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/10">
                            <FaClipboardCheck /> How It Works
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Your Journey to <span className="text-blue-300">Peace of Mind</span>
                        </h2>
                        <p className="text-xl text-white/60">
                            A seamless, transparent process designed to get your parents the care they deserve
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="group relative">
                                {/* Connector Line */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent -translate-x-1/2 z-0"></div>
                                )}

                                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-500">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                        <step.icon className="text-blue-300 text-2xl" />
                                    </div>

                                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                                    <p className="text-white/60 mb-4 leading-relaxed">{step.description}</p>

                                    <div className="flex items-center gap-2 text-sm text-blue-300">
                                        <FaClock />
                                        <span>{step.duration}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FEATURES BENTO GRID ========== */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <HiSparkles /> Premium Technology
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Modern Care, <span className="text-blue-600">Smart Solutions</span>
                        </h2>
                        <p className="text-xl text-slate-600">
                            Cutting-edge technology meets compassionate care for complete peace of mind
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Large Feature Card */}
                        <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
                                alt="Virtual Consultations"
                                className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm mb-4">
                                    <FaVideo className="text-blue-300" /> HD Video
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-3">Virtual Consultations</h3>
                                <p className="text-white/80 text-lg max-w-md">
                                    Connect with geriatric specialists through HD video calls for remote diagnosis and consultations from anywhere in the world.
                                </p>
                            </div>
                        </div>

                        {/* Feature Cards */}
                        {[
                            {
                                image: "https://plus.unsplash.com/premium_photo-1661609727988-62d439bf2ce4?auto=format&fit=crop&q=80&w=400",
                                title: "Health Analytics",
                                desc: "AI-driven insights for proactive health management",
                                icon: FaChartLine
                            },
                            {
                                image: "https://plus.unsplash.com/premium_photo-1719839720683-72c8eb65b10a?auto=format&fit=crop&q=80&w=400",
                                title: "Care41 App",
                                desc: "Real-time updates and care coordination",
                                icon: FaMobileAlt
                            },
                            {
                                image: "https://images.unsplash.com/photo-1758691462848-31a39258dbd8?auto=format&fit=crop&q=80&w=400",
                                title: "24/7 Care Desk",
                                desc: "Round-the-clock multilingual support",
                                icon: FaHeadset
                            },
                            {
                                image: "https://media.istockphoto.com/id/2213501322/photo/health-professional-interacting-with-ai-interface-on-digital-tablet-for-patient-data-analysis.webp?a=1&b=1&s=612x612&w=0&k=20&c=3e4LEMyIlSi8lGKMhMMj_648amCwlsxH9b7zMKW1HQk=",
                                title: "Secure Platform",
                                desc: "Bank-level encryption for all data",
                                icon: FaLock
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-blue-50 border border-blue-100 hover:border-blue-200 transition-all duration-500 hover:shadow-xl"
                                onMouseEnter={() => setHoveredFeature(index)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-3 bg-blue-100 text-blue-700">
                                        <feature.icon /> {feature.title}
                                    </div>
                                    <p className="text-slate-600">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== TESTIMONIALS - Elegant Carousel ========== */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-white" id="testimonials">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <FaMedal /> Client Stories
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Trusted by <span className="text-blue-600">Global Families</span>
                        </h2>
                        <p className="text-xl text-slate-600">
                            Hear from NRI families who've experienced the Care41 difference
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 ${currentSlide === index ? 'ring-2 ring-blue-500 ring-offset-4' : ''
                                    }`}
                            >
                                {/* Quote Icon */}
                                <div className="absolute -top-4 left-8">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                                        <FaQuoteLeft className="text-white text-sm" />
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6 mt-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-slate-600 italic mb-8 leading-relaxed">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
                                    />
                                    <div>
                                        <div className="font-bold text-slate-900">{testimonial.name}</div>
                                        <div className="text-sm text-slate-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-10 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING SECTION ========== */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <FaMoneyCheckAlt /> Care Packages
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Flexible Plans for <span className="text-blue-600">Every Need</span>
                        </h2>
                        <p className="text-xl text-slate-600">
                            Choose the care package that best suits your family's requirements
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {carePackages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${pkg.popular
                                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white scale-105 shadow-xl shadow-blue-500/20'
                                    : 'bg-white border border-slate-200 hover:border-blue-200'
                                    }`}
                            >
                                {/* Popular Badge */}
                                {pkg.popular && (
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-yellow-400 text-blue-900 text-xs font-bold rounded-full">
                                            MOST POPULAR
                                        </span>
                                    </div>
                                )}

                                <div className="p-8">
                                    {/* Tier Name */}
                                    <div className={`text-sm font-semibold uppercase tracking-wider mb-2 ${pkg.popular ? 'text-white/80' : 'text-slate-500'
                                        }`}>
                                        {pkg.tier}
                                    </div>
                                    <div className={`text-sm mb-6 ${pkg.popular ? 'text-white/60' : 'text-slate-400'}`}>
                                        {pkg.tagline}
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-1 mb-8">
                                        <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                                            {pkg.price}
                                        </span>
                                        <span className={pkg.popular ? 'text-white/60' : 'text-slate-500'}>
                                            {pkg.period}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-4 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <FaCheckCircle className={`mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-white' : 'text-blue-500'
                                                    }`} />
                                                <span className={pkg.popular ? 'text-white/90' : 'text-slate-600'}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA - Yellow for all */}
                                    <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${pkg.popular
                                        ? 'bg-yellow-400 text-blue-900 hover:bg-yellow-300'
                                        : 'bg-yellow-400 text-blue-900 hover:bg-yellow-300'
                                        }`}>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Custom Plan Note */}
                    <div className="text-center mt-12">
                        <p className="text-slate-500">
                            Need a custom care plan? <a href="#contact" className="text-blue-600 font-semibold hover:underline">Contact us</a> for personalized solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========== NRI SECTION ========== */}
            <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '32px 32px'
                    }} className="w-full h-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-white/10">
                                <FaGlobe /> Designed for NRIs
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Bridging the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">Distance</span> Between You & Your Parents
                            </h2>

                            <p className="text-xl text-white/70 leading-relaxed">
                                Our services are specifically designed for NRI families whose parents live independently in Mumbai. We understand the challenges of caring from afar.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: FaEye, title: "Complete Visibility", desc: "Real-time updates, video calls, and transparent reporting" },
                                    { icon: FaHeadset, title: "Timezone Flexibility", desc: "24/7 support team available across all time zones" },
                                    { icon: FaMoneyCheckAlt, title: "Global Payments", desc: "Accept payments in USD, GBP, EUR, AUD, and more" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                            <item.icon className="text-blue-300 text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                                            <p className="text-white/60">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Image */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-3xl blur-xl"></div>
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src="https://media.istockphoto.com/id/1496655986/photo/happy-indian-adult-son-with-disabled-senior-mother-on-wheelchair-spending-time-by-talking-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=8wm8pBIW7xZeQmubcQfn0AixwJEwxG7Cbm0anm7AmWM="
                                    alt="Senior care in Mumbai"
                                    className="w-full rounded-2xl"
                                />
                                {/* Overlay Stats */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <div className="text-2xl font-bold text-white">Mumbai Only</div>
                                                <div className="text-white/60 text-sm">Localized premium service</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-white">25+ Countries</div>
                                                <div className="text-white/60 text-sm">NRI families served</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-8">
                            <FaAward /> Award-Winning Senior Care Service
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Give Your Parents the Care They Deserve
                        </h2>

                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Join 1,500+ NRI families who trust Care41 with their parents' wellbeing. Start your journey today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="#contact"
                                className="group px-10 py-5 bg-yellow-400 text-blue-900 font-bold rounded-xl shadow-2xl hover:bg-yellow-300 hover:shadow-yellow-400/20 transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1"
                            >
                                <span className="text-lg">Schedule Free Assessment</span>
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="tel:+912234567890"
                                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-3"
                            >
                                <FaPhoneAlt />
                                <span className="text-lg">+91 22 3456 7890</span>
                            </a>
                        </div>

                        <p className="mt-8 text-white/60 text-sm flex items-center justify-center gap-2">
                            <FaClock /> Response guaranteed within 2 hours
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Variant1;