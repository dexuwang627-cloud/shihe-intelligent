import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectData } from '../data/projects';

const ProjectDetail = () => {
    const [searchParams] = useSearchParams();
    const projectId = searchParams.get('id') || 'yanghwa';
    const project = projectData[projectId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return (
            <div className="min-h-screen pt-24 pb-12 bg-slate-50 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold text-red-600 mb-4">404 專案不存在</h1>
                <p className="text-xl text-slate-600 mb-8">找不到您請求的專案資訊。</p>
                <Link to="/projects" className="text-green-600 hover:text-green-700 font-bold flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" /> 返回所有工程實績
                </Link>
            </div>
        );
    }

    return (
        <div className="fade-in pt-24 min-h-screen bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/projects" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> 返回所有工程實績
                    </Link>
                </div>

                <div className="mb-10">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">{project.category}</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-3">{project.title}</h1>
                    <p className="text-xl text-slate-600 max-w-4xl">{project.summary}</p>
                </div>

                <div className="mb-12">
                    <img src={project.image} alt={project.title} className="w-full h-[500px] object-cover rounded-2xl shadow-xl border border-slate-200" />
                </div>

                <div className="grid lg:grid-cols-3 gap-10 mb-20">

                    <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-fit">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-3">關鍵指標與技術規格</h2>
                        <ul className="space-y-4 text-slate-700">
                            {Object.entries(project.specs).map(([key, value]) => (
                                <li key={key} className="flex justify-between items-center border-b border-slate-100 pb-2">
                                    <span className="font-medium text-slate-900">{key}</span>
                                    <span className="text-green-600 font-bold text-right ml-4">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">專案簡介與挑戰</h2>
                        <div className="space-y-6 text-slate-700 leading-relaxed mb-10">
                            {project.description.map((desc, index) => (
                                <p key={index} dangerouslySetInnerHTML={{ __html: desc }}></p>
                            ))}
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">客戶效益回饋</h2>
                        <div className="grid sm:grid-cols-3 gap-4 text-center">
                            {Object.entries(project.benefits).map(([key, value]) => (
                                <div key={key} className="bg-white p-6 rounded-xl shadow-sm border border-green-200">
                                    <p className="text-slate-500 text-sm">{key}</p>
                                    <p className="text-3xl font-bold text-orange-600 mt-1">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 text-slate-900 rounded-2xl p-8 text-center mb-20">
                    <h3 className="text-2xl font-bold mb-3">您的專案需求是否與此類似？</h3>
                    <p className="text-slate-700 mb-6">我們能為您量身打造符合企業 ESG 目標與節能需求的客製化方案。</p>
                    <a href="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/40 inline-block">
                        預約一對一專案諮詢
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
