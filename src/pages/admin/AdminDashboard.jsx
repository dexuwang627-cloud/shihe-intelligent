import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Plus, Edit, Trash2, Eye, LogOut, Loader2 } from 'lucide-react';
import SEO from '../../components/common/SEO';
import { useTranslation } from 'react-i18next';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error) {
            setProjects(data || []);
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        if (!window.confirm(t('admin.dashboard.delete_confirm'))) return;

        const { error } = await supabase
            .from('projects')
            .delete()
            .eq('id', id);

        if (error) {
            alert('Error deleting project: ' + error.message);
        } else {
            fetchProjects();
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = '/admin/login';
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-24 flex justify-center items-center bg-slate-50">
                <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50">
            <SEO title="Admin Dashboard | Shihe Intelligent" />
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">{t('admin.dashboard.title')}</h1>
                    <div className="flex gap-4">
                        <Link to="/admin/projects/new" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all">
                            <Plus className="w-4 h-4" /> {t('admin.dashboard.new_project')}
                        </Link>
                        <button onClick={handleLogout} className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all">
                            <LogOut className="w-4 h-4" /> {t('admin.dashboard.logout')}
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="p-4 font-bold text-slate-600">{t('admin.dashboard.table.id')}</th>
                                <th className="p-4 font-bold text-slate-600">{t('admin.dashboard.table.image')}</th>
                                <th className="p-4 font-bold text-slate-600">{t('admin.dashboard.table.title')}</th>
                                <th className="p-4 font-bold text-slate-600">{t('admin.dashboard.table.group')}</th>
                                <th className="p-4 font-bold text-slate-600 text-right">{t('admin.dashboard.table.actions')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {projects.map((project) => (
                                <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-mono text-sm text-slate-500">{project.id}</td>
                                    <td className="p-4">
                                        <img src={project.image} alt="" className="w-16 h-12 object-cover rounded shadow-sm bg-slate-100" />
                                    </td>
                                    <td className="p-4 font-medium text-slate-900">
                                        {project.title.zh}
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 text-xs rounded-full font-bold ${project.display_group === 'large' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                                            {project.display_group}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right space-x-2">
                                        <Link to={`/project-detail?id=${project.id}`} target="_blank" className="inline-block p-2 text-slate-400 hover:text-blue-600 transition-colors" title="View Live">
                                            <Eye className="w-5 h-5" />
                                        </Link>
                                        <Link to={`/admin/projects/${project.id}`} className="inline-block p-2 text-slate-400 hover:text-green-600 transition-colors" title="Edit">
                                            <Edit className="w-5 h-5" />
                                        </Link>
                                        <button onClick={() => handleDelete(project.id)} className="inline-block p-2 text-slate-400 hover:text-red-600 transition-colors" title="Delete">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {projects.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-slate-500">
                                        {t('admin.dashboard.table.no_projects')}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
