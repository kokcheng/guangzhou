import React from 'react';
import { DAYS_DATA, CATEGORY_ICONS, LOCATIONS } from '../data/tripData';
import { Check, MapPin, ExternalLink, AlertTriangle, Clock, Calendar, Sparkles } from 'lucide-react';

export default function TimelineView({ 
  activeDay, 
  searchQuery, 
  completedMap, 
  toggleComplete, 
  onSelectLocationOnMap 
}) {

  // Filter days based on selected day tab
  const filteredDays = activeDay === 0 
    ? DAYS_DATA 
    : DAYS_DATA.filter(d => d.dayNumber === activeDay);

  // Helper to match search query
  const matchesSearch = (act, day) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      act.title.toLowerCase().includes(q) ||
      act.notes.toLowerCase().includes(q) ||
      act.category.toLowerCase().includes(q) ||
      act.time.includes(q) ||
      day.title.toLowerCase().includes(q) ||
      day.subtitle.toLowerCase().includes(q)
    );
  };

  return (
    <div className="space-y-8 pb-12">
      {filteredDays.map((day) => {
        // Filter activities within day matching search query
        const dayActivities = day.activities.filter(act => matchesSearch(act, day));

        if (dayActivities.length === 0) return null;

        return (
          <div key={day.dayNumber} className="relative">
            
            {/* Day Header Banner */}
            <div className="sticky top-[110px] sm:top-[120px] z-20 mb-4 py-3 px-4 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-800 shadow-md flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-white text-lg shadow-md shrink-0"
                  style={{ backgroundColor: day.themeColor }}
                >
                  D{day.dayNumber}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-white tracking-tight">{day.title}</h2>
                    <span className="text-xs text-slate-400 font-mono">({day.date})</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">{day.subtitle}</p>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {day.activities.filter(a => completedMap[a.id]).length} / {day.activities.length} completed
                </span>
              </div>
            </div>

            {/* Timeline Vertical Line & Activity List */}
            <div className="relative pl-4 sm:pl-6 space-y-4 before:absolute before:left-[19px] sm:before:left-[27px] before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
              
              {dayActivities.map((act) => {
                const isCompleted = !!completedMap[act.id];
                const matchedLocation = LOCATIONS.find(l => l.id === act.locationId);

                return (
                  <div 
                    key={act.id} 
                    className={`relative pl-7 sm:pl-9 transition-all duration-300 ${
                      isCompleted ? 'opacity-70' : 'opacity-100'
                    }`}
                  >
                    
                    {/* Timeline Node Bullet Checkbox */}
                    <button
                      onClick={() => toggleComplete(act.id)}
                      className={`absolute left-0 top-3.5 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 shadow-md z-10 ${
                        isCompleted 
                          ? 'bg-emerald-500 text-slate-950 scale-100 ring-2 ring-emerald-400/40' 
                          : 'bg-slate-800 text-slate-500 hover:text-slate-200 border border-slate-700 hover:border-slate-500 hover:scale-110'
                      }`}
                      title={isCompleted ? 'Mark as pending' : 'Mark as completed'}
                    >
                      {isCompleted ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-600" />
                      )}
                    </button>

                    {/* Activity Card */}
                    <div className={`p-4 rounded-2xl border transition-all duration-200 ${
                      isCompleted 
                        ? 'bg-slate-900/40 border-slate-800/60 text-slate-400' 
                        : 'bg-slate-900/90 hover:bg-slate-800/80 border-slate-800 hover:border-slate-700/80 shadow-lg shadow-black/20'
                    }`}>
                      
                      {/* Top Row: Time, Category Badge, WeChat alert */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          
                          {/* Time Badge */}
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold bg-slate-800 text-teal-400 border border-slate-700">
                            <Clock className="w-3 h-3" />
                            {act.time}
                          </span>

                          {/* Category Badge */}
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/60">
                            <span>{CATEGORY_ICONS[act.category] || '📍'}</span>
                            {act.category}
                          </span>
                        </div>

                        {/* Booking Requirement Alert */}
                        {act.bookingAlert && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 animate-pulse">
                            <AlertTriangle className="w-3 h-3" />
                            {act.bookingAlert}
                          </span>
                        )}
                      </div>

                      {/* Title & Description */}
                      <h3 className={`text-base sm:text-lg font-bold tracking-tight mb-1 ${
                        isCompleted ? 'line-through text-slate-400' : 'text-white'
                      }`}>
                        {act.title}
                      </h3>

                      {act.notes && (
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                          {act.notes}
                        </p>
                      )}

                      {/* Location & Navigation Actions */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-slate-800/80 text-xs">
                        
                        {/* Metro / District context */}
                        {matchedLocation ? (
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                            <span className="font-medium text-slate-300">{matchedLocation.name}</span>
                            <span className="text-slate-600">•</span>
                            <span className="text-slate-400 text-[11px] hidden xs:inline">{matchedLocation.metro}</span>
                          </div>
                        ) : (
                          <div className="text-slate-500 text-[11px]">
                            {act.category === 'Transport' ? 'Transit Route' : 'Hotel Location'}
                          </div>
                        )}

                        {/* Map & Direction Buttons */}
                        <div className="flex items-center gap-2 ml-auto">
                          
                          {/* Highlight on Interactive Map */}
                          {act.coords && (
                            <button
                              onClick={() => onSelectLocationOnMap(act)}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 transition text-[11px] font-medium"
                            >
                              <MapPin className="w-3 h-3" />
                              View on Map
                            </button>
                          )}

                          {/* External Map Navigation Link */}
                          {act.coords && (
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${act.coords[0]},${act.coords[1]}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition text-[11px] font-medium"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span className="hidden xs:inline">Open Maps</span>
                            </a>
                          )}

                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        );
      })}
    </div>
  );
}
