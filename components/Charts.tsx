
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ComposedChart,
  Line,
  LabelList
} from 'recharts';
import { Users, Activity, Heart, Wallet, CheckCircle, AlertOctagon, XCircle, User, Users as UsersIcon, Shield, Lock, ArrowUpRight, Globe, Building2, ChevronDown } from 'lucide-react';

export const GlobalLocalFlowChart: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="h-96 w-full bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
       <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">{label}</h3>
       
       <div className="flex-1 flex flex-col justify-between relative">
          {/* Connecting Line */}
          <div className="absolute left-[24px] top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-orange-500 to-emerald-500 opacity-30 rounded-full z-0"></div>

          {/* Top: Global */}
          <div className="flex items-center gap-4 z-10">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border-4 border-white shadow-sm shrink-0">
                  <Globe size={20} />
              </div>
              <div className="flex-1 bg-blue-50 p-3 rounded-lg border border-blue-100">
                   <div className="flex justify-between items-center mb-1">
                       <span className="text-xs font-bold text-blue-900 uppercase">Global Resources (Bank A)</span>
                       <span className="text-[10px] font-bold bg-blue-200 text-blue-800 px-2 py-0.5 rounded">85% Funding</span>
                   </div>
                   <div className="text-[10px] text-blue-700 flex gap-2">
                       <span>🌍 Donors</span>
                       <span>•</span>
                       <span>🏛️ Institutional</span>
                   </div>
              </div>
          </div>

          {/* Middle: Feel Again (The Bridge) */}
          <div className="flex items-center gap-4 z-10 pl-6 my-2">
               <div className="w-16 h-16 bg-orange-600 rounded-xl flex flex-col items-center justify-center text-white shadow-lg shrink-0 transform -rotate-3 border-4 border-white">
                    <span className="font-black text-[10px] leading-none mb-1">FEEL</span>
                    <span className="font-light text-[8px] leading-none tracking-widest uppercase">Again</span>
               </div>
               <div className="flex-1">
                   <div className="text-xs font-bold text-orange-600 uppercase mb-1 flex items-center gap-2">
                      The Digital Bridge <Shield size={12} />
                   </div>
                   <div className="grid grid-cols-2 gap-2">
                       <div className="bg-slate-900 text-white p-2 rounded text-[10px] text-center">
                           Immutable Audit
                       </div>
                       <div className="bg-orange-100 text-orange-800 p-2 rounded text-[10px] text-center">
                           Strategic Purchasing
                       </div>
                   </div>
               </div>
          </div>

          {/* Bottom: Local */}
          <div className="flex items-center gap-4 z-10">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 border-4 border-white shadow-sm shrink-0">
                  <Building2 size={20} />
              </div>
              <div className="flex-1 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                   <div className="flex justify-between items-center mb-1">
                       <span className="text-xs font-bold text-emerald-900 uppercase">Local Reality (Bank B)</span>
                       <span className="text-[10px] font-bold bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded">15% Co-Fi</span>
                   </div>
                   <div className="grid grid-cols-3 gap-1 mt-2">
                       <div className="bg-white border border-emerald-200 p-1 rounded text-center">
                          <div className="text-[10px] font-bold text-emerald-700">FOP</div>
                          <div className="text-[8px] text-emerald-500">Private</div>
                       </div>
                       <div className="bg-white border border-emerald-200 p-1 rounded text-center">
                          <div className="text-[10px] font-bold text-emerald-700">Clinics</div>
                          <div className="text-[8px] text-emerald-500">Medical</div>
                       </div>
                       <div className="bg-white border border-emerald-200 p-1 rounded text-center">
                          <div className="text-[10px] font-bold text-emerald-700">Online</div>
                          <div className="text-[8px] text-emerald-500">Platforms</div>
                       </div>
                   </div>
              </div>
          </div>
       </div>
    </div>
  );
};

