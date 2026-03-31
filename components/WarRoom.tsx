
import React, { useState, useEffect } from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';
import StructuralBottleneck from './StructuralBottleneck';
import { 
  Activity, Shield, Globe, DollarSign,
  Users, PieChart, ArrowRight, Info,
  Share2, AlertCircle
} from 'lucide-react';

interface WarRoomProps {
  lang: Language;
}

// --- GOAL TILE COMPONENT ---
// Updated to match the dark header aesthetic properly
const GoalTile = ({ icon: Icon, value, label, sublabel, color }: any) => {
    // Logic to highlight "42" in red if present in sublabel
    const renderSublabel = (text: string) => {
        if (!text) return null;
        if (text.includes("42")) {
            const parts = text.split("42");
            return (
                <>
                    {parts[0]}
                    <span className="text-red-500 font-bold">42</span>
                    {parts[1]}
                </>
            );
        }
        return text;
    };

    return (
        <div className={`relative overflow-hidden bg-slate-800 border border-white/10 p-4 rounded-lg flex flex-col items-center justify-center text-center group hover:bg-slate-700 transition-colors`}>
            <div className={`absolute top-0 left-0 w-full h-1 bg-${color}-500`}></div>
            <Icon size={20} className={`text-${color}-500 mb-2 opacity-80 group-hover:scale-110 transition-transform`} />
            <div className="text-3xl font-light text-white mb-1 tracking-tight">{value}</div>
            <div className={`text-[10px] font-bold uppercase tracking-widest text-${color}-400 mb-1`}>{label}</div>
            <div className="text-[9px] text-slate-400">{renderSublabel(sublabel)}</div>
        </div>
    );
};

