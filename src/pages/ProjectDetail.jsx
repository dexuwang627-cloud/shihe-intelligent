import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEO from '../components/common/SEO';
import { useTranslation } from 'react-i18next';

const ProjectDetail = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language === 'zh-TW' ? 'zh' : 'en';

    const [searchParams] = useSearchParams();
    const projectId = searchParams.get('id') || 'yanghwa';

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchProject = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .eq('id', projectId)
                    .single();

                if (error) throw error;
                setProject(data);
            } catch (error) {
                console.error('Error fetching project:', error);
                setProject(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [projectId]);

    if (loading) {
        return (
            <div className="min-h-screen pt-24 flex justify-center items-center bg-slate-50">
                <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen pt-24 pb-12 bg-slate-50 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold text-red-600 mb-4">{t('project_detail.not_found.title')}</h1>
                <p className="text-xl text-slate-600 mb-8">{t('project_detail.not_found.text')}</p>
                <Link to="/projects" className="text-green-600 hover:text-green-700 font-bold flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" /> {t('project_detail.not_found.back')}
                </Link>
            </div>
        );
    }

    // Helper to extract localized data safely
    const getTranslated = (data) => {
        return (data && data[currentLang]) ? data[currentLang] : (data && data['zh']) ? data['zh'] : '';
    };

    const localized = {
        title: getTranslated(project.title),
        summary: getTranslated(project.summary),
        category: getTranslated(project.category),
        description: getTranslated(project.description) || [],
        specs: getTranslated(project.specs) || {},
        benefits: getTranslated(project.benefits) || {},
    };

    return (
        <div className="fade-in pt-24 min-h-screen bg-slate-50">
            <SEO
                title={localized.title}
                description={localized.summary}
                keywords={`${localized.category}, ${t('projects_page.seo.keywords')}, ${localized.title}`}
                url={`/project-detail?id=${projectId}`}
            />
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link to="/projects" className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors font-medium mb-4">
                        <ArrowLeft className="w-4 h-4" /> {t('project_detail.back_link')}
                    </Link>
                </div>

                <div className="mb-10">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">{localized.category}</span>
                    <h1 className="text-4xl font-bold text-slate-900 mt-4 mb-3">{localized.title}</h1>
                    <p className="text-xl text-slate-600 max-w-4xl">{localized.summary}</p>
                </div>

                <div className="mb-12">
                    <img src={project.image} alt={localized.title} className="w-full h-[500px] object-cover rounded-2xl shadow-xl border border-slate-200" />
                </div>

                <div className="grid lg:grid-cols-3 gap-10 mb-20">

                    <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-fit">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-3">{t('project_detail.specs_title')}</h2>
                        <ul className="space-y-4 text-slate-700">
                            {Object.entries(localized.specs).map(([key, value]) => (
                                <li key={key} className="flex justify-between items-center border-b border-slate-100 pb-2">
                                    <span className="font-medium text-slate-900">{key}</span>
                                    <span className="text-green-600 font-bold text-right ml-4">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{t('project_detail.desc_title')}</h2>
                        <div className="space-y-6 text-slate-700 leading-relaxed mb-10">
                            {Array.isArray(localized.description) && localized.description.map((desc, index) => (
                                <p key={index} dangerouslySetInnerHTML={{ __html: desc }}></p>
                            ))}
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">{t('project_detail.benefits_title')}</h2>
                        <div className="grid sm:grid-cols-3 gap-4 text-center">
                            {Object.entries(localized.benefits).map(([key, value]) => (
                                <div key={key} className="bg-white p-6 rounded-xl shadow-sm border border-green-200">
                                    <p className="text-slate-500 text-sm">{key}</p>
                                    <p className="text-3xl font-bold text-orange-600 mt-1">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 text-slate-900 rounded-2xl p-8 text-center mb-20">
                    <h3 className="text-2xl font-bold mb-3">{t('project_detail.cta_box.title')}</h3>
                    <p className="text-slate-700 mb-6">{t('project_detail.cta_box.text')}</p>
                    <a href="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/40 inline-block">
                        {t('project_detail.cta_box.button')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
