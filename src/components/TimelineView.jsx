import React, { useState } from 'react';
import { DAYS_DATA, CATEGORY_ICONS, LOCATIONS } from '../data/tripData';
import { 
  Check, MapPin, ExternalLink, AlertTriangle, Clock, Calendar, Sparkles,
  Footprints, Train, Car, Navigation, ChevronDown, ChevronUp, ArrowRight
} from 'lucide-react';

function TransitDetailsBox({ transitInfo, titlePrefix = "Transit to Next Location" }) {
  const [expanded, setExpanded] = useState(false);

  if (!transitInfo) return null;

  const getModeIcon = (mode) => {
    switch (mode) {
      case 'walk': return <Footprints className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
      case 'metro':
      case 'apm': return <Train className="w-3.5 h-3.5 text-blue-400 shrink-0" />;
      case 'didi': return <Car className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      default: return <Navigation className="w-3.5 h-3.5 text-teal-400 shrink-0" />;
    }
  };

  const getModeBadgeClass = (mode) => {
    switch (mode) {
      case 'walk': return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'metro':
      case 'apm': return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
      case 'didi': return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      default: return 'bg-teal-500/10 text-teal-300 border-teal-500/30';
    }
  };

  return (
    <div className="my-3 pl-7 sm:pl-9 relative">
      {/* Timeline Bullet for Transit */}
      <div className="absolute left-0 top-3 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] shadow-md z-10 text-slate-300">
        {getModeIcon(transitInfo.recommended || (transitInfo.options && transitInfo.options[0]?.mode))}
      </div>

      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm transition hover:border-slate-700">
        <div 
          onClick={() => setExpanded(!expanded)}
          className="flex flex-wrap items-center justify-between gap-2 cursor-pointer select-none"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-teal-400" />
              <span>{titlePrefix}</span>
              {transitInfo.toNext && (
                <span className="text-teal-300 font-semibold hidden sm:inline">→ {transitInfo.toNext}</span>
              )}
            </span>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Quick summary badges */}
            {transitInfo.options && transitInfo.options.map((opt, idx) => (
              <span 
                key={idx} 
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold border ${getModeBadgeClass(opt.mode)}`}
              >
                {getModeIcon(opt.mode)}
                <span>{opt.label}</span>
              </span>
            ))}

            <button 
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Toggle detailed transit options"
            >
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Expanded details comparing Walk, Metro, DiDi */}
        {expanded && (
          <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2 text-xs">
            <p className="text-slate-300 font-medium mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{transitInfo.summary}</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {transitInfo.options && transitInfo.options.map((opt, idx) => (
                <div 
                  key={idx}
                  className={`p-2.5 rounded-xl border ${
                    opt.recommended 
                      ? 'bg-slate-800/90 border-teal-500/50 ring-1 ring-teal-500/30' 
                      : 'bg-slate-950/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-slate-100 flex items-center gap-1.5">
                      {getModeIcon(opt.mode)}
                      {opt.label}
                    </span>
                    {opt.recommended && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-teal-500/20 text-teal-300 border border-teal-500/40 uppercase">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{opt.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

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
      day.subtitle.toLowerCase().includes(q) ||
      (act.transit && act.transit.summary.toLowerCase().includes(q))
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
              
              {dayActivities.map((act, index) => {
                const isCompleted = !!completedMap[act.id];
                const matchedLocation = LOCATIONS.find(l => l.id === act.locationId);

                return (
                  <React.Fragment key={act.id}>
                    {/* Hotel Departure Transit connector if starting day from CityNote Hotel */}
                    {act.startTransitFromHotel && (
                      <TransitDetailsBox 
                        transitInfo={act.startTransitFromHotel} 
                        titlePrefix="Depart from CityNote Hotel" 
                      />
                    )}

                    <div 
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

                        {/* Quick Transit Snippet Footer */}
                        {act.transit && (
                          <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-1 text-[11px]">
                            <span className="text-slate-400 font-medium flex items-center gap-1">
                              <Navigation className="w-3 h-3 text-teal-400 shrink-0" />
                              <span>Next to:</span>
                              <span className="text-slate-200 font-semibold">{act.transit.toNext}</span>
                            </span>
                            <span className="text-teal-300 font-semibold bg-teal-500/10 px-2 py-0.5 rounded-md border border-teal-500/20">
                              {act.transit.summary}
                            </span>
                          </div>
                        )}

                      </div>
                    </div>

                    {/* Inter-location Transit Connector Box */}
                    {act.transit && (
                      <TransitDetailsBox 
                        transitInfo={act.transit} 
                        titlePrefix="How to Move" 
                      />
                    )}
                  </React.Fragment>
                );
              })}

            </div>
          </div>
        );
      })}
    </div>
  );
}

