import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import SEO from '../../components/common/SEO';

const Consulting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-section pt-24 bg-slate-50 min-h-screen fade-in">
            <SEO
                title="企業輔導與補助申請"
                description="提供專業的碳盤查顧問服務及政府補助申請輔導，協助企業進行 ISO 14064 認證、申請 SBIR/SIIR 等研發補助。"
                keywords="碳盤查, ISO 14064, 碳足跡, 補助申請, SBIR, SIIR, ESG顧問"
                url="/services/consulting"
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> 返回核心服務
                    </Link>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">顧問服務</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">企業輔導與補助申請</h1>
                    <p className="text-xl text-slate-600 max-w-4xl">淨零轉型不是成本，而是競爭力。我們協助企業盤點現狀、規劃路徑，並引入政府補助資源、綠色金融，降低轉型陣痛期，服務範圍涵蓋「碳數據盤查 - 減排策略制定 - 搭配政府補助實施落地 - AI監測優化節省企業用電 - 價值轉化提升企業形象」全流程。</p>
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
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm">SBIR-企業跨域研發補助</span>
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm">SIIR</span>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3 items-start">
                            <Info className="text-orange-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-orange-800">我們亦與多家公股行庫合作，協助客戶申請「綠色融資」，享有更低利率與更高成數。</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Consulting;
