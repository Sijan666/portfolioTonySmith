import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-[#050505] overflow-hidden selection:bg-white/10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center justify-center p-10 md:p-16 rounded-3xl bg-white/2 border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl text-center max-w-lg mx-4">
                <h1 className="text-[120px] md:text-[150px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/20 drop-shadow-[0_0_40px_rgba(255,255,255,0.05)] select-none">
                404
                </h1>
                <div className="w-12 h-px bg-white/20 my-6"></div>
                <h2 className="text-xl md:text-2xl font-medium text-white/90 tracking-wider mb-3 uppercase text-[15px]">
                Page Not Found
                </h2>
                <p className="text-sm text-white/40 mb-10 max-w-[280px] font-light leading-relaxed">
                The page you are looking for doesn't exist or has been moved to another dimension.
                </p>
                <Link 
                to="/" 
                className="group relative inline-flex items-center justify-center px-8 py-3 text-xs font-medium tracking-[0.3em] text-white/80 uppercase transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-white/20 overflow-hidden">
                <div className="absolute inset-0 w-0 bg-white/5 transition-all duration-300 ease-out group-hover:w-full"></div>
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2">
                    Return Home
                </span>
                <svg 
                    className="absolute right-4 w-4 h-4 opacity-0 transition-all duration-300 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" 
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