
import React, { useState, useEffect } from 'react';
import { CONTENT } from '../constants';
import { Language, DocumentId } from '../types';
import { GDPChart, ShadowEconomyChart, LocalizationGapChart, DonorDashboardMock, DeriskingChart, GlobalLocalFlowChart, GapChart } from './Charts';
import { TransparencyDashboardMockup, MonitoringDashboardMockup, FundingDashboardMockup } from './DashboardMockups';
import { ChevronRight, ChevronLeft, CornerUpLeft } from 'lucide-react';
import { PartnerLogo } from './PartnerLogos';

interface ReportViewProps {
  lang: Language;
  docId: DocumentId;
  initialPage?: number;
  onBackToSchema: () => void;
  onNextDoc: () => void;
}

const ReportView: React.FC<ReportViewProps> = ({ lang, docId, initialPage = 1, onBackToSchema, onNextDoc }) => {
  const t = CONTENT[lang].docs[docId].report;
  const tCenter = CONTENT[lang].docs[docId].schema.centerNode;
  const chartLabels = CONTENT[lang].charts;
  const navLabels = CONTENT[lang].appNav;
  
  const [pageId, setPageId] = useState(initialPage);
  
  useEffect(() => {
    setPageId(initialPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [docId, initialPage]);

  // Linear Navigation Logic
  const totalPages = t.pages.length;
  const currentPage = t.pages.find(p => p.id === pageId) || t.pages[0];
  const isCenterPage = pageId === totalPages; 

  const next = () => {
    if (pageId < totalPages) {
        setPageId(pageId + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // When clicking Next on the last page (Solution), go to the next Document (Frontal Page)
        onNextDoc();
    }
  };
  
  const prev = () => {
    if (pageId > 1) {
        setPageId(pageId - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        onBackToSchema();
    }
  };

  const renderChart = (chartId?: string) => {
    if (!chartId) return null;
    switch (chartId) {
      case 'shadowVsCluster':
        return <ShadowEconomyChart label={chartLabels.shadowVsCluster} />;
      case 'gapChart':
        return <GapChart label={chartLabels.gapChart} />;
      case 'fundingGap':
        return <GDPChart label={chartLabels.fundingGap} />;
      case 'donorDashboard':
        return <DonorDashboardMock label={chartLabels.donorDashboard} />;
      case 'dashboard_transparency':
        return <TransparencyDashboardMockup />;
      case 'dashboard_monitoring':
        return <MonitoringDashboardMockup />;
      case 'dashboard_funding':
        return <FundingDashboardMockup />;
      case 'adminCost':
        return <LocalizationGapChart label={chartLabels.adminCost} />;
      case 'derisking':
        return <DeriskingChart label={chartLabels.derisking} />;
      case 'globalLocal':
        return <GlobalLocalFlowChart label={chartLabels.globalLocal} />;
      default:
        return null;
    }
  };

  const parseText = (text: string) => {
      return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  const NavigationBar = ({ position }: { position: 'top' | 'bottom' }) => (
      <div className={`flex justify-between items-center bg-surface-light/90 dark:bg-surface-dark/90 border border-black/10 dark:border-white/10 p-2 md:p-4 rounded shadow-sm ${position === 'top' ? 'mb-4' : 'mt-4'}`} role="navigation" aria-label={`${position === 'top' ? 'Top' : 'Bottom'} Report Navigation`}>
        <button 
            onClick={onBackToSchema} 
            aria-label={navLabels.backToSchema}
            className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-textsec-light dark:text-textsec-dark hover:text-textcolor-light dark:hover:text-textcolor-dark transition-colors"
        >
             <CornerUpLeft size={16} />
             <span className="hidden md:inline">{navLabels.backToSchema}</span>
             <span className="md:hidden">Back</span>
        </button>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={prev} 
            aria-label="Previous Page"
            className="w-8 h-8 flex items-center justify-center rounded border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-textsec-light dark:text-textsec-dark hover:text-textcolor-light dark:hover:text-textcolor-dark transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex gap-1" aria-hidden="true">
             {t.pages.map(p => (
                 <div key={p.id} className={`w-1.5 h-1.5 rounded-full ${pageId === p.id ? 'bg-orange-600' : 'bg-black/30 dark:bg-slate-600'}`} />
             ))}
          </div>

          <button 
            onClick={next} 
            aria-label={pageId === totalPages ? "Next Document" : "Next Page"}
            className="w-8 h-8 flex items-center justify-center rounded bg-orange-600 text-white hover:bg-orange-700 transition-colors font-bold shadow-md"
          >
            {pageId === totalPages ? (
                 <ChevronRight size={18} className="animate-pulse" />
            ) : (
                 <ChevronRight size={18} />
            )}
          </button>
        </div>
      </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-2 md:p-8 pb-32">
      <NavigationBar position="top" />

      {/* Main Report Card - Compact */}
      <div className="bg-surface-light dark:bg-surface-dark rounded shadow-sm relative overflow-hidden flex flex-col border border-black/10 dark:border-white/10">
        
        {/* Accent Top Bar - Orange */}
        <div className={`w-full h-1 ${isCenterPage ? 'bg-emerald-500' : 'bg-orange-600'}`}></div>

        <div className="p-4 md:p-12 relative z-10">
            
            {/* Page Title Section */}
            <div className="border-b border-black/10 dark:border-white/10 pb-4 mb-6">
              <h1 className="text-2xl md:text-4xl font-light text-textcolor-light dark:text-textcolor-dark mb-2 uppercase tracking-tight leading-none">
                {currentPage.title}
              </h1>
              
              <p className="text-sm md:text-xl text-textsec-light dark:text-textsec-dark font-light leading-snug">
                {currentPage.subtitle}
              </p>
            </div>
            
            {/* Body Content */}
            <div className="flex flex-col lg:flex-row gap-8">
               <div className="flex-1">
                 <p className="text-sm md:text-base text-textcolor-light dark:text-textcolor-dark leading-relaxed text-justify mb-6 font-light">
                    {parseText(currentPage.body)}
                 </p>
                 
                 {currentPage.quote && (
                   <div className="border-l-4 border-orange-600 pl-4 py-3 mb-6 italic text-textsec-light dark:text-textsec-dark text-sm md:text-base bg-black/5 dark:bg-slate-800 rounded-r font-serif">
                     "{currentPage.quote}"
                   </div>
                 )}

                 <div className="space-y-3">
                    <h4 className="text-[10px] font-bold uppercase text-black/50 dark:text-slate-500 tracking-widest border-b border-black/10 dark:border-white/10 pb-2 mb-2">Key Takeaways</h4>
                    {currentPage.bullets.map((b, i) => (
                      <div key={i} className="flex gap-2 text-sm text-textsec-light dark:text-textsec-dark items-start font-medium">
                        <span className={`w-1.5 h-1.5 rounded-sm mt-1.5 shrink-0 ${isCenterPage ? 'bg-emerald-500' : 'bg-orange-600'}`} />
                        {b}
                      </div>
                    ))}
                 </div>
                 
                 {isCenterPage && tCenter.consortiumRoles && (
                     <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10">
                         <h4 className="text-[10px] font-bold uppercase text-black/50 dark:text-slate-500 tracking-widest mb-4">Consortium Partners</h4>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {tCenter.consortiumRoles.map((role, idx) => (
                                <div key={idx} className="p-3 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-slate-800 rounded text-center hover:bg-black/10 dark:hover:bg-slate-700 hover:shadow-md transition-all flex flex-col items-center justify-between">
                                    <div className="h-10 w-full flex items-center justify-center mb-2 text-textcolor-light dark:text-textcolor-dark">
                                        <PartnerLogo variant={role.logo} className="h-full w-full" />
                                    </div>
                                    <div className="text-[8px] font-bold text-textsec-light dark:text-textsec-dark uppercase tracking-wider">{role.org}</div>
                                </div>
                            ))}
                         </div>
                     </div>
                 )}

               </div>
               
               {/* Right Column: Charts */}
               {currentPage.chartId && (
                 <div className="flex-1 lg:max-w-md">
                    <div className="sticky top-6">
                        <div className="bg-black/5 dark:bg-slate-800 p-1 shadow-sm rounded border border-black/10 dark:border-white/10">
                            {renderChart(currentPage.chartId)}
                        </div>
                        {CONTENT[lang].charts[currentPage.chartId] && (
                            <div className="mt-2 flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-2 px-1">
                                <span className="text-[9px] text-black/50 dark:text-slate-500 uppercase font-bold tracking-wider">Fig {pageId}.1</span>
                                <span className="text-[9px] text-orange-600 dark:text-orange-500 font-bold">{CONTENT[lang].charts[currentPage.chartId]}</span>
                            </div>
                        )}
                    </div>
                 </div>
               )}
            </div>
        </div>
      </div>

      <NavigationBar position="bottom" />
    </div>
  );
};

export default ReportView;
