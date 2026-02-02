import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.avif';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'
                }`}
        >
            <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'glass rounded-2xl shadow-sm' : ''
                }`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/" className="flex-shrink-0">
                            <img src={Logo} alt="Care41" className="h-10 w-auto md:h-12" />
                        </a>
                        {/* <nav className="hidden md:ml-10 md:flex md:space-x-8">
                            <a href="#services" className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors">Services</a>
                            <a href="#how" className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors">How it works</a>
                            <a href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors">Testimonials</a>
                            <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors">Contact</a>
                        </nav> */}
                    </div>

                    <div className="flex items-center space-x-4">
                        <a href="#book" className="hidden md:inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all active:scale-95">
                            Get started
                        </a>
                        <button
                            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden absolute top-full inset-x-4 mt-2 transition-all duration-300 origin-top ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                }`}>
                <div className="glass rounded-2xl shadow-xl p-4 overflow-hidden">
                    <div className="flex flex-col space-y-3">
                        <a href="#services" className="px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Services</a>
                        <a href="#how" className="px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>How it works</a>
                        <a href="#testimonials" className="px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                        <a href="#contact" className="px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Contact</a>
                        <a href="#book" className="mt-2 w-full inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm" onClick={() => setIsMenuOpen(false)}>
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
