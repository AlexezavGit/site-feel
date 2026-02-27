
import React, { useState } from 'react';
import { ViewMode, Language, DocumentId } from './types';
import { CONTENT } from './constants';
import SchemaView from './components/SchemaView';
import ReportView from './components/ReportView';
import WarRoom from './components/WarRoom';
import HeroView from './components/HeroView';
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
  
  // Navigation Sequence including War Room
  const navSequence = [
    DocumentId.RESEARCH, 
    DocumentId.INFRASTRUCTURE,
    DocumentId.SOLUTION,
    DocumentId.RESULTS,
    'WAR_ROOM'
  ];

  const switchDoc = (direction: 'next' | 'prev') => {
    // Determine current index based on view
    let currentIndex = -1;
    if (view === ViewMode.WAR_ROOM) {
      currentIndex = navSequence.length - 1;
    } else {
      currentIndex = navSequence.indexOf(activeDoc);
    }

    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    // Cycle
    if (newIndex >= navSequence.length) newIndex = 0;
    if (newIndex < 0) newIndex = navSequence.length - 1;
    
    const target = navSequence[newIndex];

    if (target === 'WAR_ROOM') {
      setView(ViewMode.WAR_ROOM);
    } else {
      setActiveDoc(target as DocumentId);
      setView(ViewMode.SCHEMA); 
    }
    
    setReportPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNodeClick = (pageId: number) => {
    setReportPage(pageId);
    setView(ViewMode.REPORT);
  };

  const Sidebar = () => (
    // Updated to Slate-900 to match War Room headers for consistency
    <div className={`fixed top-0 left-0 h-full w-64 bg-slate-900 border-r border-white/10 z-50 transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6 flex flex-col h-full">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3 cursor-pointer group" onClick={() => { setView(ViewMode.HERO); setMobileMenuOpen(false); }}>
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-black font-bold text-xl overflow-hidden shadow-lg p-1">
                   <FeelAgainLogo fill="#ea580c" className="w-full h-full scale-[1.3]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white tracking-tight text-base leading-none mb-0.5">FEEL AGAIN</span>
                  <span className="text-[10px] uppercase tracking-wider text-orange-400 font-bold whitespace-nowrap">Strategic Visualizer</span>
                </div>
            </div>

            <nav className="flex-grow space-y-1" role="navigation" aria-label="Main Navigation">
                {navSequence.map((item) => {
                  if (item === 'WAR_ROOM') {
                    // War Room Item - Updated to Warm Palette (Orange/Red)
                    const isWarRoomActive = view === ViewMode.WAR_ROOM;
                    return (
                       <button
                          key="WAR_ROOM"
                          onClick={() => { setView(ViewMode.WAR_ROOM); setMobileMenuOpen(false); }}
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
                  const isActive = activeDoc === doc && view !== ViewMode.WAR_ROOM && view !== ViewMode.HERO;
                  return (
                    <button
                        key={doc}
                        onClick={() => { setActiveDoc(doc); setView(ViewMode.SCHEMA); setMobileMenuOpen(false); }}
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
                        setTimeout(() => {
                            document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }}
                    className="w-full px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded flex items-center justify-center gap-2 font-mono text-xs font-bold transition-colors shadow-lg"
                >
                    ЗВ'ЯЗАТИСЬ
                </button>
                <button 
                    onClick={toggleLang}
                    className="w-full px-4 py-2 text-white bg-white/5 hover:bg-white/10 rounded flex items-center justify-center gap-2 font-mono text-xs font-bold transition-colors border border-white/10 hover:border-orange-500/50"
                >
                    <Globe size={14} className="text-orange-500" />
                    {lang}
                </button>
            </div>
        </div>
    </div>
  );

  // Render Full Screen Hero
  if (view === ViewMode.HERO) {
      return (
        <div className="min-h-screen relative font-sans text-white bg-slate-950">
             <div className="bloomberg-bg opacity-100"></div>
             <HeroView 
                lang={lang} 
                onStart={() => { setView(ViewMode.SCHEMA); setActiveDoc(DocumentId.RESEARCH); }}
                onToggleLang={toggleLang}
             />
        </div>
      );
  }

  return (
    <div className="min-h-screen relative font-sans text-gray-900 bg-slate-950">
      
      {/* Background */}
      <div className="bloomberg-bg"></div>
      
      {/* Mobile Header Area */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 px-4 py-3 flex justify-between items-center bg-slate-950/80 backdrop-blur-md border-b border-white/5">
          <div className="flex items-center gap-2" onClick={() => setView(ViewMode.HERO)}>
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center p-1">
                  <FeelAgainLogo fill="#ea580c" className="w-full h-full scale-[1.3]" />
              </div>
              <span className="font-bold text-white text-sm tracking-tight">FEEL AGAIN</span>
          </div>
          
          <div className="flex items-center gap-2">
              <button 
                onClick={toggleLang}
                className="px-3 py-1.5 text-white bg-white/5 hover:bg-white/10 rounded flex items-center gap-1.5 font-mono text-[10px] font-bold transition-colors border border-white/10"
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

      <Sidebar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col relative z-10 md:pl-64 transition-all duration-300 min-h-screen">
        
        {/* Top Spacer - Increased for mobile header */}
        <div className="h-16 md:h-8"></div>

        {view === ViewMode.WAR_ROOM ? (
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
      {(view === ViewMode.SCHEMA || view === ViewMode.WAR_ROOM) && (
        <div className="fixed bottom-0 right-0 w-full md:w-[calc(100%-16rem)] bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 px-6 z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]" role="navigation" aria-label="Section Navigation">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
             
             <button 
                onClick={() => switchDoc('prev')} 
                aria-label="Previous Section"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"
             >
                <ChevronLeft size={18} />
             </button>
             
             <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-bold uppercase text-orange-600 tracking-[0.2em] mb-1">
                    {view === ViewMode.WAR_ROOM ? 'STRATEGIC OVERVIEW' : `SECTION ${navSequence.indexOf(activeDoc) + 1} / ${navSequence.length}`}
                </span>
                <h2 className="text-lg md:text-2xl font-light text-gray-900 uppercase tracking-tight leading-none">
                    {view === ViewMode.WAR_ROOM ? 'WAR ROOM' : CONTENT[lang].docs[activeDoc].navTitle}
                </h2>
             </div>

             <button 
                onClick={() => switchDoc('next')} 
                aria-label="Next Section"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors shadow-lg"
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
