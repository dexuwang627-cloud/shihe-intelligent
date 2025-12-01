import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Projects = () => {
    return (
        <div className="fade-in">
            <div id="projects-list" className="page-section pt-24 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <Link to="/#projects" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                            <ArrowLeft className="w-4 h-4" /> 返回工程實績
                        </Link>
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">全案場</span>
                        <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">工程實績總覽：大小案場分類</h1>
                        <p className="text-xl text-slate-600 max-w-3xl">我們橫跨電網級大型建置到企業微型節能，為您展現最真實的專業能力。</p>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-2 mt-12">大型旗艦案場 (Megawatt Scale & Key Projects)</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">

                        <Link to="/project-detail?id=yanghwa" className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2670&auto=format&fit=crop" alt="Solar Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">太陽能/MW級</div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">洋華光電 996KW 案場</h4>
                                <p className="text-slate-600 text-xs">高效能模組與優化器導入，提升發電效率。</p>
                            </div>
                        </Link>

                        <Link to="/project-detail?id=taipeidome" className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop" alt="MEP Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">機電工程/高規格</div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">台北大巨蛋機電工程</h4>
                                <p className="text-slate-600 text-xs">承攬電氣室及變電站之高規格機電建置。</p>
                            </div>
                        </Link>

                        <Link to="/project-detail?id=energyfarm" className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1619830502123-5e921d222230?q=80&w=2670&auto=format&fit=crop" alt="Utility Scale Storage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">電網級儲能</div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">南部電網級儲能案</h4>
                                <p className="text-slate-600 text-xs">參與台電 dReg 輔助服務，確保電網穩定。</p>
                            </div>
                        </Link>

                        <Link to="/project-detail?id=factorymep" className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1629904853716-f07c87c2b6f3?q=80&w=2670&auto=format&fit=crop" alt="Factory MEPC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">廠房節能/ESCO</div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">新竹高科技廠房空調節能</h4>
                                <p className="text-slate-600 text-xs">空調節能改造，年節省電費超過 350 萬元。</p>
                            </div>
                        </Link>

                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-2 mt-12">微型與智慧應用案場 (Micro & Smart Solutions)</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">

                        <Link to="/project-detail?id=smartfarm" className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2532&auto=format&fit=crop" alt="Smart Agriculture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">智慧農業/AIoT</div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">鮮一有機智慧農場</h4>
                                <p className="text-slate-600 text-xs">建置精準環控與 AI 澆灌系統，提升產量。</p>
                            </div>
                        </Link>

                        <Link to="/project-detail?id=microbess" className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1621213328416-83a3ec7df4b9?q=80&w=2670&auto=format&fit=crop" alt="Small BESS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">微型光儲/防停電</div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">連鎖咖啡店微型儲能</h4>
                                <p className="text-slate-600 text-xs">離峰儲電與不斷電系統，節費與防災並行。</p>
                            </div>
                        </Link>

                        <Link to="/project-detail?id=carecenter" className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop" alt="Smart Care" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">長照智慧</div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">台中長照中心生理監測</h4>
                                <p className="text-slate-600 text-xs">導入非接觸式雷達，偵測長者跌倒與離床。</p>
                            </div>
                        </Link>

                        <Link to="/project-detail?id=officebess" className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1587560411319-33b5c6870c97?q=80&w=2670&auto=format&fit=crop" alt="Small Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">能源管理</div>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">小型辦公大樓 EMS</h4>
                                <p className="text-slate-600 text-xs">優化冰水主機排程，搭配需量預測，避免超約。</p>
                            </div>
                        </Link>

                    </div>

                    <div className="bg-green-500/10 border border-green-500/30 text-slate-900 rounded-2xl p-8 text-center mb-20">
                        <h3 className="text-2xl font-bold mb-3">找不到符合您規模的案例？</h3>
                        <p className="text-slate-700 mb-6">我們的解決方案皆可客製化。立即聯絡我們，為您量身打造專屬的節能方案。</p>
                        <a href="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/40">
                            預約一對一專案諮詢
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
