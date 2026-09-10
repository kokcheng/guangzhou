import React from 'react';
import { List, Map, Train, Sparkles } from 'lucide-react';

export default function MobileBottomNav({ activeTab, setActiveTab, onOpenTips }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 py-1.5 px-3 shadow-2xl">
      <div className="flex items-center justify-around text-center">
        
        <button
          onClick={() => setActiveTab('timeline')}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition ${
            activeTab === 'timeline'
              ? 'text-teal-400 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <List className="w-5 h-5" />
          <span className="text-[10px]">Itinerary</span>
        </button>

        <button
          onClick={() => setActiveTab('map')}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition ${
            activeTab === 'map'
              ? 'text-teal-400 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Map className="w-5 h-5" />
          <span className="text-[10px]">Map</span>
        </button>

        <button
          onClick={() => setActiveTab('metro')}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition ${
            activeTab === 'metro'
              ? 'text-teal-400 font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Train className="w-5 h-5" />
          <span className="text-[10px]">Metro</span>
        </button>

        <button
          onClick={onOpenTips}
          className="flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl text-amber-400 hover:text-amber-300 font-semibold"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px]">Tips</span>
        </button>

      </div>
    </div>
  );
}
