import { Link } from 'react-router-dom';
import { Download, CheckCircle, HeartPulse, Check, ShieldAlert, ScanFace } from 'lucide-react';
import SEO from '../components/common/SEO';
import { useTranslation } from 'react-i18next';

const SmartCare = () => {
    const { t } = useTranslation();

    const healthList = t('smart_care.features.health.list', { returnObjects: true });
    const fenceList = t('smart_care.features.fence.list', { returnObjects: true });
    const radarList = t('smart_care.features.radar.list', { returnObjects: true });
    const catalogTags = t('smart_care.catalog.tags', { returnObjects: true });

    return (
        <div className="fade-in pt-24">
            <SEO
                title={t('smart_care.seo.title')}
                description={t('smart_care.seo.description')}
                keywords={t('smart_care.seo.keywords')}
                url="/smart-care"
            />
            <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="bg-green-500/20 text-green-300 border border-green-500/50 px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6 inline-block">
                        {t('smart_care.hero.badge')}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('smart_care.hero.title_prefix')} <span className="text-orange-500">{t('smart_care.hero.title_suffix')}</span></h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('smart_care.hero.description') }}></p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://files.shiheintelligent.com/2025-smart-care-catalog.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 transition-all hover:-translate-y-1">
                            <Download className="w-6 h-6" /> {t('smart_care.hero.download_btn')}
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-slate-400 flex items-center justify-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" /> {t('smart_care.hero.compliance')}
                    </p>
                </div>
            </section>

            <section id="features" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('smart_care.features.title')}</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">{t('smart_care.features.subtitle')}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <HeartPulse className="w-8 h-8 text-rose-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('smart_care.features.health.title')}</h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('smart_care.features.health.desc') }}></p>
                            <ul className="space-y-2 mb-6">
                                {healthList.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500"><Check className="w-4 h-4 text-green-500" /> {item}</li>
                                ))}
                            </ul>
                            <span className="text-xs font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">{t('smart_care.features.health.badge')}</span>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <ShieldAlert className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('smart_care.features.fence.title')}</h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('smart_care.features.fence.desc') }}></p>
                            <ul className="space-y-2 mb-6">
                                {fenceList.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500"><Check className="w-4 h-4 text-green-500" /> {item}</li>
                                ))}
                            </ul>
                            <span className="text-xs font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">{t('smart_care.features.fence.badge')}</span>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <ScanFace className="w-8 h-8 text-indigo-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('smart_care.features.radar.title')}</h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('smart_care.features.radar.desc') }}></p>
                            <ul className="space-y-2 mb-6">
                                {radarList.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500"><Check className="w-4 h-4 text-green-500" /> {item}</li>
                                ))}
                            </ul>
                            <span className="text-xs font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">{t('smart_care.features.radar.badge')}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        <div className="p-10 md:p-14 text-center">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('smart_care.catalog.title')}</h2>
                            <p className="text-slate-600 mb-8 max-w-3xl mx-auto text-lg">
                                {t('smart_care.catalog.description')}
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                {catalogTags.map((tag, idx) => (
                                    <div key={idx} className="flex items-center gap-2 bg-slate-100 px-5 py-2 rounded-full border border-slate-200">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="font-medium">{tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-green-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">{t('smart_care.footer_cta.title')}</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-10">
                        {t('smart_care.footer_cta.description')}
                    </p>
                    <div className="flex justify-center">
                        <Link to="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg border border-orange-500 hover:-translate-y-1">
                            {t('smart_care.footer_cta.button')}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SmartCare;
