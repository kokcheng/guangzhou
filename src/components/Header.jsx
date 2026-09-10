import React from 'react';
import { Search, MapPin, Calendar, CheckCircle2, Map, List, Train, Info, Sparkles, X } from 'lucide-react';
import { TRIP_INFO } from '../data/tripData';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery, 
  completedCount, 
  totalCount, 
  onOpenTips 
}) {
  const progressPercent = Math.round((completedCount / totalCount) * 100) || 0;

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Top Row: Title, Dates, Progress & Tips button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Title & Badge */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-xl shadow-lg shadow-teal-500/20 shrink-0">
              🏮
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  {TRIP_INFO.title}
                </h1>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 hidden sm:inline-block">
                  Jan 13–17
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3 h-3 text-teal-400" />
                  {TRIP_INFO.baseHotel}
                </span>
                <span className="text-slate-600">•</span>
                <span className="hidden sm:inline text-slate-400">Guangzhou, China</span>
              </p>
            </div>
          </div>

          {/* Right Action Bar: Progress & Search & Tips */}
          <div className="flex items-center gap-2 sm:gap-3 justify-between md:justify-end">
            
            {/* Progress Bar Badge */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="flex flex-col">
                <span className="font-semibold text-slate-200">
                  {completedCount}/{totalCount} Done
                </span>
                <div className="w-20 sm:w-24 h-1.5 bg-slate-700 rounded-full overflow-hidden mt-0.5">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Travel Tips Modal Button */}
            <button
              onClick={onOpenTips}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-teal-900/30 transition duration-150 active:scale-95 shrink-0"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="hidden xs:inline">Tips & Booking</span>
              <span className="xs:hidden">Tips</span>
            </button>
          </div>
        </div>

        {/* Second Row: Search & Main Navigation Tabs */}
        <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-slate-800/60">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search spots, food, metro stations or notes..."
              className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-slate-800/90 text-slate-100 placeholder-slate-400 rounded-xl border border-slate-700/70 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden md:flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700/50 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
                activeTab === 'timeline'
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              Itinerary
            </button>

            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
                activeTab === 'map'
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              Interactive Map
            </button>

            <button
              onClick={() => setActiveTab('metro')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
                activeTab === 'metro'
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <Train className="w-3.5 h-3.5" />
              Metro & District Guide
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
