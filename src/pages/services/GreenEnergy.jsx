import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Sun, Battery, Settings, CloudLightning, Home, Heart, Zap, Shield, ChevronDown, CheckCircle, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/common/SEO';
import { useTranslation } from 'react-i18next';

const GreenEnergy = () => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hybridList = t('green_energy.hybrid.list', { returnObjects: true });
    const standardsList = t('green_energy.micro.details.standards_list', { returnObjects: true });
    const highlightsList = t('green_energy.micro.details.highlights_list', { returnObjects: true });

    const safeMap = (list) => Array.isArray(list) ? list : [];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <SEO
                title={t('green_energy.seo.title')}
                description={t('green_energy.seo.description')}
                keywords={t('green_energy.seo.keywords')}
                url="/services/green-energy"
            />

            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="mb-12"
                >
                    <motion.div variants={fadeInUp}>
                        <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-6 group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            {t('green_energy.back_link')}
                        </Link>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                        <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold w-fit">
                            {t('green_energy.badge')}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            {t('green_energy.title')}
                        </h1>
                        <div className="h-1 w-24 bg-orange-500 rounded-full my-2"></div>
                        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                            {t('green_energy.description')}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Main Cards Service Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8 mb-20"
                >
                    {/* Solar Card */}
                    <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-all duration-300 group">
                        <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors shadow-sm">
                            <Sun className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('green_energy.cards.solar.title')}</h3>
                        <p className="text-slate-600 leading-relaxed">{t('green_energy.cards.solar.desc')}</p>
                    </motion.div>

                    {/* Storage Card */}
                    <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-400 hover:shadow-xl transition-all duration-300 group">
                        <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-orange-500 group-hover:bg-orange-400 group-hover:text-white transition-colors shadow-sm">
                            <Battery className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('green_energy.cards.storage.title')}</h3>
                        <p className="text-slate-600 leading-relaxed">{t('green_energy.cards.storage.desc')}</p>
                    </motion.div>

                    {/* O&M Card */}
                    <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-600 hover:shadow-xl transition-all duration-300 group">
                        <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-orange-700 group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-sm">
                            <Settings className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('green_energy.cards.om.title')}</h3>
                        <p className="text-slate-600 leading-relaxed">{t('green_energy.cards.om.desc')}</p>
                    </motion.div>
                </motion.div>

                {/* Hybrid / Wind-Solar Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="relative rounded-3xl overflow-hidden mb-20 shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-0">
                        <div className="p-10 md:p-14 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                    <CloudLightning className="text-yellow-400 w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">
                                    {t('green_energy.hybrid.title')}
                                </h2>
                            </div>

                            <p className="text-slate-300 mb-10 leading-relaxed text-lg">
                                {t('green_energy.hybrid.description')}
                            </p>

                            <ul className="space-y-4">
                                {safeMap(hybridList).map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 text-slate-100 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative h-[400px] md:h-auto overflow-hidden">
                            <div className="absolute inset-0 bg-slate-900/20 z-10 md:hidden"></div>
                            <img
                                src="/photos/lightwind2.webp"
                                alt="Wind Solar Hybrid"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Micro / Home / SME Section */}
                <div className="mb-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4">
                            New Service
                        </span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('green_energy.micro.title')}</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            {t('green_energy.micro.description')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="bg-white p-3 rounded-xl w-fit mb-6 shadow-sm border border-green-100">
                                <Heart className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-green-900">{t('green_energy.micro.charity.title')}</h3>
                            <p className="text-slate-600 leading-relaxed">{t('green_energy.micro.charity.desc')}</p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="bg-white p-3 rounded-xl w-fit mb-6 shadow-sm border border-orange-100">
                                <Zap className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-orange-900">{t('green_energy.micro.roi.title')}</h3>
                            <p className="text-slate-600 leading-relaxed">{t('green_energy.micro.roi.desc')}</p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="bg-white p-3 rounded-xl w-fit mb-6 shadow-sm border border-slate-200">
                                <Shield className="w-8 h-8 text-slate-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">{t('green_energy.micro.safety.title')}</h3>
                            <p className="text-slate-600 leading-relaxed">{t('green_energy.micro.safety.desc')}</p>
                        </motion.div>
                    </div>

                    {/* Expandable Details Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm"
                    >
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="w-full flex items-center justify-between p-6 md:p-8 bg-slate-50 hover:bg-slate-100 transition-colors group"
                            aria-expanded={isExpanded}
                        >
                            <span className="font-bold text-slate-700 text-lg flex items-center gap-3">
                                <div className="bg-white p-2 rounded-lg border border-slate-200 group-hover:border-slate-300 transition-colors">
                                    <Home className="w-5 h-5 text-slate-500 group-hover:text-slate-700" />
                                </div>
                                {t('green_energy.micro.toggle')}
                            </span>
                            <div className={`p-2 rounded-full bg-slate-200 group-hover:bg-slate-300 transition-all duration-300 ${isExpanded ? 'rotate-180 bg-orange-100 text-orange-600 group-hover:bg-orange-200' : 'text-slate-500'}`}>
                                <ChevronDown className="w-5 h-5" />
                            </div>
                        </button>

                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-8 md:p-12 border-t border-slate-100 bg-white">
                                        <p className="text-slate-600 mb-10 leading-relaxed max-w-4xl text-lg">
                                            {t('green_energy.micro.details.intro')}
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-12">
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-3 text-xl">
                                                    <div className="bg-green-100 p-2 rounded-lg">
                                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                                    </div>
                                                    {t('green_energy.micro.details.standards_title')}
                                                </h4>
                                                <ul className="space-y-4 mb-8">
                                                    {safeMap(standardsList).map((item, index) => (
                                                        <li key={index} className="text-slate-700 flex gap-3 items-start p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                                            <span className="font-medium">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="bg-slate-50 border-l-4 border-slate-300 p-4 rounded-r-lg">
                                                    <p className="text-sm text-slate-500 italic">
                                                        {t('green_energy.micro.details.cert_note')}
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-3 text-xl">
                                                    <div className="bg-blue-100 p-2 rounded-lg">
                                                        <Globe className="w-5 h-5 text-blue-600" />
                                                    </div>
                                                    {t('green_energy.micro.details.highlights_title')}
                                                </h4>
                                                <ul className="space-y-4">
                                                    {safeMap(highlightsList).map((item, index) => (
                                                        <li key={index} className="text-slate-700 flex gap-3 items-start p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                                            <span className="font-medium">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* CTA Footer */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-xl"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">{t('green_energy.footer_cta.title')}</h2>
                        <p className="text-orange-50/90 mb-8 max-w-2xl mx-auto text-lg">{t('green_energy.footer_cta.description')}</p>
                        <Link to="/#contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-all hover:scale-105 shadow-lg">
                            <Phone className="w-5 h-5" />
                            {t('green_energy.footer_cta.button')}
                        </Link>
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>
                </motion.div>
            </div>
        </div >
    );
};

export default GreenEnergy;