export const GDPChart: React.FC<{ label: string }> = ({ label }) => {
  const data = [
    { name: 'Inpatient (Walls)', value: 55, fill: '#EF4444' }, // 55% Waste
    { name: 'Outpatient (Care)', value: 11, fill: '#10B981' }, // 11% Effective
  ];

  return (
    <div className="h-72 w-full bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">{label}</h3>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={60}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{fontSize: 11, fill: '#64748b'}} axisLine={false} tickLine={false} dy={10} />
            <YAxis unit="%" tick={{fontSize: 11, fill: '#64748b'}} axisLine={false} tickLine={false} />
            <Tooltip 
              cursor={{fill: '#f8fafc'}}
              contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#64748b', fontSize: 12 }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const ShadowEconomyChart: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="h-72 w-full bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{label}</h3>
      
      <div className="flex-1 flex items-end justify-between gap-4 relative px-4 pb-8">
         {/* Grid Lines Background */}
         <div className="absolute inset-0 border-b border-slate-100 z-0 bottom-8"></div>
         <div className="absolute inset-0 border-b border-slate-100 top-1/4 z-0 bottom-8"></div>
         <div className="absolute inset-0 border-b border-slate-100 top-2/4 z-0 bottom-8"></div>

         {/* Bar 1: Certificates (The Paper Army) */}
         <div className="flex flex-col items-center w-1/3 z-10 group relative">
             <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-blue-600 text-white px-2 py-1 rounded shadow-lg whitespace-nowrap">
                Trained: 154,000
             </div>
             <div className="w-full bg-blue-500 rounded-t-lg relative overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.02]" style={{ height: '140px' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 gap-1 p-1">
                   <div className="text-white text-[8px] font-bold text-center p-2">PAPER CERTIFICATES</div>
                </div>
             </div>
             <div className="absolute -bottom-12 text-center w-full">
                 <div className="text-xl font-black text-blue-600 leading-none">154k</div>
                 <div className="text-[10px] font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">Trained</div>
             </div>
         </div>

         {/* Visual Divider: Funnel Effect */}
         <div className="h-32 w-px bg-slate-200 border-r border-dashed border-red-300 mb-4 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded border border-red-200 whitespace-nowrap">
                 99% Loss
             </div>
         </div>

         {/* Bar 2: Active Contracts */}
         <div className="flex flex-col items-center w-1/3 z-10 group relative">
             <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-red-600 text-white px-2 py-1 rounded whitespace-nowrap">
                Active: ~1,000
             </div>
             <div className="w-full bg-red-500 rounded-t-lg relative overflow-hidden transition-all hover:bg-red-600" style={{ height: '10px' }}>
                {/* Tiny bar for contrast */}
             </div>
             <div className="absolute -bottom-12 text-center w-full">
                 <div className="text-xl font-bold text-red-500 leading-none">1k</div>
                 <div className="text-[10px] font-bold uppercase text-red-400 mt-1 inline-block">Implemented</div>
             </div>
         </div>
      </div>
    </div>
  );
};

export const DeriskingChart: React.FC<{ label: string }> = ({ label }) => {
    return (
      <div className="h-80 w-full bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">{label}</h3>
        
        <div className="flex-1 flex flex-col justify-end gap-1 relative">
            {/* Arrow indicating Investment Safety */}
            <div className="absolute right-4 top-0 bottom-0 w-12 flex flex-col items-center justify-center border-l border-dashed border-slate-200 pl-2">
                <span className="text-[10px] font-bold text-emerald-500 uppercase rotate-90 whitespace-nowrap mb-4">Self-Sustaining</span>
                <div className="h-full w-1 bg-gradient-to-t from-slate-200 via-emerald-200 to-emerald-500 rounded-full"></div>
            </div>

            {/* Layer 3: Investor */}
            <div className="w-[90%] bg-white border-2 border-slate-800 rounded-lg p-3 shadow-lg relative z-20 hover:translate-y-1 transition-transform cursor-pointer group">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-100 rounded-md"><Wallet size={18} className="text-slate-800" /></div>
                        <div>
                            <div className="text-xs font-black uppercase text-slate-800">Donor Funds</div>
                            <div className="text-[10px] text-slate-500">USAID / Health Cluster</div>
                        </div>
                    </div>
                    <div className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <Shield size={12} /> Transparent
                    </div>
                </div>
                <div className="absolute -bottom-3 left-8 text-slate-300">▼</div>
            </div>

            {/* Layer 2: Community */}
            <div className="w-[90%] bg-emerald-50 border border-emerald-200 rounded-lg p-3 relative z-10 mt-1 hover:bg-emerald-100 transition-colors group">
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-200 rounded-md"><Users size={18} className="text-emerald-800" /></div>
                        <div>
                            <div className="text-xs font-bold uppercase text-emerald-800">Transaction Fee</div>
                            <div className="text-[10px] text-emerald-600">5-7% Recoupment Model</div>
                        </div>
                    </div>
                    <div className="text-[10px] font-bold text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded bg-white">
                        SaaS Revenue
                    </div>
                </div>
                <div className="absolute -bottom-3 left-8 text-emerald-200">▼</div>
            </div>

            {/* Layer 1: Grants */}
            <div className="w-[90%] bg-orange-50 border border-orange-200 rounded-lg p-3 relative z-0 mt-1 hover:bg-orange-100 transition-colors">
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-200 rounded-md"><Heart size={18} className="text-orange-800" /></div>
                        <div>
                            <div className="text-xs font-bold uppercase text-orange-800">Direct Payment</div>
                            <div className="text-[10px] text-orange-600">To Psychologist (Wallet)</div>
                        </div>
                    </div>
                    <div className="text-[10px] font-bold text-orange-600 border border-orange-200 px-2 py-0.5 rounded bg-white">
                        Result Based
                    </div>
                </div>
            </div>

        </div>
      </div>
    );
};

export const LocalizationGapChart: React.FC<{ label: string }> = ({ label }) => {
  const data = [
    { name: 'Beneficiary', value: 60, fill: '#10B981' },
    { name: 'Admin Loss', value: 40, fill: '#EF4444' },
  ];

  return (
    <div className="h-72 w-full bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">{label}</h3>
      <div className="flex items-center justify-center h-[85%] relative">
        <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-3xl font-black text-red-500 block">40%</span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Waste</span>
        </div>
      </div>
    </div>
  );
};

export const GapChart: React.FC<{ label: string }> = ({ label }) => {
  const data = [
    { name: 'Treated', value: 26, fill: '#10B981' },
    { name: 'Untreated Gap', value: 74, fill: '#EF4444' },
  ];

  return (
    <div className="h-72 w-full bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">{label}</h3>
      <div className="flex items-center justify-center h-[85%] relative">
        <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-3xl font-black text-red-500 block">74%</span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Gap</span>
        </div>
      </div>
    </div>
  );
};

export const DonorDashboardMock: React.FC<{ label: string }> = ({ label }) => {
    return (
        <div className="h-full w-full bg-slate-900 rounded-xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col font-mono text-xs">
            <div className="flex justify-between items-center p-3 border-b border-slate-700 bg-slate-900 z-10">
                <h3 className="font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <Activity size={14} /> {label}
                </h3>
                <div className="text-[10px] text-slate-500">
                   System Status: Active
                </div>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center p-4">
                 <div className="text-center opacity-30">
                     <Activity size={48} className="mx-auto mb-2 text-slate-500"/>
                     <div className="text-[10px] font-mono text-slate-400 uppercase">Live System Activity</div>
                 </div>
            </div>
        </div>
    )
}

export const PsychologistDistributionChart: React.FC = () => {
    const data = [
      { name: 'Шкільні психологи', value: 13500, color: '#3b82f6' },
      { name: 'Приватна практика', value: 8000, color: '#f59e0b' },
      { name: 'Психіатри (Держ)', value: 3000, color: '#10b981' },
      { name: 'Клінічні психологи', value: 800, color: '#8b5cf6' },
    ];

    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 60, left: 40, bottom: 5 }}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" tick={{fontSize: 10, fill: '#94a3b8'}} width={120} />
          <Tooltip 
            cursor={{fill: 'transparent'}} 
            contentStyle={{backgroundColor: '#1e293b', border: 'none', color: '#fff'}}
            formatter={(value: number) => [`${value} фахівців (${((value/total)*100).toFixed(1)}%)`, 'Кількість']}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="value" position="right" fill="#64748b" fontSize={10} formatter={(val: number) => `${val} (${((val/total)*100).toFixed(0)}%)`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
};

