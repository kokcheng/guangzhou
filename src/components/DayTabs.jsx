import React from 'react';
import { DAYS_DATA } from '../data/tripData';
import { Calendar, Layers } from 'lucide-react';

export default function DayTabs({ activeDay, setActiveDay, completedMap }) {
  // Helper to count completed items for a given day
  const getDayCompletedCount = (dayActivities) => {
    return dayActivities.filter(act => completedMap[act.id]).length;
  };

  return (
    <div className="bg-slate-900/80 border-b border-slate-800/80 py-2.5 px-4 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 min-w-max">
        
        {/* All Days Tab */}
        <button
          onClick={() => setActiveDay(0)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeDay === 0
              ? 'bg-slate-100 text-slate-950 shadow-md scale-[1.02]'
              : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700/60 border border-slate-700/40'
          }`}
        >
          <Layers className="w-4 h-4 text-teal-400" />
          <span>All 5 Days</span>
        </button>

        {/* Individual Day Tabs */}
        {DAYS_DATA.map((day) => {
          const completedCount = getDayCompletedCount(day.activities);
          const totalCount = day.activities.length;
          const isSelected = activeDay === day.dayNumber;

          return (
            <button
              key={day.dayNumber}
              onClick={() => setActiveDay(day.dayNumber)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isSelected
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/40 scale-[1.02] border border-teal-400/30'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/60 border border-slate-700/40'
              }`}
            >
              <div 
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: day.themeColor }}
              />
              <div className="flex flex-col items-start leading-tight">
                <span className="font-bold">Day {day.dayNumber}</span>
                <span className="text-[10px] opacity-80">{day.date.split(',')[0]}</span>
              </div>

              {/* Day item badge count */}
              <span className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                isSelected 
                  ? 'bg-teal-700/80 text-teal-100' 
                  : 'bg-slate-900/60 text-slate-400'
              }`}>
                {completedCount}/{totalCount}
              </span>
            </button>
          );
        })}

      </div>
    </div>
  );
}
