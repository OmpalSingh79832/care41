// import React, { useState, useEffect } from 'react';
// import Navbar from '../component/Navbar';
// import Footer from '../component/Footer';
// import {
//     FaUser, FaHandsHelping, FaCheckCircle, FaPhoneAlt,
//     FaChartLine, FaFileContract, FaMoneyCheckAlt, FaStar,
//     FaChevronRight, FaChevronLeft, FaEnvelope, FaQuoteLeft, FaAward, FaUsers, FaGlobeAsia
// } from 'react-icons/fa';

// const Variant2 = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [formData, setFormData] = useState({
//         name: '', email: '', phone: '', countryCode: '+91', message: ''
//     });

//     const countryCodes = [
//         { code: '+91', name: 'IN' }, { code: '+1', name: 'US' }, { code: '+44', name: 'UK' },
//         { code: '+61', name: 'AU' }, { code: '+971', name: 'UAE' }, { code: '+65', name: 'SG' },
//     ];

//     const testimonials = [
//         {
//             name: "Rajesh Kapoor",
//             role: "NRI - California",
//             image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
//             text: "Care41's professionalism is unmatched. They've been managing my parents' affairs for 3 years with complete transparency and dedication."
//         },
//         {
//             name: "Sunita Agarwal",
//             role: "NRI - Dubai",
//             image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
//             text: "The peace of mind Care41 provides is priceless. Their local team in Mumbai is responsive, caring, and incredibly reliable."
//         },
//         {
//             name: "Vikram Mehta",
//             role: "NRI - Singapore",
//             image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
//             text: "From financial planning to daily coordination, Care41 handles everything. I can focus on my career knowing my parents are in safe hands."
//         }
//     ];

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//         }, 6000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div className="bg-[#faf9f7] text-slate-800 font-sans">
//             <Navbar />

//             {/* Premium Hero Section */}
//             <section className="relative min-h-screen flex items-center">
//                 {/* Background */}
//                 <div className="absolute inset-0">
//                     <img
//                         src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=2000"
//                         alt="Elegant background"
//                         className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
//                 </div>

//                 <div className="container mx-auto px-6 relative z-10 pt-20">
//                     <div className="grid lg:grid-cols-2 gap-20 items-center">
//                         <div className="space-y-8">
//                             <div className="inline-flex items-center gap-3 text-blue-600">
//                                 <FaAward size={20} />
//                                 <span className="text-sm font-semibold uppercase tracking-widest">Award-Winning Advisory</span>
//                             </div>

//                             <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
//                                 Premium Care
//                                 <span className="block text-blue-600 mt-2">For Your Parents</span>
//                             </h1>

//                             <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
//                                 Exclusive financial planning and on-ground coordination services for discerning NRI families across the globe.
//                             </p>

//                             <div className="flex flex-wrap gap-4 pt-4">
//                                 <a href="#consult" className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all flex items-center gap-2">
//                                     Schedule Consultation
//                                     <FaChevronRight className="group-hover:translate-x-1 transition-transform" size={14} />
//                                 </a>
//                                 <a href="#services" className="px-8 py-4 text-white font-semibold border border-white/20 rounded-lg hover:bg-white/10 transition-all">
//                                     Explore Services
//                                 </a>
//                             </div>

//                             {/* Stats Row */}
//                             <div className="flex gap-12 pt-10 border-t border-white/10">
//                                 <div>
//                                     <div className="text-4xl font-bold text-white">1,200+</div>
//                                     <div className="text-sm text-slate-400 mt-1">Families Served</div>
//                                 </div>
//                                 <div>
//                                     <div className="text-4xl font-bold text-white">15+</div>
//                                     <div className="text-sm text-slate-400 mt-1">Countries</div>
//                                 </div>
//                                 <div>
//                                     <div className="text-4xl font-bold text-white">99%</div>
//                                     <div className="text-sm text-slate-400 mt-1">Satisfaction</div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Consultation Form */}
//                         <div className="lg:ml-auto" id="consult">
//                             <div className="bg-white rounded-2xl p-10 shadow-2xl max-w-md">
//                                 <div className="text-center mb-8">
//                                     <h3 className="text-2xl font-bold text-slate-900">Request Consultation</h3>
//                                     <p className="text-slate-500 mt-2">A senior advisor will contact you within 24 hours</p>
//                                 </div>

