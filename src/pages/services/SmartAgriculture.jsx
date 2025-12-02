import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Droplets, Lightbulb, Activity, AlertCircle, MapPin, BookOpen } from 'lucide-react';
import SEO from '../../components/common/SEO';

const SmartAgriculture = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-section pt-24 bg-slate-50 min-h-screen fade-in">
            <SEO
                title="智慧農業/智慧照護"
                description="結合 IoT 與 AI 技術的智慧農業解決方案，包含環境監測、自動澆灌與環控系統。另延伸至長照領域，提供安全監測服務。"
                keywords="智慧農業, 智慧溫室, 環境監測, 自動澆灌, 智慧照護, IoT農業"
                url="/services/smart-agriculture"
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> 返回核心服務
                    </Link>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">跨域應用</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">智慧農業/智慧照護</h1>
                    <p className="text-xl text-slate-600 max-w-3xl">將 AIoT 核心技術延伸至農業與照護領域，用科技解決勞動力短缺問題，提升生產效率與照護品質。我們理解農民的辛勞，並全力協助運用政府補助，提供更優質的種植環境。</p>
                </div>

                <div className="bg-green-50/70 p-6 rounded-xl border border-green-200 mb-12">
                    <h3 className="text-2xl font-bold text-green-900 mb-3 flex items-center gap-2"><TrendingUp className="w-6 h-6" /> 友善營運：政府獎助與零年費</h3>
                    <p className="text-slate-700">我們為業主設想，提供的智慧系統<span className="font-bold text-orange-600">無須支付年費</span>。此外，現有長照智慧化補助（獎助）將在 <span className="font-bold">115-116年進入最後一期</span>，只要確實執行並數據完整，政府驗收後即撥款，我們將全力協助您爭取這筆資源。</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden group">
                        <div className="h-64 overflow-hidden relative">
                            <img src="/photos/agri2.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Smart Farm" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                                <h3 className="text-2xl font-bold text-white">智慧農業環控</h3>
                            </div>
                        </div>
                        <div className="p-8">
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                                        <img src="/photos/agri1.webp" alt="Energy Independent" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">微氣候精準監測</h4>
                                        <p className="text-slate-600 text-sm mb-2">即時監測溫濕度、光照、土壤酸鹼值(EC/pH)，數據上傳雲端戰情室。</p>
                                        <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">能源獨立解決方案</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600 h-fit"><Droplets className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">AI 智慧管理系統</h4>
                                        <p className="text-slate-600 text-sm">AI管理作物生長預測、採收預警、安防管理(光儲監視系統)</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600 h-fit"><Lightbulb className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">智慧光照與波長優化</h4>
                                        <p className="text-slate-600 text-sm">提供各品種作物光照波長專業建議，搭配智慧光照系統，可將作物採收期提早 7-10 天。</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md overflow-hidden group">
                        <div className="h-64 overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Smart Care" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                                <h3 className="text-2xl font-bold text-white">長照智慧監測</h3>
                            </div>
                        </div>
                        <div className="p-8">
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600 h-fit"><Activity className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">非接觸式生理監測</h4>
                                        <p className="text-slate-600 text-sm">利用毫米波雷達偵測長者呼吸與心律，無須穿戴裝置，舒適度高。</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600 h-fit"><AlertCircle className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">跌倒偵測與離床告警</h4>
                                        <p className="text-slate-600 text-sm">AI 影像辨識或雷達偵測異常姿態，即時通報護理站，掌握黃金救援時間。</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600 h-fit"><MapPin className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">電子圍籬與離區警報</h4>
                                        <p className="text-slate-600 text-sm">長者配戴手錶，一旦超出安全活動範圍，系統將立即發出警鈴與通知，供照護人員處理。</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <Link to="/smart-care" className="flex items-center justify-center gap-2 w-full bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white border border-orange-200 font-bold py-3 rounded-xl transition-all group-hover:shadow-md">
                                    <BookOpen className="w-5 h-5" />
                                    查看 2025 完整照護型錄
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartAgriculture;
