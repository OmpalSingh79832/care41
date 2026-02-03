// import React, { useState } from 'react';
// import Navbar from '../component/Navbar';
// import Footer from '../component/Footer';
// import {
//     FaUser, FaHandsHelping, FaCheckCircle, FaPhoneAlt, FaCalendarAlt,
//     FaMapMarkerAlt, FaComments, FaChartLine, FaFileContract,
//     FaMoneyCheckAlt, FaStar, FaChevronRight, FaQuoteLeft, FaEnvelope, FaEdit
// } from 'react-icons/fa';

// const Stat = ({ value, label }) => (
//     <div className="group text-center p-6 transition-all duration-300">
//         <div className="text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{value}</div>
//         <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</div>
//     </div>
// );

// const FeatureCard = ({ icon: Icon, title, desc }) => (
//     <div className="relative overflow-hidden bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
//         <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 group-hover:bg-blue-100/50 transition-colors"></div>
//         <div className="w-14 h-14 rounded-2xl bg-slate-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
//             <Icon size={24} />
//         </div>
//         <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{title}</h4>
//         <p className="text-slate-600 leading-relaxed">{desc}</p>
//         <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
//             Learn more <FaChevronRight className="ml-2" size={12} />
//         </div>
//     </div>
// );

// const Quote = ({ children, author }) => (
//     <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative">
//         <div className="text-blue-100 absolute top-6 right-8">
//             <FaQuoteLeft size={40} />
//         </div>
//         <div className="flex mb-4 text-amber-400">
//             {[...Array(5)].map((_, i) => <FaStar key={i} size={14} className="mr-1" />)}
//         </div>
//         <p className="text-slate-700 leading-relaxed mb-6 relative z-10 italic">“{children}”</p>
//         <div className="flex items-center">
//             <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold mr-3 border border-slate-200">
//                 {author.charAt(0)}
//             </div>
//             <div className="text-sm font-bold text-slate-900">{author}</div>
//         </div>
//     </div>
// );

// const Variant0 = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         countryCode: '+91',
//         message: ''
//     });

//     const countryCodes = [
//         { code: '+91', name: 'IN' },
//         { code: '+1', name: 'US' },
//         { code: '+44', name: 'UK' },
//         { code: '+61', name: 'AU' },
//         { code: '+971', name: 'UAE' },
//         { code: '+65', name: 'SG' },
//         { code: '+1', name: 'CA' },
//     ];

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//     };

//     return (
//         <div className="bg-white text-slate-900 min-h-screen selection:bg-blue-100">
//             <Navbar />

//             {/* Hero */}
//             <section className="relative pt-32 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
//                 {/* Background Blobs */}
//                 <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
//                 <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

//                 <div className="container mx-auto px-6 relative z-10">
//                     <div className="grid lg:grid-cols-12 gap-16 items-center">
//                         <div className="lg:col-span-7">
//                             <div className="max-w-3xl">
//                                 <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-100">
//                                     <span className="relative flex h-2 w-2 mr-3">
//                                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                                         <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
//                                     </span>
//                                     Available in Mumbai
//                                 </div>
//                                 <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight text-slate-900">
//                                     Care41 — Financial & <span className="text-blue-600">Estate Planning</span> for NRIs
//                                 </h1>
//                                 <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
//                                     Expert on-ground coordination in Mumbai so you can make confident financial decisions for aging parents — even from abroad.
//                                 </p>

//                                 <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
//                                     <a href="#contact" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-slate-800 hover:-translate-y-1 transition-all active:scale-95 text-lg">
//                                         Talk to an advisor
//                                     </a>
//                                     <a href="#book" className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all text-lg">
//                                         Book a free consult
//                                     </a>
//                                 </div>