//                                 <form className="space-y-5">
//                                     <div>
//                                         <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
//                                         <input
//                                             className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all"
//                                             placeholder="Enter your name"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
//                                         <input
//                                             type="email"
//                                             className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all"
//                                             placeholder="Your email"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
//                                         <div className="flex gap-2">
//                                             <select className="px-3 py-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold">
//                                                 {countryCodes.map(c => <option key={c.code}>{c.code}</option>)}
//                                             </select>
//                                             <input
//                                                 className="flex-1 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-400 outline-none transition-all"
//                                                 placeholder="Phone number"
//                                             />
//                                         </div>
//                                     </div>
//                                     <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all uppercase tracking-wider text-sm">
//                                         Submit Request
//                                     </button>
//                                 </form>

//                                 <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-500">
//                                     <FaCheckCircle className="text-green-500" />
//                                     <span>Your information is secure and confidential</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Trust Banner */}
//             <section className="py-8 bg-slate-900">
//                 <div className="container mx-auto px-6">
//                     <div className="flex flex-wrap items-center justify-center gap-12 text-white/60 text-sm font-medium uppercase tracking-widest">
//                         <span>Featured In:</span>
//                         <span className="text-white">The Economic Times</span>
//                         <span className="text-white">Forbes India</span>
//                         <span className="text-white">Business Today</span>
//                         <span className="text-white">Mint</span>
//                     </div>
//                 </div>
//             </section>

//             {/* About Section with Image */}
//             <section className="py-24 bg-white">
//                 <div className="container mx-auto px-6">
//                     <div className="grid lg:grid-cols-2 gap-20 items-center">
//                         <div className="relative">
//                             <img
//                                 src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800"
//                                 alt="Senior couple"
//                                 className="rounded-2xl shadow-xl"
//                             />
//                             {/* Floating Badge */}
//                             <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
//                                 <div className="text-4xl font-bold">12+</div>
//                                 <div className="text-sm font-semibold mt-1">Years of Trust</div>
//                             </div>
//                         </div>

//                         <div className="space-y-8">
//                             <div className="text-blue-600 font-bold text-sm uppercase tracking-widest">About Care41</div>
//                             <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
//                                 Bridging Distance with Dedicated Care
//                             </h2>
//                             <p className="text-lg text-slate-600 leading-relaxed">
//                                 Founded by NRIs who understood the challenges of caring for aging parents from abroad, Care41 provides comprehensive on-ground support in Mumbai. We combine financial expertise with genuine care to ensure your parents live with dignity and comfort.
//                             </p>

//                             <div className="grid grid-cols-2 gap-6 pt-4">
//                                 <div className="flex items-start gap-4">
//                                     <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600">
//                                         <FaUsers size={20} />
//                                     </div>
//                                     <div>
//                                         <div className="font-bold text-slate-900">Expert Team</div>
//                                         <div className="text-sm text-slate-500">25+ certified advisors</div>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start gap-4">
//                                     <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600">
//                                         <FaGlobeAsia size={20} />
//                                     </div>
//                                     <div>
//                                         <div className="font-bold text-slate-900">Global Reach</div>
//                                         <div className="text-sm text-slate-500">Clients in 15+ countries</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section className="py-24 bg-slate-50" id="services">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center max-w-3xl mx-auto mb-16">
//                         <div className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Our Services</div>
//                         <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Comprehensive Care Solutions</h2>
//                         <p className="text-xl text-slate-600">Tailored services designed to give you complete peace of mind about your parents' wellbeing.</p>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 icon: FaChartLine,
//                                 title: "Financial Advisory",
//                                 desc: "Strategic retirement planning, investment optimization, and income management for your parents.",
//                                 image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500"
//                             },
//                             {
//                                 icon: FaFileContract,
//                                 title: "Estate Planning",
//                                 desc: "Complete will preparation, property documentation, and seamless succession planning.",
//                                 image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=500"
//                             },
//                             {
//                                 icon: FaHandsHelping,
//                                 title: "Ground Coordination",
//                                 desc: "Personal care, healthcare liaison, and daily assistance through our Mumbai-based team.",
//                                 image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=500"
//                             },
//                         ].map((service, i) => (
//                             <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//                                 <div className="h-56 overflow-hidden relative">
//                                     <img
//                                         src={service.image}
//                                         alt={service.title}
//                                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
//                                     <div className="absolute bottom-4 left-4 w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white">
//                                         <service.icon size={24} />
//                                     </div>
//                                 </div>
//                                 <div className="p-8">
//                                     <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
//                                     <p className="text-slate-600 mb-6">{service.desc}</p>
//                                     <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-600 transition-colors">
//                                         Learn More <FaChevronRight size={12} />
//                                     </a>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials Slider */}
//             <section className="py-24 bg-slate-900 overflow-hidden" id="testimonials">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-16">
//                         <div className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Client Stories</div>
//                         <h2 className="text-4xl lg:text-5xl font-bold text-white">Trusted Worldwide</h2>
//                     </div>

