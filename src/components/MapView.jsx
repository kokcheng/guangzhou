import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { LOCATIONS, DAYS_DATA, CATEGORY_ICONS } from '../data/tripData';
import { MapPin, Navigation, ExternalLink, Train, Tag, Clock } from 'lucide-react';

// Controller component to smoothly center map when selected item changes
function MapCenterController({ centerCoords, zoomLevel }) {
  const map = useMap();
  useEffect(() => {
    if (centerCoords) {
      map.flyTo(centerCoords, zoomLevel || 14, { duration: 1.2 });
    }
  }, [centerCoords, zoomLevel, map]);
  return null;
}

// Generate Leaflet DivIcon for markers
const createCustomIcon = (location, dayColor = '#0d9488', isSelected = false) => {
  const isHotel = location.category === 'Hotel';
  const bg = isSelected ? '#38bdf8' : (isHotel ? '#f59e0b' : dayColor);
  
  const html = `
    <div class="relative flex items-center justify-center ${isSelected ? 'custom-marker-active' : ''}">
      <div class="w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white font-bold text-xs" style="background-color: ${bg}; box-shadow: 0 0 12px ${bg}88;">
        ${isHotel ? '🏨' : '📍'}
      </div>
      <div class="absolute -bottom-1.5 w-2 h-2 rotate-45" style="background-color: ${bg};"></div>
    </div>
  `;

  return L.divIcon({
    html: html,
    className: 'custom-leaflet-pin',
    iconSize: [32, 38],
    iconAnchor: [16, 38],
    popupAnchor: [0, -36]
  });
};

export default function MapView({ activeDay, selectedLocation, onSelectLocation }) {
  // Center coords based on selection or Guangzhou default
  const defaultCenter = [23.1261, 113.2638]; // Hotel Kspace / Beijing Road
  const currentCenter = selectedLocation ? selectedLocation.coords : defaultCenter;

  // Filter locations to display on map based on active day
  let visibleLocations = LOCATIONS;
  let activeDayData = null;

  if (activeDay > 0) {
    activeDayData = DAYS_DATA.find(d => d.dayNumber === activeDay);
    if (activeDayData) {
      const dayLocationIds = activeDayData.activities
        .map(a => a.locationId)
        .filter(Boolean);
      visibleLocations = LOCATIONS.filter(l => dayLocationIds.includes(l.id));
    }
  }

  // Generate route polylines connecting daily activities chronologically
  const routePolylines = [];
  const daysToRender = activeDay === 0 ? DAYS_DATA : (activeDayData ? [activeDayData] : []);

  daysToRender.forEach(day => {
    const coords = day.activities
      .map(act => act.coords)
      .filter(Boolean);
    
    if (coords.length > 1) {
      routePolylines.push({
        dayNumber: day.dayNumber,
        color: day.themeColor,
        coords: coords
      });
    }
  });

  return (
    <div className="relative w-full h-[calc(100vh-210px)] min-h-[450px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
      
      {/* Map Control Bar Overlay */}
      <div className="absolute top-3 left-3 right-3 z-[1000] flex flex-wrap items-center justify-between gap-2 p-2 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-lg text-xs">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
          <span className="font-bold text-slate-200">
            {activeDay === 0 ? 'Guangzhou Master Map (17 Spots)' : `Day ${activeDay} Locations & Route`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => onSelectLocation(LOCATIONS[0])}
            className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-medium border border-slate-700 transition"
          >
            🏨 Center Hotel
          </button>
        </div>
      </div>

      {/* Leaflet Map Canvas */}
      <MapContainer 
        center={defaultCenter} 
        zoom={13} 
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        {/* Sleek Dark CartoDB Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        <MapCenterController centerCoords={currentCenter} zoomLevel={14} />

        {/* Polylines for day routes */}
        {routePolylines.map((route, idx) => (
          <Polyline
            key={`route-${route.dayNumber}-${idx}`}
            positions={route.coords}
            pathOptions={{
              color: route.color,
              weight: 4,
              opacity: 0.8,
              dashArray: '6, 8',
              lineCap: 'round',
              lineJoin: 'round'
            }}
          />
        ))}

        {/* Markers */}
        {visibleLocations.map((loc) => {
          const isSelected = selectedLocation && selectedLocation.id === loc.id;
          
          // Determine color based on active day or default
          let dayColor = '#0d9488';
          const dayMatch = DAYS_DATA.find(d => d.activities.some(a => a.locationId === loc.id));
          if (dayMatch) {
            dayColor = dayMatch.themeColor;
          }

          return (
            <Marker
              key={loc.id}
              position={loc.coords}
              icon={createCustomIcon(loc, dayColor, isSelected)}
              eventHandlers={{
                click: () => onSelectLocation(loc)
              }}
            >
              <Popup>
                <div className="w-56 p-1 text-slate-100">
                  <div className="flex items-center gap-1.5 mb-1 text-[11px] font-semibold text-teal-400">
                    <Tag className="w-3 h-3" />
                    <span>{loc.district}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-tight mb-1">{loc.name}</h4>
                  
                  <p className="text-xs text-slate-300 mb-2 leading-snug">{loc.desc}</p>

                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-2">
                    <Train className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{loc.metro}</span>
                  </div>

                  {loc.ticketTip && (
                    <div className="mb-2.5 p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[10px] font-semibold text-amber-300">
                      💡 {loc.ticketTip}
                    </div>
                  )}

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${loc.coords[0]},${loc.coords[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs shadow-md transition"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Navigate in Maps
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
