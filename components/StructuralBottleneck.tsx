
import React from 'react';
import { Users, Activity, Shield, ArrowDown, ArrowUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface StructuralBottleneckProps {
  lang: Language;
}

const StructuralBottleneck: React.FC<StructuralBottleneckProps> = ({ lang }) => {
  const t = CONTENT[lang].bottleneck;

  return (
    <div className="w-full bg-bg-light dark:bg-bg-dark pt-16 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Text Content */}
          <div className="space-y-6 sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-500 text-[10px] font-bold uppercase tracking-widest">
              <AlertCircle size={12} />
              {t.label}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-normal text-textcolor-light dark:text-textcolor-dark leading-tight tracking-tight uppercase">
              {t.title}
            </h2>
            
            <p className="text-lg text-textsec-light dark:text-textsec-dark leading-relaxed max-w-xl">
              {t.body}
            </p>

            <div className="p-4 bg-black/5 dark:bg-white/5 border-l-4 border-orange-500 rounded-r-lg mt-8 max-w-xl">
              <p className="text-sm text-textsec-light dark:text-textsec-dark italic leading-relaxed">
                {t.subbody}
              </p>
            </div>
          </div>

          {/* Right Column: Diagram */}
          <div className="relative flex flex-col items-center space-y-4">
            
            {t.levels.map((level: any, index: number) => (
              <React.Fragment key={level.id}>
                <div className={`w-full max-w-lg bg-surface-light dark:bg-surface-dark border ${index === 2 ? 'border-orange-500 shadow-[0_0_30px_rgba(234,88,12,0.15)]' : 'border-black/10 dark:border-white/10'} rounded-xl p-5 relative group hover:border-black/30 dark:hover:border-white/30 transition-colors shadow-sm`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${index === 2 ? 'bg-orange-500/20 text-orange-600 dark:text-orange-500' : 'bg-black/5 dark:bg-slate-800 text-textsec-light dark:text-textsec-dark'}`}>
                      <span className="font-bold text-lg">{level.id}</span>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold uppercase tracking-tight mb-2 ${index === 2 ? 'text-orange-600 dark:text-orange-400' : 'text-textcolor-light dark:text-textcolor-dark'}`}>
                        {level.title}
                      </h3>
                      <p className="text-sm text-textsec-light dark:text-textsec-dark leading-relaxed mb-3">
                        {level.desc}
                      </p>
                      {level.sub && (
                        <div className="p-3 bg-black/5 dark:bg-slate-950/50 rounded-lg border border-black/5 dark:border-white/5 text-xs text-textsec-light dark:text-textsec-dark leading-relaxed whitespace-pre-line">
                          {level.sub}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrows between levels */}
                {index > 0 && index < t.levels.length - 1 && (
                  <div className="flex items-center justify-center py-2">
                    {index === 1 ? (
                      // Between Level 2 and 3: Bi-directional or Upward arrow as requested
                      <div className="flex gap-8">
                        <ArrowDown className="text-black/30 dark:text-slate-600 animate-bounce" size={24} />
                        <ArrowUp className="text-orange-500 animate-bounce" size={24} />
                      </div>
                    ) : (
                      <ArrowDown className="text-black/30 dark:text-slate-600 animate-bounce" size={24} />
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default StructuralBottleneck;
