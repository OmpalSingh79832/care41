import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import {
    FaUser, FaHandsHelping, FaCheckCircle, FaPhoneAlt, FaCalendarAlt,
    FaMapMarkerAlt, FaComments, FaChartLine, FaFileContract,
    FaMoneyCheckAlt, FaStar, FaChevronRight, FaQuoteLeft, FaEnvelope, FaEdit
} from 'react-icons/fa';

const Stat = ({ value, label }) => (
    <div className="group text-center p-6 transition-all duration-300">
        <div className="text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{value}</div>
        <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</div>
    </div>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
    <div className="relative overflow-hidden bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 group-hover:bg-blue-100/50 transition-colors"></div>
        <div className="w-14 h-14 rounded-2xl bg-slate-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <Icon size={24} />
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{title}</h4>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
        <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more <FaChevronRight className="ml-2" size={12} />
        </div>
    </div>
);

const Quote = ({ children, author }) => (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative">
        <div className="text-blue-100 absolute top-6 right-8">
            <FaQuoteLeft size={40} />
        </div>
        <div className="flex mb-4 text-amber-400">
            {[...Array(5)].map((_, i) => <FaStar key={i} size={14} className="mr-1" />)}
        </div>
        <p className="text-slate-700 leading-relaxed mb-6 relative z-10 italic">“{children}”</p>
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold mr-3 border border-slate-200">
                {author.charAt(0)}
            </div>
            <div className="text-sm font-bold text-slate-900">{author}</div>
        </div>
    </div>
);

