import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Lock, Loader2 } from 'lucide-react';
import SEO from '../../components/common/SEO';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;
            navigate('/admin/dashboard');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50 flex items-center justify-center px-4">
            <SEO title="Admin Login | Shihe Intelligent" />

            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
                <div className="text-center mb-8">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-8 h-8 text-orange-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
                    <p className="text-slate-500 mt-2">Enter credentials to access dashboard</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                            placeholder="admin@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-orange-600/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
