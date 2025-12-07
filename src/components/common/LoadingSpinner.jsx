import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] w-full bg-slate-50">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-12 h-12 text-green-500 animate-spin" />
                <p className="text-slate-500 font-medium tracking-wide animate-pulse">
                    載入中...
                </p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
