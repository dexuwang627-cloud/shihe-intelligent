import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, BrainCircuit, FileBarChart } from 'lucide-react';
import SEO from '../../components/common/SEO';

const EMS = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-section pt-24 bg-slate-50 min-h-screen fade-in">
            <SEO
                title="EMS 能源管理系統"
                description="導入 AI 智慧能源管理系統 (EMS)，即時監測用電數據、預測需量並最佳化能源使用，協助企業降低契約容量超約風險。"
                keywords="EMS, 能源管理系統, 需量反應, 用電監測, 節能管理, AI能源"
                url="/services/ems"
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> 返回核心服務
                    </Link>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">數位轉型核心</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">EMS 能源管理系統</h1>
                    <p className="text-xl text-slate-600 max-w-3xl">看不見的能源浪費最可怕。世和智能 EMS 系統讓能源數據可視化，透過 AI 演算法精準預測，實現自動化最佳調度。</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 mb-16">
                    <div className="lg:w-1/2">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" className="rounded-2xl shadow-xl border border-slate-200" alt="Dashboard Mockup" />
                    </div>
                    <div className="lg:w-1/2 space-y-8">
                        <div className="flex gap-4">
                            <div className="bg-orange-100 p-3 rounded-lg h-fit text-orange-600"><Monitor className="w-6 h-6" /></div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">全場域可視化監控</h3>
                                <p className="text-slate-600">整合太陽能、儲能、用電負載於單一儀表板。支援手機 App 即時推播告警，異常狀況秒級掌握。</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-orange-100 p-3 rounded-lg h-fit text-orange-600"><BrainCircuit className="w-6 h-6" /></div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">AI 需量預測與卸載</h3>
                                <p className="text-slate-600">系統自動學習用電慣性，預測超約風險。在超約發生前自動調度儲能放電或卸載次要負載，避免高額罰款。</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-orange-100 p-3 rounded-lg h-fit text-orange-600"><FileBarChart className="w-6 h-6" /></div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">自動化報表生成</h3>
                                <p className="text-slate-600">一鍵匯出日/月/年能源報表，並可依照 ISO 50001 格式產出能耗分析報告，大幅降低管理人員負擔。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default EMS;
