import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-[#050505] overflow-hidden selection:bg-orange-500/20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] bg-orange-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none animate-pulse">
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px] bg-white/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px] bg-white/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center justify-center w-[90%] max-w-[340px] sm:max-w-md md:max-w-lg p-8 sm:p-12 md:p-16 rounded-2xl md:rounded-3xl bg-white/2 border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl text-center mx-auto">
                <h1 className="text-[80px] sm:text-[100px] md:text-[130px] lg:text-[150px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/20 drop-shadow-[0_0_40px_rgba(255,255,255,0.05)] select-none">
                    404
                </h1>
                <div className="w-8 sm:w-12 h-px bg-white/20 my-5 sm:my-6"></div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 tracking-wider mb-2 sm:mb-3 uppercase">
                    Page Not Found
                </h2>
                <p className="text-xs sm:text-sm text-white/40 mb-8 sm:mb-10 max-w-60 sm:max-w-[280px] md:max-w-[320px] font-light leading-relaxed">
                    The page you are looking for doesn't exist or has been moved to another dimension.
                </p>
                <Link to="/" className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 text-[10px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.3em] text-white/80 uppercase transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-orange-500/10 hover:text-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-500/30 overflow-hidden">
                    <div className="absolute inset-0 w-0 bg-orange-500/10 transition-all duration-300 ease-out group-hover:w-full"></div>
                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2">
                        Return Home
                    </span>
                    <svg 
                        className="absolute right-3 sm:right-4 w-3 h-3 sm:w-4 sm:h-4 opacity-0 transition-all duration-300 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Error;