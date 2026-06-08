import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className="relative w-full min-h-screen bg-[#0d0d0d] flex items-center justify-center overflow-hidden selection:bg-[#E87A22]/10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-[#E87A22] rounded-full mix-blend-screen filter blur-[100px] sm:blur-[150px] opacity-20 sm:opacity-15 animate-pulse pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 text-center">
                <div className="relative flex items-center justify-center mb-2">
                    <h1 className="absolute text-[130px] sm:text-[180px] md:text-[250px] lg:text-[300px] font-black tracking-tighter text-transparent select-none [-webkit-text-stroke:2px_rgba(255,255,255,0.05)] transform -translate-y-4 sm:-translate-y-8">
                        404
                    </h1>
                    <h1 className="relative text-[130px] sm:text-[180px] md:text-[250px] lg:text-[300px] font-black leading-none tracking-tighter text-white select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                        404
                    </h1>
                </div>
                <div className="w-16 h-1 mb-8 bg-linear-to-r from-transparent via-[#E87A22] to-transparent rounded-full opacity-60"></div>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-light text-white/90 tracking-[0.15em] uppercase mb-4">
                Page Not <span className="font-bold text-[#E87A22]">Found</span>
                </h2>
                <p className="max-w-xs sm:max-w-md mx-auto text-xs sm:text-sm font-light text-white/40 leading-relaxed mb-10">
                The creative journey sometimes leads to dead ends. Let's get you back to exploring the portfolio.
                </p>
                <Link 
                to="/" 
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-semibold tracking-widest text-white uppercase transition-all duration-500 bg-transparent border border-[#E87A22]/40 rounded-full overflow-hidden hover:border-[#E87A22]">
                <div className="absolute inset-0 w-0 bg-[#E87A22]/10 transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
                    Back To Home
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
                </Link>
            </div>
        </section>
    );
};

export default Error;