//                                 <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
//                                     <div className="flex items-center text-slate-600 font-medium"><FaCheckCircle className="mr-3 text-blue-500" /> Advisory-first</div>
//                                     <div className="flex items-center text-slate-600 font-medium"><FaHandsHelping className="mr-3 text-blue-500" /> Local coordination</div>
//                                     <div className="flex items-center text-slate-600 font-medium"><FaUser className="mr-3 text-blue-500" /> Transparent fees</div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="lg:col-span-5">
//                             <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-100/50 p-8 lg:p-10 border border-slate-100 relative">
//                                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-3xl -rotate-12 -z-10 opacity-20 hidden md:block"></div>
//                                 <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 rounded-2xl rotate-12 -z-10 opacity-20 hidden md:block"></div>

//                                 <h3 className="text-2xl font-bold mb-2 text-slate-900">Start with a free consult</h3>
//                                 <p className="text-slate-500 mb-8 text-sm">Schedule a call with our care experts today.</p>

//                                 <form className="space-y-5" onSubmit={handleSubmit}>
//                                     <div className="relative group">
//                                         <label className="block text-[11px] font-black text-slate-500 uppercase mb-2 ml-1 tracking-wider">
//                                             Full Name
//                                         </label>
//                                         <div className="relative">
//                                             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
//                                                 <FaUser size={14} />
//                                             </div>
//                                             <input
//                                                 className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 rounded-2xl pl-11 pr-4 py-3.5 transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
//                                                 placeholder="Enter your full name"
//                                                 value={formData.name}
//                                                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                                 required
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="relative group">
//                                         <label className="block text-[11px] font-black text-slate-500 uppercase mb-2 ml-1 tracking-wider">
//                                             Email Address
//                                         </label>
//                                         <div className="relative">
//                                             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
//                                                 <FaEnvelope size={14} />
//                                             </div>
//                                             <input
//                                                 type="email"
//                                                 className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 rounded-2xl pl-11 pr-4 py-3.5 transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
//                                                 placeholder="Your email address"
//                                                 value={formData.email}
//                                                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                                 required
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="relative group">
//                                         <label className="block text-[11px] font-black text-slate-500 uppercase mb-2 ml-1 tracking-wider">
//                                             Phone Number
//                                         </label>
//                                         <div className="flex gap-3">
//                                             <div className="relative shrink-0">
//                                                 <select
//                                                     className="appearance-none bg-slate-50/50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-2xl pl-4 pr-10 py-3.5 outline-none text-sm font-bold text-slate-700 transition-all cursor-pointer"
//                                                     value={formData.countryCode}
//                                                     onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
//                                                 >
//                                                     {countryCodes.map((c) => (
//                                                         <option key={c.code + c.name} value={c.code}>{c.name} {c.code}</option>
//                                                     ))}
//                                                 </select>
//                                                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
//                                                     <FaChevronRight className="rotate-90" size={10} />
//                                                 </div>
//                                             </div>
//                                             <div className="relative flex-1">
//                                                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
//                                                     <FaPhoneAlt size={14} />
//                                                 </div>
//                                                 <input
//                                                     className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 rounded-2xl pl-11 pr-4 py-3.5 transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
//                                                     placeholder="98765 43210"
//                                                     value={formData.phone}
//                                                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                                                     required
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="relative group">
//                                         <label className="block text-[11px] font-black text-slate-500 uppercase mb-2 ml-1 tracking-wider">
//                                             How can we help?
//                                         </label>
//                                         <div className="relative">
//                                             <div className="absolute top-4 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
//                                                 <FaEdit size={14} />
//                                             </div>
//                                             <textarea
//                                                 className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 rounded-2xl pl-11 pr-4 py-3.5 transition-all outline-none h-24 resize-none text-slate-900 placeholder:text-slate-400 font-medium"
//                                                 placeholder="Briefly describe your requirements..."
//                                                 value={formData.message}
//                                                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                             ></textarea>
//                                         </div>
//                                     </div>

