
import React from 'react';
import { Users, Activity, Shield, ArrowDown, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface StructuralBottleneckProps {
  lang: Language;
}

const StructuralBottleneck: React.FC<StructuralBottleneckProps> = ({ lang }) => {
  const t = CONTENT[lang].bottleneck;

  return (
    <div className="w-full bg-slate-950 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest">
              <AlertCircle size={12} />
              {t.label}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-normal text-white leading-tight tracking-tight uppercase">
              {t.title}
            </h2>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              {t.body}
            </p>
          </div>

          {/* Right Column: Diagram */}
          <div className="relative flex flex-col items-center space-y-8">
            
            {/* Top Card: Primary Care */}
            <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-xl p-5 flex items-center gap-4 shadow-2xl relative group hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                <Users size={24} />
              </div>
              <div>
                <div className="text-xs font-normal text-blue-400 uppercase tracking-widest mb-1">{t.primaryCare.title}</div>
                <div className="text-lg font-normal text-white">{t.primaryCare.subtitle}</div>
              </div>
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded-full shadow-lg animate-pulse">
                {t.primaryCare.tag}
              </div>
            </div>

            <ArrowDown className="text-slate-700 animate-bounce" size={32} />

            {/* Middle Card: The Solution (Digital Infrastructure) */}
            <div className="w-full max-w-md bg-slate-900 border-2 border-orange-500 rounded-xl p-6 shadow-[0_0_40px_rgba(234,88,12,0.2)] relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-normal text-white uppercase tracking-tighter flex items-center gap-2">
                  <Activity size={18} className="text-orange-500" />
                  {t.solution.title}
                </div>
                <div className="px-2 py-1 bg-orange-500 text-white text-[9px] font-normal uppercase rounded">
                  {t.solution.tag}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {t.solution.items.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-white/5 rounded border border-white/5 hover:bg-white/10 transition-colors group">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    <span className="text-[10px] font-normal text-slate-300 uppercase tracking-tight group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ArrowDown className="text-slate-700" size={32} />

            {/* Bottom Card: Psychiatric Care */}
            <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-xl p-5 flex items-center gap-4 shadow-2xl group hover:border-red-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500">
                <Shield size={24} />
              </div>
              <div>
                <div className="text-xs font-normal text-red-400 uppercase tracking-widest mb-1">{t.psychiatric.title}</div>
                <div className="text-lg font-normal text-white">{t.psychiatric.subtitle}</div>
              </div>
              <div className="ml-auto px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase rounded-full border border-white/5">
                {t.psychiatric.tag}
              </div>
            </div>

            {/* Added text below diagram as requested */}
            <div className="w-full max-w-md p-4 bg-white/5 border-l-4 border-orange-500 rounded-r-lg mt-4">
              <p className="text-sm text-slate-400 italic leading-relaxed">
                {t.subbody}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StructuralBottleneck;
