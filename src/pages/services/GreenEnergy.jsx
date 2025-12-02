import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sun, Battery, Settings, Wind, Check, Home, Heart, Zap, ShieldCheck, ChevronDown } from 'lucide-react';
import SEO from '../../components/common/SEO';

const GreenEnergy = () => {
    const [isMicroStorageOpen, setIsMicroStorageOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-section pt-24 bg-slate-50 min-h-screen fade-in">
            <SEO
                title="綠電光儲建置服務"
                description="提供一站式太陽能光電與儲能系統建置服務，包含案場評估、工程設計、施工建置到維運管理，協助企業落實綠能轉型。"
                keywords="太陽能建置, 儲能系統, 綠電, 光電工程, 微電網, 漁電共生"
                url="/services/green-energy"
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> 返回核心服務
                    </Link>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">EPC 統包服務</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">綠電光儲建置服務</h1>
                    <p className="text-xl text-slate-600 max-w-3xl">從案場開發、規劃設計、工程建置到維運管理，提供全方位的一站式解決方案，確保您的綠能資產長期穩定獲利。</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full object-cover h-[400px]" alt="Solar Installation" />
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><Sun className="text-green-500" /> 太陽能發電系統</h3>
                            <p className="text-slate-600">針對屋頂型、地面型及漁電共生案場，採用 Tier 1 高效能模組與 SolarEdge/Enphase 等智慧變流器，具備電弧偵測與快速關斷功能，安全性業界最高。</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><Battery className="text-green-500" /> 儲能系統 (BESS)</h3>
                            <p className="text-slate-600">提供 dReg/E-dReg 調頻備轉輔助服務建置，以及工商業用戶端儲能（表後儲能），協助企業削峰填谷，降低契約容量與流動電費。</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2"><Settings className="text-green-500" /> 智慧維運 (O&M)</h3>
                            <p className="text-slate-600">結合無人機紅外線熱顯像巡檢與 24/7 遠端監控中心，主動發現模組異常，確保發電效率不衰退。</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img src="/photos/lightwind1.webp" alt="Wind-Solar Hybrid" className="w-full h-full object-cover min-h-[300px]" />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                <Wind className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">風光互補型發電與微電網</h3>
                        </div>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            針對離島或偏遠地區，我們提供結合小型風力發電與太陽能的「風光互補」解決方案。透過分散式微型電網技術，整合多種再生能源與儲能系統，實現能源自給自足，大幅降低對柴油發電機的依賴。
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-700">
                                <Check className="w-5 h-5 text-green-500" /> <span>全天候發電：日間太陽能，夜間風力互補</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-700">
                                <Check className="w-5 h-5 text-green-500" /> <span>能源獨立：適合無電網或電網不穩地區</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border-t-4 border-green-500">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                            <Home className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">微型家用/小型住商光儲系統</h3>
                    </div>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        家用與住商是我們未來最重要的服務對象。我們致力於將綠能帶入每個家庭，特別是偏遠山區與弱勢族群，透過科技改善生活品質，實現能源平權。
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-6 rounded-xl">
                            <div className="flex items-center gap-2 mb-3">
                                <Heart className="w-5 h-5 text-orange-500" />
                                <h4 className="font-bold text-lg text-slate-800">公益關懷與偏鄉支援</h4>
                            </div>
                            <p className="text-slate-600 text-sm">
                                針對山上隔代教養家庭，我們提供專案補助與公司贊助，改善爺爺奶奶與小朋友的生活環境，大幅降低電費負擔。
                            </p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl">
                            <div className="flex items-center gap-2 mb-3">
                                <Zap className="w-5 h-5 text-yellow-500" />
                                <h4 className="font-bold text-lg text-slate-800">五年回本與不斷電</h4>
                            </div>
                            <p className="text-slate-600 text-sm">
                                一般用戶搭配政府補助，預計五年內即可回本。系統提供持續的節費效益，並確保在電網不穩時仍有穩定的電力供應。
                            </p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl">
                            <div className="flex items-center gap-2 mb-3">
                                <ShieldCheck className="w-5 h-5 text-green-600" />
                                <h4 className="font-bold text-lg text-slate-800">最佳消防防護</h4>
                            </div>
                            <p className="text-slate-600 text-sm">
                                補齊業界缺乏的安全標準。不論微型或中小型光儲，皆配備遠端監控與獨家物理檢測器，完全符合消防規範，保障用戶安全。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-green-200 mb-12 max-w-full">
                    <button
                        onClick={() => setIsMicroStorageOpen(!isMicroStorageOpen)}
                        className="flex justify-between items-center w-full text-left font-bold text-lg text-slate-900 hover:text-orange-500 transition-colors"
                    >
                        <span>查看微型光儲介紹 (核心技術與安全標準)</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 transform ${isMicroStorageOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMicroStorageOpen && (
                        <div className="mt-4 pt-4 border-t border-slate-200">
                            <p className="text-slate-700 mb-4">在全球能源轉型與淨零碳排趨勢下，儲能將成為關鍵核心基礎建設。我們持續投入高安全電芯技術、模組化彈性架構、 AI預測運維等前沿領域，為客戶提前佈局未來10年的能源轉型需求。</p>

                            <h4 className="text-lg font-bold text-slate-900 mb-2 mt-4">國際高規安全標準</h4>
                            <ul className="text-slate-700 text-sm list-disc list-inside space-y-1 ml-4">
                                <li>UL 1973 / UL 9540A：儲能系統與熱失控及消防安全測試認證。</li>
                                <li>IEC 62619 / CNS 62619：電池模組安全標準（歐洲／台灣）。</li>
                                <li>CE / CE-EMC：歐盟產品合格與電磁相容性。</li>
                                <li>UN38.3：全球電池運輸測試，合規出口。</li>
                            </ul>

                            <p className="text-slate-700 font-bold mt-4">通過多國高規標準驗證，產品可穩定應用於各國工業、建築、微電網與醫療場域。</p>

                            <h4 className="text-lg font-bold text-slate-900 mb-2 mt-4">技術亮點與智慧運維</h4>
                            <ul className="text-slate-700 text-sm list-disc list-inside space-y-1 ml-4">
                                <li>高安全設計：低壓模組、獨立熱斷保護、可熱插拔，強化現場使用安全與系統穩定性。</li>
                                <li>智慧化運維：模組級監控、雲端資料分析、SOH預測，打造預防性維護機制。</li>
                                <li>國際法規同步布局：掌握IEC／UL／CE等標準趨勢，因應出口市場認證需求。</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 mb-20 text-center">
                    <h2 className="text-3xl font-bold mb-4">準備好啟動您的綠能專案了嗎？</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">我們提供免費的場域評估與財務模型試算，讓您清楚了解投資回報。</p>
                    <a href="/#contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-green-500/30">立即預約評估</a>
                </div>
            </div>
        </div>
    );
};

export default GreenEnergy;
