import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import SEO from '../../components/common/SEO';
import { useTranslation } from 'react-i18next';

const Consulting = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subsidyItems = t('consulting.subsidy.items', { returnObjects: true });

    const safeMap = (list) => Array.isArray(list) ? list : [];

    return (
        <div className="page-section pt-24 bg-slate-50 min-h-screen fade-in">
            <SEO
                title={t('consulting.seo.title')}
                description={t('consulting.seo.description')}
                keywords={t('consulting.seo.keywords')}
                url="/services/consulting"
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> {t('consulting.back_link')}
                    </Link>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">{t('consulting.badge')}</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">{t('consulting.title')}</h1>
                    <p className="text-xl text-slate-600 max-w-4xl">{t('consulting.description')}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">{t('consulting.carbon.title')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
                                <div>
                                    <h4 className="font-bold text-lg">{t('consulting.carbon.iso14064.title')}</h4>
                                    <p className="text-slate-600 text-sm">{t('consulting.carbon.iso14064.desc')}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
                                <div>
                                    <h4 className="font-bold text-lg">{t('consulting.carbon.iso14067.title')}</h4>
                                    <p className="text-slate-600 text-sm">{t('consulting.carbon.iso14067.desc')}</p>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">{t('consulting.subsidy.title')}</h3>
                        <p className="text-slate-600 mb-6">{t('consulting.subsidy.description')}</p>

                        <h4 className="font-bold text-lg mb-3">{t('consulting.subsidy.common_items_title')}</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {safeMap(subsidyItems).map((item, index) => (
                                <span key={index} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm">{item}</span>
                            ))}
                        </div>

                        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3 items-start">
                            <Info className="text-orange-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-orange-800">{t('consulting.subsidy.finance_note')}</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Consulting;
