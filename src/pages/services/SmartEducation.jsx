
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import EducationCarousel from '../../components/ui/EducationCarousel';
import SEO from '../../components/common/SEO';
import ParticleBackground from '../../components/ui/ParticleBackground';
import { useTranslation } from 'react-i18next';

const SmartEducation = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const productTags = t('smart_education.product.tags', { returnObjects: true });

    const safeMap = (list) => Array.isArray(list) ? list : [];

    return (
        <div className="page-section pt-24 bg-white min-h-screen fade-in">
            <SEO
                title={t('smart_education.seo.title')}
                description={t('smart_education.seo.description')}
                keywords={t('smart_education.seo.keywords')}
                url="/services/smart-education"
            />
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> {t('smart_education.back_link')}
                    </Link>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">{t('smart_education.badge')}</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">{t('smart_education.title')}</h1>
                    <p className="text-xl text-slate-600 max-w-4xl">
                        {t('smart_education.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                    <div className="space-y-6">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('smart_education.intro.tech.title')}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t('smart_education.intro.tech.desc')}
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('smart_education.intro.custom.title')}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t('smart_education.intro.custom.desc')}
                            </p>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('smart_education.product.title')}</h3>
                        <p className="text-slate-700 mb-6">
                            {t('smart_education.product.desc')}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {safeMap(productTags).map((tag, index) => (
                                <span key={index} className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold shadow-sm">{tag}</span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-blue-200">
                            <a
                                href="https://files.shiheintelligent.com/V6%E5%9E%8B%E9%8C%84.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-sm"
                            >
                                <Download className="w-4 h-4" />
                                {t('smart_education.product.btn_catalog')}
                            </a>
                            <a
                                href="https://files.shiheintelligent.com/%E5%A4%9A%E5%AA%92%E9%AB%94%E8%B3%87%E8%A8%8A%E6%8E%A8%E6%92%AD%E7%B3%BB%E7%B5%B1_%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8A.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-lg transition-colors font-medium shadow-sm"
                            >
                                <Download className="w-4 h-4" />
                                {t('smart_education.product.btn_manual')}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">{t('smart_education.carousel.title')}</h2>
                    <EducationCarousel />
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <ParticleBackground color="rgba(255, 255, 255, 0.15)" count={60} speed={0.4} />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">{t('smart_education.footer.title')}</h2>
                        <p className="text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('smart_education.footer.desc')}
                        </p>
                        <p className="text-green-400 font-bold text-lg">
                            {t('smart_education.footer.highlight')}
                        </p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SmartEducation;
