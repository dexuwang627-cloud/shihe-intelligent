import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Wind, Monitor, FileBarChart, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: 'green-energy',
            title: '綠電光儲建置服務',
            description: '太陽能、儲能系統(BESS)、微電網與風光互補發電，提供從開發到維運的一站式解決方案。',
            icon: <Sun className="w-12 h-12 text-green-500" />,
            link: '/services/green-energy',
            color: 'bg-green-50 border-green-200 hover:border-green-500',
            btnColor: 'text-green-600 group-hover:text-green-700'
        },
        {
            id: 'mep-engineering',
            title: '機電與節能工程',
            description: '空調節能、儲冰系統、廢熱回收與整廠機電規劃，針對高耗能設備進行系統性優化。',
            icon: <Wind className="w-12 h-12 text-orange-500" />,
            link: '/services/mep-engineering',
            color: 'bg-orange-50 border-orange-200 hover:border-orange-500',
            btnColor: 'text-orange-600 group-hover:text-orange-700'
        },
        {
            id: 'ems',
            title: 'EMS 能源管理系統',
            description: '全場域可視化監控、AI 需量預測與自動化報表，讓能源數據成為企業決策的核心。',
            icon: <Monitor className="w-12 h-12 text-blue-500" />,
            link: '/services/ems',
            color: 'bg-blue-50 border-blue-200 hover:border-blue-500',
            btnColor: 'text-blue-600 group-hover:text-blue-700'
        },
        {
            id: 'consulting',
            title: '企業輔導與補助申請',
            description: '碳盤查(ISO 14064)、碳足跡(ISO 14067)與政府節能補助申請，協助企業無痛轉型。',
            icon: <FileBarChart className="w-12 h-12 text-purple-500" />,
            link: '/services/consulting',
            color: 'bg-purple-50 border-purple-200 hover:border-purple-500',
            btnColor: 'text-purple-600 group-hover:text-purple-700'
        },
        {
            id: 'smart-agriculture',
            title: '智慧農業/智慧照護',
            description: 'AIoT 跨域應用，包含智慧溫室環控、長照生理監測與電子圍籬，解決勞動力短缺問題。',
            icon: <TrendingUp className="w-12 h-12 text-teal-500" />,
            link: '/services/smart-agriculture',
            color: 'bg-teal-50 border-teal-200 hover:border-teal-500',
            btnColor: 'text-teal-600 group-hover:text-teal-700'
        },
        {
            id: 'smart-education',
            title: '智慧教育與校園數位化',
            description: '智慧黑板、互動教學系統與校園數位化整合方案，打造現代化的高效學習環境。',
            icon: <BookOpen className="w-12 h-12 text-indigo-500" />,
            link: '/services/smart-education',
            color: 'bg-indigo-50 border-indigo-200 hover:border-indigo-500',
            btnColor: 'text-indigo-600 group-hover:text-indigo-700'
        }
    ];

    return (
        <div className="page-section pt-32 pb-20 bg-white min-h-screen fade-in">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">核心服務與解決方案</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        世和智能致力於提供全方位的能源與智慧化解決方案，從綠能建設、節能工程到跨域 AI 應用，協助客戶實現永續發展目標。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            to={service.link}
                            className={`group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${service.color}`}
                        >
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <div className={`flex items-center gap-2 font-bold ${service.btnColor}`}>
                                了解更多 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
