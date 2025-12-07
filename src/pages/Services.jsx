import { useEffect } from 'react';
import { Sun, Wind, Monitor, FileBarChart, TrendingUp, BookOpen } from 'lucide-react';
import SEO from '../components/common/SEO';
import FadeIn from '../components/common/FadeIn';
import ServiceCard from '../components/ui/ServiceCard';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: 'green-energy',
            title: '綠電光儲建置服務',
            description: '太陽能、儲能系統(BESS)、微電網與風光互補發電，提供從開發到維運的一站式解決方案。',
            icon: <Sun />,
            link: '/services/green-energy',
            gradientFrom: 'from-green-500',
            gradientTo: 'to-emerald-600',
            iconColor: 'text-green-500',
            btnColor: 'text-green-600'
        },
        {
            id: 'mep-engineering',
            title: '機電與節能工程',
            description: '空調節能、儲冰系統、廢熱回收與整廠機電規劃，針對高耗能設備進行系統性優化。',
            icon: <Wind />,
            link: '/services/mep-engineering',
            gradientFrom: 'from-orange-400',
            gradientTo: 'to-red-500',
            iconColor: 'text-orange-500',
            btnColor: 'text-orange-600'
        },
        {
            id: 'ems',
            title: 'EMS 能源管理系統',
            description: '全場域可視化監控、AI 需量預測與自動化報表，讓能源數據成為企業決策的核心。',
            icon: <Monitor />,
            link: '/services/ems',
            gradientFrom: 'from-blue-400',
            gradientTo: 'to-indigo-600',
            iconColor: 'text-blue-500',
            btnColor: 'text-blue-600'
        },
        {
            id: 'consulting',
            title: '企業輔導與補助申請',
            description: '碳盤查(ISO 14064)、碳足跡(ISO 14067)與政府節能補助申請，協助企業無痛轉型。',
            icon: <FileBarChart />,
            link: '/services/consulting',
            gradientFrom: 'from-purple-400',
            gradientTo: 'to-violet-600',
            iconColor: 'text-purple-500',
            btnColor: 'text-purple-600'
        },
        {
            id: 'smart-agriculture',
            title: '智慧農業/智慧照護',
            description: 'AIoT 跨域應用，包含智慧溫室環控、長照生理監測與電子圍籬，解決勞動力短缺問題。',
            icon: <TrendingUp />,
            link: '/services/smart-agriculture',
            gradientFrom: 'from-teal-400',
            gradientTo: 'to-cyan-600',
            iconColor: 'text-teal-500',
            btnColor: 'text-teal-600'
        },
        {
            id: 'smart-education',
            title: '智慧教育與校園數位化',
            description: '智慧黑板、互動教學系統與校園數位化整合方案，打造現代化的高效學習環境。',
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
                title="核心服務"
                description="世和智能提供六大核心服務：綠電光儲、機電節能、EMS能源管理、企業輔導、智慧農業與智慧教育。"
            />
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">核心服務與解決方案</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            世和智能致力於提供全方位的能源與智慧化解決方案，從綠能建設、節能工程到跨域 AI 應用，協助客戶實現永續發展目標。
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
