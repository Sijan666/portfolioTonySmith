import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-99999 flex items-center justify-center bg-[#050505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center justify-center px-12 py-10 rounded-2xl bg-white/2 border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl">
            <div className="relative flex items-center justify-center w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-full border border-white/10"></div>
                <div className="absolute inset-0 rounded-full border border-transparent border-t-white border-r-white/40 animate-spin"></div>
                <div className="absolute inset-2 rounded-full border border-transparent border-b-white border-l-white/30 animate-[spin_2s_linear_infinite_reverse]"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_2px_rgba(255,255,255,0.8)] animate-pulse"></div>
            </div>
            <div className="flex flex-col items-center gap-3">
            <span className="text-white/80 text-[11px] font-medium tracking-[0.4em] uppercase pl-[0.4em]">
                Loading
            </span>
            <div className="flex gap-1.5 mt-1">
                <div className="w-1 h-1 rounded-full bg-white/50 animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1 h-1 rounded-full bg-white/50 animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1 h-1 rounded-full bg-white/50 animate-bounce"></div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Loader;