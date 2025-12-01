import { Link } from 'react-router-dom';
import { Download, CheckCircle, HeartPulse, Check, ShieldAlert, ScanFace } from 'lucide-react';

const SmartCare = () => {
    return (
        <div className="fade-in pt-24">
            <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="bg-green-500/20 text-green-300 border border-green-500/50 px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6 inline-block">
                        2025 最新版發布
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">智慧照顧管理系統 <span className="text-orange-500">2.0</span></h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        結合 AIoT 生理監測、電子圍籬與毫米波雷達技術。專為長照機構打造的<span className="text-white font-bold">零年費</span>、<span className="text-white font-bold">高隱私</span>智慧解決方案。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://files.shiheintelligent.com/2025-smart-care-catalog.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 transition-all hover:-translate-y-1">
                            <Download className="w-6 h-6" /> 下載 2025 完整型錄 (PDF)
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-slate-400 flex items-center justify-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" /> 符合 115-116 年政府補助規範
                    </p>
                </div>
            </section>

            <section id="features" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">科技輔助，讓照護更有溫度</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">我們精選了型錄中最受歡迎的三大應用套餐，協助機構減輕巡房負擔，提升住民安全。</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <HeartPulse className="w-8 h-8 text-rose-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">24H 生理健康監測</h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                透過輕量化智慧手環，即時監測住民的<span className="font-bold text-slate-800">心率、血氧與體溫</span>。數據異常時自動發送告警至護理站，減少夜間巡房干擾。
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-slate-500"><Check className="w-4 h-4 text-green-500" /> 超長續航力達 2 週</li>
                                <li className="flex items-center gap-2 text-sm text-slate-500"><Check className="w-4 h-4 text-green-500" /> IP67 防水防塵設計</li>
                            </ul>
                            <span className="text-xs font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">型錄套餐 1</span>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <ShieldAlert className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">電子圍籬防走失</h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                針對失智或高風險住民，在出入口設置藍牙感測點。當佩戴手環的長者接近管制區域時，系統立即啟動<span className="font-bold text-slate-800">聲光警示與推播通知</span>。
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-slate-500"><Check className="w-4 h-4 text-green-500" /> 支援多點區域偵測</li>
                                <li className="flex items-center gap-2 text-sm text-slate-500"><Check className="w-4 h-4 text-green-500" /> Line 群組即時通報</li>
                            </ul>
                            <span className="text-xs font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">型錄套餐 4</span>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <ScanFace className="w-8 h-8 text-indigo-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">浴廁隱私跌倒偵測</h3>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                採用先進的<span className="font-bold text-slate-800">毫米波雷達技術</span>，無需安裝攝影機，即可精準偵測浴室內的跌倒或異常久滯事件，完全保障隱私。
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-slate-500"><Check className="w-4 h-4 text-green-500" /> 無影像隱私爭議</li>
                                <li className="flex items-center gap-2 text-sm text-slate-500"><Check className="w-4 h-4 text-green-500" /> 抗水氣干擾設計</li>
                            </ul>
                            <span className="text-xs font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">型錄套餐 10</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        <div className="p-10 md:p-14 text-center">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">滿足機構評鑑的所有需求</h2>
                            <p className="text-slate-600 mb-8 max-w-3xl mx-auto text-lg">
                                我們的 2025 型錄包含了 13 種完整的照護套餐，從最基礎的緊急呼叫到進階的 AI 影像分析，皆可彈性組合。
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                <div className="flex items-center gap-2 bg-slate-100 px-5 py-2 rounded-full border border-slate-200"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span className="font-medium">臥床/離床管理</span></div>
                                <div className="flex items-center gap-2 bg-slate-100 px-5 py-2 rounded-full border border-slate-200"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span className="font-medium">智慧尿濕感測</span></div>
                                <div className="flex items-center gap-2 bg-slate-100 px-5 py-2 rounded-full border border-slate-200"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span className="font-medium">空氣品質監測</span></div>
                                <div className="flex items-center gap-2 bg-slate-100 px-5 py-2 rounded-full border border-slate-200"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span className="font-medium">點滴/爐火安全</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-green-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">把握 115-116 年最後一期獎助機會</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-10">
                        只要數據完整、確實執行，政府驗收後即撥款。我們的系統無年費，是您升級智慧機構的最佳夥伴。
                    </p>
                    <div className="flex justify-center">
                        <Link to="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg border border-orange-500 hover:-translate-y-1">
                            預約專人解說
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SmartCare;
