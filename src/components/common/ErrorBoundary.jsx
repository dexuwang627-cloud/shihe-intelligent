
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
                    <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-red-100">
                        <div className="bg-red-50 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                            <AlertTriangle className="w-10 h-10 text-red-500" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">發生了一些錯誤</h1>
                        <p className="text-slate-600 mb-6">我們已記錄此問題。請嘗試重新整理頁面或返回首頁。</p>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => window.location.reload()}
                                className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors"
                            >
                                重新整理頁面
                            </button>
                            <a
                                href="/"
                                className="w-full bg-white border border-slate-200 text-slate-700 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                            >
                                <Home className="w-4 h-4" /> 返回首頁
                            </a>
                        </div>
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-8 text-left bg-slate-100 p-4 rounded-lg overflow-auto max-h-40 text-xs font-mono text-red-600">
                                {this.state.error && this.state.error.toString()}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
