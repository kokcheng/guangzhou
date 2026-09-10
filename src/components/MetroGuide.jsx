import React, { useState } from 'react';
import { DISTRICTS, METRO_LINES, LOCATIONS } from '../data/tripData';
import { Train, MapPin, Compass, ExternalLink, ArrowRight } from 'lucide-react';

export default function MetroGuide({ onSelectLocationOnMap }) {
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  const filteredLocations = selectedDistrict === 'all'
    ? LOCATIONS
    : LOCATIONS.filter(l => l.district.toLowerCase().includes(selectedDistrict.toLowerCase()));

  return (
    <div className="space-y-6 pb-12">
      
      {/* Metro Line Badges Overview Header */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
            <Train className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Guangzhou Metro Network Guide</h2>
            <p className="text-xs text-slate-400">Guangzhou Metro is clean, fast, and keyless. Use Alipay / WeChat Metro QR code to ride!</p>
          </div>
        </div>

        {/* Metro Lines Palette */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
          {METRO_LINES.map(line => (
            <div 
              key={line.id}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold ${line.bg} ${line.text} shadow-sm`}
            >
              <span>{line.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* District Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setSelectedDistrict('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition shrink-0 ${
            selectedDistrict === 'all'
              ? 'bg-teal-600 text-white shadow-md'
              : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          All Districts (17 Spots)
        </button>

        {DISTRICTS.map(district => (
          <button
            key={district.id}
            onClick={() => setSelectedDistrict(district.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition shrink-0 ${
              selectedDistrict === district.id
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: district.color }} />
            {district.name}
          </button>
        ))}
      </div>

      {/* Grid of Location & Metro Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLocations.map((loc) => {
          const districtData = DISTRICTS.find(d => loc.district.includes(d.name.split(' ')[0]));

          return (
            <div 
              key={loc.id}
              className="p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Header: District & Metro Tag */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span 
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white"
                    style={{ backgroundColor: districtData?.color || '#0d9488' }}
                  >
                    {loc.district}
                  </span>

                  <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <Compass className="w-3 h-3 text-teal-400" />
                    {loc.category}
                  </span>
                </div>

                {/* Location Name */}
                <h3 className="text-base font-bold text-white mb-1">{loc.name}</h3>

                <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                  {loc.desc}
                </p>

                {/* Nearest Metro Station Detail */}
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2 mb-3">
                  <Train className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Nearest Metro</span>
                    <span className="text-xs font-semibold text-slate-200">{loc.metro}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-xs">
                <button
                  onClick={() => onSelectLocationOnMap(loc)}
                  className="flex items-center gap-1 text-teal-400 hover:text-teal-300 font-semibold"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Locate on Map</span>
                </button>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${loc.coords[0]},${loc.coords[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-200 font-medium"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
