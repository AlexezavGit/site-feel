
import React, { useState, useEffect } from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';
import StructuralBottleneck from './StructuralBottleneck';
import FeelAgainLogo from './Logo';
import { 
  Activity, CheckCircle, Shield, Building, Globe, Zap, DollarSign,
  TrendingUp, Scale, Users, FileText, BarChart3, PieChart, ArrowRight, Info,
  Share2, Target, MessageCircle, Heart, Lock, Clock, Trophy, Crosshair
} from 'lucide-react';

interface WarRoomProps {
  lang: Language;
}

// Custom Hook for counting animation
const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const CountUpAnimation: React.FC<{ value: number, suffix?: string, prefix?: string, decimals?: number }> = ({ value, suffix = "", prefix = "", decimals = 0 }) => {
    const count = useCountUp(value);
    const formatted = count.toFixed(decimals);
    return <span>{prefix}{formatted}{suffix}</span>;
};

// --- MIND MAP COMPONENTS ---

interface MindMapNodeProps {
    title: string;
    icon: any;
    isActive: boolean;
    onClick: () => void;
    position: string;
    color: string;
}

// Updated MindMapNode to use warm gray/orange palette instead of random colors if needed, 
// but sticking to props for now, just ensuring borders are consistent.
const MindMapNode: React.FC<MindMapNodeProps> = ({ title, icon: Icon, isActive, onClick, position, color }) => (
    <button 
        onClick={onClick}
        aria-label={`View impact of ${title}`}
        aria-pressed={isActive}
        className={`absolute w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center p-2 shadow-lg transition-all duration-500 z-20 border-2 group ${position}
        ${isActive ? `scale-110 bg-white border-orange-500 ring-4 ring-orange-100 shadow-[0_0_30px_rgba(234,88,12,0.4)]` : `bg-gray-50 border-gray-200 hover:border-orange-400 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(234,88,12,0.25)] hover:bg-white`}`}
    >
        <Icon size={24} className={`mb-2 transition-colors duration-300 ${isActive ? `text-orange-600` : 'text-gray-400 group-hover:text-orange-500'}`} />
        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider text-center leading-tight transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-500 group-hover:text-gray-900'}`}>
            {title}
        </span>
    </button>
);