//                                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-4.5 rounded-2xl font-black shadow-xl shadow-blue-600/20 transition-all transform active:scale-[0.98] mt-2 flex items-center justify-center text-base tracking-wide uppercase">
//                                         Request callback <FaChevronRight className="ml-2" size={14} />
//                                     </button>
//                                 </form>
//                                 <div className="mt-6 flex items-center justify-center space-x-2 text-[11px] text-slate-400 font-medium uppercase tracking-widest">
//                                     <FaCheckCircle className="text-green-500" />
//                                     <span>No spam. We respect your privacy.</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Trust Section with Image */}
//             <section className="container mx-auto px-6 mb-32">
//                 <div className="bg-slate-50 rounded-[50px] overflow-hidden border border-slate-100">
//                     <div className="grid lg:grid-cols-2 items-center">
//                         <div className="p-12 lg:p-20">
//                             <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Trusted Care</h3>
//                             <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
//                                 Why Mumbai families trust Care41
//                             </h2>
//                             <div className="space-y-8">
//                                 <div className="flex items-start">
//                                     <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mr-4 shrink-0 border border-slate-100">
//                                         <FaStar size={20} />
//                                     </div>
//                                     <div>
//                                         <h4 className="font-bold text-lg mb-1 text-slate-900">Decades of Local Expertise</h4>
//                                         <p className="text-slate-600 leading-relaxed">Our deep roots in Mumbai's financial and legal landscape ensure you get the best possible guidance.</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start">
//                                     <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mr-4 shrink-0 border border-slate-100">
//                                         <FaComments size={20} />
//                                     </div>
//                                     <div>
//                                         <h4 className="font-bold text-lg mb-1 text-slate-900">Personalized Coordination</h4>
//                                         <p className="text-slate-600 leading-relaxed">Regular updates and direct access to your dedicated advisor, bridge the distance between you and your parents.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="h-full min-h-[400px] relative">
//                             <img
//                                 src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=2070"
//                                 alt="Senior couple smiling"
//                                 className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
//                             />
//                             <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             <main className="container mx-auto px-6 py-20">
//                 {/* Stats */}
//                 <section className="mb-32 bg-slate-50 rounded-[40px] border border-slate-100">
//                     <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
//                         <Stat value="+1,200" label="Families supported" />
//                         <Stat value="98%" label="Client satisfaction" />
//                         <Stat value="10+ yrs" label="Local experience" />
//                     </div>
//                 </section>

//                 {/* Features */}
//                 <section className="mb-32" id="services">
//                     <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//                         <div className="max-w-xl">
//                             <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h3>
//                             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Premium services tailored for your family.</h2>
//                         </div>
//                         <a className="inline-flex items-center text-blue-600 font-bold hover:translate-x-1 transition-transform" href="#services">
//                             Explore all services <FaChevronRight className="ml-2" size={12} />
//                         </a>
//                     </div>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <FeatureCard
//                             icon={FaChartLine}
//                             title="Retirement roadmaps"
//                             desc="Tailored retirement income plans for long-term stability and peace of mind for your loved ones."
//                         />
//                         <FeatureCard
//                             icon={FaFileContract}
//                             title="Estate & wills"
//                             desc="Secure succession planning with verified legal partners to ensure your family's future is protected."
//                         />
//                         <FeatureCard
//                             icon={FaMoneyCheckAlt}
//                             title="Tax & compliance"
//                             desc="NRI-aware tax support with experienced accountants navigating complex cross-border regulations."
//                         />
//                     </div>
//                 </section>

//                 {/* Process */}
//                 <section className="mb-32 bg-slate-900 rounded-[50px] p-12 lg:p-20 relative overflow-hidden" id="how">
//                     <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
//                     <div className="relative z-10">
//                         <div className="max-w-2xl mb-16">
//                             <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Seamless Experience</h3>
//                             <h2 className="text-4xl font-extrabold text-white mb-6">How CARE41 works</h2>
//                             <p className="text-slate-400 text-lg">We've simplified the process to give you complete visibility and control, no matter where you are in the world.</p>
//                         </div>
//                         <div className="grid md:grid-cols-3 gap-12 relative">
//                             {/* Connector line for desktop */}
//                             <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-slate-800 -z-10"></div>

