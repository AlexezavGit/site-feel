
import React from 'react';
import { CheckCircle, Download, FileText, AlertTriangle, Activity, RefreshCw, Plus, Search, Shield, Eye } from 'lucide-react';

// Mockup based on "Звітність та Стандарти" screenshot
export const TransparencyDashboardMockup = () => (
  <div className="bg-[#F8F9FB] p-6 rounded-xl border border-gray-200 font-sans h-full flex flex-col">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-gray-900">Reporting & Standards</h3>
      <p className="text-xs text-gray-500 mt-1">Automated reporting according to Grand Bargain & IATI standards</p>
    </div>

    <div className="flex gap-3 mb-6">
       <div className="bg-white px-4 py-2 rounded border border-gray-200 text-sm text-gray-700 flex-1">Current Year</div>
       <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-medium hover:bg-blue-700">
          <Download size={14} /> Export Reports
       </button>
    </div>

    <div className="grid grid-cols-2 gap-4 flex-grow">
       <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
           <div className="flex items-start gap-2">
               <CheckCircle size={16} className="text-green-500 mt-0.5" />
               <div>
                   <div className="font-bold text-gray-900 text-sm">Grand Bargain</div>
                   <div className="text-[10px] text-gray-500">Compliance</div>
               </div>
           </div>
           <div className="text-3xl font-bold text-green-500 mt-2">88%</div>
       </div>

       <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
           <div className="flex items-start gap-2">
               <GlobeIcon className="text-blue-500 mt-0.5 w-4 h-4" />
               <div>
                   <div className="font-bold text-gray-900 text-sm">IATI Standard</div>
                   <div className="text-[10px] text-gray-500">Compliance</div>
               </div>
           </div>
           <div className="text-3xl font-bold text-blue-500 mt-2">92%</div>
       </div>

       <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
           <div className="flex items-start gap-2">
               <FileText size={16} className="text-purple-500 mt-0.5" />
               <div>
                   <div className="font-bold text-gray-900 text-sm">Auto-Reports</div>
                   <div className="text-[10px] text-gray-500">This Month</div>
               </div>
           </div>
           <div className="text-3xl font-bold text-purple-600 mt-2">156</div>
       </div>

       <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
           <div className="flex items-start gap-2">
               <RefreshCw size={16} className="text-orange-500 mt-0.5" />
               <div>
                   <div className="font-bold text-gray-900 text-sm">Last Sync</div>
                   <div className="text-[10px] text-gray-500">IATI Registry</div>
               </div>
           </div>
           <div className="text-lg font-bold text-orange-500 mt-2">15.12.2024</div>
       </div>
    </div>
  </div>
);

// Mockup based on "Monitoring & Control" screenshot
export const MonitoringDashboardMockup = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 font-sans h-full flex flex-col">
     <div className="mb-6 flex justify-between items-start">
        <div>
            <h3 className="text-xl font-bold text-gray-900">Monitoring & Control</h3>
            <p className="text-xs text-gray-500 mt-1">AI/ML Analytics & Blockchain Transparency</p>
        </div>
        <div className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span> Live
        </div>
     </div>

     <div className="flex gap-2 mb-6 text-xs border-b border-gray-100 pb-2">
         <span className="font-bold text-gray-900 border-b-2 border-black pb-2">AI/ML Automation</span>
         <span className="text-gray-400 px-2">Blockchain Monitor</span>
         <span className="text-gray-400 px-2">Anomalies</span>
     </div>

     <div className="grid grid-cols-2 gap-4 mb-6">
         <div className="border border-gray-100 rounded p-3">
             <div className="text-xs text-gray-500 mb-1">Detected Anomalies</div>
             <div className="flex justify-between items-end">
                 <div className="text-2xl font-bold text-red-600">6</div>
                 <AlertTriangle size={16} className="text-red-500 mb-1" />
             </div>
             <div className="text-[10px] text-red-400 mt-1">Requires Attention</div>
         </div>
         <div className="border border-gray-100 rounded p-3">
             <div className="text-xs text-gray-500 mb-1">Risk Score</div>
             <div className="flex justify-between items-end">
                 <div className="text-2xl font-bold text-yellow-600">12.8%</div>
                 <Eye size={16} className="text-yellow-500 mb-1" />
             </div>
             <div className="text-[10px] text-yellow-500 mt-1">Moderate</div>
         </div>
     </div>

     <div className="bg-[#F8F9FB] rounded-lg p-4 border border-gray-100 mt-auto">
         <div className="flex justify-between items-center mb-2">
             <div className="flex items-center gap-2">
                 <Shield size={16} className="text-blue-500" />
                 <span className="font-bold text-gray-800 text-sm">Fraud Detection Model</span>
             </div>
             <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">Active</span>
         </div>
         <p className="text-[10px] text-gray-500 leading-tight mb-3">
             Real-time transaction analysis for anomaly detection in MHPSS funding.
         </p>
         <div className="flex justify-between text-[10px] text-gray-600 mb-1">
             <span>Accuracy</span>
             <span className="font-bold">98.7%</span>
         </div>
         <div className="w-full bg-gray-200 h-1.5 rounded-full">
             <div className="w-[98.7%] h-full bg-blue-500 rounded-full"></div>
         </div>
     </div>
  </div>
);

// Mockup based on "Funding Programs" screenshot
export const FundingDashboardMockup = () => (
    <div className="bg-[#F8F9FB] p-6 rounded-xl border border-gray-200 font-sans h-full flex flex-col">
        <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">Funding Programs</h3>
            <p className="text-xs text-gray-500 mt-1">Digital support with transparent tracking</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white p-3 rounded shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500">Active Programs</div>
                <div className="text-2xl font-bold text-gray-900">47</div>
            </div>
             <div className="bg-white p-3 rounded shadow-sm border border-gray-100">
                <div className="text-xs text-gray-500">Transparency</div>
                <div className="text-2xl font-bold text-gray-900">98.5%</div>
            </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex-grow">
            <h4 className="font-bold text-gray-900 text-sm mb-3">Recommended Program</h4>
            <div className="text-xs font-semibold text-gray-800 mb-2">
                MHPSS Support for 250 Adolescents - Zhytomyr Region
            </div>
            <div className="flex gap-2 mb-4">
                <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded">Psychological Support</span>
                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded font-medium">Verified</span>
            </div>
            
            <div className="mt-auto">
                <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Funding Progress</span>
                    <span className="font-bold text-gray-900">75%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full mb-1">
                    <div className="w-[75%] h-full bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[10px]">
                    <span className="font-bold text-gray-900">$187,500</span>
                    <span className="text-gray-400">from $250,000</span>
                </div>
            </div>
        </div>
        
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-sm py-3 rounded mt-4 flex items-center justify-center gap-2 transition-colors">
            <Plus size={16} /> Create Campaign
        </button>
    </div>
);

// Helper Icon
const GlobeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);
