import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import SearchBar from '../ui/SearchBar';
import Magnetic from '../common/Magnetic';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'zh-TW' : 'en';
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 10) {
                        setIsScrolled(true);
                    } else {
                        setIsScrolled(false);
                    }
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const isActive = (path, hash = '') => {
        if (hash) {
            return location.hash === hash;
        }
        if (path === '/') {
            return location.pathname === '/' && !location.hash;
        }
        return location.pathname.startsWith(path);
    };

    const getLinkClass = (path, hash = '') => {
        return isActive(path, hash)
            ? "nav-link font-medium text-green-400 hover:text-orange-400 transition-colors font-bold"
            : "nav-link font-medium text-slate-200 hover:text-orange-400 transition-colors";
    };

    return (
        <nav
            id="navbar"
            className={`fixed w-full z-50 transition-all duration-300 py-3 border-b border-green-500/50 ${isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-slate-900/90 backdrop-blur-sm'
                }`}
        >
            <div className="w-full px-4 md:px-6 lg:px-8 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/photos/logo2.svg" alt="世和智能 Logo" className="h-10 w-auto" width="40" height="40" />
                    <div>
                        <div className="font-bold text-xl leading-tight text-white md:text-2xl">
                            {t('nav.subtitle')}
                        </div>
                        <p className="text-xs tracking-wider text-slate-400">
                            Shi-He Intelligent
                        </p>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className={getLinkClass('/')}>{t('nav.home')}</Link>
                    {/* About Us link removed as per request */}
                    <Link to="/services" className={getLinkClass('/services')}>{t('nav.services')}</Link>

                    <SearchBar />

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
                        aria-label="Toggle Language"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="text-sm font-medium">{i18n.language === 'en' ? 'ZH' : 'EN'}</span>
                    </button>

                    <Magnetic>
                        <a href="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-orange-500/30 inline-block">
                            {t('nav.contact')}
                        </a>
                    </Magnetic>
                </div>

                <button
                    id="mobile-menu-btn"
                    className="md:hidden p-2 text-white"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div id="mobile-menu" className="absolute top-full left-0 w-full bg-slate-800 shadow-lg md:hidden flex flex-col p-4 gap-4 border-t border-green-500/50">
                    <SearchBar className="mb-2" />
                    <Link to="/" className={`text-left font-medium py-3 border-b border-slate-700 ${isActive('/') ? 'text-green-400' : 'text-slate-200 hover:text-orange-400'}`}>{t('nav.home')}</Link>
                    <Link to="/services" className={`text-left font-medium py-3 border-b border-slate-700 ${isActive('/services') ? 'text-green-400' : 'text-slate-200 hover:text-orange-400'}`}>{t('nav.services')}</Link>

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-left font-medium py-3 border-b border-slate-700 text-slate-200 hover:text-orange-400"
                    >
                        <Globe className="w-5 h-5" />
                        <span>{i18n.language === 'en' ? '切換至中文' : 'Switch to English'}</span>
                    </button>

                    <div className="mt-2 text-center">
                        <a href="/#contact" className="bg-orange-500 text-white py-4 rounded-lg font-medium block hover:bg-orange-600 min-h-[48px] flex items-center justify-center">
                            {t('nav.contact')}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Footer = () => {
    const { t } = useTranslation();
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
                            {t('footer.description')}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">{t('footer.services')}</h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><Link to="/services/green-energy" className="hover:text-orange-500 transition-colors py-1.5 block">{t('footer.service_items.green_energy')}</Link></li>
                            <li><Link to="/services/mep-engineering" className="hover:text-orange-500 transition-colors py-1.5 block">{t('footer.service_items.mep')}</Link></li>
                            <li><Link to="/services/ems" className="hover:text-orange-500 transition-colors py-1.5 block">{t('footer.service_items.ems')}</Link></li>
                            <li><Link to="/services/consulting" className="hover:text-orange-500 transition-colors py-1.5 block">{t('footer.service_items.consulting')}</Link></li>
                            <li><Link to="/services/smart-agriculture" className="hover:text-orange-500 transition-colors py-1.5 block">{t('footer.service_items.smart_agriculture')}</Link></li>
                            <li><Link to="/services/smart-education" className="hover:text-orange-500 transition-colors py-1.5 block">{t('footer.service_items.smart_education')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">{t('footer.contact')}</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-3">
                                <Phone className="text-green-500 flex-shrink-0 mt-0.5 w-4 h-4" />
                                <span>0926-858-757 ({t('footer.manager')})</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-green-500 flex-shrink-0 mt-0.5 w-4 h-4" />
                                <a href="mailto:longletter123@gmail.com" className="hover:text-green-600 transition-colors py-1 block">
                                    longletter123@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-green-500 flex-shrink-0 mt-0.5 w-4 h-4" />
                                <span>{t('footer.address')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {currentYear} {t('footer.rights')}</p>
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
