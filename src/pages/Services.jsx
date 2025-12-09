import { useEffect } from 'react';
import { Sun, Wind, Monitor, FileBarChart, TrendingUp, BookOpen } from 'lucide-react';
import SEO from '../components/common/SEO';
import FadeIn from '../components/common/FadeIn';
import ServiceCard from '../components/ui/ServiceCard';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: 'green-energy',
            title: t('services_page.items.green-energy.title'),
            description: t('services_page.items.green-energy.description'),
            icon: <Sun />,
            link: '/services/green-energy',
            gradientFrom: 'from-green-500',
            gradientTo: 'to-emerald-600',
            iconColor: 'text-green-500',
            btnColor: 'text-green-600'
        },
        {
            id: 'mep-engineering',
            title: t('services_page.items.mep-engineering.title'),
            description: t('services_page.items.mep-engineering.description'),
            icon: <Wind />,
            link: '/services/mep-engineering',
            gradientFrom: 'from-orange-400',
            gradientTo: 'to-red-500',
            iconColor: 'text-orange-500',
            btnColor: 'text-orange-600'
        },
        {
            id: 'ems',
            title: t('services_page.items.ems.title'),
            description: t('services_page.items.ems.description'),
            icon: <Monitor />,
            link: '/services/ems',
            gradientFrom: 'from-blue-400',
            gradientTo: 'to-indigo-600',
            iconColor: 'text-blue-500',
            btnColor: 'text-blue-600'
        },
        {
            id: 'consulting',
            title: t('services_page.items.consulting.title'),
            description: t('services_page.items.consulting.description'),
            icon: <FileBarChart />,
            link: '/services/consulting',
            gradientFrom: 'from-purple-400',
            gradientTo: 'to-violet-600',
            iconColor: 'text-purple-500',
            btnColor: 'text-purple-600'
        },
        {
            id: 'smart-agriculture',
            title: t('services_page.items.smart-agriculture.title'),
            description: t('services_page.items.smart-agriculture.description'),
            icon: <TrendingUp />,
            link: '/services/smart-agriculture',
            gradientFrom: 'from-teal-400',
            gradientTo: 'to-cyan-600',
            iconColor: 'text-teal-500',
            btnColor: 'text-teal-600'
        },
        {
            id: 'smart-education',
            title: t('services_page.items.smart-education.title'),
            description: t('services_page.items.smart-education.description'),
            icon: <BookOpen />,
            link: '/services/smart-education',
            gradientFrom: 'from-indigo-400',
            gradientTo: 'to-blue-600',
            iconColor: 'text-indigo-500',
            btnColor: 'text-indigo-600'
        }
    ];

    return (
        <div className="page-section pt-32 pb-20 bg-slate-50 min-h-screen">
            <SEO
                title={t('services_page.seo.title')}
                description={t('services_page.seo.description')}
            />
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t('services_page.title')}</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('services_page.subtitle')}
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
