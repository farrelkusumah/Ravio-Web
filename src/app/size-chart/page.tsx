'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { ChevronRight, Ruler, CheckCircle2, Info, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const SizeChartPage = () => {
    const { t } = useApp();
    const [activeGender, setActiveGender] = useState<'Men' | 'Women'>('Men');
    const [activeCategory, setActiveCategory] = useState<'Tops' | 'Bottoms'>('Tops');

    const sizeData = {
        Men: {
            Tops: [
                { size: 'S', length: '66', chest: '49', shoulder: '43', sleeve: '20' },
                { size: 'M', length: '69', chest: '52', shoulder: '45', sleeve: '21' },
                { size: 'L', length: '72', chest: '55', shoulder: '47', sleeve: '22' },
                { size: 'XL', length: '75', chest: '58', shoulder: '49', sleeve: '23' },
            ],
            Bottoms: [
                { size: '28', waist: '73.5', hip: '92.5', thigh: '29', rise: '24', inseam: '81' },
                { size: '30', waist: '78.5', hip: '97.5', thigh: '31', rise: '25', inseam: '81' },
                { size: '32', waist: '83.5', hip: '102.5', thigh: '32', rise: '26', inseam: '81' },
                { size: '34', waist: '88.5', hip: '107.5', thigh: '34', rise: '27', inseam: '81' },
            ]
        },
        Women: {
            Tops: [
                { size: 'S', length: '58', chest: '44', shoulder: '37', sleeve: '16' },
                { size: 'M', length: '60', chest: '46', shoulder: '38', sleeve: '17' },
                { size: 'L', length: '62', chest: '49', shoulder: '40', sleeve: '18' },
                { size: 'XL', length: '64', chest: '52', shoulder: '41', sleeve: '19' },
            ],
            Bottoms: [
                { size: '24', waist: '63.5', hip: '88.5', thigh: '27', rise: '23', inseam: '76' },
                { size: '26', waist: '68.5', hip: '93.5', thigh: '28', rise: '24', inseam: '76' },
                { size: '28', waist: '73.5', hip: '98.5', thigh: '30', rise: '25', inseam: '76' },
                { size: '30', waist: '78.5', hip: '103.5', thigh: '31', rise: '26', inseam: '76' },
            ]
        }
    };

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header */}
            <div className="bg-zinc-900 text-white py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    <Link href="/" className="inline-flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-accent hover:opacity-70 transition-opacity">
                        <ArrowLeft size={14} />
                        <span>{t('home')}</span>
                    </Link>
                    <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase italic leading-none">
                        {t('sizeChartTitle').split(' ')[0]} <span className="text-accent underline decoration-accent/20">{t('sizeChartTitle').split(' ')[1]}</span>
                    </h1>
                    <p className="max-w-md text-sm sm:text-lg font-medium opacity-60 leading-relaxed uppercase tracking-tight">
                        {t('sizeChartDesc')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-10">
                <div className="bg-white border border-zinc-100 shadow-2xl p-6 sm:p-10 rounded-2xl space-y-12">
                    {/* Navigation Pills */}
                    <div className="flex flex-col sm:flex-row justify-between items-center bg-zinc-50 p-2 rounded-xl gap-4">
                        <div className="flex bg-white p-1 rounded-lg border border-zinc-200 w-full sm:w-fit">
                            {(['Men', 'Women'] as const).map(gender => (
                                <button
                                    key={gender}
                                    onClick={() => setActiveGender(gender)}
                                    className={`flex-1 sm:px-8 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-md ${activeGender === gender ? 'bg-zinc-900 text-white shadow-lg' : 'text-zinc-400 hover:text-zinc-600'
                                        }`}
                                >
                                    {gender === 'Men' ? t('men') : t('women')}
                                </button>
                            ))}
                        </div>
                        <div className="flex bg-white p-1 rounded-lg border border-zinc-200 w-full sm:w-fit">
                            {(['Tops', 'Bottoms'] as const).map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`flex-1 sm:px-8 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-md ${activeCategory === cat ? 'bg-accent text-white shadow-lg' : 'text-zinc-400 hover:text-zinc-600'
                                        }`}
                                >
                                    {cat === 'Tops' ? t('tops') : t('bottoms')}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Technical Drawing Area */}
                        <div className="space-y-8 animate-fade-in-up">
                            <div className="aspect-[4/5] bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100 p-8 flex items-center justify-center relative group">
                                <img
                                    src="/size_chart_letters.png"
                                    alt="Size Measurement Technical Drawing"
                                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 border-4 border-accent/0 group-hover:border-accent/5 transition-all duration-700 rounded-2xl pointer-events-none" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {activeCategory === 'Tops' ? (
                                    <>
                                        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 space-y-2">
                                            <h4 className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-zinc-900">
                                                <span className="w-5 h-5 bg-zinc-900 text-white flex items-center justify-center rounded text-[8px] transform -rotate-12">A</span>
                                                <span>{t('bodyLength')}</span>
                                            </h4>
                                            <p className="text-[10px] text-muted font-medium italic">{t('bodyLengthDesc')}</p>
                                        </div>
                                        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 space-y-2">
                                            <h4 className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-zinc-900">
                                                <span className="w-5 h-5 bg-zinc-900 text-white flex items-center justify-center rounded text-[8px] transform rotate-6">B</span>
                                                <span>{t('bodyWidth')}</span>
                                            </h4>
                                            <p className="text-[10px] text-muted font-medium italic">{t('bodyWidthDesc')}</p>
                                        </div>
                                        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 space-y-2">
                                            <h4 className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-zinc-900">
                                                <span className="w-5 h-5 bg-zinc-900 text-white flex items-center justify-center rounded text-[8px] transform -rotate-3">C</span>
                                                <span>{t('shoulderWidth')}</span>
                                            </h4>
                                            <p className="text-[10px] text-muted font-medium italic">{t('shoulderWidthDesc')}</p>
                                        </div>
                                        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 space-y-2">
                                            <h4 className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-zinc-900">
                                                <span className="w-5 h-5 bg-zinc-900 text-white flex items-center justify-center rounded text-[8px] transform rotate-12">D</span>
                                                <span>{t('sleeveLength')}</span>
                                            </h4>
                                            <p className="text-[10px] text-muted font-medium italic">{t('sleeveLengthDesc')}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 space-y-2">
                                            <h4 className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-zinc-900">
                                                <span className="w-5 h-5 bg-accent text-white flex items-center justify-center rounded text-[8px] transform -rotate-12">A</span>
                                                <span>{t('waist')}</span>
                                            </h4>
                                            <p className="text-[10px] text-muted font-medium italic">{t('waistDesc')}</p>
                                        </div>
                                        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 space-y-2">
                                            <h4 className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-zinc-900">
                                                <span className="w-5 h-5 bg-accent text-white flex items-center justify-center rounded text-[8px] transform rotate-6">B</span>
                                                <span>{t('hip')}</span>
                                            </h4>
                                            <p className="text-[10px] text-muted font-medium italic">{t('hipDesc')}</p>
                                        </div>
                                        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 space-y-2">
                                            <h4 className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-zinc-900">
                                                <span className="w-5 h-5 bg-accent text-white flex items-center justify-center rounded text-[8px] transform -rotate-3">C</span>
                                                <span>{t('thigh')}</span>
                                            </h4>
                                            <p className="text-[10px] text-muted font-medium italic">{t('thighDesc')}</p>
                                        </div>
                                        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 space-y-2">
                                            <h4 className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-zinc-900">
                                                <span className="w-5 h-5 bg-accent text-white flex items-center justify-center rounded text-[8px] transform rotate-12">D</span>
                                                <span>{t('inseam')}</span>
                                            </h4>
                                            <p className="text-[10px] text-muted font-medium italic">{t('inseamDesc')}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Table Area */}
                        <div className="space-y-10 animate-fade-in-up delay-100">
                            <div className="space-y-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">{t('dimensionKey')}</span>
                                <h3 className="text-3xl font-black tracking-tighter uppercase italic text-zinc-900">
                                    {activeGender === 'Men' ? t('men') : t('women')} - {activeCategory === 'Tops' ? t('tops') : t('bottoms')}
                                </h3>
                            </div>

                            <div className="overflow-hidden border border-zinc-100 rounded-2xl shadow-sm">
                                <table className="w-full text-left text-[10px] uppercase tracking-widest font-black">
                                    <thead className="bg-zinc-900 text-white">
                                        {activeCategory === 'Tops' ? (
                                            <tr>
                                                <th className="px-6 py-6 italic border-r border-white/10">{t('size')}</th>
                                                <th className="px-4 py-6 italic text-center">A {t('bodyLength').split(' ')[1]}</th>
                                                <th className="px-4 py-6 italic text-center">B {t('bodyWidth').split(' ')[1]}</th>
                                                <th className="px-4 py-6 italic text-center">C {t('shoulderWidth').split(' ')[0]}</th>
                                                <th className="px-4 py-6 italic text-center">D {t('sleeveLength').split(' ')[1]}</th>
                                            </tr>
                                        ) : (
                                            <tr>
                                                <th className="px-6 py-6 italic border-r border-white/10">{t('size')}</th>
                                                <th className="px-4 py-6 italic text-center">A {t('waist').split(' ')[1] || t('waist')}</th>
                                                <th className="px-4 py-6 italic text-center">B {t('hip').split(' ')[1] || t('hip')}</th>
                                                <th className="px-4 py-6 italic text-center">C {t('thigh').split(' ')[1] || t('thigh')}</th>
                                                <th className="px-4 py-6 italic text-center">D {t('inseam')}</th>
                                            </tr>
                                        )}
                                    </thead>
                                    <tbody className="divide-y divide-zinc-50 bg-white">
                                        {activeCategory === 'Tops' ? (
                                            sizeData[activeGender].Tops.map((row) => (
                                                <tr key={row.size} className="hover:bg-zinc-50 transition-colors">
                                                    <td className="px-6 py-5 font-black text-accent">{row.size}</td>
                                                    <td className="px-6 py-5 text-center text-zinc-400">{row.length}</td>
                                                    <td className="px-6 py-5 text-center text-zinc-400">{row.chest}</td>
                                                    <td className="px-6 py-5 text-center text-zinc-400">{row.shoulder}</td>
                                                    <td className="px-6 py-5 text-center text-zinc-400">{row.sleeve}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            sizeData[activeGender].Bottoms.map((row) => (
                                                <tr key={row.size} className="hover:bg-zinc-50 transition-colors">
                                                    <td className="px-6 py-5 font-black text-accent">{row.size}</td>
                                                    <td className="px-6 py-5 text-center text-zinc-400">{row.waist}</td>
                                                    <td className="px-6 py-5 text-center text-zinc-400">{row.hip}</td>
                                                    <td className="px-6 py-5 text-center text-zinc-400">{row.thigh}</td>
                                                    <td className="px-6 py-5 text-center text-zinc-400">{row.inseam}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 flex items-start space-x-4">
                                <div className="p-2 bg-white rounded-lg border border-zinc-200 text-accent">
                                    <CheckCircle2 size={16} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase text-zinc-900 tracking-widest leading-none pt-1">{t('proTipSizing')}</p>
                                    <p className="text-[10px] font-medium text-muted leading-relaxed">{t('proTipSizingDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 text-center space-y-8">
                <div className="inline-flex items-center space-x-2 text-zinc-300">
                    <Ruler size={24} />
                    <div className="h-0.5 w-12 bg-zinc-100" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase italic text-zinc-900">
                    {t('stillConfused').split(' ')[0]} <span className="text-accent underline decoration-accent/10">{t('stillConfused').split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="max-w-2xl mx-auto text-sm text-muted font-medium uppercase tracking-tight">
                    {t('stillConfusedDesc')}
                </p>
                <div className="pt-4 flex justify-center">
                    <Link href="/products" className="bg-zinc-900 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent transition-all shadow-xl">
                        {t('backToShopping')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SizeChartPage;
