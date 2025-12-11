
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wind, Snowflake, Recycle, Check } from 'lucide-react';
import SEO from '../../components/common/SEO';
import ParticleBackground from '../../components/ui/ParticleBackground';
import { useTranslation } from 'react-i18next';

const MEPEngineering = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hvacList = t('mep_engineering.cards.hvac.list', { returnObjects: true });
    const iceList = t('mep_engineering.cards.ice.list', { returnObjects: true });
    const heatList = t('mep_engineering.cards.heat.list', { returnObjects: true });

    const safeMap = (list) => Array.isArray(list) ? list : [];

    return (
        <div className="page-section pt-24 bg-slate-50 min-h-screen fade-in">
            <SEO
                title={t('mep_engineering.seo.title')}
                description={t('mep_engineering.seo.description')}
                keywords={t('mep_engineering.seo.keywords')}
                url="/services/mep-engineering"
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> {t('mep_engineering.back_link')}
                    </Link>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">{t('mep_engineering.badge')}</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">{t('mep_engineering.title')}</h1>
                    <p className="text-xl text-slate-600 max-w-3xl">{t('mep_engineering.description')}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-500">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-600">
                            <Wind className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t('mep_engineering.cards.hvac.title')}</h3>
                        <ul className="space-y-3 text-slate-600">
                            {safeMap(hvacList).map((item, index) => (
                                <li key={index} className="flex gap-2"><Check className="w-5 h-5 text-orange-500" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-400">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-500">
                            <Snowflake className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t('mep_engineering.cards.ice.title')}</h3>
                        <ul className="space-y-3 text-slate-600">
                            {safeMap(iceList).map((item, index) => (
                                <li key={index} className="flex gap-2"><Check className="w-5 h-5 text-orange-400" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-600">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-700">
                            <Recycle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t('mep_engineering.cards.heat.title')}</h3>
                        <ul className="space-y-3 text-slate-600">
                            {safeMap(heatList).map((item, index) => (
                                <li key={index} className="flex gap-2"><Check className="w-5 h-5 text-orange-600" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-orange-50 p-8 rounded-2xl relative overflow-hidden">
                    <ParticleBackground color="rgba(249, 115, 22, 0.2)" count={30} speed={0.3} />
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-orange-900 mb-4">{t('mep_engineering.case_study.title')}</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="bg-white p-6 rounded-xl">
                                <p className="text-slate-500 text-sm">{t('mep_engineering.case_study.saving.label')}</p>
                                <p className="text-3xl font-bold text-orange-600">{t('mep_engineering.case_study.saving.value')}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl">
                                <p className="text-slate-500 text-sm">{t('mep_engineering.case_study.roi.label')}</p>
                                <p className="text-3xl font-bold text-orange-600">{t('mep_engineering.case_study.roi.value')}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl">
                                <p className="text-slate-500 text-sm">{t('mep_engineering.case_study.carbon.label')}</p>
                                <p className="text-3xl font-bold text-orange-600">{t('mep_engineering.case_study.carbon.value')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MEPEngineering;
