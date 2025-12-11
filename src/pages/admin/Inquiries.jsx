import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useTranslation } from 'react-i18next';
import { Loader2, ArrowLeft, Mail, Phone, Calendar, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';

const Inquiries = () => {
    const { t } = useTranslation();
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchInquiries();
    }, []);

    const fetchInquiries = async () => {
        try {
            const { data, error } = await supabase
                .from('inquiries')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setInquiries(data);
        } catch (error) {
            console.error('Error fetching inquiries:', error);
            alert('Error loading inquiries');
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id, newStatus) => {
        try {
            const { error } = await supabase
                .from('inquiries')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;

            // Optimistic update
            setInquiries(prev => prev.map(item =>
                item.id === id ? { ...item, status: newStatus } : item
            ));
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-24 flex justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50">
            <SEO title={`${t('admin.inquiries.title')} | Admin`} />
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/admin/dashboard" className="text-slate-400 hover:text-slate-600 transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-900">{t('admin.inquiries.title')}</h1>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="p-4 font-bold text-slate-600">{t('admin.inquiries.table.date')}</th>
                                    <th className="p-4 font-bold text-slate-600">{t('admin.inquiries.table.contact')}</th>
                                    <th className="p-4 font-bold text-slate-600">{t('admin.inquiries.table.details')}</th>
                                    <th className="p-4 font-bold text-slate-600">{t('admin.inquiries.table.status')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {inquiries.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="p-8 text-center text-slate-400">
                                            {t('admin.inquiries.table.no_data')}
                                        </td>
                                    </tr>
                                ) : (
                                    inquiries.map((inquiry) => (
                                        <tr key={inquiry.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="p-4 text-sm text-slate-500 whitespace-nowrap align-top">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(inquiry.created_at).toLocaleDateString()}
                                                </div>
                                                <div className="text-xs mt-1 text-slate-400">
                                                    {new Date(inquiry.created_at).toLocaleTimeString()}
                                                </div>
                                            </td>
                                            <td className="p-4 align-top">
                                                <div className="font-bold text-slate-800">{inquiry.company}</div>
                                                <div className="text-sm text-slate-600 mb-1">{inquiry.contact_person}</div>
                                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                                    <Phone className="w-3 h-3" /> {inquiry.phone}
                                                </div>
                                            </td>
                                            <td className="p-4 align-top max-w-md">
                                                <div className="inline-block bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-bold mb-2">
                                                    {inquiry.inquiry_type}
                                                </div>
                                                <p className="text-slate-600 text-sm whitespace-pre-wrap">{inquiry.details}</p>
                                            </td>
                                            <td className="p-4 align-top">
                                                <select
                                                    value={inquiry.status}
                                                    onChange={(e) => updateStatus(inquiry.id, e.target.value)}
                                                    className={`px-3 py-1 rounded-full text-xs font-bold border-0 cursor-pointer outline-none focus:ring-2 focus:ring-offset-1 ${inquiry.status === 'new' ? 'bg-green-100 text-green-700 focus:ring-green-400' :
                                                        inquiry.status === 'processing' ? 'bg-yellow-100 text-yellow-700 focus:ring-yellow-400' :
                                                            'bg-slate-100 text-slate-600 focus:ring-slate-300'
                                                        }`}
                                                >
                                                    <option value="new">{t('admin.inquiries.status.new')}</option>
                                                    <option value="processing">{t('admin.inquiries.status.processing')}</option>
                                                    <option value="completed">{t('admin.inquiries.status.completed')}</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inquiries;
