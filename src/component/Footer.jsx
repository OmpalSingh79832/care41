import React from 'react';
import Logo from '../assets/logo.avif';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
    <footer className="bg-slate-950 text-slate-200 mt-20">
        <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 group">
                <div className="space-y-4">
                    <a href="/" className="flex-shrink-0">
                        <img src={Logo} alt="Care41" className="h-10 w-auto md:h-12" />
                    </a>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                        On-ground coordination & financial guidance for NRIs with parents in Mumbai. Professional care you can trust from anywhere in the world.
                    </p>
                    <div className="flex items-center space-x-4 pt-2">
                        <a className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all cursor-pointer"><FaTwitter size={14} /></a>
                        <a className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all cursor-pointer"><FaFacebookF size={14} /></a>
                        <a className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all cursor-pointer"><FaLinkedinIn size={14} /></a>
                    </div>
                </div>

                <div>
                    <h5 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Services</h5>
                    <ul className="text-sm space-y-3">
                        <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Retirement planning</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Estate & wills</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Tax filing support</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Local coordination</a></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Contact Information</h5>
                    <ul className="text-sm space-y-4">
                        <li className="flex items-start">
                            <FaPhoneAlt className="mr-3 text-blue-500 mt-0.5" size={14} />
                            <span className="text-slate-400">+91 22 1234 5678</span>
                        </li>
                        <li className="flex items-start">
                            <FaEnvelope className="mr-3 text-blue-500 mt-0.5" size={14} />
                            <span className="text-slate-400">hello@care41.example</span>
                        </li>
                        <li className="flex items-start">
                            <FaMapMarkerAlt className="mr-3 text-blue-500 mt-0.5" size={14} />
                            <span className="text-slate-400">Mumbai, Maharashtra, India</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Our Commitment</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        We are dedicated to providing the highest standards of financial security and local support for your loved ones.
                    </p>
                    <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                        <p className="text-xs text-slate-500">Need immediate assistance?</p>
                        <a href="#contact" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">Speak with an advisor →</a>
                    </div>
                </div>
            </div>


        </div>
    </footer>
);

export default Footer;