const ConnectionLine: React.FC<{ angle: number, length: string, isActive: boolean }> = ({ angle, length, isActive }) => (
    <div 
        className={`absolute top-1/2 left-1/2 h-[1px] origin-left z-0 transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}
        style={{ 
            width: length, 
            transform: `translateY(-50%) rotate(${angle}deg)`,
            background: isActive 
                ? 'linear-gradient(90deg, rgba(234,88,12,1) 0%, rgba(234,88,12,0.4) 50%, rgba(234,88,12,0) 100%)' 
                : 'linear-gradient(90deg, rgba(203,213,225,1) 0%, rgba(203,213,225,0.2) 100%)',
            boxShadow: isActive ? '0 0 15px rgba(234,88,12,0.5)' : 'none'
        }}
    >
        {isActive && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full blur-[2px] animate-pulse"></div>
        )}
    </div>
);

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
  const [activeMindNode, setActiveMindNode] = useState<string | null>(null);
  const t = CONTENT[lang].warRoom;

  const getImpactText = () => {
      if (!activeMindNode) return null;
      const node = t.mindMap.nodes[activeMindNode];
      return node ? { title: node.title, desc: node.desc, impact: node.impact } : null;
  };

  // Reusable Card Component - STANDARDIZED to 'Pilot & Deployment Strategy' Design (Slate Header + White Body + Orange Accent)
  const DashboardCard = ({ title, icon: Icon, children, accentColor = "orange" }: any) => (
      <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
           {/* Header styled like PhaseCard */}
           <div className={`bg-slate-900 text-white p-4 border-b-4 flex items-center gap-2 border-${accentColor}-500`}>
                <Icon size={16} className={`text-${accentColor}-500`} />
                <h4 className={`text-xs font-bold uppercase tracking-widest text-${accentColor}-400`}>{title}</h4>
           </div>
           <div className="p-4 flex-grow flex flex-col justify-center bg-white">
               {children}
           </div>
      </div>
  );

  const PhaseCard = ({ phase, year, items }: { phase: string, year: string, items: { title: string, subtitle: string, icon: any }[] }) => (
      <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300 group">
          <div className="bg-slate-900 text-white p-4 border-b border-orange-500 border-b-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-1 relative z-10">{phase}</div>
              <div className="text-2xl font-light relative z-10">{year}</div>
          </div>
          <div className="p-4 space-y-4 flex-grow bg-gradient-to-b from-white to-gray-50/50">
              {items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded border border-gray-100 hover:bg-orange-50 hover:border-orange-200 transition-all duration-300 group/item shadow-sm hover:shadow-md">
                      <div className="mt-1 text-orange-600 group-hover/item:scale-110 transition-transform"><item.icon size={18} /></div>
                      <div>
                          <div className="text-sm font-bold text-gray-900 uppercase tracking-tight">{item.title}</div>
                          <div className="text-xs text-gray-600 leading-relaxed mt-1 font-medium">{item.subtitle}</div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );

  return (
    <div className="w-full min-h-screen pb-48 flex flex-col items-center bg-gray-50">
       
       {/* SECTION 1: SYSTEM RISK ANALYSIS & CURRENT STATE (Merged) */}
       <div className="w-full bg-slate-900 text-white pt-12 pb-16 px-4 md:px-8 shadow-2xl relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                   <div>
                        <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2 flex items-center gap-2 animate-pulse">
                            <Activity size={14} /> {lang === Language.UA ? 'Актуальний стан справ' : 'Current State of Affairs'}
                        </h3>
                        <h1 className="text-3xl md:text-5xl font-normal uppercase tracking-tight leading-none">
                            {t.metrics.title}
                        </h1>
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

       {/* SECTION 2: STRUCTURAL BOTTLENECK (Placed below Metrics) */}
       <StructuralBottleneck lang={lang} />

       {/* SECTION 3: STRATEGIC MIND MAP */}
       <div className="w-full bg-white border-b border-gray-200 py-12 px-4 relative overflow-visible">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-12">{t.mindMap.title}</h3>
                
                <div className="relative h-[500px] w-full flex items-center justify-center">
                    
                    {/* Central Core */}
                    <div className="w-40 h-40 bg-slate-900 rounded-full flex flex-col items-center justify-center z-30 shadow-2xl ring-8 ring-slate-100">
                        <FeelAgainLogo fill="white" className="w-16 h-16 mb-2" />
                        <span className="text-[10px] text-orange-400 font-bold uppercase tracking-widest">Feel Again</span>
                    </div>

                    {/* Connecting Lines */}
                    <ConnectionLine angle={214} length="260px" isActive={activeMindNode === 'speed'} />
                    <ConnectionLine angle={180} length="280px" isActive={activeMindNode === 'cost'} />
                    <ConnectionLine angle={146} length="260px" isActive={activeMindNode === 'quality'} />
                    <ConnectionLine angle={-34} length="260px" isActive={activeMindNode === 'trust'} />
                    <ConnectionLine angle={0} length="280px" isActive={activeMindNode === 'dignity'} />
                    <ConnectionLine angle={34} length="260px" isActive={activeMindNode === 'data'} />

                    {/* Priorities Nodes (Left) - Using Warm/Neutral Colors */}
                    <MindMapNode 
                        title={t.mindMap.nodes.speed.title} icon={Zap} color="orange"
                        position="left-[5%] top-[20%]" 
                        isActive={activeMindNode === 'speed'} 
                        onClick={() => setActiveMindNode('speed')} 
                    />
                    <MindMapNode 
                        title={t.mindMap.nodes.cost.title} icon={DollarSign} color="orange"
                        position="left-[0%] top-[50%] -translate-y-1/2" 
                        isActive={activeMindNode === 'cost'} 
                        onClick={() => setActiveMindNode('cost')} 
                    />
                    <MindMapNode 
                        title={t.mindMap.nodes.quality.title} icon={CheckCircle} color="orange"
                        position="left-[5%] bottom-[20%]" 
                        isActive={activeMindNode === 'quality'} 
                        onClick={() => setActiveMindNode('quality')} 
                    />

                    {/* Communication Nodes (Right) - Using Warm/Neutral Colors */}
                    <MindMapNode 
                        title={t.mindMap.nodes.trust.title} icon={Shield} color="orange"
                        position="right-[5%] top-[20%]" 
                        isActive={activeMindNode === 'trust'} 
                        onClick={() => setActiveMindNode('trust')} 
                    />
                    <MindMapNode 
                        title={t.mindMap.nodes.dignity.title} icon={Heart} color="orange"
                        position="right-[0%] top-[50%] -translate-y-1/2" 
                        isActive={activeMindNode === 'dignity'} 
                        onClick={() => setActiveMindNode('dignity')} 
                    />
                    <MindMapNode 
                        title={t.mindMap.nodes.data.title} icon={Activity} color="orange"
                        position="right-[5%] bottom-[20%]" 
                        isActive={activeMindNode === 'data'} 
                        onClick={() => setActiveMindNode('data')} 
                    />

                    {/* Context Detail Box (Pops up when clicked) */}
                    {activeMindNode && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setActiveMindNode(null)}>
                            <div className="bg-white shadow-2xl border border-gray-200 p-6 rounded-xl w-full max-w-sm animate-float relative" onClick={(e) => e.stopPropagation()}>
                                <h4 className="text-lg font-bold uppercase text-gray-900 mb-2 flex items-center justify-center gap-2">
                                    {getImpactText()?.title} {lang === Language.UA ? 'Вплив' : 'Impact'}
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">{getImpactText()?.desc}</p>
                                <div className="bg-orange-50 text-orange-800 p-3 rounded text-xs font-bold border border-orange-100">
                                    {lang === Language.UA ? 'РЕЗУЛЬТАТ' : 'RESULT'}: {getImpactText()?.impact}
                                </div>
                                <button 
                                    onClick={() => setActiveMindNode(null)} 
                                    aria-label="Close details"
                                    className="absolute top-4 right-4 text-gray-400 hover:text-black"
                                >
                                    <div className="w-6 h-6 rounded-full border flex items-center justify-center text-xl">×</div>
                                </button>
                            </div>
                        </div>
                    )}
                    
                    {!activeMindNode && (
                         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-900/10 backdrop-blur-sm text-gray-500 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse">
                            {t.mindMap.hint}
                        </div>
                    )}

                </div>
            </div>
       </div>

       {/* SECTION 4: CONSORTIUM & GOVERNANCE */}
       <div className="w-full max-w-7xl px-4 md:px-8 py-12">
            
            {/* Consortium Structure Section */}
            <div>
                <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
                    <h3 className="text-xl md:text-3xl font-light uppercase text-gray-900 tracking-widest">
                        {t.title}
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.consortiumRoles?.map((role, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                            <div className="text-[10px] font-bold uppercase text-orange-600 tracking-widest mb-2">{role.org}</div>
                            <div className="space-y-2 mb-4">
                                {role.partners.map((partner, pIdx) => (
                                    <div key={pIdx} className="flex items-center justify-between gap-2">
                                        <div className="text-sm font-medium text-gray-900 leading-tight">{partner.name}</div>
                                        {partner.website && (
                                            <a 
                                                href={partner.website} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-orange-500 hover:text-orange-700 transition-colors"
                                            >
                                                <Globe size={14} />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {role.desc && <div className="text-[11px] text-gray-500 leading-relaxed mb-4">{role.desc}</div>}
                            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-2">
                                <div className="flex -space-x-2 overflow-hidden">
                                    {role.partners.map((partner, pIdx) => partner.logo && (
                                        <div key={pIdx} className="w-8 h-8 bg-gray-50 rounded-full border-2 border-white flex items-center justify-center p-1 shadow-sm">
                                            <img 
                                                src={`https://picsum.photos/seed/${partner.logo}/40/40`} 
                                                alt={partner.name} 
                                                className="w-full h-full object-contain opacity-50 grayscale"
                                                referrerPolicy="no-referrer"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-1" title="Verified Partner: This organization has undergone clinical and operational validation by the FeeL Again Consortium.">
                                    <div className="w-1.5 h-1.5 bg-emerald-500" />
                                    <span className="text-[9px] text-gray-400 uppercase tracking-tighter">Verified Partner</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Efficiency Math */}
            <div className="mt-6 bg-orange-50 rounded-xl border border-orange-200 p-6 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
                    <div className="text-[120px] font-black leading-none font-mono text-orange-900">WHOLE</div>
                </div>

                <div className="md:w-1/2 z-10">
                    <h4 className="text-sm font-bold uppercase text-orange-800 tracking-widest mb-2 flex items-center gap-2">
                        {t.governance.title} <Info size={14} className="text-orange-400" />
                    </h4>
                    <p className="text-xs text-orange-700 leading-relaxed text-justify">
                        {t.governance.body}
                    </p>
                </div>
                <div className="flex-1 w-full flex justify-center z-10">
                    <div className="bg-white p-4 rounded shadow-sm border border-emerald-200 ring-2 ring-emerald-50 w-full max-w-xs text-center">
                            <div className="text-[10px] text-emerald-600 uppercase mb-1 font-bold">{t.governance.feelAgain}</div>
                            <div className="text-2xl font-black text-emerald-600">100%</div>
                            <div className="text-[9px] text-emerald-500">{t.governance.feelAgainDesc}</div>
                    </div>
                </div>
            </div>
       </div>

       <div className="w-full max-w-7xl px-4 md:px-8 space-y-16 mt-8">
          
          {/* SECTION 6: GLOBAL VISION (Soft Power) - MOVED HERE */}
          {t.globalVision && (
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
          )}

          {/* SECTION 4: Embassy Request */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-12">
              <div className="bg-slate-900 p-8 text-center border-b-4 border-orange-500">
                  <h2 className="text-2xl md:text-3xl font-light uppercase tracking-tight text-white mb-2">{t.request.title}</h2>
                  <p className="text-slate-400 text-sm max-w-3xl mx-auto">
                      {t.request.subtitle}
                  </p>
              </div>

              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                      <h3 className="text-sm font-bold uppercase text-orange-600 tracking-widest mb-6 flex items-center gap-2">
                          <Building size={16} /> {t.request.impactTitle}
                      </h3>
                      <div className="space-y-3">
                           {/* Item 0: NBU - EBRD */}
                           <div className="flex gap-4 p-3 bg-orange-50 rounded border border-orange-100 hover:border-orange-300 transition-colors">
                              <div className="text-2xl">🏦</div>
                              <div>
                                  <div className="font-bold text-gray-900">{t.request.items[0].title}</div>
                                  <div className="text-xs text-gray-600 mt-1">
                                    {t.request.items[0].body || t.request.items[0].subtitle}
                                  </div>
                              </div>
                          </div>
                          {/* Item 1: MOE */}
                          <div className="flex gap-4 p-3 hover:bg-gray-50 rounded transition-colors">
                              <div className="text-2xl">🎓</div>
                              <div>
                                  <div className="font-bold text-gray-900">{t.request.items[1].title}</div>
                                  <div className="text-xs text-gray-600">{t.request.items[1].body || t.request.items[1].subtitle}</div>
                              </div>
                          </div>
                          {/* Item 2: Ministry of Economy */}
                          <div className="flex gap-4 p-3 hover:bg-gray-50 rounded transition-colors">
                              <div className="text-2xl">📈</div>
                              <div>
                                  <div className="font-bold text-gray-900">{t.request.items[2].title}</div>
                                  <div className="text-xs text-gray-600">{t.request.items[2].body || t.request.items[2].subtitle}</div>
                              </div>
                          </div>
                          {/* Item 3: Cabinet of Ministers */}
                          <div className="flex gap-4 p-3 hover:bg-gray-50 rounded transition-colors">
                              <div className="text-2xl">🏛️</div>
                              <div>
                                  <div className="font-bold text-gray-900">{t.request.items[3].title}</div>
                                  <div className="text-xs text-gray-600">{t.request.items[3].body || t.request.items[3].subtitle}</div>
                              </div>
                          </div>
                          {/* Item 4: Grand Bargain */}
                          <div className="flex gap-4 p-3 hover:bg-gray-50 rounded transition-colors">
                              <div className="text-2xl">🤝</div>
                              <div>
                                  <div className="font-bold text-gray-900">{t.request.items[4].title}</div>
                                  <div className="text-xs text-gray-600">{t.request.items[4].body || t.request.items[4].subtitle}</div>
                              </div>
                          </div>
                          {/* Item 5: US DoD (New) */}
                          <div className="flex gap-4 p-3 hover:bg-gray-50 rounded transition-colors">
                              <div className="text-2xl">🇺🇸</div>
                              <div>
                                  <div className="font-bold text-gray-900">{t.request.items[5]?.title}</div>
                                  <div className="text-xs text-gray-600">{t.request.items[5]?.body || t.request.items[5]?.subtitle}</div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
                      <div className="md:pl-12">
                          <h3 className="text-sm font-bold uppercase text-emerald-600 tracking-widest mb-6 flex items-center gap-2">
                              <DollarSign size={16} /> {t.request.fundingTitle}
                          </h3>
                          
                          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 border-b border-gray-200 pb-2 gap-2 sm:gap-4">
                                  <span className="text-sm text-gray-600">{t.request.funding.investment}</span>
                                  <span className="font-mono text-emerald-600 font-bold text-right">$5,000,000</span>
                              </div>
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 border-b border-gray-200 pb-2 gap-2 sm:gap-4">
                                  <span className="text-sm text-gray-600">{t.request.funding.source}</span>
                                  <span className="font-mono text-emerald-600 font-bold text-[10px] text-right leading-tight sm:max-w-[60%]">{t.request.funding.sourceVal}</span>
                              </div>
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-4">
                                  <span className="text-sm text-gray-600">{t.request.funding.mechanism}</span>
                                  <span className="font-mono text-emerald-600 font-bold text-[10px] text-right leading-tight sm:max-w-[60%]">{t.request.funding.mechanismVal}</span>
                              </div>
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-gray-300 gap-2 sm:gap-4">
                                  <span className="font-bold uppercase tracking-wider text-gray-900">{t.request.funding.costToState}</span>
                                  <span className="font-mono text-xl font-bold text-emerald-600 text-right">$0.00</span>
                              </div>
                          </div>

                          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded text-center">
                              <div className="text-[10px] font-bold uppercase text-emerald-600 tracking-widest mb-1">{t.request.funding.stateAsset}</div>
                              <div className="text-3xl font-light text-emerald-800 mb-1">{t.request.funding.license}</div>
                              <div className="text-xs text-emerald-700">{t.request.funding.licenseDesc}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
          {/* SECTION 6: GLOBAL VISION (Soft Power) - MOVED ABOVE */}
          
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
    </div>
  );
};

// Helper for FeelAgainLogo in MindMap (can't import component inside component easily)
export default WarRoom;
