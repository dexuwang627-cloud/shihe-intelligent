import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { ArrowLeft, Save, Plus, Trash2, Loader2, Globe, Upload } from 'lucide-react';
import SEO from '../../components/common/SEO';
import { useTranslation } from 'react-i18next';

const ProjectEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isNew = !id;
    const { t } = useTranslation();

    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [lang, setLang] = useState('zh'); // Editing language context

    // Initial state matching DB schema structure
    const [formData, setFormData] = useState({
        id: '',
        image: '',
        display_group: 'micro', // 'large' or 'micro'
        title: { zh: '', en: '' },
        category: { zh: '', en: '' },
        summary: { zh: '', en: '' },
        description: { zh: [''], en: [''] },
        specs: { zh: {}, en: {} },
        benefits: { zh: {}, en: {} }
    });

    useEffect(() => {
        if (!isNew) {
            fetchProject();
        }
    }, [id]);

    const fetchProject = async () => {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            alert('Error fetching project: ' + error.message);
            navigate('/admin/dashboard');
        } else {
            setFormData(data);
            setLoading(false);
        }
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleLocalizedChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: { ...prev[field], [lang]: value }
        }));
    };

    const handleArrayChange = (field, index, value) => {
        const newArray = [...formData[field][lang]];
        newArray[index] = value;
        setFormData(prev => ({
            ...prev,
            [field]: { ...prev[field], [lang]: newArray }
        }));
    };

    const addArrayItem = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: { ...prev[field], [lang]: [...prev[field][lang], ''] }
        }));
    };

    const removeArrayItem = (field, index) => {
        const newArray = formData[field][lang].filter((_, i) => i !== index);
        setFormData(prev => ({
            ...prev,
            [field]: { ...prev[field], [lang]: newArray }
        }));
    };

    // Helper for editing Key-Value pairs (Specs/Benefits)
    // We render them as a list of {key, value} inputs for editing, 
    // but convert back to object for storage.
    const updateKvField = (field, oldKey, newKey, newValue) => {
        const oldObj = formData[field][lang];
        const newObj = {};

        // Reconstruct object preserving order if possible, or just standard key-val
        // To rename a key, we have to iterate
        Object.keys(oldObj).forEach(k => {
            if (k === oldKey) {
                newObj[newKey] = newValue;
            } else {
                newObj[k] = oldObj[k];
            }
        });

        // If it's a new entry (oldKey is null/undefined logic handled by caller essentially)
        // But here we rely on the UI passing the current key.

        setFormData(prev => ({
            ...prev,
            [field]: { ...prev[field], [lang]: newObj }
        }));
    };

    const addKvItem = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: { ...prev[field], [lang]: { ...prev[field][lang], 'New Item': 'Value' } }
        }));
    };

    const removeKvItem = (field, keyToRemove) => {
        const newObj = { ...formData[field][lang] };
        delete newObj[keyToRemove];
        setFormData(prev => ({
            ...prev,
            [field]: { ...prev[field], [lang]: newObj }
        }));
    };


    const uploadImage = async (event) => {
        try {
            setUploading(true);
            const file = event.target.files[0];
            if (!file) return;

            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('project-images')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            // Get Public URL
            const { data } = supabase.storage
                .from('project-images')
                .getPublicUrl(filePath);

            handleChange('image', data.publicUrl);
        } catch (error) {
            alert('Error uploading image: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            if (isNew) {
                const { error } = await supabase.from('projects').insert([formData]);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from('projects')
                    .update(formData)
                    .eq('id', id);
                if (error) throw error;
            }
            navigate('/admin/dashboard');
        } catch (error) {
            alert('Error saving project: ' + error.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="text-center pt-24"><Loader2 className="w-8 h-8 animate-spin mx-auto text-orange-500" /></div>;

    const KvEditor = ({ field, title }) => (
        <div className="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="flex justify-between items-center mb-4">
                <label className="font-bold text-slate-700">{title} ({lang.toUpperCase()})</label>
                <button type="button" onClick={() => addKvItem(field)} className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200 transition-colors">
                    + {t('admin.editor.actions.add_item')}
                </button>
            </div>
            <div className="space-y-3">
                {Object.entries(formData[field][lang] || {}).map(([key, value], idx) => (
                    <div key={idx} className="flex gap-2">
                        <input
                            type="text"
                            value={key}
                            // Simple key renaming is tricky effectively because keys must be unique.
                            // For simplicity: delete and re-add is safer, but here is a simple implementation:
                            onChange={(e) => {
                                const newKey = e.target.value;
                                if (newKey && !formData[field][lang][newKey]) {
                                    // This logic is flawed for renaming keys in place safely without losing focus or order
                                    // Quick fix: Use a "delete" pattern or a more complex key-value editor component.
                                    // For this MVP, let's assume users won't rename keys often, or fetch/update pattern.
                                    // Let's rely on standard object replacement.

                                    // Actually, uncontrolled inputs for keys might be better, only committing on blur.
                                    // But let's stick to modifying value for now, renaming key needs delete+add logic.
                                    // Let's implementing strict Key | Value inputs.

                                    // Better approach for React state: Convert object to array [{k,v}] for editing, convert back on save/change.
                                }
                            }}
                            // DISABLE KEY EDITING implementation for MVP to avoid bugs. 
                            // User should delete and add new if they want to rename key.
                            readOnly
                            className="w-1/3 p-2 bg-slate-200 text-slate-500 rounded border border-slate-200 text-sm cursor-not-allowed"
                            title="Delete and re-add to rename key"
                        />
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => updateKvField(field, key, key, e.target.value)}
                            className="flex-1 p-2 rounded border border-slate-300 focus:border-orange-500 outline-none text-sm"
                        />
                        <button type="button" onClick={() => removeKvItem(field, key)} className="text-red-400 hover:text-red-600 p-2">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
                {Object.keys(formData[field][lang] || {}).length === 0 && (
                    <p className="text-sm text-slate-400 italic">No items defined.</p>
                )}
            </div>
            <p className="text-xs text-slate-400 mt-2">* To rename a key, delete the item and add a new one.</p>
        </div>
    );

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50">
            <SEO title={`${isNew ? 'New' : 'Edit'} Project | Admin`} />
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/admin/dashboard" className="text-slate-400 hover:text-slate-600 transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-900">
                        {isNew ? t('admin.editor.new_title') : t('admin.editor.edit_title', { id: formData.id })}
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">

                    {/* Global Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-b border-slate-100 pb-8">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">{t('admin.editor.fields.id')}</label>
                            <input
                                type="text"
                                required
                                disabled={!isNew}
                                value={formData.id}
                                onChange={(e) => handleChange('id', e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-orange-500 disabled:bg-slate-100"
                                placeholder="e.g., solar-farm-a"
                            />
                            <p className="text-xs text-slate-400 mt-1">{t('admin.editor.fields.id_desc')}</p>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">{t('admin.editor.fields.display_group')}</label>
                            <select
                                value={formData.display_group}
                                onChange={(e) => handleChange('display_group', e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-orange-500"
                            >
                                <option value="large">Large Scale</option>
                                <option value="micro">Micro / Smart</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-2">{t('admin.editor.fields.image')}</label>
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    required
                                    value={formData.image}
                                    onChange={(e) => handleChange('image', e.target.value)}
                                    className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:border-orange-500"
                                    placeholder="https://..."
                                />
                                <label className={`cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-lg border border-slate-200 flex items-center justify-center transition-colors ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
                                    {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={uploadImage}
                                        className="hidden"
                                        disabled={uploading}
                                    />
                                </label>
                                {formData.image && (
                                    <img src={formData.image} alt="Preview" className="w-20 h-12 object-cover rounded border border-slate-200" />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 mb-6">
                        <Globe className="w-5 h-5 text-slate-400" />
                        <span className="text-sm font-bold text-slate-600">{t('admin.editor.tabs_label')}</span>
                        <div className="flex bg-slate-100 p-1 rounded-lg">
                            <button
                                type="button"
                                onClick={() => setLang('zh')}
                                className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${lang === 'zh' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                中文 (ZH)
                            </button>
                            <button
                                type="button"
                                onClick={() => setLang('en')}
                                className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${lang === 'en' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                English (EN)
                            </button>
                        </div>
                    </div>

                    {/* Localized Fields */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">{t('admin.editor.fields.title')} ({lang.toUpperCase()})</label>
                            <input
                                type="text"
                                required
                                value={formData.title[lang] || ''}
                                onChange={(e) => handleLocalizedChange('title', e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">{t('admin.editor.fields.category')} ({lang.toUpperCase()})</label>
                            <input
                                type="text"
                                required
                                value={formData.category[lang] || ''}
                                onChange={(e) => handleLocalizedChange('category', e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">{t('admin.editor.fields.summary')} ({lang.toUpperCase()})</label>
                            <textarea
                                required
                                rows="3"
                                value={formData.summary[lang] || ''}
                                onChange={(e) => handleLocalizedChange('summary', e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-orange-500"
                            />
                        </div>

                        {/* Description Array */}
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <div className="flex justify-between items-center mb-4">
                                <label className="font-bold text-slate-700">{t('admin.editor.fields.description')} ({lang.toUpperCase()})</label>
                                <button type="button" onClick={() => addArrayItem('description')} className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200 transition-colors">
                                    + {t('admin.editor.actions.add_paragraph')}
                                </button>
                            </div>
                            <div className="space-y-3">
                                {formData.description[lang]?.map((desc, idx) => (
                                    <div key={idx} className="flex gap-2 items-start">
                                        <textarea
                                            value={desc}
                                            rows="2"
                                            onChange={(e) => handleArrayChange('description', idx, e.target.value)}
                                            className="flex-1 p-2 rounded border border-slate-300 focus:border-orange-500 outline-none text-sm"
                                        />
                                        <button type="button" onClick={() => removeArrayItem('description', idx)} className="text-red-400 hover:text-red-600 p-2 mt-2">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <KvEditor field="specs" title={t('admin.editor.fields.specs')} />
                        <KvEditor field="benefits" title={t('admin.editor.fields.benefits')} />

                    </div>

                    <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end gap-4">
                        <Link to="/admin/dashboard" className="px-6 py-3 rounded-lg text-slate-600 hover:bg-slate-100 font-bold transition-all">
                            {t('admin.editor.cancel')}
                        </Link>
                        <button
                            type="submit"
                            disabled={saving}
                            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-orange-600/30 transition-all flex items-center gap-2 disabled:opacity-70"
                        >
                            {saving ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" /> {t('admin.editor.saving')}
                                </>
                            ) : (
                                <>
                                    <Save className="w-5 h-5" /> {t('admin.editor.save')}
                                </>
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ProjectEditor;