//                     <div className="relative max-w-5xl mx-auto">
//                         {/* Testimonial Cards */}
//                         <div className="overflow-hidden rounded-3xl">
//                             <div
//                                 className="flex transition-transform duration-700 ease-out"
//                                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                             >
//                                 {testimonials.map((t, i) => (
//                                     <div key={i} className="w-full flex-shrink-0">
//                                         <div className="bg-white rounded-3xl p-12 mx-4">
//                                             <div className="flex flex-col md:flex-row items-center gap-10">
//                                                 {/* Image Side */}
//                                                 <div className="shrink-0">
//                                                     <img
//                                                         src={t.image}
//                                                         alt={t.name}
//                                                         className="w-32 h-32 rounded-2xl object-cover shadow-lg"
//                                                     />
//                                                 </div>

//                                                 {/* Content Side */}
//                                                 <div>
//                                                     <FaQuoteLeft className="text-blue-600/30 mb-4" size={40} />
//                                                     <p className="text-xl text-slate-700 italic leading-relaxed mb-6">"{t.text}"</p>
//                                                     <div className="flex items-center gap-2 mb-2">
//                                                         {[...Array(5)].map((_, j) => (
//                                                             <FaStar key={j} className="text-blue-600" size={16} />
//                                                         ))}
//                                                     </div>
//                                                     <div className="font-bold text-slate-900 text-lg">{t.name}</div>
//                                                     <div className="text-slate-500">{t.role}</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Navigation Arrows */}
//                         <button
//                             onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
//                             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-blue-600 rounded-full shadow-xl flex items-center justify-center text-white hover:bg-blue-500 transition-all"
//                         >
//                             <FaChevronLeft size={18} />
//                         </button>
//                         <button
//                             onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
//                             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-blue-600 rounded-full shadow-xl flex items-center justify-center text-white hover:bg-blue-500 transition-all"
//                         >
//                             <FaChevronRight size={18} />
//                         </button>

//                         {/* Dots */}
//                         <div className="flex justify-center gap-3 mt-10">
//                             {testimonials.map((_, i) => (
//                                 <button
//                                     key={i}
//                                     onClick={() => setCurrentSlide(i)}
//                                     className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-blue-600 w-10' : 'bg-white/30'
//                                         }`}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Premium CTA */}
//             <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-500">
//                 <div className="container mx-auto px-6">
//                     <div className="max-w-4xl mx-auto text-center">
//                         <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
//                             Begin Your Parents' Premium Care Journey
//                         </h2>
//                         <p className="text-xl text-slate-800/80 mb-10 max-w-2xl mx-auto">
//                             Join over 1,200 NRI families who have chosen Care41 for exceptional on-ground support in Mumbai.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <a href="#consult" className="px-10 py-5 bg-slate-900 text-white font-bold rounded-xl shadow-xl hover:bg-slate-800 transition-all text-lg">
//                                 Schedule Free Consultation
//                             </a>
//                             <a href="tel:+919876543210" className="px-10 py-5 bg-white/10 backdrop-blur text-white font-bold rounded-xl hover:bg-white/30 transition-all flex items-center justify-center gap-2 text-lg">
//                                 <FaPhoneAlt /> +91 98765 43210
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// };

// export default Variant2;



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
    FaProcedures, FaStethoscope, FaTint, FaUtensils, FaMoneyCheckAlt, FaBuilding
} from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';

const PremiumSeniorCarePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState('care');
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', countryCode: '+91', parentLocation: '', careNeeds: ''
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const statsRef = useRef(null);
    const [stats, setStats] = useState({ families: 0, caregivers: 0, cities: 0, satisfaction: 0 });

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
            category: "medical",
            title: "Clinical Geriatric Care",
            description: "Board-certified geriatricians providing comprehensive medical management, medication supervision, and chronic disease care.",
            icon: FaUserMd,
            features: ["Daily Vital Monitoring", "Medication Management", "Chronic Care Plan", "Doctor Coordination"]
        },
        {
            category: "cognitive",
            title: "Cognitive Wellness Program",
            description: "Specialized interventions for dementia, Alzheimer's, and age-related cognitive decline with certified neurologist oversight.",
            icon: FaBrain,
            features: ["Memory Exercises", "Cognitive Therapy", "Behavior Management", "Family Counseling"]
        },
        {
            category: "lifestyle",
            title: "Premium Lifestyle Support",
            description: "Holistic care encompassing nutrition, fitness, social engagement, and daily activity support for enhanced quality of life.",
            icon: FaHome,
            features: ["Nutrition Planning", "Mobility Exercises", "Social Activities", "Daily Routine Management"]
        },
        {
            category: "emergency",
            title: "24/7 Emergency Response",
            description: "Immediate medical response team, hospital coordination, and critical care management for any emergency situation.",
            icon: FaHeartbeat,
            features: ["Emergency Response", "Hospital Liaison", "Critical Care", "Family Notification"]
        }
    ];

    const processSteps = [
        {
            number: "01",
            title: "Comprehensive Assessment",
            description: "In-depth evaluation of health, lifestyle, and care requirements through video consultation.",
            duration: "2-3 hours"
        },
        {
            number: "02",
            title: "Custom Care Plan",
            description: "Personalized care strategy developed by our multidisciplinary team of experts.",
            duration: "24-48 hours"
        },
        {
            number: "03",
            title: "Caregiver Matching",
            description: "Matching with certified caregivers based on personality, skills, and specific needs.",
            duration: "1-2 days"
        },
        {
            number: "04",
            title: "Implementation & Monitoring",
            description: "Care delivery begins with continuous monitoring and regular quality assessments.",
            duration: "Ongoing"
        }
    ];


    const carePackages = [
        {
            tier: "Essential",
            price: "₹45,000",
            period: "/month",
            features: [
                "Daily caregiver visits (4 hours)",
                "Basic health monitoring",
                "Medication reminders",
                "Weekly progress report",
                "Emergency response"
            ],
            bestFor: "Independent seniors needing minimal support"
        },
        {
            tier: "Premium",
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
            ],
            bestFor: "Seniors requiring daily assistance & medical care"
        },
        {
            tier: "Platinum",
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
            ],
            bestFor: "Comprehensive care with luxury amenities"
        }
    ];

    return (
        <div className="bg-white font-sans">
            <Navbar />

            {/* Premium Hero Section with Video Background */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 relative z-10 pt-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            {/* Premium Badge */}
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-full shadow-xl">
                                <FaAward className="text-white" />
                                <span className="text-sm font-semibold uppercase tracking-widest">Premium Senior Care</span>
                            </div>

                            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                                    Senior Care
                                </span>
                                <span className="block text-5xl lg:text-6xl text-blue-300 mt-4">Redefined in Mumbai</span>
                            </h1>

                            <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                                Exclusive on-ground care & monitoring services for discerning NRI families. Professional caregiving with remote visibility for complete peace of mind.
                            </p>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-white font-medium">Trained & Certified Practitioners</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-white font-medium">24/7 Digital Monitoring</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-white font-medium">Global Payment Acceptance</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 pt-8">
                                <a href="#assessment" className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:scale-105">
                                    <span>Schedule Premium Assessment</span>
                                    <FaChevronRight className="group-hover:translate-x-2 transition-transform" />
                                </a>
                                <a href="tel:+912234567890" className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20">
                                    <span className="flex items-center gap-3">
                                        <FaPhoneAlt /> +91 22 3456 7890
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Premium Assessment Form */}
                        <div className="lg:ml-auto" id="assessment">
                            <div className="bg-white rounded-2xl p-10 shadow-2xl max-w-md border border-slate-200">
                                <div className="text-center mb-4">

                                    <h3 className="text-2xl font-bold text-slate-900">Premium Care Assessment</h3>
                                    <p className="text-slate-500 mt-2">Complete this form for a personalized care consultation</p>
                                </div>

                                {isFormSubmitted ? (
                                    <div className="text-center py-10">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <FaCheckCircle className="text-green-600 text-4xl" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h4>
                                        <p className="text-slate-600">Our senior care advisor will contact you within 2 hours.</p>
                                    </div>
                                ) : (
                                    <form className="space-y-6">
                                        <div className="space-y-1">
                                            <label className="block text-sm font-semibold text-slate-700">Your Full Name *</label>
                                            <input
                                                className="w-full px-5 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder-slate-400"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="block text-sm font-semibold text-slate-700">Email Address *</label>
                                            <input
                                                type="email"
                                                className="w-full px-5 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder-slate-400"
                                                placeholder="your.email@domain.com"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="block text-sm font-semibold text-slate-700">Phone Number *</label>
                                            <div className="flex gap-3">
                                                <select className="w-32 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl outline-none font-semibold">
                                                    {countryCodes.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                                                </select>
                                                <input
                                                    className="flex-1 px-5 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-500 outline-none transition-all placeholder-slate-400"
                                                    placeholder="Phone number"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="block text-sm font-semibold text-slate-700">Primary Care Needs</label>
                                            <textarea
                                                className="w-full px-5 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder-slate-400"
                                                placeholder="Describe the care requirements..."
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsFormSubmitted(true)}
                                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 uppercase tracking-wider text-sm shadow-lg hover:scale-[1.02]"
                                        >
                                            Request Premium Consultation
                                        </button>
                                    </form>
                                )}


                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="py-24 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl opacity-30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Trusted By <span className="text-blue-600">Global Indian Families</span>
                        </h2>
                        <p className="text-xl text-slate-600">Our commitment to excellence is reflected in our growing numbers</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Stat Card 1 - Families */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center relative">
                                        <FaUsers className="text-white text-3xl" />
                                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center">
                                            <FaGlobe className="text-blue-600 text-sm" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-5xl font-bold text-slate-900 mb-3 leading-none">
                                    {stats.families}<span className="text-blue-600">+</span>
                                </div>
                                <div className="text-lg font-semibold text-slate-800 mb-2">NRI Families Served</div>
                                <div className="text-sm text-slate-500">Across 25+ countries worldwide</div>
                            </div>
                        </div>

                        {/* Stat Card 2 - Caregivers */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-500 rounded-full flex items-center justify-center relative">
                                        <FaUserCheck className="text-white text-3xl" />
                                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full border-4 border-teal-100 flex items-center justify-center">
                                            <FaCertificate className="text-teal-600 text-sm" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-5xl font-bold text-slate-900 mb-3 leading-none">
                                    {stats.caregivers}<span className="text-teal-600">+</span>
                                </div>
                                <div className="text-lg font-semibold text-slate-800 mb-2">Certified Caregivers</div>
                                <div className="text-sm text-slate-500">Trained & background-verified professionals</div>
                            </div>
                        </div>

                        {/* Stat Card 3 - Cities */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center relative">
                                        <FaMapMarkerAlt className="text-white text-3xl" />
                                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full border-4 border-indigo-100 flex items-center justify-center">
                                            <FaBuilding className="text-indigo-600 text-sm" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-5xl font-bold text-slate-900 mb-3 leading-none">
                                    {stats.cities}
                                </div>
                                <div className="text-lg font-semibold text-slate-800 mb-2">Cities in Mumbai</div>
                                <div className="text-sm text-slate-500">Complete coverage across metropolitan area</div>
                            </div>
                        </div>

                        {/* Stat Card 4 - Satisfaction */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center relative">
                                        <FaStar className="text-white text-3xl" />
                                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full border-4 border-green-100 flex items-center justify-center">
                                            <FaHeart className="text-green-600 text-sm" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-5xl font-bold text-slate-900 mb-3 leading-none">
                                    {stats.satisfaction}<span className="text-green-600">%</span>
                                </div>
                                <div className="text-lg font-semibold text-slate-800 mb-2">Client Satisfaction</div>
                                <div className="text-sm text-slate-500">Based on quarterly client surveys</div>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-slate-200">
                        <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100">
                            <FaShieldAlt className="text-blue-600 text-xl" />
                            <span className="font-semibold text-slate-800">ISO 9001 Certified</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100">
                            <FaAward className="text-blue-600 text-xl" />
                            <span className="font-semibold text-slate-800">Healthcare Excellence Award</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100">
                            <FaRibbon className="text-blue-600 text-xl" />
                            <span className="font-semibold text-slate-800">Top Senior Care Provider 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Showcase */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-3 text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
                            <FaRibbon /> Premium Services
                        </div>
                        <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Senior Care Services</h2>
                        <p className="text-xl text-slate-600">Comprehensive care solutions designed for Mumbai's elite senior living</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 h-full">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <service.icon className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                    <p className="text-slate-600 mb-6">{service.description}</p>
                                    <div className="space-y-3">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                                <span className="text-sm text-slate-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-bold text-slate-900 mb-6">The Care41 Excellence Process</h2>
                        <p className="text-xl text-slate-600">Our meticulous approach ensures premium care delivery</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-teal-500 hidden lg:block"></div>

                        <div className="space-y-24">
                            {processSteps.map((step, index) => (
                                <div key={index} className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    {/* Step Content */}
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
                                                    <span className="text-white font-bold text-xl">{step.number}</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                                                    <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                                                        <FaClock size={12} /> {step.duration}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Timeline Node */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-600 rounded-full z-10 hidden lg:block"></div>

                                    {/* Step Number on Mobile */}
                                    <div className="lg:hidden w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">
                                        {step.number}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-bold text-slate-900 mb-6">Premium Features & Technology</h2>
                        <p className="text-xl text-slate-600">Innovative solutions for modern senior care management</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFZpcnR1YWwlMjBDb25zdWx0YXRpb25zJTIwaW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww",
                                title: "Virtual Consultations",
                                desc: "HD video calls with geriatric specialists for remote diagnosis and consultations",
                                icon: FaVideo
                            },
                            {
                                image: "https://plus.unsplash.com/premium_photo-1661609727988-62d439bf2ce4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVhbHRoJTIwQW5hbHl0aWNzfGVufDB8fDB8fHww",
                                title: "Health Analytics",
                                desc: "Advanced AI-driven analytics for real-time health monitoring and predictive insights",
                                icon: FaChartLine
                            },
                            {
                                image: "https://plus.unsplash.com/premium_photo-1719839720683-72c8eb65b10a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXBwfGVufDB8fDB8fHww",
                                title: "Care41 App",
                                desc: "Dedicated mobile application for updates, communication, and care coordination",
                                icon: FaMobileAlt
                            },
                            {
                                image: "https://images.unsplash.com/photo-1758691462848-31a39258dbd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9zcGl0YWwlMjBDYXJlJTIwRGVza3xlbnwwfHwwfHx8MA%3D%3D",
                                title: "24/7 Care Desk",
                                desc: "Round-the-clock multilingual support team availability for emergencies",
                                icon: FaClock
                            },
                            {
                                image: "https://plus.unsplash.com/premium_photo-1661745745478-bb3542627ebc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2VydGlmaWVkJTIwUHJvZmVzc2lvbmFscyUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D",
                                title: "Certified Professionals",
                                desc: "All caregivers undergo rigorous training, certification, and background verification",
                                icon: FaCertificate
                            },
                            {
                                image: "https://media.istockphoto.com/id/2214018014/photo/medical-health-cloud-data-concept-a-doctor-analyzing-with-a-tablet-and-laptop-accessing.webp?a=1&b=1&s=612x612&w=0&k=20&c=IfyBMKRuyBwsSzZ8NhWVxFyw93b3WIanAvAYcbtAOMI=",
                                title: "Secure Platform",
                                desc: "Bank-level security with end-to-end encryption for all medical and personal data",
                                icon: FaLock
                            }
                        ].map((feature, index) => (
                            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
                                {/* Image at the top */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                    {/* Icon overlay on image */}
                                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                        <feature.icon className="text-white text-xl" />
                                    </div>
                                </div>

                                {/* Content below image */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{feature.desc}</p>

                                    {/* Optional feature highlights */}
                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                        <FaCheckCircle className="text-green-500" />
                                        <span>Included in all premium plans</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Carousel */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-3 text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
                            <FaMedal /> Client Testimonials
                        </div>
                        <h2 className="text-5xl font-bold text-white mb-6">Trusted by Elite NRI Families</h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">Experience the Care41 difference through the voices of our global clientele</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all group">
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-xl object-cover"
                                    />
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                                        <p className="text-blue-200 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <FaQuoteLeft className="text-blue-400/30 text-3xl mb-6" />
                                <p className="text-white/90 italic mb-6">"{testimonial.text}"</p>
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial Navigation */}
                    <div className="flex justify-center gap-4 mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-400 w-10' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Care Packages */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-bold text-slate-900 mb-6">Premium Care Packages</h2>
                        <p className="text-xl text-slate-600">Tailored solutions for every need and budget</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {carePackages.map((pkg, index) => (
                            <div key={index} className={`relative rounded-2xl p-8 border-2 ${pkg.popular ? 'border-blue-600 shadow-2xl scale-105' : 'border-slate-200 shadow-lg'} hover:shadow-2xl transition-all`}>
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                                            MOST POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.tier}</h3>
                                    <div className="flex items-baseline justify-center gap-2">
                                        <span className="text-4xl font-bold text-slate-900">{pkg.price}</span>
                                        <span className="text-slate-500">{pkg.period}</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                            <span className="text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center mb-6">
                                    <div className="text-sm text-slate-500 mb-2">Best for</div>
                                    <div className="text-slate-700 font-medium">{pkg.bestFor}</div>
                                </div>

                                <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.popular
                                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:shadow-xl'
                                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                                    }`}>
                                    Select Package
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NRI Specific Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-teal-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-3 text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
                                <FaGlobe /> For NRI Families
                            </div>
                            <h2 className="text-5xl font-bold text-slate-900 mb-6">Designed for Global Indians</h2>
                            <p className="text-xl text-slate-600 mb-8">
                                This service is specifically crafted for NRIs whose parents live independently in Mumbai and require reliable, professional care and monitoring.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                        <FaEye className="text-blue-600 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Remote Visibility</h4>
                                        <p className="text-slate-600">Complete transparency into daily routines and health metrics</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                        <FaHeadset className="text-blue-600 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">24/7 Communication</h4>
                                        <p className="text-slate-600">Direct access to care team across time zones</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                        <FaMoneyCheckAlt className="text-blue-600 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Global Payments</h4>
                                        <p className="text-slate-600">Pay in your preferred currency from anywhere in the world</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://media.istockphoto.com/id/1460981801/photo/indian-female-nurse-or-medical-staff-helping-disabled-elderly-woman-patient-in-wheelchair-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=1oWSWsfDnm8cp17EddVeYZc5BBYbPySxTzg9-Q6jaLQ="
                                alt="NRI family with elderly parents"
                                className="rounded-2xl shadow-2xl"
                            />
                            {/* Floating Stats */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
                                <div className="text-3xl font-bold text-blue-600">Available</div>
                                <div className="text-lg font-semibold text-slate-900">Only in Mumbai</div>
                                <div className="text-sm text-slate-500 mt-1">Premium localized service</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8">
                            <FaAward /> Award-Winning Senior Care
                        </div>

                        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
                            Give Your Parents the Premium Care They Deserve
                        </h2>

                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                            Speak to a Care41 premium care advisor to understand the right support for your parents' unique needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="#assessment" className="group px-12 py-6 bg-white text-blue-600 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:scale-105">
                                <span className="text-lg">Talk to a Premium Care Advisor</span>
                                <FaChevronRight className="group-hover:translate-x-2 transition-transform" />
                            </a>
                            <a href="tel:+912234567890" className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/20 flex items-center gap-3">
                                <FaPhoneAlt /> +91 22 3456 7890
                            </a>
                        </div>

                        <p className="text-white/70 mt-8 text-sm">
                            <FaClock className="inline mr-2" /> Response guaranteed within 2 hours
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PremiumSeniorCarePage;