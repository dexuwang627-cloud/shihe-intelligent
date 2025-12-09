import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Sun, Battery, Settings, CloudLightning, Home, Heart, Zap, Shield, ChevronDown, CheckCircle, Globe } from 'lucide-react';
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

    return (
        <div className="page-section pt-24 bg-slate-50 min-h-screen fade-in">
            <SEO
                title={t('green_energy.seo.title')}
                description={t('green_energy.seo.description')}
                keywords={t('green_energy.seo.keywords')}
                url="/services/green-energy"
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> {t('green_energy.back_link')}
                    </Link>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">{t('green_energy.badge')}</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">{t('green_energy.title')}</h1>
                    <p className="text-xl text-slate-600 max-w-3xl">{t('green_energy.description')}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-500 group hover:scale-105 transition-transform duration-300">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            <Sun className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t('green_energy.cards.solar.title')}</h3>
                        <p className="text-slate-600">{t('green_energy.cards.solar.desc')}</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-400 group hover:scale-105 transition-transform duration-300">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-400 group-hover:text-white transition-colors">
                            <Battery className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t('green_energy.cards.storage.title')}</h3>
                        <p className="text-slate-600">{t('green_energy.cards.storage.desc')}</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-600 group hover:scale-105 transition-transform duration-300">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-700 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <Settings className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t('green_energy.cards.om.title')}</h3>
                        <p className="text-slate-600">{t('green_energy.cards.om.desc')}</p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <CloudLightning className="text-yellow-400 w-8 h-8" />
                                {t('green_energy.hybrid.title')}
                            </h2>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                {t('green_energy.hybrid.description')}
                            </p>
                            <ul className="space-y-4">
                                {hybridList.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-slate-200">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                            <img src="/photos/wind.webp" alt="Wind Solar Hybrid" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <div className="text-center mb-12">
                        <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">New Service</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-4">{t('green_energy.micro.title')}</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">{t('green_energy.micro.description')}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                            <Heart className="w-10 h-10 text-green-600 mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-green-900">{t('green_energy.micro.charity.title')}</h3>
                            <p className="text-slate-600 text-sm">{t('green_energy.micro.charity.desc')}</p>
                        </div>
                        <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                            <Zap className="w-10 h-10 text-orange-600 mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-orange-900">{t('green_energy.micro.roi.title')}</h3>
                            <p className="text-slate-600 text-sm">{t('green_energy.micro.roi.desc')}</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <Shield className="w-10 h-10 text-slate-600 mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-slate-900">{t('green_energy.micro.safety.title')}</h3>
                            <p className="text-slate-600 text-sm">{t('green_energy.micro.safety.desc')}</p>
                        </div>
                    </div>

                    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors"
                        >
                            <span className="font-bold text-slate-700 flex items-center gap-2">
                                <Home className="w-5 h-5" />
                                {t('green_energy.micro.toggle')}
                            </span>
                            <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-8 border-t border-slate-100">
                                <p className="text-slate-600 mb-8 leading-relaxed max-w-4xl">
                                    {t('green_energy.micro.details.intro')}
                                </p>
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            {t('green_energy.micro.details.standards_title')}
                                        </h4>
                                        <ul className="space-y-3 mb-6">
                                            {standardsList.map((item, index) => (
                                                <li key={index} className="text-slate-600 text-sm flex gap-2">
                                                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5 flex-shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-xs text-slate-400 italic border-l-2 border-slate-200 pl-3">
                                            {t('green_energy.micro.details.cert_note')}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                            <Globe className="w-5 h-5 text-blue-500" />
                                            {t('green_energy.micro.details.highlights_title')}
                                        </h4>
                                        <ul className="space-y-3">
                                            {highlightsList.map((item, index) => (
                                                <li key={index} className="text-slate-600 text-sm flex gap-2">
                                                    <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-1.5 flex-shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-orange-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">{t('green_energy.footer_cta.title')}</h2>
                        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">{t('green_energy.footer_cta.description')}</p>
                        <Link to="/#contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-lg">
                            <Phone className="w-4 h-4" />
                            {t('green_energy.footer_cta.button')}
                        </Link>
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-700 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
                </div>
            </div>
        </div>
    );
};
