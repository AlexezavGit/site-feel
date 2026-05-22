import React from 'react';
import { LocalizedContent } from '../types';
import { Activity, Users, TrendingDown, EyeOff, AlertTriangle } from 'lucide-react';
import { EscalationTimelineChart } from './Charts';

interface StrategyViewProps {
  content: LocalizedContent;
  lang?: 'EN' | 'UK';
}

const StrategyView: React.FC<StrategyViewProps> = ({ content, lang = 'EN' }) => {
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
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            {t.title}
          </h1>
          <p className="text-xl text-orange-400 font-light max-w-3xl">
            {t.subtitle}
          </p>
        </div>

        {/* The Perfect Storm - Failures */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-orange-500 block"></span>
            {t.stormTitle}
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {t.failures.map((failure) => (
              <div key={failure.id} className="bg-slate-900/50 border border-white/5 rounded-xl p-6 md:p-8 hover:border-orange-500/30 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                    {getIcon(failure.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{failure.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base font-sans">
                      {failure.desc}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/5">
                  {failure.stats.map((stat, idx) => (
                    <div key={idx} className="bg-black/20 rounded-lg p-4 border border-white/5">
                      <div className="font-mono text-xl md:text-2xl font-bold text-orange-400 mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-300 font-medium mb-1 font-sans">{stat.label}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{stat.ref}</div>
                    </div>
                  ))}
                </div>
                {failure.id === 4 && (
                   <EscalationTimelineChart lang={lang} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Theory of Change */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-teal-500 block"></span>
            {t.tocTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.toc.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-teal-500/20 rounded-xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-teal-500/50 group-hover:bg-teal-400 transition-colors"></div>
                <h4 className="text-teal-400 font-bold mb-3 text-sm tracking-wider uppercase">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StrategyView;