export const EscalationTimelineChart: React.FC<{ lang?: 'EN' | 'UK' }> = ({ lang = 'EN' }) => {
  const isUk = lang === 'UK';

  return (
    <div className="w-full bg-slate-900 border border-white/10 rounded-xl p-6 relative overflow-hidden mt-6 shadow-[0_0_40px_rgba(234,88,12,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-purple-500/5"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/50 flex flex-col items-center justify-center animate-pulse">
             <div className="text-orange-400">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3L2 6"/><path d="M19 3l3 3"/><path d="M12 1v2"/></svg>
             </div>
          </div>
          <div>
             <div className="text-2xl font-bold font-mono text-orange-400">3.9 {isUk ? 'Млн' : 'M'}</div>
             <div className="text-[10px] text-slate-400 uppercase tracking-widest">{isUk ? 'Потреба (Кількість людей)' : 'Clinical Need (People)'}</div>
          </div>
        </div>

        {/* Timeline container */}
        <div className="relative w-full overflow-x-auto pb-4 custom-scrollbar">
           <div className="min-w-[700px] relative">
              {/* Top Axis: Hours / Escalation */}
              <div className="flex justify-between items-end mb-2 text-slate-400 font-mono text-xs px-4">
                 <div className="w-1/5 text-left text-emerald-400">
                    <div className="text-[10px] opacity-70 mb-1">{isUk ? 'Обсяг годин' : 'Volume of Hours'}</div>
                    ~29 {isUk ? 'млн год' : 'M hrs'}
                 </div>
                 <div className="w-1/5 text-center text-yellow-400">
                    ~46 {isUk ? 'млн год' : 'M hrs'}
                 </div>
                 <div className="w-1/5 text-center text-orange-400">
                    ~93 {isUk ? 'млн год' : 'M hrs'}
                 </div>
                 <div className="w-1/5 text-center text-red-500 font-bold text-sm">
                    {isUk ? 'Експоненційні витрати' : 'Exponential Cost'}
                 </div>
                 <div className="w-1/5 text-right text-purple-400 font-bold text-sm">
                    {isUk ? 'Бюджетний колапс' : 'Budget Collapse'}
                 </div>
              </div>

              {/* Central Line */}
              <div className="relative h-4 flex items-center mb-8">
                 {/* The line itself */}
                 <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-yellow-500 to-purple-600 rounded-full"></div>
                 {/* Nodes */}
                 <div className="absolute left-[5%] w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900 z-10 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                 <div className="absolute left-[25%] w-4 h-4 bg-yellow-500 rounded-full border-2 border-slate-900 z-10"></div>
                 <div className="absolute left-[50%] w-5 h-5 bg-orange-500 rounded-full border-2 border-slate-900 z-10 shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
                 <div className="absolute left-[75%] w-6 h-6 bg-red-500 rounded-full border-2 border-slate-900 z-10 shadow-[0_0_20px_rgba(239,68,68,0.8)]"></div>
                 <div className="absolute left-[95%] w-8 h-8 bg-purple-600 rounded-lg rotate-45 border-2 border-slate-900 z-10 shadow-[0_0_25px_rgba(147,51,234,0.8)] flex items-center justify-center">
                    <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                 </div>
              </div>

              {/* Bottom Axis: Sessions / Stages */}
              <div className="flex justify-between items-start text-xs font-sans mt-4">
                 <div className="w-[15%] relative -left-4">
                    <div className="bg-emerald-900/30 border border-emerald-500/20 rounded p-2 text-center text-emerald-100">
                       <div className="font-bold text-emerald-400 font-mono mb-1">5 {isUk ? 'сеансів' : 'sessions'}</div>
                       <div className="text-[9px] uppercase tracking-wider">PM+ ({isUk ? 'ВООЗ' : 'WHO'})</div>
                    </div>
                 </div>
                 <div className="w-[20%] text-center">
                     <div className="bg-yellow-900/30 border border-yellow-500/20 rounded p-2 text-center text-yellow-100 inline-block">
                        <div className="font-bold text-yellow-400 font-mono mb-1">12 {isUk ? 'сеансів' : 'sessions'}</div>
                        <div className="text-[9px] uppercase tracking-wider">{isUk ? 'Стандарт ВООЗ' : 'WHO Standard'}</div>
                     </div>
                 </div>
                 <div className="w-[20%] text-center">
                    <div className="bg-orange-900/30 border border-orange-500/20 rounded p-2 text-center text-orange-100 inline-block">
                       <div className="font-bold text-orange-400 font-mono mb-1">20-28 {isUk ? 'сеансів' : 'sessions'}</div>
                       <div className="text-[9px] uppercase tracking-wider">{isUk ? 'Стандарт НСЗУ' : 'NHSU Standard'}</div>
                    </div>
                 </div>
                 <div className="w-[25%] text-center px-2">
                    <div className="bg-red-900/30 border border-red-500/20 rounded p-2 text-center text-red-100">
                       <div className="font-bold text-red-500 uppercase tracking-widest mb-1 text-[11px]">{isUk ? 'Соматизація' : 'Somatization'}</div>
                       <div className="text-[9px] opacity-80">{isUk ? 'Лікування лікарями' : 'Medical intervention'}</div>
                    </div>
                 </div>
                 <div className="w-[20%] text-right relative left-4">
                    <div className="bg-purple-900/30 border border-purple-500/20 rounded p-2 text-center text-purple-100 inline-block">
                       <div className="font-bold text-purple-400 uppercase tracking-widest mb-1 text-[11px]">{isUk ? 'Інвалідизація' : 'Invalidization'}</div>
                       <div className="text-[9px] opacity-80">{isUk ? 'Втрата працездатності' : 'Loss of capability'}</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

    </div>
  );
};
