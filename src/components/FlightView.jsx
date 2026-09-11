import React from 'react';
import { Plane, PlaneTakeoff, PlaneLanding, Clock, Calendar, MapPin, Luggage, ShieldCheck, Info, Ticket, ArrowRight, Train, CheckCircle2 } from 'lucide-react';
import { FLIGHT_DATA } from '../data/tripData';

export default function FlightView() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-fadeIn">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-teal-950/60 to-slate-900 border border-slate-800 p-6 md:p-8 shadow-2xl">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 opacity-10 pointer-events-none">
          <Plane className="w-96 h-96 text-teal-400" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold border border-teal-500/20 mb-2">
              <Ticket className="w-3.5 h-3.5" />
              China Southern Airlines (CZ)
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Flight Schedule & Details
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Round-trip flights between Singapore Changi Airport (SIN) and Guangzhou Baiyun International Airport (CAN).
            </p>
          </div>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-3 border border-slate-700/60 text-center">
              <span className="text-xs text-slate-400 block font-medium">Outbound</span>
              <span className="text-base font-bold text-teal-400">CZ354</span>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-3 border border-slate-700/60 text-center">
              <span className="text-xs text-slate-400 block font-medium">Return</span>
              <span className="text-base font-bold text-purple-400">CZ351</span>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Cards Section */}
      <div className="grid grid-cols-1 gap-6">
        {FLIGHT_DATA.map((flight) => (
          <div 
            key={flight.id}
            className="group relative bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-teal-500/40 shadow-xl overflow-hidden transition-all duration-300"
          >
            {/* Top Accent Line */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${flight.iconBg}`} />

            <div className="p-6 sm:p-8">
              
              {/* Card Title & Flight No Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${flight.iconBg} flex items-center justify-center text-white shadow-lg shrink-0`}>
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{flight.type}</h3>
                      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${flight.badgeColor}`}>
                        {flight.flightNo}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">{flight.airline}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/50">
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  <span>{flight.departure.date}</span>
                </div>
              </div>

              {/* Main Flight Route Graphic */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Departure City */}
                <div className="md:col-span-4 text-left">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <PlaneTakeoff className="w-4 h-4 text-teal-400" />
                    <span>Departure</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {flight.departure.time}
                  </div>
                  <div className="text-lg font-bold text-teal-400 mt-1">
                    {flight.departure.city} ({flight.departure.code})
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    {flight.departure.airport}
                  </p>
                </div>

                {/* Duration & Flight Line Visual */}
                <div className="md:col-span-4 flex flex-col items-center justify-center py-2 md:py-0">
                  <span className="text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    {flight.duration}
                  </span>
                  
                  {/* Graphical Flight Path */}
                  <div className="w-full flex items-center gap-2 my-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-sm shadow-teal-400/50" />
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-teal-400 via-teal-500/60 to-purple-400 relative">
                      <Plane className="w-4 h-4 text-teal-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50" />
                  </div>

                  <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 mt-1">
                    Non-Stop Direct Flight
                  </span>
                </div>

                {/* Arrival City */}
                <div className="md:col-span-4 text-left md:text-right">
                  <div className="flex items-center md:justify-end gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <PlaneLanding className="w-4 h-4 text-purple-400" />
                    <span>Arrival</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {flight.arrival.time}
                  </div>
                  <div className="text-lg font-bold text-purple-400 mt-1">
                    {flight.arrival.city} ({flight.arrival.code})
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    {flight.arrival.airport}
                  </p>
                </div>

              </div>

              {/* Bottom Quick Info Pills */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300 bg-slate-800/40 px-3 py-2 rounded-xl border border-slate-800">
                  <Luggage className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Check-in: 2h prior at Airport</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 bg-slate-800/40 px-3 py-2 rounded-xl border border-slate-800">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Guangzhou: Baiyun T2</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 bg-slate-800/40 px-3 py-2 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Passport & Visa Ready</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Transit & Travel Advice Section */}
      <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Info className="w-5 h-5 text-teal-400" />
          Airport Transit & Essential Tips
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-teal-400">
              <Train className="w-4 h-4" />
              <span>Airport to Hotel (Line 3)</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Upon landing at Guangzhou Baiyun Airport (T2), follow the signs to <strong>Airport North Station (Line 3)</strong>. Take Metro Line 3 to Gongyuanqian / Beijing Road Station (~55 mins).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-purple-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Return Flight Departure Tip</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              For return flight <strong>CZ351 (18:50)</strong>, plan to leave Beijing Road / CityNote Hotel by <strong>15:30</strong> to comfortably arrive at Terminal 2 for check-in and security.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
