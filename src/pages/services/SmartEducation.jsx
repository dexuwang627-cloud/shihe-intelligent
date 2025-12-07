
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import EducationCarousel from '../../components/ui/EducationCarousel';
import SEO from '../../components/common/SEO';
import ParticleBackground from '../../components/ui/ParticleBackground';

const SmartEducation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-section pt-24 bg-white min-h-screen fade-in">
            <SEO
                title="智慧教育與校園數位化"
                description="打造現代化智慧校園，提供智慧黑板、互動教學系統及校園能源管理方案，提升教學品質並落實校園節能。"
                keywords="智慧教育, 智慧黑板, 互動教學, 智慧校園, 數位學習, 校園節能"
                url="/services/smart-education"
            />
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <Link to="/services" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> 返回核心服務
                    </Link>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">智慧校園</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">智慧教育與校園數位化</h1>
                    <p className="text-xl text-slate-600 max-w-4xl">
                        本公司深耕智慧教育領域逾 7 年，專注於智慧教室整體解決方案規劃、智慧黑板等核心設備供應與一站式安裝服務，累積了極為豐富的項目執行經驗與技術沉澱，任何場域均難不倒我們。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                    <div className="space-y-6">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">科技賦能教育</h3>
                            <p className="text-slate-600 leading-relaxed">
                                7 年來，我們始終以「科技賦能教育」為核心使命，憑藉對教育場景的深刻理解、成熟的技術團隊與嚴格的品質管控體系，已成功為全國多地各級學校（涵蓋幼兒園、中小學、職業院校、高等院校及補習班）完成 3000 間智慧教室的全流程建置，服務師生超數十萬人次，服務範圍包含全台灣，贏得教育主管部門、學校及業界的高度認可與口碑。
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">量身定製的全生命週期服務</h3>
                            <p className="text-slate-600 leading-relaxed">
                                在項目執行過程中，我們堅持「量身定製」的規劃理念，根據不同學校的教學需求、場地條件與預算規模，提供從前期現場勘測、方案設計、設備選型、軟硬件集成，到後續安裝調試、教師培訓、售後維護的全生命週期服務。
                            </p>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">核心產品：智慧黑板</h3>
                        <p className="text-slate-700 mb-6">
                            融合了高清顯示、觸控互動、多媒體教學、無線投屏等多項功能，兼容傳統黑板書寫體驗與現代數位教學優勢，並可與校園智慧管理平台、線上教學資源庫實現無縫對接，有效打破傳統教學模式的局限，提升課堂互動性與教學效率。
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold shadow-sm">高清顯示</span>
                            <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold shadow-sm">觸控互動</span>
                            <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold shadow-sm">無線投屏</span>
                            <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold shadow-sm">多媒體教學</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-blue-200">
                            <a
                                href="https://files.shiheintelligent.com/V6%E5%9E%8B%E9%8C%84.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-sm"
                            >
                                <Download className="w-4 h-4" />
                                下載 V6 智慧黑板型錄
                            </a>
                            <a
                                href="https://files.shiheintelligent.com/%E5%A4%9A%E5%AA%92%E9%AB%94%E8%B3%87%E8%A8%8A%E6%8E%A8%E6%92%AD%E7%B3%BB%E7%B5%B1_%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8A.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-lg transition-colors font-medium shadow-sm"
                            >
                                <Download className="w-4 h-4" />
                                下載多媒體系統操作手冊
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">智慧教室應用場景</h2>
                    <EducationCarousel />
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <ParticleBackground color="rgba(255, 255, 255, 0.15)" count={60} speed={0.4} />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">3000 間智慧教室的成功見證</h2>
                        <p className="text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            這不僅印證了我們在技術實力、項目管理與服務品質上的硬實力，更積累了大量針對不同教學場景（如普通教室、多媒體教室、實驗室、階梯教室等）的成熟解決方案與應對經驗，能夠靈活應對項目實施中可能出現的各類複雜問題，確保每一個項目都能高標準、高質量交付。
                        </p>
                        <p className="text-green-400 font-bold text-lg">
                            未來，我們將持續深耕智慧教育領域，為更多學校打造高品質、智能化的教學空間，助力教育數位化轉型與高質量發展。
                        </p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SmartEducation;
