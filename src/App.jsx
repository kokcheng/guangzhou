import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { DAYS_DATA, LOCATIONS } from './data/tripData';
import Header from './components/Header';
import DayTabs from './components/DayTabs';
import TimelineView from './components/TimelineView';
import MapView from './components/MapView';
import MetroGuide from './components/MetroGuide';
import TipsModal from './components/TipsModal';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState('timeline');
  const [activeDay, setActiveDay] = useState(0); // 0 = All Days
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isTipsOpen, setIsTipsOpen] = useState(false);

  // Load completion state from localStorage
  const [completedMap, setCompletedMap] = useState(() => {
    try {
      const saved = localStorage.getItem('gz_trip_completed_v1');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Total activities across all 5 days
  const allActivities = DAYS_DATA.flatMap(d => d.activities);
  const totalCount = allActivities.length;
  const completedCount = Object.values(completedMap).filter(Boolean).length;

  // Save completion state changes
  useEffect(() => {
    try {
      localStorage.setItem('gz_trip_completed_v1', JSON.stringify(completedMap));
    } catch (e) {
      console.error(e);
    }
  }, [completedMap]);

  // Toggle single activity completion status
  const toggleComplete = (id) => {
    setCompletedMap(prev => {
      const next = { ...prev, [id]: !prev[id] };
      
      // Trigger confetti if all activities completed!
      const newCompletedCount = Object.values(next).filter(Boolean).length;
      if (newCompletedCount === totalCount && totalCount > 0) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
      return next;
    });
  };

  // Handle map selection from timeline or metro guide
  const handleSelectLocationOnMap = (actOrLoc) => {
    const loc = LOCATIONS.find(l => l.id === actOrLoc.locationId || l.id === actOrLoc.id);
    if (loc) {
      setSelectedLocation(loc);
    } else if (actOrLoc.coords) {
      setSelectedLocation({
        id: actOrLoc.id,
        name: actOrLoc.title || actOrLoc.name,
        coords: actOrLoc.coords,
        district: 'Guangzhou',
        metro: actOrLoc.notes || '',
        category: actOrLoc.category || 'Sightseeing'
      });
    }
    setActiveTab('map');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans pb-16 md:pb-0">
      
      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        completedCount={completedCount}
        totalCount={totalCount}
        onOpenTips={() => setIsTipsOpen(true)}
      />

      {/* Day Selector Tabs (only shown on timeline & map views) */}
      {activeTab !== 'metro' && (
        <DayTabs
          activeDay={activeDay}
          setActiveDay={setActiveDay}
          completedMap={completedMap}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Timeline View */}
        {activeTab === 'timeline' && (
          <TimelineView
            activeDay={activeDay}
            searchQuery={searchQuery}
            completedMap={completedMap}
            toggleComplete={toggleComplete}
            onSelectLocationOnMap={handleSelectLocationOnMap}
          />
        )}

        {/* Interactive Map View */}
        {activeTab === 'map' && (
          <MapView
            activeDay={activeDay}
            selectedLocation={selectedLocation}
            onSelectLocation={(loc) => setSelectedLocation(loc)}
          />
        )}

        {/* Metro & District Guide */}
        {activeTab === 'metro' && (
          <MetroGuide
            onSelectLocationOnMap={handleSelectLocationOnMap}
          />
        )}

      </main>

      {/* Travel Tips & Booking Modal */}
      <TipsModal
        isOpen={isTipsOpen}
        onClose={() => setIsTipsOpen(false)}
      />

      {/* Responsive Mobile Bottom Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenTips={() => setIsTipsOpen(true)}
      />

    </div>
  );
}
