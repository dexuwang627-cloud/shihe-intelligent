import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, CheckCircle2, Sun, Zap, Sprout, Cpu, BarChart3, ArrowRight, Battery, Shield, Leaf, Award, Users, Globe, Wind } from 'lucide-react';
import React, { lazy, Suspense } from 'react';
import HeroCarousel from '../components/ui/HeroCarousel';
import ContactForm from '../components/ui/ContactForm';
import SEO from '../components/common/SEO';
import FadeIn from '../components/common/FadeIn';
// import TechScene from '../components/three/TechScene';
import TextReveal from '../components/common/TextReveal';
import ParallaxSection from '../components/common/ParallaxSection';
import CountUp from '../components/common/CountUp';

const TechScene = lazy(() => import('../components/three/TechScene'));

const Home = () => {
    return (
        <div id="page-home" className="page-section">
            <SEO
                title="首頁"
                description="世和智能致力於提供全方位的綠能光儲、機電工程、EMS能源管理及智慧農業解決方案，協助企業達成淨零碳排目標。"
            />

            <HeroCarousel />

            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="right">
                            <div className="relative mb-8">
                                <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-xl relative">
                                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                        <Building2 className="w-16 h-16" />
                                    </div>
                                    <img
                                        src="/photos/award1.webp"
                                        alt="Company Award"
                                        className="absolute inset-0 w-full h-full object-cover object-top"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                                            <ShieldCheck className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">專案管理經驗</p>
                                            <p className="text-2xl font-bold text-slate-800">
                                                <CountUp to={17} suffix="+ 年" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl shadow-sm">
                                <p className="text-green-800 font-bold text-lg mb-1">2023 綠色科技創新獎</p>
                                <p className="text-green-700">肯定我們在能源數據應用上的領先地位。</p>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2}>
                            <div>
                                <TextReveal text="關於世和智能" className="text-green-600 font-bold tracking-wide uppercase mb-2 block" />
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">國家級戰略視野 <br />全省在地化專業服務</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    世和智能定位為淨零轉型的領航者，團隊核心成員擁有中科院17年系統與專案管理經驗。我們不僅是工程建置商，更是企業的策略夥伴。
                                </p>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    我們的願景是成為亞洲地區綠色能源數據應用的領導者，將複雜的能源管理轉化為簡單、高效且具備 AI 預測能力的智能系統，為客戶資產創造長期的永續價值。
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1 w-5 h-5" />
                                        <span className="text-slate-700">國科會淨零成員；ESCO協會成員、軟協成員：參與國家級戰略，掌握前沿科技</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1 w-5 h-5" />
                                        <span className="text-slate-700">一站式服務：提供從規劃、申請、施工到維運的完整 EPC 服務</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1 w-5 h-5" />
                                        <span className="text-slate-700">跨域整合能力：擁有強大的 IT 軟體研發與系統整合實力</span>
                                    </li>
                                </ul>
                                <h4 className="text-xl font-bold text-slate-900 mb-3 mt-8">核心技術優勢</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="text-green-500 flex-shrink-0 mt-1 w-5 h-5" />
                                        <span className="text-slate-700">數據驅動：獨家 EMS 系統實現秒級能源監控與自動化調度。</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1 w-5 h-5" />
                                        <span className="text-slate-700">彈性架構：系統採用微服務架構，可快速適應新設備與法規變更。</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Building2 className="text-green-500 flex-shrink-0 mt-1 w-5 h-5" />
                                        <span className="text-slate-700">高標準安全：儲能建置安全超越業界標準，除了BMS/EMS電池管理系統外，加裝物理性監測器搭配系統預警、智慧消防系統及獨家的盤體設計，確保專案資產與運營安全。</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section id="services" className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <FadeIn direction="right" className="md:w-1/2">
                            <TextReveal text="核心服務" className="text-green-600 font-bold tracking-wide uppercase mb-2 block" />
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">全方位能源與智慧解決方案</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                我們提供從綠能建置、機電節能到智慧跨域應用的完整生態系服務。無論是企業淨零轉型、工廠節能改造，或是智慧農業與校園數位化，世和智能都是您最值得信賴的合作夥伴。
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                        <Sun className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800">綠電光儲建置</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800">機電節能工程</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800">EMS 能源管理</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                                        <Sprout className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-slate-800">智慧跨域應用</span>
                                </div>
                            </div>

                            <Link to="/services" className="inline-flex items-center gap-2 btn-shiny text-white px-8 py-4 rounded-full font-bold shadow-lg">
                                探索 6 大核心服務 <ArrowRight className="w-5 h-5" />
                            </Link>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2} className="md:w-1/2 relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
                                <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop" alt="Services Overview" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video bg-orange-500 rounded-2xl -z-0"></div>
                            <div className="absolute -top-6 -right-6 w-2/3 aspect-video bg-green-500 rounded-2xl -z-0"></div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section id="projects" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                            <div>
                                <TextReveal text="工程實績" className="text-green-600 font-bold tracking-wide uppercase mb-2 block" />
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">見證我們的專業成果</h3>
                            </div>
                            <Link to="/projects" className="text-orange-500 font-medium hover:text-orange-600 flex items-center gap-1 transition-colors">
                                查看更多案例 <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FadeIn delay={0.1}>
                            <Link to="/project-detail?id=yanghwa" className="group cursor-pointer">
                                <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden mb-4 relative">
                                    <img src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2670&auto=format&fit=crop" alt="Solar Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="400" height="300" loading="lazy" />
                                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">太陽能</div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">洋華光電 996KW 案場</h4>
                                <p className="text-slate-600 text-sm">導入高效能模組與 SolarEdge 優化器，大幅提升發電效率。</p>
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <Link to="/project-detail?id=taipeidome" className="group cursor-pointer">
                                <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden mb-4 relative">
                                    <img src="/photos/egg.jpg" alt="MEP Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="400" height="300" loading="lazy" />
                                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">機電工程</div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">台北大巨蛋機電工程</h4>
                                <p className="text-slate-600 text-sm">承攬 15 個電氣室及 4 個變電站之高規格機電建置工程。</p>
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <Link to="/project-detail?id=smartfarm" className="group cursor-pointer">
                                <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden mb-4 relative">
                                    <img src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2532&auto=format&fit=crop" alt="Smart Agriculture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="400" height="300" loading="lazy" />
                                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">智慧整合</div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">鮮一有機智慧農場</h4>
                                <p className="text-slate-600 text-sm">建置環境監控、土壤偵測與智慧澆灌系統，實現精準農業。</p>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
                {/* 3D Background */}
                <div className="absolute inset-0 z-0">
                    <Suspense fallback={<div className="w-full h-full bg-slate-900" />}>
                        <TechScene className="w-full h-full" />
                    </Suspense>
                </div>

                {/* Background Image Overlay - kept low opacity as a texture */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-0 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="right">
                            <h2 className="text-green-400 font-bold tracking-wide uppercase mb-2">為何選擇世和智能</h2>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">不只是設備供應商<br />更是您的淨零轉型顧問</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg h-fit">
                                        <Battery className="text-orange-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">顯著降低營運成本</h4>
                                        <p className="text-slate-300 text-sm">
                                            利用儲能削峰填谷與離峰電價優惠，最高可協助企業節省 <CountUp to={76} suffix="%" className="text-orange-400 font-bold" /> 電費支出。
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg h-fit">
                                        <BarChart3 className="text-orange-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">降低轉型門檻</h4>
                                        <p className="text-slate-300 text-sm">提供完整補助申請規劃與 ESCO 模式，減輕企業初期資本投入壓力。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg h-fit">
                                        <ShieldCheck className="text-orange-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">最高安全規格</h4>
                                        <p className="text-slate-300 text-sm">儲能系統採多維度消防設計（氣體偵測、自動滅火），確保資產與人員安全。</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 text-center">立即開始您的綠色轉型</h3>
                            <ContactForm />
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
