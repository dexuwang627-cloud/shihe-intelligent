import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, LayoutGrid, List } from 'lucide-react';
import { projectData } from '../data/projects';
import SEO from '../components/common/SEO';

const Projects = () => {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [filter, setFilter] = useState('all'); // 'all', 'green-energy', 'smart-city', 'smart-agriculture'

    const largeScaleProjects = ['yanghwa', 'taipeidome', 'energyfarm', 'factorymep'];
    const microSmartProjects = ['smartfarm', 'carecenter', 'officebess'];

    const ProjectCard = ({ id }) => {
        const project = projectData[id];
        if (!project) return null;

        if (viewMode === 'list') {
            return (
                <Link to={`/project-detail?id=${id}`} className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 overflow-hidden mb-4">
                    <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-48 h-48 sm:h-auto shrink-0 relative">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" width="300" height="300" loading="lazy" />
                            <div className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full text-white ${['microbess', 'officebess'].includes(id) ? 'bg-orange-500' : 'bg-green-500'}`}>
                                {project.category.split('/')[0]}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col justify-center flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">{project.title}</h4>
                                    <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded mb-2">{project.category}</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500 transition-colors" />
                            </div>
                            <p className="text-slate-600 text-sm line-clamp-2">{project.summary}</p>
                        </div>
                    </div>
                </Link>
            );
        }

        return (
            <Link to={`/project-detail?id=${id}`} className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="400" height="300" loading="lazy" />
                    <div className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-0.5 rounded-full ${['microbess', 'officebess'].includes(id) ? 'bg-orange-500' : 'bg-green-500'}`}>
                        {project.category}
                    </div>
                </div>
                <div className="p-4">
                    <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">{project.title}</h4>
                    <p className="text-slate-600 text-xs line-clamp-2">{project.summary}</p>
                </div>
            </Link>
        );
    };

    return (
        <div className="fade-in">
            <SEO
                title="工程實績"
                description="世和智能工程實績總覽：大型旗艦案場與微型智慧應用案場，橫跨太陽能、儲能、機電工程與智慧農業。"
                keywords="工程實績, 太陽能案場, 儲能建置, 機電工程, 智慧農業案例"
                url="/projects"
            />
            <div id="projects-list" className="page-section pt-24 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <Link to="/#projects" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                            <ArrowLeft className="w-4 h-4" /> 返回工程實績
                        </Link>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">全案場</span>
                                <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-4">工程實績總覽：大小案場分類</h1>
                                <p className="text-xl text-slate-600 max-w-3xl">我們橫跨電網級大型建置到企業微型節能，為您展現最真實的專業能力。</p>
                            </div>

                            {/* View Toggle */}
                            <div className="bg-white p-1 rounded-lg shadow-sm border border-slate-200 flex shrink-0">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-md flex items-center gap-2 transition-all ${viewMode === 'grid' ? 'bg-orange-100 text-orange-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                    title="網格檢視"
                                >
                                    <LayoutGrid className="w-5 h-5" />
                                    <span className="text-sm font-bold hidden sm:inline">網格</span>
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md flex items-center gap-2 transition-all ${viewMode === 'list' ? 'bg-orange-100 text-orange-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                    title="列表檢視"
                                >
                                    <List className="w-5 h-5" />
                                    <span className="text-sm font-bold hidden sm:inline">列表</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-2 mt-12">大型旗艦案場 (Megawatt Scale & Key Projects)</h2>
                    <div className={viewMode === 'grid' ? "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16" : "space-y-4 mb-16"}>
                        {largeScaleProjects.map(id => <ProjectCard key={id} id={id} />)}
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-2 mt-12">微型與智慧應用案場 (Micro & Smart Solutions)</h2>
                    <div className={viewMode === 'grid' ? "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16" : "space-y-4 mb-16"}>
                        {microSmartProjects.map(id => <ProjectCard key={id} id={id} />)}
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
