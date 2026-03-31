
import React, { useState } from 'react';
import { ViewMode, Language, DocumentId } from './types';
import { CONTENT } from './constants';
import SchemaView from './components/SchemaView';
import ReportView from './components/ReportView';
import WarRoom from './components/WarRoom';
import HeroView from './components/HeroView';
import StrategyView from './components/StrategyView';
import FeelAgainLogo from './components/Logo';
import { Globe, ChevronRight, ChevronLeft, Menu, X, ShieldAlert } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [view, setView] = useState<ViewMode>(ViewMode.HERO);
  const [activeDoc, setActiveDoc] = useState<DocumentId>(DocumentId.RESEARCH);
  const [reportPage, setReportPage] = useState<number>(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLang = () => setLang(l => l === Language.EN ? Language.UA : Language.EN);
  const appT = CONTENT[lang].appNav;
  
  // Navigation Sequence including Hero and War Room
  const navSequence = [
    'HERO',
    'STRATEGY',
    'WAR_ROOM',
    DocumentId.RESEARCH, 
    DocumentId.INFRASTRUCTURE,
    DocumentId.SOLUTION,
    DocumentId.RESULTS
  ];

  const switchDoc = (direction: 'next' | 'prev') => {
    // Determine current index based on view
    let currentIndex = -1;
    if (view === ViewMode.HERO) {
      currentIndex = 0;
    } else if (view === ViewMode.STRATEGY) {
      currentIndex = 1;
    } else if (view === ViewMode.WAR_ROOM) {
      currentIndex = 2;
    } else {
      currentIndex = navSequence.indexOf(activeDoc);
    }

    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    // Cycle
    if (newIndex >= navSequence.length) newIndex = 0;
    if (newIndex < 0) newIndex = navSequence.length - 1;
    
    const target = navSequence[newIndex];

    if (target === 'HERO') {
      setView(ViewMode.HERO);
    } else if (target === 'STRATEGY') {
      setView(ViewMode.STRATEGY);
    } else if (target === 'WAR_ROOM') {
      setView(ViewMode.WAR_ROOM);
    } else {
      setActiveDoc(target as DocumentId);
      setView(ViewMode.SCHEMA); 
    }
    
    setReportPage(1);
    window.scrollTo(0, 0);
  };

  const handleNodeClick = (pageId: number) => {
    setReportPage(pageId);
    setView(ViewMode.REPORT);
    window.scrollTo(0, 0);
  };

  const Sidebar = () => (
    // Updated to Slate-900 to match War Room headers for consistency
    <div className={`fixed top-0 left-0 h-full w-64 bg-slate-900 border-r border-white/10 z-50 transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6 flex flex-col h-full">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3 cursor-pointer group" onClick={() => { setView(ViewMode.HERO); setMobileMenuOpen(false); window.scrollTo(0, 0); }}>
                <div className="w-10 h-10 flex items-center justify-center text-black font-bold text-xl overflow-visible p-0">
                   <FeelAgainLogo fill="#ea580c" className="w-full h-full scale-[1.3]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white tracking-tight text-base leading-none mb-0.5">FEEL AGAIN</span>
                  <span className="text-[10px] uppercase tracking-wider text-orange-400 font-bold whitespace-nowrap">Strategic Visualizer</span>
                </div>
            </div>

            <nav className="flex-grow space-y-1" role="navigation" aria-label="Main Navigation">
                {navSequence.map((item) => {
                  if (item === 'HERO') return null;
                  if (item === 'STRATEGY') {
                    const isStrategyActive = view === ViewMode.STRATEGY;
                    return (
                       <button
                          key="STRATEGY"
                          onClick={() => { setView(ViewMode.STRATEGY); setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                          aria-current={isStrategyActive ? 'page' : undefined}
                          aria-label={appT.strategyLabel}
                          className={`w-full text-left px-4 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border-l-4 whitespace-nowrap overflow-hidden text-ellipsis ${isStrategyActive ? 'bg-teal-900/20 text-teal-100 border-teal-500' : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'}`}
                       >
                          <ShieldAlert size={14} className={isStrategyActive ? "text-teal-400" : "text-slate-500"} />
                          {appT.strategyLabel}
                       </button>
                    );
                  }
                  if (item === 'WAR_ROOM') {
                    // War Room Item - Updated to Warm Palette (Orange/Red)
                    const isWarRoomActive = view === ViewMode.WAR_ROOM;
                    return (
                       <button
                          key="WAR_ROOM"
                          onClick={() => { setView(ViewMode.WAR_ROOM); setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                          aria-current={isWarRoomActive ? 'page' : undefined}
                          aria-label={appT.warRoom}
                          className={`w-full text-left px-4 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border-l-4 whitespace-nowrap overflow-hidden text-ellipsis ${isWarRoomActive ? 'bg-orange-900/20 text-orange-100 border-orange-500 animate-pulse-glow' : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'}`}
                       >
                          <ShieldAlert size={14} className={isWarRoomActive ? "text-orange-400" : "text-slate-500"} />
                          {appT.warRoom}
                       </button>
                    );
                  }
                  
                  // Regular Docs
                  const doc = item as DocumentId;
                  const isActive = activeDoc === doc && view !== ViewMode.WAR_ROOM && view !== ViewMode.STRATEGY && view !== ViewMode.HERO;
                  return (
                    <button
                        key={doc}
                        onClick={() => { setActiveDoc(doc); setView(ViewMode.SCHEMA); setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                        aria-current={isActive ? 'page' : undefined}
                        aria-label={CONTENT[lang].docs[doc].navTitle}
                        className={`w-full text-left px-4 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 border-l-4 whitespace-nowrap overflow-hidden text-ellipsis ${isActive ? 'bg-white/5 text-white border-orange-500 shadow-[inset_10px_0_20px_-10px_rgba(234,88,12,0.2)]' : 'border-transparent text-slate-400 hover:bg-white/5 hover:text-white'}`}
                    >
                        {CONTENT[lang].docs[doc].navTitle}
                    </button>
                  );
                })}
            </nav>

            <div className="mt-auto pt-6 border-t border-white/10 space-y-4 hidden md:block">
                <button 
                    onClick={() => {
                        setView(ViewMode.WAR_ROOM);
                        setMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                    }}
                    className="w-full px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded flex items-center justify-center gap-2 font-mono text-xs font-bold transition-colors shadow-lg"
                >
                    ЗВ'ЯЗАТИСЬ
                </button>
                <button 
                    onClick={toggleLang}
                    className="w-full px-4 py-2 text-white bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center gap-2 font-mono text-xs font-bold transition-colors border border-white/10 hover:border-orange-500/50"
                >
                    <Globe size={14} className="text-orange-500" />
                    {lang}
                </button>
            </div>
        </div>
    </div>
  );

  // Render Full Screen Hero

  return (
    <div className="min-h-screen relative font-sans text-gray-900 bg-slate-950">
      
      {/* Background */}
      <div className="bloomberg-bg"></div>
      
      {/* Mobile Header Area */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 px-4 py-3 flex justify-between items-center bg-slate-950/80 backdrop-blur-md border-b border-white/5">
          <div className="flex items-center gap-2" onClick={() => { setView(ViewMode.HERO); window.scrollTo(0, 0); }}>
              <div className="w-8 h-8 flex items-center justify-center p-0 overflow-visible">
                  <FeelAgainLogo fill="#ea580c" className="w-full h-full scale-[1.3]" />
              </div>
          </div>
          
          <div className="flex items-center gap-2">
              <button 
                onClick={toggleLang}
                className="px-3 py-1.5 text-white bg-white/5 hover:bg-white/10 rounded-lg flex items-center gap-1.5 font-mono text-[10px] font-bold transition-colors border border-white/10 hover:border-orange-500/50"
              >
                <Globe size={12} className="text-orange-500" />
                {lang}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={mobileMenuOpen}
                className="p-1.5 bg-slate-900/90 backdrop-blur rounded-md shadow-lg text-white border border-white/10 hover:bg-slate-800 transition-colors"
              >
                  {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
          </div>
      </div>

      {view !== ViewMode.HERO && <Sidebar />}

      {/* Main Content */}
      <main className={`flex-grow flex flex-col relative z-10 ${view !== ViewMode.HERO ? 'md:pl-64' : ''} transition-all duration-300 min-h-screen`}>
        
        {/* Top Spacer - Increased for mobile header */}
        <div className="h-16 md:h-8"></div>

        {view === ViewMode.HERO ? (
             <HeroView 
                lang={lang} 
                onStart={() => switchDoc('next')}
                onToggleLang={toggleLang}
             />
        ) : view === ViewMode.STRATEGY ? (
             <StrategyView content={CONTENT[lang]} />
        ) : view === ViewMode.WAR_ROOM ? (
             <WarRoom lang={lang} />
        ) : view === ViewMode.SCHEMA ? (
          <div className="flex-grow flex flex-col pt-0 md:pt-0">
             <SchemaView lang={lang} docId={activeDoc} onNodeClick={handleNodeClick} />
          </div>
        ) : (
          <ReportView 
            lang={lang} 
            docId={activeDoc} 
            initialPage={reportPage}
            onBackToSchema={() => setView(ViewMode.SCHEMA)}
            onNextDoc={() => switchDoc('next')}
          />
        )}
      </main>

      {/* Footer Nav */}
      {(view === ViewMode.SCHEMA || view === ViewMode.WAR_ROOM || view === ViewMode.STRATEGY) && (
        <div className={`fixed bottom-0 right-0 w-full ${view !== ViewMode.HERO ? 'md:w-[calc(100%-16rem)]' : ''} bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-12 pb-6 px-6 z-40 pointer-events-none`} role="navigation" aria-label="Section Navigation">
          <div className="max-w-6xl mx-auto flex justify-between items-center pointer-events-auto">
             
             <button 
                onClick={() => switchDoc('prev')} 
                aria-label="Previous Section"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
             >
                <ChevronLeft size={18} />
             </button>
             
             <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-bold uppercase text-orange-500 tracking-[0.2em] mb-1">
                    {view === ViewMode.WAR_ROOM ? 'STRATEGIC OVERVIEW' : view === ViewMode.STRATEGY ? 'THE PERFECT STORM' : `SECTION ${navSequence.indexOf(activeDoc) + 1} / ${navSequence.length}`}
                </span>
                <h2 className="text-lg md:text-2xl font-light text-white uppercase tracking-tight leading-none">
                    {view === ViewMode.WAR_ROOM ? 'WAR ROOM' : view === ViewMode.STRATEGY ? 'STRATEGY' : CONTENT[lang].docs[activeDoc].navTitle}
                </h2>
             </div>

             <button 
                onClick={() => switchDoc('next')} 
                aria-label="Next Section"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors shadow-[0_0_15px_rgba(234,88,12,0.4)]"
             >
                <ChevronRight size={18} />
             </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
