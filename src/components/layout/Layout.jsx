import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

import SearchBar from '../ui/SearchBar';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav
            id="navbar"
            className={`fixed w-full z-50 transition-all duration-300 py-3 border-b border-green-500/50 ${isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-slate-900/90 backdrop-blur-sm'
                }`}
        >
            <div className="w-full px-4 md:px-6 lg:px-8 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/photos/logo.png" alt="世和智能 Logo" className="h-10 w-auto" width="40" height="40" />
                    <div>
                        <h1 className="font-bold text-xl leading-tight text-white md:text-2xl">
                            世和智能 / 鑫浩瀚企業
                        </h1>
                        <p className="text-xs tracking-wider text-slate-400">
                            Shi-He Intelligent
                        </p>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className="nav-link font-medium text-green-400 hover:text-orange-400 transition-colors font-bold">首頁</Link>
                    <a href="/#about" className="nav-link font-medium text-slate-200 hover:text-orange-400 transition-colors">關於我們</a>
                    <Link to="/services" className="nav-link font-medium text-slate-200 hover:text-orange-400 transition-colors">核心服務</Link>

                    <SearchBar />

                    <a href="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-orange-500/30">
                        立即諮詢
                    </a>
                </div>

                <button
                    id="mobile-menu-btn"
                    className="md:hidden p-2 text-white"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div id="mobile-menu" className="absolute top-full left-0 w-full bg-slate-800 shadow-lg md:hidden flex flex-col p-4 gap-4 border-t border-green-500/50">
                    <SearchBar className="mb-2" />
                    <Link to="/" className="text-left font-medium text-green-400 py-2 border-b border-slate-700">首頁</Link>
                    <a href="/#about" className="text-left font-medium text-slate-200 hover:text-orange-400 py-2 border-b border-slate-700">關於我們</a>
                    <Link to="/services" className="text-left font-medium text-slate-200 hover:text-orange-400 py-2 border-b border-slate-700">核心服務</Link>
                    <a href="/#contact" className="bg-orange-500 text-white py-3 rounded-lg font-medium text-center mt-2 hover:bg-orange-600">
                        立即諮詢
                    </a>
                </div>
            )}
        </nav>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer-contact" className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/photos/logo.png" alt="世和智能 Logo" className="h-8 w-auto" width="32" height="32" />
                            <h2 className="font-bold text-xl text-slate-800">世和智能股份有限公司</h2>
                        </div>
                        <p className="text-slate-600 mb-6 max-w-sm">
                            致力於運用先進科技解決能源與環境問題，為客戶創造最大價值的同時，也為地球永續盡一份心力。
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">服務項目</h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link to="/services/green-energy" className="hover:text-orange-500 transition-colors">綠能光儲建置</Link></li>
                            <li><Link to="/services/mep-engineering" className="hover:text-orange-500 transition-colors">機電節能工程</Link></li>
                            <li><Link to="/services/ems" className="hover:text-orange-500 transition-colors">EMS 能源管理</Link></li>
                            <li><Link to="/services/consulting" className="hover:text-orange-500 transition-colors">企業輔助輔導</Link></li>
                            <li><Link to="/services/smart-agriculture" className="hover:text-orange-500 transition-colors">智慧農業/照護</Link></li>
                            <li><Link to="/services/smart-education" className="hover:text-orange-500 transition-colors">智慧教育/校園</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">聯絡資訊</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-3">
                                <Phone className="text-green-500 flex-shrink-0 mt-0.5 w-4 h-4" />
                                <span>0926-858-757 (專案經理: 王啓龍)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-green-500 flex-shrink-0 mt-0.5 w-4 h-4" />
                                <a href="mailto:service@shiheintelligent.com" className="hover:text-green-600 transition-colors">
                                    service@shiheintelligent.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-green-500 flex-shrink-0 mt-0.5 w-4 h-4" />
                                <span>桃園市中壢區（詳細地址請洽詢）</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {currentYear} 世和智能股份有限公司 Shi-He Intelligent Co., Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
