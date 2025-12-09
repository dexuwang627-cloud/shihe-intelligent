import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Droplets, Lightbulb, Activity, AlertCircle, MapPin, BookOpen } from 'lucide-react';
import SEO from '../../components/common/SEO';
import { useTranslation, Trans } from 'react-i18next';

const SmartAgriculture = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-section pt-24 bg-slate-50 min-h-screen fade-in">
            <SEO
                title={t('smart_agriculture.seo.title')}
                description={t('smart_agriculture.seo.description')}
                keywords={t('smart_agriculture.seo.keywords')}
                url="/services/smart-agriculture"
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> {t('smart_agriculture.back_link')}
                    </Link>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">{t('smart_agriculture.badge')}</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">{t('smart_agriculture.title')}</h1>
                    <p className="text-xl text-slate-600 max-w-3xl">{t('smart_agriculture.description')}</p>
                </div>

                <div className="bg-green-50/70 p-6 rounded-xl border border-green-200 mb-12">
                    <h3 className="text-2xl font-bold text-green-900 mb-3 flex items-center gap-2"><TrendingUp className="w-6 h-6" /> {t('smart_agriculture.intro_box.title')}</h3>
                    <p className="text-slate-700">
                        <Trans i18nKey="smart_agriculture.intro_box.text" components={{ span: <span /> }} />
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden group">
                        <div className="h-64 overflow-hidden relative">
                            <img src="/photos/agri2.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Smart Farm" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                                <h3 className="text-2xl font-bold text-white">{t('smart_agriculture.cards.agri.title')}</h3>
                            </div>
                        </div>
                        <div className="p-8">
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                                        <img src="/photos/agri1.webp" alt="Energy Independent" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{t('smart_agriculture.cards.agri.monitor.title')}</h4>
                                        <p className="text-slate-600 text-sm mb-2">{t('smart_agriculture.cards.agri.monitor.desc')}</p>
                                        <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">{t('smart_agriculture.cards.agri.monitor.tag')}</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600 h-fit"><Droplets className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">{t('smart_agriculture.cards.agri.ai.title')}</h4>
                                        <p className="text-slate-600 text-sm">{t('smart_agriculture.cards.agri.ai.desc')}</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600 h-fit"><Lightbulb className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">{t('smart_agriculture.cards.agri.light.title')}</h4>
                                        <p className="text-slate-600 text-sm">{t('smart_agriculture.cards.agri.light.desc')}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md overflow-hidden group">
                        <div className="h-64 overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Smart Care" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                                <h3 className="text-2xl font-bold text-white">{t('smart_agriculture.cards.care.title')}</h3>
                            </div>
                        </div>
                        <div className="p-8">
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600 h-fit"><Activity className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">{t('smart_agriculture.cards.care.contactless.title')}</h4>
                                        <p className="text-slate-600 text-sm">{t('smart_agriculture.cards.care.contactless.desc')}</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600 h-fit"><AlertCircle className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">{t('smart_agriculture.cards.care.fall.title')}</h4>
                                        <p className="text-slate-600 text-sm">{t('smart_agriculture.cards.care.fall.desc')}</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600 h-fit"><MapPin className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">{t('smart_agriculture.cards.care.fence.title')}</h4>
                                        <p className="text-slate-600 text-sm">{t('smart_agriculture.cards.care.fence.desc')}</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <Link to="/smart-care" className="flex items-center justify-center gap-2 w-full bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white border border-orange-200 font-bold py-3 rounded-xl transition-all group-hover:shadow-md">
                                    <BookOpen className="w-5 h-5" />
                                    {t('smart_agriculture.cards.care.button')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartAgriculture;