const WarRoom: React.FC<WarRoomProps> = ({ lang }) => {
  const [selectedRole, setSelectedRole] = useState<any | null>(null);
  const t = CONTENT[lang].warRoom;

  return (
    <div className="w-full min-h-screen pb-48 flex flex-col items-center bg-slate-900">
       
       {/* SECTION 1: STRUCTURAL BOTTLENECK (Moved to first place) */}
       <StructuralBottleneck lang={lang} />

       {/* SECTION 2: SYSTEM RISK ANALYSIS & CURRENT STATE (Moved to second place) */}
       <div className="w-full bg-slate-900 text-white pt-12 pb-16 px-4 md:px-8 shadow-2xl relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                   <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest">
                            <AlertCircle size={12} />
                            {lang === Language.UA ? 'Актуальний стан справ' : 'Current State of Affairs'}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-normal text-white leading-tight tracking-tight uppercase">
                            {t.metrics.title}
                        </h2>
                   </div>
                </div>

                {/* KEY STATS ROW (New Request) */}
                {t.metrics.stats && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {t.metrics.stats.map((stat, idx) => {
                            const Icon = idx === 0 ? Users : PieChart;
                            return (
                                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center gap-6 backdrop-blur-sm hover:bg-white/10 transition-colors group relative overflow-hidden shadow-lg">
                                    <div className="absolute right-0 top-0 opacity-5 -translate-y-1/4 translate-x-1/4 pointer-events-none">
                                        <Icon size={120} />
                                    </div>
                                    <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 group-hover:scale-110 transition-transform">
                                        <Icon size={32} className="text-orange-500" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-4xl md:text-5xl font-normal text-white mb-1 tracking-tight">{stat.value}</div>
                                        <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">{stat.label}</div>
                                        <div className="text-[10px] text-slate-400 font-mono">{stat.sublabel}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* GOALS TILES */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <GoalTile 
                        icon={Globe} 
                        value="74%" 
                        label={t.goals[0].label} 
                        sublabel={t.goals[0].sublabel} 
                        color="orange"
                    />
                    <GoalTile 
                        icon={Activity} 
                        value="117k" 
                        label={t.goals[1].label} 
                        sublabel={t.goals[1].sublabel} 
                        color="orange"
                    />
                    <GoalTile 
                        icon={DollarSign} 
                        value="89%" 
                        label={t.goals[2].label} 
                        sublabel={t.goals[2].sublabel} 
                        color="red"
                    />
                        <GoalTile 
                        icon={Shield} 
                        value="3.9M" 
                        label={t.goals[3].label} 
                        sublabel={t.goals[3].sublabel} 
                        color="red"
                    />
                </div>
            </div>
       </div>

       {/* SECTION 4: GLOBAL VISION (Soft Power) */}
       {t.globalVision && (
         <div className="w-full max-w-7xl px-4 md:px-8 mt-12">
            <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500 to-transparent"></div>
                <div className="p-8 md:p-12 relative z-10 text-center">
                    <div className="flex justify-center mb-4">
                        <Globe size={48} className="text-orange-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-normal uppercase tracking-tight text-white mb-4">
                        {t.globalVision.title}
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg md:text-xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
                        {t.globalVision.body}
                    </p>
                </div>
            </div>
         </div>
       )}

       {/* SECTION 5: CONSORTIUM & GOVERNANCE */}
       <div className="w-full max-w-7xl px-4 md:px-8 py-12">
            
            {/* Consortium Structure Section */}
            <div>
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                    <h3 className="text-xl md:text-3xl font-light uppercase text-white tracking-widest">
                        {t.title}
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.consortiumRoles?.map((role, idx) => (
                        <div 
                            key={idx} 
                            className="bg-slate-800 p-6 rounded-xl shadow-sm border border-white/10 hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer hover:border-orange-500/50"
                            onClick={() => setSelectedRole(role)}
                        >
                            <div className="text-[10px] font-bold uppercase text-orange-500 tracking-widest mb-2">{role.org}</div>
                            <div className="space-y-4 mb-4">
                                {role.partners.map((partner, pIdx) => (
                                    <div key={pIdx} className="flex items-center justify-between gap-3 bg-slate-900/50 p-2 rounded-lg border border-white/5">
                                        <div className="flex items-center gap-3">
                                            {partner.logo && (
                                                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-white rounded flex items-center justify-center p-2 shrink-0 shadow-sm" title={partner.name}>
                                                    <img 
                                                        src={partner.logo.startsWith('/') ? partner.logo : `https://picsum.photos/seed/${partner.logo}/80/80`} 
                                                        alt={partner.name} 
                                                        className="h-full w-full object-contain"
                                                        referrerPolicy="no-referrer"
                                                    />
                                                </div>
                                            )}
                                            <div className="text-sm font-medium text-slate-200 leading-tight">{partner.name}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {role.desc && <div className="text-[11px] text-slate-400 leading-relaxed mb-4 line-clamp-3">{role.desc}</div>}
                            <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5" title="Verified Partner: This organization has undergone clinical and operational validation by the FeeL Again Consortium.">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Verified Partner</span>
                                    </div>
                                    <div className="text-orange-500 text-[10px] uppercase font-bold tracking-widest flex items-center gap-1">
                                        {lang === Language.UA ? 'Деталі' : 'Details'} <ArrowRight size={12} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Efficiency Math */}
            <div className="mt-6 bg-slate-800 rounded-xl border border-white/10 p-6 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
                    <div className="text-[120px] font-black leading-none font-mono text-white">WHOLE</div>
                </div>

                <div className="md:w-1/2 z-10">
                    <h4 className="text-sm font-bold uppercase text-orange-500 tracking-widest mb-2 flex items-center gap-2">
                        {t.governance.title} <Info size={14} className="text-orange-400" />
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed text-justify">
                        {t.governance.body}
                    </p>
                </div>
                <div className="flex-1 w-full flex justify-center z-10">
                    <div className="bg-slate-900 p-4 rounded shadow-sm border border-emerald-500/30 ring-2 ring-emerald-500/10 w-full max-w-xs text-center">
                            <div className="text-[10px] text-emerald-400 uppercase mb-1 font-bold">{t.governance.feelAgain}</div>
                            <div className="text-2xl font-black text-emerald-400">100%</div>
                            <div className="text-[9px] text-emerald-500/80">{t.governance.feelAgainDesc}</div>
                    </div>
                </div>
            </div>
       </div>

       <div className="w-full max-w-7xl px-4 md:px-8 space-y-16 mt-8">
          
          {/* SECTION 7: Contacts */}
          <div id="contacts" className="bg-slate-900 rounded-xl shadow-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
              <div>
                  <h3 className="text-2xl font-light uppercase tracking-tight mb-4">{t.contacts.title}</h3>
                  <div className="space-y-4">
                      <div>
                          <div className="font-bold text-lg">Alex Zvolinskiy</div>
                          <div className="text-orange-400 text-sm mb-1">COP, Feel Again Program</div>
                          <div className="text-slate-300 font-mono text-sm">+380 50 310 80 66</div>
                          <div className="text-slate-300 font-mono text-sm">Alex.Zvolinskiy@feelagain.me</div>
                      </div>
                      <div className="h-px w-full bg-white/10"></div>
                      <div>
                          <div className="font-bold text-lg">Olga Kalga</div>
                          <div className="text-orange-400 text-sm mb-1">Head of Strategic Partnerships</div>
                          <div className="text-slate-300 font-mono text-sm">+380 73 853 99 43</div>
                          <div className="text-slate-300 font-mono text-sm">Partnership@feelagain.me</div>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col gap-4">
                  <button onClick={() => {
                      if (navigator.share) {
                          navigator.share({
                              title: 'Feel Again - Strategic War Room',
                              url: window.location.href
                          });
                      } else {
                          navigator.clipboard.writeText(window.location.href);
                          alert('Link copied to clipboard!');
                      }
                  }} 
                  aria-label={t.contacts.share}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors border border-white/20"
                  >
                      <Share2 size={20} />
                      <span className="font-bold uppercase tracking-wider text-sm">{t.contacts.share}</span>
                  </button>
              </div>
          </div>

       </div>

       {/* Role Details Modal */}
       {selectedRole && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedRole(null)}>
               <div className="bg-slate-800 shadow-2xl border border-white/10 p-6 md:p-8 rounded-xl w-full max-w-2xl animate-float relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                   <div className="flex justify-between items-start mb-6">
                       <h4 className="text-xl md:text-2xl font-light uppercase text-white tracking-widest">
                           {selectedRole.org}
                       </h4>
                       <button 
                           onClick={() => setSelectedRole(null)} 
                           aria-label="Close details"
                           className="text-slate-400 hover:text-white transition-colors"
                       >
                           <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xl">×</div>
                       </button>
                   </div>
                   
                   {selectedRole.desc && (
                       <div className="bg-slate-900/50 p-4 rounded-lg border border-white/5 mb-6">
                           <p className="text-sm text-slate-300 leading-relaxed">{selectedRole.desc}</p>
                       </div>
                   )}

                   <div className="space-y-4">
                       <h5 className="text-xs font-bold uppercase text-slate-500 tracking-widest mb-4">
                           {lang === Language.UA ? 'Партнери' : 'Partners'}
                       </h5>
                       {selectedRole.partners.map((partner: any, pIdx: number) => (
                           <div key={pIdx} className="flex items-center justify-between gap-4 bg-slate-900 p-4 rounded-lg border border-white/5">
                               <div className="flex items-center gap-4">
                                   {partner.logo && (
                                       <div className="h-20 w-20 sm:h-24 sm:w-24 rounded flex items-center justify-center p-2 shrink-0">
                                           <img 
                                               src={partner.logo.startsWith('/') ? partner.logo : `https://picsum.photos/seed/${partner.logo}/96/96`} 
                                               alt={partner.name} 
                                               className={`h-full w-full object-contain ${partner.logo.startsWith('/') ? 'invert mix-blend-screen' : 'opacity-50 grayscale'}`}
                                               referrerPolicy="no-referrer"
                                           />
                                       </div>
                                   )}
                                   <div>
                                       <div className="text-base font-medium text-white mb-1">{partner.name}</div>
                                       {partner.desc && <div className="text-xs text-slate-400">{partner.desc}</div>}
                                   </div>
                               </div>
                               {partner.website && (
                                   <a 
                                       href={partner.website} 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="text-orange-500 hover:text-orange-400 transition-colors shrink-0 p-2 bg-white/5 rounded-full hover:bg-white/10"
                                   >
                                       <Globe size={18} />
                                   </a>
                               )}
                           </div>
                       ))}
                   </div>
               </div>
           </div>
       )}

    </div>
  );
};

export default WarRoom;
