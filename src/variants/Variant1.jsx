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



