import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

import SearchBar from '../ui/SearchBar';
import Magnetic from '../common/Magnetic';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [hoveredPath, setHoveredPath] = useState(null);
    const location = useLocation();
    const { scrollY } = useScroll();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'zh-TW' : 'en';
        i18n.changeLanguage(newLang);
    };

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navItems = [
        { path: '/', label: t('nav.home') },
        { path: '/services', label: t('nav.services') },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={isHidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10 shadow-lg"
        >
            <div className="w-full px-4 md:px-6 lg:px-8 py-3 flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2 group z-50">
                    <img
                        src="/photos/logo.svg?v=clean"
                        alt="世和智能 Logo"
                        className="h-10 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                        width="40"
                        height="40"
                    />
                    <div>
                        <div className="font-bold text-xl leading-tight text-white md:text-2xl tracking-wide group-hover:text-green-400 transition-colors">
                            {t('nav.subtitle')}
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="flex items-center bg-white/5 rounded-full p-1 mr-4 border border-white/10">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors z-10 ${isActive(item.path) ? 'text-white' : 'text-slate-300 hover:text-white'
                                    }`}
                                onMouseEnter={() => setHoveredPath(item.path)}
                                onMouseLeave={() => setHoveredPath(null)}
                            >
                                {isActive(item.path) && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-green-500/20 border border-green-500/50 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {hoveredPath === item.path && !isActive(item.path) && (
                                    <motion.div
                                        layoutId="navbar-hover"
                                        className="absolute inset-0 bg-white/10 rounded-full"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                                <span className="relative z-10">{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <SearchBar />
                        </div>

                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium border border-transparent hover:border-white/20"
                            aria-label="Toggle Language"
                        >
                            <Globe className="w-4 h-4" />
                            <span>{i18n.language === 'en' ? 'ZH' : 'EN'}</span>
                        </button>

                        <Magnetic>
                            <a href="/#contact" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-0.5 text-sm">
                                {t('nav.contact')}
                            </a>
                        </Magnetic>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    id="mobile-menu-btn"
                    className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: { opacity: 0, height: 0 },
                            visible: {
                                opacity: 1,
                                height: "auto",
                                transition: {
                                    duration: 0.3,
                                    staggerChildren: 0.1,
                                    when: "beforeChildren"
                                }
                            },
                            exit: {
                                opacity: 0,
                                height: 0,
                                transition: {
                                    duration: 0.2,
                                    when: "afterChildren"
                                }
                            }
                        }}
                        className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="p-4 space-y-4">
                            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                                <SearchBar className="w-full" />
                            </motion.div>

                            <div className="space-y-2">
                                {navItems.map((item) => (
                                    <motion.div key={item.path} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                                        <Link
                                            to={item.path}
                                            className={`block px-4 py-3 rounded-xl font-medium transition-all ${isActive(item.path)
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                                onClick={toggleLanguage}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-all border border-white/10"
                            >
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5" />
                                    <span>{t('nav.language') || 'Language'}</span>
                                </div>
                                <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded text-xs">
                                    {i18n.language === 'en' ? '切換至中文' : 'Switch to English'}
                                </span>
                            </motion.button>

                            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                                <a href="/#contact" className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-transform">
                                    {t('nav.contact')}
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer-contact" className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/photos/logo.svg" alt="世和智能 Logo" className="h-8 w-auto" width="32" height="32" />
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
                            <li><Link to="/smart-care" className="hover:text-orange-500 transition-colors py-1.5 block">{t('footer.service_items.smart_care')}</Link></li>
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

import SmoothScroll from '../common/SmoothScroll';

const Layout = ({ children }) => {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    );
};

export default Layout;
