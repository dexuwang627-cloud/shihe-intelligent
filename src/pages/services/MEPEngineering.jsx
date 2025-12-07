
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wind, Snowflake, Recycle, Check } from 'lucide-react';
import SEO from '../../components/common/SEO';
import ParticleBackground from '../../components/ui/ParticleBackground';

const MEPEngineering = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-section pt-24 bg-slate-50 min-h-screen fade-in">
            <SEO
                title="機電與節能工程"
                description="專業機電工程整合與節能改善服務，涵蓋電力系統、空調節能、照明改善及智慧監控，提升設備效率並降低營運成本。"
                keywords="機電工程, 節能改善, 空調節能, 電力系統, 廢熱回收, 冰水主機"
                url="/services/mep-engineering"
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> 返回核心服務
                    </Link>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">節能改造工程</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">機電與節能工程</h1>
                    <p className="text-xl text-slate-600 max-w-3xl">針對高耗能設備進行系統性優化，不只節省電費，更延長設備壽命，是企業落實 ESG 的第一步。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-500">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-600">
                            <Wind className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">空調節能改造</h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-orange-500" /> 磁懸浮冰水主機汰換</li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-orange-500" /> 冷卻水塔與水泵變頻控制</li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-orange-500" /> AI 最佳化控制參數</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-400">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-500">
                            <Snowflake className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">儲冰系統工程</h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-orange-400" /> 利用離峰低電價製冰</li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-orange-400" /> 尖峰時段融冰釋冷</li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-orange-400" /> 轉移尖峰負載達 30% 以上</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-600">
                        <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-orange-700">
                            <Recycle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">廢熱與空壓回收</h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex gap-2"><Check className="w-5 h-5 text-orange-600" /> 空壓機廢熱回收製熱水</li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-orange-600" /> 製程廢氣熱能再利用</li>
                            <li className="flex gap-2"><Check className="w-5 h-5 text-orange-600" /> 整廠能源流向分析</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-orange-50 p-8 rounded-2xl relative overflow-hidden">
                    <ParticleBackground color="rgba(249, 115, 22, 0.2)" count={30} speed={0.3} />
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-orange-900 mb-4">案例效益：某電子廠節能專案</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="bg-white p-6 rounded-xl">
                                <p className="text-slate-500 text-sm">年節省電費</p>
                                <p className="text-3xl font-bold text-orange-600">350 萬元</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl">
                                <p className="text-slate-500 text-sm">投資回收期 (ROI)</p>
                                <p className="text-3xl font-bold text-orange-600">2.8 年</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl">
                                <p className="text-slate-500 text-sm">減碳效益</p>
                                <p className="text-3xl font-bold text-orange-600">480 噸/年</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MEPEngineering;
