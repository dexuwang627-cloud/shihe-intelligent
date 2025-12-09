import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Zap, BarChart } from 'lucide-react';
import SEO from '../../components/common/SEO';
import ParticleBackground from '../../components/ui/ParticleBackground';
import { useTranslation } from 'react-i18next';

const EMS = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-section pt-24 bg-slate-50 min-h-screen fade-in">
            <SEO
                title={t('ems.seo.title')}
                description={t('ems.seo.description')}
                keywords={t('ems.seo.keywords')}
                url="/services/ems"
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> {t('ems.back_link')}
                    </Link>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">{t('ems.badge')}</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">{t('ems.title')}</h1>
                    <p className="text-xl text-slate-600 max-w-3xl">{t('ems.description')}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-500">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-600">
                            <Monitor className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t('ems.features.visual.title')}</h3>
                        <p className="text-slate-600">{t('ems.features.visual.desc')}</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-400">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-500">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t('ems.features.prediction.title')}</h3>
                        <p className="text-slate-600">{t('ems.features.prediction.desc')}</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-600">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-700">
                            <BarChart className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t('ems.features.report.title')}</h3>
                        <p className="text-slate-600">{t('ems.features.report.desc')}</p>
                    </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-2xl relative overflow-hidden">
                    <ParticleBackground color="rgba(249, 115, 22, 0.4)" count={40} speed={0.5} />
                    <div className="relative z-10 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Dashboard Demo</h3>
                        <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden border border-slate-700 relative group cursor-pointer shadow-2xl">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                                <span className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-lg transform group-hover:scale-105 transition-transform">View Live Demo</span>
                            </div>
                            {/* Placeholder for EMS Dashboard Image */}
                            <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-slate-500">
                                EMS Dashboard UI Preview
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EMS;
