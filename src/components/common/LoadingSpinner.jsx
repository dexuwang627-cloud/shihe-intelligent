import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-white">
            <div className="relative w-26 h-26 flex items-center justify-center mb-6 bg-transparent">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-2 border-transparent border-t-green-500 border-r-green-500 rounded-full animate-[spin_3s_linear_infinite] opacity-80"></div>
                {/* Inner Ring */}
                <div className="absolute inset-3 border-2 border-transparent border-b-orange-500 rounded-full animate-[spin_4s_linear_infinite_reverse] opacity-60"></div>
                {/* Logo or Icon */}
                <Loader2 className="w-10 h-10 text-slate-400 animate-pulse" />
            </div>
            <p className="text-slate-500 font-medium tracking-[0.2em] uppercase text-sm animate-pulse">
                Loading
            </p>
        </div>
    );
};

export default LoadingSpinner;
