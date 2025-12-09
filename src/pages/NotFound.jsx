import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import SEO from '../components/common/SEO';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-4 pt-20">
            <SEO title="404 找不到頁面" description="很抱歉，您查詢的頁面不存在。請返回世和智能首頁。" />

            <div className="bg-white p-12 rounded-2xl shadow-xl max-w-lg w-full border border-slate-100">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                    <AlertTriangle className="w-10 h-10" />
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">404 找不到頁面</h1>
                <p className="text-slate-600 mb-8 text-lg">
                    很抱歉，您所查詢的網頁可能已經移除、重新命名或暫時無法使用。
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-green-500/30"
                >
                    <Home className="w-5 h-5" /> 返回首頁
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
