import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Sun, Battery, Settings, Wind, Snowflake, Recycle, Monitor, BrainCircuit, FileBarChart, TrendingUp, CloudRain, Droplets, Lightbulb, Activity, AlertCircle, MapPin, BookOpen, Check, Info } from 'lucide-react';

const Services = () => {
    const [isMicroStorageOpen, setIsMicroStorageOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="fade-in">
            <div id="service-solar" className="page-section pt-24 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <Link to="/#services" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition-colors font-medium mb-4">
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

            <div id="service-mep" className="page-section pt-24 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <Link to="/#services" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
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

                    <div className="bg-orange-50 p-8 rounded-2xl">
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

            <div id="service-ems" className="page-section pt-24 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <Link to="/#services" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
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
                </div>
            </div>

            <div id="service-consult" className="page-section pt-24 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <Link to="/#services" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                            <ArrowLeft className="w-4 h-4" /> 返回核心服務
                        </Link>
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">顧問服務</span>
                        <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">企業輔導與補助申請</h1>
                        <p className="text-xl text-slate-600 max-w-3xl">淨零轉型不是成本，而是競爭力。我們協助企業盤點現狀、規劃路徑，並引入政府資源，降低轉型陣痛期。</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">碳管理顧問服務</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
                                    <div>
                                        <h4 className="font-bold text-lg">ISO 14064-1 溫室氣體盤查</h4>
                                        <p className="text-slate-600 text-sm">協助界定盤查邊界、排放源鑑別、數據收集與報告書撰寫。</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
                                    <div>
                                        <h4 className="font-bold text-lg">ISO 14067 產品碳足跡</h4>
                                        <p className="text-slate-600 text-sm">針對出口導向產品進行生命週期碳足跡計算，因應 CBAM 規範。</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">3</span>
                                    <div>
                                        <h4 className="font-bold text-lg">科學基礎減量目標 (SBTi)</h4>
                                        <p className="text-slate-600 text-sm">輔導企業設定符合國際標準的短中長期減碳路徑。</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">補助與綠色金融</h3>
                            <p className="text-slate-600 mb-6">政府每年皆有編列預算補助企業汰換老舊設備與建置節能系統。我們擁有專業團隊協助撰寫計畫書，大幅提高核定機率。</p>

                            <h4 className="font-bold text-lg mb-3">常見補助項目：</h4>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm">經濟部節能績效保證專案</span>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm">廢熱回收補助</span>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm">商業服務業節能設備汰換</span>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm">智慧機械投資抵減</span>
                            </div>

                            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3 items-start">
                                <Info className="text-orange-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-orange-800">我們亦與多家公股行庫合作，協助客戶申請「綠色融資」，享有更低利率與更高成數。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="service-smart" className="page-section pt-24 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <Link to="/#services" className="flex items-center gap-2 text-slate-500 hover:text-green-600 transition-colors font-medium mb-4">
                            <ArrowLeft className="w-4 h-4" /> 返回核心服務
                        </Link>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">跨域應用</span>
                        <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">智慧農業與長照應用</h1>
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
                                            <h4 className="font-bold text-lg">AI 智慧澆灌決策</h4>
                                            <p className="text-slate-600 text-sm">依據作物生長曲線與天氣預報，自動控制水閥與施肥機，節省 30% 以上水肥用量。</p>
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
        </div>
    );
};

export default Services;
