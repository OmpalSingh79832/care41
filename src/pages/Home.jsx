import React, { useState } from 'react';
import Variant0 from '../variants/Variant0';
import Variant1 from '../variants/Variant1';
import Variant2 from '../variants/Variant2';

const Home = () => {
    const [activeVariant, setActiveVariant] = useState(0);

    return (
        <div className="relative">
            {/* Variant Switcher - Floating UI */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl shadow-2xl flex gap-2">
                {[0, 1, 2].map(v => (
                    <button
                        key={v}
                        onClick={() => setActiveVariant(v)}
                        className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeVariant === v
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-white/50 text-slate-900 hover:bg-white/80'
                            }`}
                    >
                        Variant {v}
                    </button>
                ))}
            </div>

            {/* Render Active Variant */}
            {activeVariant === 0 && <Variant0 />}
            {activeVariant === 1 && <Variant1 />}
            {activeVariant === 2 && <Variant2 />}
        </div>
    );
};

export default Home;