//                             {[
//                                 { step: "1", title: "Tell us", desc: "Share details and concerns with our senior care experts through a video call or secure platform." },
//                                 { step: "2", title: "Plan", desc: "We create a clear, actionable plan tailored to your family's specific financial and legal requirements." },
//                                 { step: "3", title: "Coordinate", desc: "On-ground execution in Mumbai with regular updates and transparent reporting back to you." }
//                             ].map((item, idx) => (
//                                 <div key={idx} className="space-y-6">
//                                     <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-white text-2xl font-black shadow-xl ring-1 ring-blue-500/20">
//                                         {item.step}
//                                     </div>
//                                     <h4 className="text-xl font-bold text-white">{item.title}</h4>
//                                     <p className="text-slate-400 leading-relaxed">{item.desc}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Testimonials */}
//                 <section className="mb-32" id="testimonials">
//                     <div className="text-center max-w-2xl mx-auto mb-16">
//                         <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Success Stories</h3>
//                         <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Trusted by families globally.</h2>
//                     </div>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <Quote author="Monica C.">CARE41 made managing my parents from abroad stress-free and reliable. Their attention to detail is remarkable.</Quote>
//                         <Quote author="Nikhil S.">Professional, compassionate, and transparent. They handled my father's estate planning with incredible sensitivity.</Quote>
//                         <Quote author="Ankit R.">A trusted partner for our family's needs. The local coordination in Mumbai is a lifesaver for NRI families.</Quote>
//                     </div>
//                 </section>

//                 {/* CTA */}
//                 <section className="mb-32 rounded-[40px] p-12 lg:p-16 bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl shadow-blue-200 relative overflow-hidden group">
//                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
//                     <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 blur-xl"></div>

//                     <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
//                         <div className="text-center lg:text-left max-w-xl">
//                             <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Get clarity. Reduce uncertainty.</h4>
//                             <p className="text-blue-100 text-lg opacity-90 leading-relaxed">Book a free consult with our advisors to start planning today. Most families get complete clarity in just one 30-minute session.</p>
//                         </div>
//                         <div className="flex flex-col sm:flex-row gap-4 shrink-0">
//                             <a href="#book" className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all active:scale-95 text-xl">
//                                 Book free consult
//                             </a>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="text-sm text-slate-400 max-w-4xl mx-auto text-center leading-relaxed">
//                     <p>Care41 is a facilitation & coordination service, not a hospital or law firm. Financial, legal, or tax advice is provided by certified partners. Service availability may vary by city.</p>
//                     <div className="flex items-center justify-center space-x-4 mt-6 grayscale opacity-50">
//                         <div className="h-6 w-24 bg-slate-200 rounded animate-pulse"></div>
//                         <div className="h-6 w-24 bg-slate-200 rounded animate-pulse"></div>
//                         <div className="h-6 w-24 bg-slate-200 rounded animate-pulse"></div>
//                     </div>
//                 </section>

//             </main>

//             <Footer />
//         </div>
//     );
// };

// export default Variant0;






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
    FaProcedures, FaStethoscope, FaTint, FaUtensils, FaMoneyCheckAlt, FaBuilding, FaPlay, FaArrowRight, FaCheck, FaLongArrowAltRight
} from 'react-icons/fa';
import { HiSparkles, HiOutlineArrowNarrowRight, HiArrowRight } from 'react-icons/hi';