export const FinancialEstatePlanningPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '+91',
        message: ''
    });

    const countryCodes = [
        { code: '+91', name: 'IN' },
        { code: '+1', name: 'US' },
        { code: '+44', name: 'UK' },
        { code: '+61', name: 'AU' },
        { code: '+971', name: 'UAE' },
        { code: '+65', name: 'SG' },
        { code: '+1', name: 'CA' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-white text-slate-900 min-h-screen selection:bg-blue-100">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-100">
                                    <span className="relative flex h-2 w-2 mr-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                    </span>
                                    Available in Mumbai
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight text-slate-900">
                                    Care41 — Financial & <span className="text-blue-600">Estate Planning</span> for NRIs
                                </h1>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                                    Expert on-ground coordination in Mumbai so you can make confident financial decisions for aging parents — even from abroad.
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                    <a href="#contact" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-slate-800 hover:-translate-y-1 transition-all active:scale-95 text-lg">
                                        Talk to an advisor
                                    </a>
                                    <a href="#book" className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all text-lg">
                                        Book a free consult
                                    </a>
                                </div>

                                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
                                    <div className="flex items-center text-slate-600 font-medium"><FaCheckCircle className="mr-3 text-blue-500" /> Advisory-first</div>
                                    <div className="flex items-center text-slate-600 font-medium"><FaHandsHelping className="mr-3 text-blue-500" /> Local coordination</div>
                                    <div className="flex items-center text-slate-600 font-medium"><FaUser className="mr-3 text-blue-500" /> Transparent fees</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-100/50 p-8 lg:p-10 border border-slate-100 relative">
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-3xl -rotate-12 -z-10 opacity-20 hidden md:block"></div>
                                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 rounded-2xl rotate-12 -z-10 opacity-20 hidden md:block"></div>

                                <h3 className="text-2xl font-bold mb-2 text-slate-900">Start with a free consult</h3>
                                <p className="text-slate-500 mb-8 text-sm">Schedule a call with our care experts today.</p>

                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="relative group">
                                        <label className="block text-[11px] font-black text-slate-500 uppercase mb-2 ml-1 tracking-wider">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                                <FaUser size={14} />
                                            </div>
                                            <input
                                                className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 rounded-2xl pl-11 pr-4 py-3.5 transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <label className="block text-[11px] font-black text-slate-500 uppercase mb-2 ml-1 tracking-wider">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                                <FaEnvelope size={14} />
                                            </div>
                                            <input
                                                type="email"
                                                className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 rounded-2xl pl-11 pr-4 py-3.5 transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                                                placeholder="Your email address"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <label className="block text-[11px] font-black text-slate-500 uppercase mb-2 ml-1 tracking-wider">
                                            Phone Number
                                        </label>
                                        <div className="flex gap-3">
                                            <div className="relative shrink-0">
                                                <select
                                                    className="appearance-none bg-slate-50/50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-2xl pl-4 pr-10 py-3.5 outline-none text-sm font-bold text-slate-700 transition-all cursor-pointer"
                                                    value={formData.countryCode}
                                                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                                >
                                                    {countryCodes.map((c) => (
                                                        <option key={c.code + c.name} value={c.code}>{c.name} {c.code}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                                                    <FaChevronRight className="rotate-90" size={10} />
                                                </div>
                                            </div>
                                            <div className="relative flex-1">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                                    <FaPhoneAlt size={14} />
                                                </div>
                                                <input
                                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 rounded-2xl pl-11 pr-4 py-3.5 transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                                                    placeholder="98765 43210"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <label className="block text-[11px] font-black text-slate-500 uppercase mb-2 ml-1 tracking-wider">
                                            How can we help?
                                        </label>
                                        <div className="relative">
                                            <div className="absolute top-4 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                                                <FaEdit size={14} />
                                            </div>
                                            <textarea
                                                className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 rounded-2xl pl-11 pr-4 py-3.5 transition-all outline-none h-24 resize-none text-slate-900 placeholder:text-slate-400 font-medium"
                                                placeholder="Briefly describe your requirements..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-4.5 rounded-2xl font-black shadow-xl shadow-blue-600/20 transition-all transform active:scale-[0.98] mt-2 flex items-center justify-center text-base tracking-wide uppercase">
                                        Request callback <FaChevronRight className="ml-2" size={14} />
                                    </button>
                                </form>
                                <div className="mt-6 flex items-center justify-center space-x-2 text-[11px] text-slate-400 font-medium uppercase tracking-widest">
                                    <FaCheckCircle className="text-green-500" />
                                    <span>No spam. We respect your privacy.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section with Image */}
            <section className="container mx-auto px-6 mb-32">
                <div className="bg-slate-50 rounded-[50px] overflow-hidden border border-slate-100">
                    <div className="grid lg:grid-cols-2 items-center">
                        <div className="p-12 lg:p-20">
                            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Trusted Care</h3>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
                                Why Mumbai families trust Care41
                            </h2>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mr-4 shrink-0 border border-slate-100">
                                        <FaStar size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-slate-900">Decades of Local Expertise</h4>
                                        <p className="text-slate-600 leading-relaxed">Our deep roots in Mumbai's financial and legal landscape ensure you get the best possible guidance.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mr-4 shrink-0 border border-slate-100">
                                        <FaComments size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-slate-900">Personalized Coordination</h4>
                                        <p className="text-slate-600 leading-relaxed">Regular updates and direct access to your dedicated advisor, bridge the distance between you and your parents.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full min-h-[400px] relative">
                            <img
                                src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=2070"
                                alt="Senior couple smiling"
                                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>
            </section>


            <main className="container mx-auto px-6 py-20">
                {/* Stats */}
                <section className="mb-32 bg-slate-50 rounded-[40px] border border-slate-100">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        <Stat value="+1,200" label="Families supported" />
                        <Stat value="98%" label="Client satisfaction" />
                        <Stat value="10+ yrs" label="Local experience" />
                    </div>
                </section>

                {/* Features */}
                <section className="mb-32" id="services">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-xl">
                            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h3>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Premium services tailored for your family.</h2>
                        </div>
                        <a className="inline-flex items-center text-blue-600 font-bold hover:translate-x-1 transition-transform" href="#services">
                            Explore all services <FaChevronRight className="ml-2" size={12} />
                        </a>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={FaChartLine}
                            title="Retirement roadmaps"
                            desc="Tailored retirement income plans for long-term stability and peace of mind for your loved ones."
                        />
                        <FeatureCard
                            icon={FaFileContract}
                            title="Estate & wills"
                            desc="Secure succession planning with verified legal partners to ensure your family's future is protected."
                        />
                        <FeatureCard
                            icon={FaMoneyCheckAlt}
                            title="Tax & compliance"
                            desc="NRI-aware tax support with experienced accountants navigating complex cross-border regulations."
                        />
                    </div>
                </section>

                {/* Process */}
                <section className="mb-32 bg-slate-900 rounded-[50px] p-12 lg:p-20 relative overflow-hidden" id="how">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                    <div className="relative z-10">
                        <div className="max-w-2xl mb-16">
                            <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Seamless Experience</h3>
                            <h2 className="text-4xl font-extrabold text-white mb-6">How CARE41 works</h2>
                            <p className="text-slate-400 text-lg">We've simplified the process to give you complete visibility and control, no matter where you are in the world.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12 relative">
                            {/* Connector line for desktop */}
                            <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-slate-800 -z-10"></div>

                            {[
                                { step: "1", title: "Tell us", desc: "Share details and concerns with our senior care experts through a video call or secure platform." },
                                { step: "2", title: "Plan", desc: "We create a clear, actionable plan tailored to your family's specific financial and legal requirements." },
                                { step: "3", title: "Coordinate", desc: "On-ground execution in Mumbai with regular updates and transparent reporting back to you." }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-6">
                                    <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-white text-2xl font-black shadow-xl ring-1 ring-blue-500/20">
                                        {item.step}
                                    </div>
                                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mb-32" id="testimonials">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Success Stories</h3>
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Trusted by families globally.</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Quote author="Monica C.">CARE41 made managing my parents from abroad stress-free and reliable. Their attention to detail is remarkable.</Quote>
                        <Quote author="Nikhil S.">Professional, compassionate, and transparent. They handled my father's estate planning with incredible sensitivity.</Quote>
                        <Quote author="Ankit R.">A trusted partner for our family's needs. The local coordination in Mumbai is a lifesaver for NRI families.</Quote>
                    </div>
                </section>

                {/* CTA */}
                <section className="mb-32 rounded-[40px] p-12 lg:p-16 bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl shadow-blue-200 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 blur-xl"></div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
                        <div className="text-center lg:text-left max-w-xl">
                            <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Get clarity. Reduce uncertainty.</h4>
                            <p className="text-blue-100 text-lg opacity-90 leading-relaxed">Book a free consult with our advisors to start planning today. Most families get complete clarity in just one 30-minute session.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <a href="#book" className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all active:scale-95 text-xl">
                                Book free consult
                            </a>
                        </div>
                    </div>
                </section>

                <section className="text-sm text-slate-400 max-w-4xl mx-auto text-center leading-relaxed">
                    <p>Care41 is a facilitation & coordination service, not a hospital or law firm. Financial, legal, or tax advice is provided by certified partners. Service availability may vary by city.</p>
                    <div className="flex items-center justify-center space-x-4 mt-6 grayscale opacity-50">
                        <div className="h-6 w-24 bg-slate-200 rounded animate-pulse"></div>
                        <div className="h-6 w-24 bg-slate-200 rounded animate-pulse"></div>
                        <div className="h-6 w-24 bg-slate-200 rounded animate-pulse"></div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default FinancialEstatePlanningPage;



