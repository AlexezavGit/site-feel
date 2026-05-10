import React from 'react';
import { LocalizedContent } from '../types';
import { Activity, Users, TrendingDown, EyeOff, AlertTriangle } from 'lucide-react';

interface StrategyViewProps {
  content: LocalizedContent;
}

const StrategyView: React.FC<StrategyViewProps> = ({ content }) => {
  const t = content.strategy;

  const getIcon = (id: number) => {
    switch (id) {
      case 1: return <Users size={24} className="text-orange-500" />;
      case 2: return <Activity size={24} className="text-orange-500" />;
      case 3: return <AlertTriangle size={24} className="text-orange-500" />;
      case 4: return <EyeOff size={24} className="text-orange-500" />;
      case 5: return <TrendingDown size={24} className="text-orange-500" />;
      default: return <Activity size={24} className="text-orange-500" />;
    }
  };

  return (
    <div className="pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-b border-black/10 dark:border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-light text-textcolor-light dark:text-textcolor-dark mb-4 tracking-tight">
            {t.title}
          </h1>
          <p className="text-xl text-orange-600 dark:text-orange-400 font-light max-w-3xl">
            {t.subtitle}
          </p>
        </div>

        {/* The Perfect Storm - Failures */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-textcolor-light dark:text-textcolor-dark mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-orange-500 block"></span>
            {t.stormTitle}
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {t.failures.map((failure) => (
              <div key={failure.id} className="bg-surface-light/50 dark:bg-surface-dark/50 border border-black/5 dark:border-white/5 rounded-xl p-6 md:p-8 hover:border-orange-500/30 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                    {getIcon(failure.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-textcolor-light dark:text-textcolor-dark mb-2">{failure.title}</h3>
                    <p className="text-textsec-light dark:text-textsec-dark leading-relaxed text-sm md:text-base font-sans">
                      {failure.desc}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-black/5 dark:border-white/5">
                  {failure.stats.map((stat, idx) => (
                    <div key={idx} className="bg-black/5 dark:bg-black/20 rounded-lg p-4 border border-black/5 dark:border-white/5 shadow-sm">
                      <div className="font-mono text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">{stat.value}</div>
                      <div className="text-xs text-textsec-light dark:text-textsec-dark font-medium mb-1 font-sans">{stat.label}</div>
                      <div className="text-[10px] text-black/50 dark:text-white/50 font-mono">{stat.ref}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Theory of Change */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-textcolor-light dark:text-textcolor-dark mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-teal-500 block"></span>
            {t.tocTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.toc.map((item, idx) => (
              <div key={idx} className="bg-surface-light dark:bg-surface-dark border border-teal-500/20 rounded-xl p-6 relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-teal-500/50 group-hover:bg-teal-400 transition-colors"></div>
                <h4 className="text-teal-600 dark:text-teal-400 font-bold mb-3 text-sm tracking-wider uppercase">{item.title}</h4>
                <p className="text-textsec-light dark:text-textsec-dark text-sm leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Roadmap */}
        <div>
          <h2 className="text-2xl font-bold text-textcolor-light dark:text-textcolor-dark mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-500 block"></span>
            {t.roadmapTitle}
          </h2>
          
          <div className="bg-surface-light dark:bg-surface-dark border border-black/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/5 dark:bg-black/40 border-b border-black/10 dark:border-white/10">
                    <th className="p-4 text-xs font-bold text-textsec-light dark:text-textsec-dark uppercase tracking-wider font-sans">Phase</th>
                    <th className="p-4 text-xs font-bold text-textsec-light dark:text-textsec-dark uppercase tracking-wider font-sans">Timeline</th>
                    <th className="p-4 text-xs font-bold text-textsec-light dark:text-textsec-dark uppercase tracking-wider font-sans">Objective</th>
                    <th className="p-4 text-xs font-bold text-textsec-light dark:text-textsec-dark uppercase tracking-wider font-sans">KPI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/5">
                  {t.roadmap.map((item, idx) => (
                    <tr key={idx} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <td className="p-4 text-sm font-bold text-textcolor-light dark:text-textcolor-dark whitespace-nowrap font-sans">{item.phase}</td>
                      <td className="p-4 text-sm font-mono text-blue-600 dark:text-blue-400 whitespace-nowrap">{item.timeline}</td>
                      <td className="p-4 text-sm text-textsec-light dark:text-textsec-dark font-sans">{item.obj}</td>
                      <td className="p-4 text-sm text-black/50 dark:text-slate-400 font-mono">{item.kpi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StrategyView;