const Variant0 = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', countryCode: '+91', careNeeds: ''
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [animatedStats, setAnimatedStats] = useState({ families: 0, caregivers: 0, satisfaction: 0, countries: 0 });
    const statsRef = useRef(null);

    const countryCodes = [
        { code: '+91', name: 'India' }, { code: '+1', name: 'USA' }, { code: '+44', name: 'UK' },
        { code: '+61', name: 'Australia' }, { code: '+971', name: 'UAE' }, { code: '+65', name: 'Singapore' }
    ];

    // Animate stats on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const timer = setInterval(() => {
                        setAnimatedStats(prev => ({
                            families: prev.families < 1500 ? prev.families + 50 : 1500,
                            caregivers: prev.caregivers < 450 ? prev.caregivers + 15 : 450,
                            satisfaction: prev.satisfaction < 98 ? prev.satisfaction + 3 : 98,
                            countries: prev.countries < 25 ? prev.countries + 1 : 25
                        }));
                    }, 40);
                    setTimeout(() => clearInterval(timer), 1500);
                }
            },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const testimonials = [
        {
            name: "Kavita Sharma",
            role: "Software Engineer - San Francisco",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
            text: "Care41 transformed how I care for my parents from thousands of miles away. The daily video updates and health reports give me incredible peace of mind.",
            rating: 5
        },
        {
            name: "Arjun Patel",
            role: "Investment Banker - Singapore",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
            text: "The professionalism and attention to detail is unmatched. My mother's quality of life has improved dramatically since we started with Care41.",
            rating: 5
        },
        {
            name: "Meera & Raj Krishnan",
            role: "NRI Family - Dubai",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
            text: "Having both our parents under Care41's care has been the best decision. Their personalized approach makes all the difference.",
            rating: 5
        }
    ];

    const services = [
        {
            title: "Medical Care Management",
            icon: FaStethoscope,
            description: "Complete health oversight with certified geriatricians, medication management, and specialist coordination.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
            highlights: ["Daily health check-ups", "Medicine dispensing", "Doctor appointments", "Emergency protocols"]
        },
        {
            title: "Cognitive & Mental Wellness",
            icon: FaBrain,
            description: "Specialized programs for memory care, dementia support, and mental health with expert neurologist guidance.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600",
            highlights: ["Memory exercises", "Cognitive therapy", "Emotional support", "Activity scheduling"]
        },
        {
            title: "Daily Living Assistance",
            icon: FaHome,
            description: "Comprehensive support for nutrition, mobility, personal care, and engaging social activities.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600",
            highlights: ["Meal preparation", "Mobility support", "Personal hygiene", "Companionship"]
        },
        {
            title: "24/7 Emergency Support",
            icon: FaHeartbeat,
            description: "Round-the-clock emergency response team with immediate hospital coordination and family alerts.",
            image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=600",
            highlights: ["Instant response", "Hospital liaison", "Family notification", "Critical care"]
        }
    ];

    const carePackages = [
        {
            name: "Starter",
            subtitle: "For semi-independent seniors",
            price: "₹45,000",
            features: ["4-hour daily care", "Basic health monitoring", "Weekly reports", "Emergency support", "Medication reminders"],
            recommended: false
        },
        {
            name: "Professional",
            subtitle: "Most chosen by families",
            price: "₹75,000",
            features: ["8-hour dedicated care", "Full health tracking", "Daily video updates", "Weekly doctor visits", "Nutrition planning", "Physical therapy"],
            recommended: true
        },
        {
            name: "Elite",
            subtitle: "Premium 24/7 care",
            price: "₹1,20,000",
            features: ["24/7 live-in caregiver", "Complete medical mgmt", "Specialist access", "Luxury transport", "Personal chef", "Wellness retreats"],
            recommended: false
        }
    ];

    const processSteps = [
        { step: "01", title: "Free Consultation", desc: "30-min video call to understand your family's unique needs", icon: FaVideo },
        { step: "02", title: "Custom Care Plan", desc: "Personalized strategy designed by our expert team", icon: FaClipboardCheck },
        { step: "03", title: "Caregiver Match", desc: "Hand-picked professional matched to your parent's personality", icon: FaUserCheck },
        { step: "04", title: "Care Begins", desc: "Seamless onboarding with continuous quality monitoring", icon: FaHeart }
    ];

    return (
        <div className="bg-white font-sans antialiased overflow-x-hidden">
            <Navbar />

            {/* ========== HERO - Full Width Image Background ========== */}
            <section className="relative min-h-screen flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1920"
                        alt="Senior care"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-950/60"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 relative z-10 py-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Text Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 rounded-full">
                                <FaStar className="text-yellow-400" />
                                <span className="text-yellow-300 text-sm font-semibold">Rated #1 Senior Care in Mumbai</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.05]">
                                Premium Care for
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mt-2">
                                    Your Parents
                                </span>
                            </h1>

                            <p className="text-xl text-blue-100/80 max-w-lg leading-relaxed">
                                Mumbai's most trusted senior care service for NRI families. Professional caregiving with complete transparency and real-time updates.
                            </p>

                            {/* Quick Stats */}
                            <div className="flex gap-8 py-6">
                                <div className="text-center">
                                    <div className="text-4xl font-black text-white">1,500+</div>
                                    <div className="text-blue-200/60 text-sm">Families Served</div>
                                </div>
                                <div className="w-px bg-white/20"></div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-white">98%</div>
                                    <div className="text-blue-200/60 text-sm">Satisfaction</div>
                                </div>
                                <div className="w-px bg-white/20"></div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-white">24/7</div>
                                    <div className="text-blue-200/60 text-sm">Support</div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a href="#contact" className="group px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/30 flex items-center gap-3">
                                    Get Free Assessment
                                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="tel:+912234567890" className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all flex items-center gap-3">
                                    <FaPhoneAlt />
                                    +91 22 3456 7890
                                </a>
                            </div>
                        </div>

                        {/* Right - Floating Contact Card */}
                        <div className="relative hidden lg:block">
                            <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/20 to-blue-400/20 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl" id="contact">
                                <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
                                    <FaHeadset className="text-blue-900 text-2xl -rotate-12" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Free Consultation</h3>
                                <p className="text-slate-500 mb-6 text-sm">Get personalized care recommendations within 24 hours</p>

                                {isFormSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <FaCheck className="text-white text-3xl" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900">Thank You!</h4>
                                        <p className="text-slate-500 mt-2">We'll call you within 2 hours.</p>
                                    </div>
                                ) : (
                                    <form className="space-y-4">
                                        <input
                                            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium"
                                            placeholder="Your Full Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                        <input
                                            type="email"
                                            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                        <div className="flex gap-3">
                                            <select
                                                className="w-28 px-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none font-bold text-slate-700"
                                                value={formData.countryCode}
                                                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                            >
                                                {countryCodes.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                                            </select>
                                            <input
                                                className="flex-1 px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-blue-500 outline-none transition-all font-medium"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsFormSubmitted(true)}
                                            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
                                        >
                                            Request Callback →
                                        </button>
                                        <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                                            <FaLock /> 100% Confidential
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" className="w-full">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* ========== TRUSTED BY SECTION ========== */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                        <p className="text-slate-400 font-semibold uppercase tracking-wider text-sm">Trusted by companies</p>
                        {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company, i) => (
                            <div key={i} className="text-2xl font-black text-slate-200 hover:text-blue-600 transition-colors cursor-pointer">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== WHY CHOOSE US - Horizontal Cards ========== */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <HiSparkles /> Why Care41
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                            The Care41 <span className="text-blue-600">Difference</span>
                        </h2>
                        <p className="text-xl text-slate-500">
                            What makes us Mumbai's most trusted senior care service
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: FaShieldAlt, title: "Verified Caregivers", desc: "Rigorous 7-step background verification for every caregiver", color: "blue" },
                            { icon: FaVideo, title: "Live Updates", desc: "Real-time video calls and daily health reports to your phone", color: "blue" },
                            { icon: FaGlobe, title: "NRI Focused", desc: "Services designed specifically for overseas families", color: "blue" },
                            { icon: FaHeadset, title: "24/7 Support", desc: "Round-the-clock assistance across all time zones", color: "blue" }
                        ].map((item, index) => (
                            <div key={index} className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                                    <item.icon className="text-2xl text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== SERVICES - Tab Layout ========== */}
            <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="services">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <FaMedal /> Our Services
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                            Complete Senior <span className="text-blue-600">Care Solutions</span>
                        </h2>
                    </div>

                    {/* Service Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${activeTab === index
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'}`}
                            >
                                <service.icon className="inline mr-2" />
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Service Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-yellow-500/10 rounded-3xl blur-xl"></div>
                            <img
                                src={services[activeTab].image}
                                alt={services[activeTab].title}
                                className="relative w-full h-[450px] object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                                        {React.createElement(services[activeTab].icon, { className: "text-white text-2xl" })}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{services[activeTab].title}</h4>
                                        <p className="text-slate-500 text-sm">Professional Care Service</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900">{services[activeTab].title}</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">{services[activeTab].description}</p>

                            <div className="grid grid-cols-2 gap-4">
                                {services[activeTab].highlights.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <FaCheck className="text-blue-600 text-sm" />
                                        </div>
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-all">
                                Get Started <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== STATS SECTION ========== */}
            <section ref={statsRef} className="py-20 bg-blue-950 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { value: animatedStats.families, suffix: "+", label: "Families Served", icon: FaUsers },
                            { value: animatedStats.caregivers, suffix: "+", label: "Expert Caregivers", icon: FaUserCheck },
                            { value: animatedStats.satisfaction, suffix: "%", label: "Client Satisfaction", icon: FaStar },
                            { value: animatedStats.countries, suffix: "+", label: "Countries Reached", icon: FaGlobe }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
                                    <stat.icon className="text-2xl text-white group-hover:text-blue-900 transition-colors" />
                                </div>
                                <div className="text-5xl font-black text-white mb-2">
                                    {stat.value}<span className="text-yellow-400">{stat.suffix}</span>
                                </div>
                                <div className="text-blue-200/60 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== HOW IT WORKS ========== */}
            <section className="py-24 bg-white" id="how">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <FaClipboardCheck /> Simple Process
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                            How Care41 <span className="text-blue-600">Works</span>
                        </h2>
                        <p className="text-xl text-slate-500">
                            Get started in 4 simple steps
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-100 via-blue-600 to-blue-100"></div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((step, index) => (
                                <div key={index} className="relative group">
                                    <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 relative z-10">
                                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-6 group-hover:scale-110 transition-transform">
                                            {step.step}
                                        </div>
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                                            <step.icon className="text-blue-600 text-xl" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                                        <p className="text-slate-500">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TESTIMONIALS ========== */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-white" id="testimonials">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Large Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                                alt="Happy family"
                                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-yellow-400 rounded-2xl p-6 shadow-xl">
                                <div className="text-4xl font-black text-blue-900">1,500+</div>
                                <div className="text-blue-900/70 font-semibold">Happy Families</div>
                            </div>
                        </div>

                        {/* Right - Testimonial Slider */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                                <FaQuoteLeft /> What Families Say
                            </div>
                            <h2 className="text-4xl font-black text-slate-900">
                                Trusted by <span className="text-blue-600">NRI Families</span> Worldwide
                            </h2>

                            {/* Testimonial Card */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                                    <FaQuoteLeft className="text-white" />
                                </div>

                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-lg text-slate-600 italic mb-6 leading-relaxed">
                                    "{testimonials[currentTestimonial].text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100"
                                    />
                                    <div>
                                        <div className="font-bold text-slate-900">{testimonials[currentTestimonial].name}</div>
                                        <div className="text-slate-500 text-sm">{testimonials[currentTestimonial].role}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                                >
                                    <FaChevronLeft />
                                </button>
                                <div className="flex gap-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`h-2 rounded-full transition-all ${index === currentTestimonial ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'}`}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
                                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                                >
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section className="py-24 bg-white" id="pricing">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <FaMoneyCheckAlt /> Transparent Pricing
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                            Care Plans for <span className="text-blue-600">Every Family</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {carePackages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl ${pkg.recommended
                                    ? 'bg-blue-600 text-white scale-105 shadow-xl shadow-blue-600/30'
                                    : 'bg-white border-2 border-slate-100 hover:border-blue-200'}`}
                            >
                                {pkg.recommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="px-4 py-2 bg-yellow-400 text-blue-900 text-xs font-black rounded-full shadow-lg">
                                            RECOMMENDED
                                        </span>
                                    </div>
                                )}

                                <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${pkg.recommended ? 'text-blue-200' : 'text-slate-400'}`}>
                                    {pkg.name}
                                </div>
                                <div className={`text-sm mb-6 ${pkg.recommended ? 'text-blue-100' : 'text-slate-500'}`}>
                                    {pkg.subtitle}
                                </div>

                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className={`text-5xl font-black ${pkg.recommended ? 'text-white' : 'text-slate-900'}`}>
                                        {pkg.price}
                                    </span>
                                    <span className={pkg.recommended ? 'text-blue-200' : 'text-slate-400'}>/month</span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <FaCheckCircle className={pkg.recommended ? 'text-yellow-400' : 'text-blue-500'} />
                                            <span className={pkg.recommended ? 'text-blue-50' : 'text-slate-600'}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.recommended
                                    ? 'bg-yellow-400 text-blue-900 hover:bg-yellow-300'
                                    : 'bg-yellow-400 text-blue-900 hover:bg-yellow-300'}`}>
                                    Choose Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== NRI SECTION ========== */}
            <section className="py-24 bg-blue-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold">
                                <FaGlobe /> Built for NRIs
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                                Care for Your Parents,
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">From Anywhere</span>
                            </h2>
                            <p className="text-xl text-blue-100/70 leading-relaxed">
                                We understand the challenges of caring for aging parents from overseas. Our services bridge the distance with technology and trust.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: FaEye, title: "Full Transparency", desc: "Daily video updates & health reports" },
                                    { icon: FaHeadset, title: "Any Timezone", desc: "24/7 support when you need it" },
                                    { icon: FaMoneyCheckAlt, title: "Global Payments", desc: "Pay in USD, GBP, EUR & more" },
                                    { icon: FaCertificate, title: "Quality Assured", desc: "Rigorous caregiver standards" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-yellow-400 transition-colors">
                                            <item.icon className="text-yellow-400 text-xl group-hover:text-blue-900 transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                            <p className="text-blue-200/60 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://media.istockphoto.com/id/1392761883/photo/deep-thinking-senior-woman-with-disability-on-wheelchair-at-park-concept-of-depression.jpg?s=612x612&w=0&k=20&c=HKTeLTDwDQddWNF8nS0IPGma9Duy3u1qSoOl3LdK58Y="
                                alt="Senior with caregiver"
                                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                                        <FaGlobe className="text-white text-2xl" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-slate-900">25+</div>
                                        <div className="text-slate-500 text-sm">Countries Served</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full mb-8">
                            <FaAward className="text-yellow-400" />
                            <span>Mumbai's Most Trusted Senior Care</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                            Ready to Give Your Parents the Best Care?
                        </h2>

                        <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto">
                            Join 1,500+ NRI families who trust Care41. Schedule your free consultation today.
                        </p>

                        <div className="flex flex-wrap gap-6 justify-center">
                            <a href="#contact" className="group px-10 py-5 bg-yellow-400 text-blue-900 text-lg font-bold rounded-full hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/30 flex items-center gap-3">
                                Book Free Consultation
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="tel:+912234567890" className="px-10 py-5 bg-white/10 text-white text-lg font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all flex items-center gap-3">
                                <FaPhoneAlt />
                                +91 22 3456 7890
                            </a>
                        </div>

                        <p className="mt-8 text-blue-200/60 flex items-center justify-center gap-2">
                            <FaClock />
                            Response within 2 hours guaranteed
                        </p>
                    </div>
                </div>
            </section>

            {/* Mobile Contact Form (shown only on mobile) */}
            <section className="lg:hidden py-16 bg-white" id="mobile-contact">
                <div className="container mx-auto px-6">
                    <div className="bg-slate-50 rounded-3xl p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Get Free Consultation</h3>
                        <form className="space-y-4">
                            <input
                                className="w-full px-5 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 outline-none font-medium"
                                placeholder="Your Name"
                            />
                            <input
                                type="email"
                                className="w-full px-5 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 outline-none font-medium"
                                placeholder="Email"
                            />
                            <input
                                className="w-full px-5 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 outline-none font-medium"
                                placeholder="Phone"
                            />
                            <button className="w-full py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-all">
                                Request Callback →
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Variant0;
