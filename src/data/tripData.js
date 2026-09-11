// Trip Data extracted and enriched from location.xlsx
export const TRIP_INFO = {
  title: "Guangzhou 5-Day Explorer",
  subtitle: "Lingnan Culture, Culinary Wonders & Modern Architecture",
  dates: "Jan 13 – Jan 17, 2026",
  baseHotel: "CityNote Hotel (Beijing Road)",
  baseCoords: [23.1261, 113.2638],
  baseMetro: "Beijing Rd Station (Line 6)"
};

export const FLIGHT_DATA = [
  {
    id: "flight-outbound",
    type: "Outbound Flight",
    flightNo: "CZ354",
    airline: "China Southern Airlines",
    departure: {
      city: "Singapore",
      code: "SIN",
      airport: "Singapore Changi Airport",
      date: "Wed, 13 Jan 2027",
      time: "13:40"
    },
    arrival: {
      city: "Guangzhou",
      code: "CAN",
      airport: "Guangzhou Baiyun Int'l Airport (T2)",
      date: "Wed, 13 Jan 2027",
      time: "17:40"
    },
    duration: "4h 00m",
    direct: true,
    terminal: "Terminal 2",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    iconBg: "from-teal-500 to-emerald-500"
  },
  {
    id: "flight-return",
    type: "Return Flight",
    flightNo: "CZ351",
    airline: "China Southern Airlines",
    departure: {
      city: "Guangzhou",
      code: "CAN",
      airport: "Guangzhou Baiyun Int'l Airport (T2)",
      date: "Sun, 17 Jan 2027",
      time: "18:50"
    },
    arrival: {
      city: "Singapore",
      code: "SIN",
      airport: "Singapore Changi Airport",
      date: "Sun, 17 Jan 2027",
      time: "23:00"
    },
    duration: "4h 10m",
    direct: true,
    terminal: "Terminal 2",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconBg: "from-purple-500 to-pink-500"
  }
];

export const DISTRICTS = [
  { id: 'yuexiu', name: 'Yuexiu District', color: '#0d9488', desc: 'Historic heart of Guangzhou, heritage sites & local eats' },
  { id: 'liwan', name: 'Liwan District', color: '#e11d48', desc: 'Old Canton, Xiguan mansions, arcade streets & dim sum' },
  { id: 'tianhe', name: 'Tianhe District', color: '#3b82f6', desc: 'Modern financial hub, museums, skyscrapers & shopping' },
  { id: 'haizhu', name: 'Haizhu District', color: '#f97316', desc: 'South bank of Pearl River, Canton Tower & Haixin Bridge' }
];

export const METRO_LINES = [
  { id: 'line1', name: 'Line 1', color: '#eab308', bg: 'bg-yellow-500', text: 'text-black' },
  { id: 'line2', name: 'Line 2', color: '#3b82f6', bg: 'bg-blue-500', text: 'text-white' },
  { id: 'line3', name: 'Line 3', color: '#f97316', bg: 'bg-orange-500', text: 'text-white' },
  { id: 'line5', name: 'Line 5', color: '#ef4444', bg: 'bg-red-500', text: 'text-white' },
  { id: 'line6', name: 'Line 6', color: '#a855f7', bg: 'bg-purple-500', text: 'text-white' },
  { id: 'apm', name: 'APM Line', color: '#06b6d4', bg: 'bg-cyan-500', text: 'text-white' },
];

export const LOCATIONS = [
  {
    id: 'loc-citynote',
    name: 'Beijing Road (CityNote Hotel)',
    coords: [23.1261, 113.2638],
    metro: 'Beijing Rd Station (Line 6)',
    district: 'Yuexiu District',
    category: 'Hotel',
    desc: 'Base accommodation located on the vibrant Beijing Road Pedestrian Street.'
  },
  {
    id: 'loc-dafo',
    name: 'Dafo Temple (Big Buddha Temple)',
    coords: [23.1267, 113.2646],
    metro: 'Beijing Rd Station (Line 6)',
    district: 'Yuexiu District',
    category: 'Culture',
    desc: 'Historic Buddhist temple famous for its glowing multi-tier gold illumination at night.'
  },
  {
    id: 'loc-chen-clan',
    name: 'Chen Clan Academy',
    coords: [23.1275, 113.2362],
    metro: 'Chen Clan Academy Station (Line 1)',
    district: 'Liwan District',
    category: 'Culture',
    desc: 'Masterpiece of traditional Lingnan architecture with exquisite wood & stone carvings.',
    ticketTip: '10 RMB – WeChat advance booking recommended'
  },
  {
    id: 'loc-yongqing-fang',
    name: 'Yongqing Fang & Enning Road',
    coords: [23.1161, 113.2346],
    metro: 'Huangsha Station (Line 1) / Changshou Rd',
    district: 'Liwan District',
    category: 'Sightseeing',
    desc: 'Revitalized historic district featuring arcade Qilou architecture & Bruce Lee ancestral home.'
  },
  {
    id: 'loc-shamian',
    name: 'Shamian Island',
    coords: [23.1099, 113.2368],
    metro: 'Huangsha Station (Line 1) – 10 min walk',
    district: 'Liwan District',
    category: 'Sightseeing',
    desc: 'Tranquil sandbar island filled with European colonial villas, bronze statues & shade trees.'
  },
  {
    id: 'loc-cruise',
    name: 'Pearl River Night Cruise (Tianzi Pier)',
    coords: [23.1172, 113.2615],
    metro: 'Haizhu Square Station (Line 2/6)',
    district: 'Yuexiu District',
    category: 'Sightseeing',
    desc: 'Iconic river cruise offering panoramic night views of Guangzhou skyline and bridges.',
    ticketTip: '80–150 RMB – buy ticket online or at pier'
  },
  {
    id: 'loc-museum',
    name: 'Guangdong Museum',
    coords: [23.1175, 113.3211],
    metro: 'Opera House Station (APM)',
    district: 'Tianhe District',
    category: 'Culture',
    desc: 'Striking container-shaped museum showcasing Lingnan culture, ceramics & natural history.',
    ticketTip: 'FREE – Must book 3–7 days ahead on WeChat!'
  },
  {
    id: 'loc-huacheng',
    name: 'Huacheng Square',
    coords: [23.1199, 113.3193],
    metro: 'Zhujiang New Town Station (Line 3/5)',
    district: 'Tianhe District',
    category: 'Sightseeing',
    desc: 'City central plaza framed by Guangzhou Twin Towers, Guangdong Museum & Canton Tower views.'
  },
  {
    id: 'loc-opera',
    name: 'Guangzhou Opera House',
    coords: [23.1205, 113.3183],
    metro: 'Opera House Station (APM)',
    district: 'Tianhe District',
    category: 'Sightseeing',
    desc: 'Futuristic twin-boulder landmark designed by Zaha Hadid. (Exterior photos)'
  },
  {
    id: 'loc-haixin',
    name: 'Haixin Bridge',
    coords: [23.1109, 113.3143],
    metro: 'Canton Tower Station (Line 3/APM)',
    district: 'Haizhu District',
    category: 'Sightseeing',
    desc: 'World\'s widest curved pedestrian cable-stayed bridge spanning Pearl River.'
  },
  {
    id: 'loc-canton-tower',
    name: 'Canton Tower',
    coords: [23.1055, 113.3195],
    metro: 'Canton Tower Station (Line 3/APM)',
    district: 'Haizhu District',
    category: 'Sightseeing',
    desc: 'Guangzhou\'s iconic 600m twist tower with observation decks & bubble tram.',
    ticketTip: 'Optional ticket required for sky deck'
  },
  {
    id: 'loc-yuexiu-park',
    name: 'Yuexiu Park',
    coords: [23.1413, 113.2656],
    metro: 'Yuexiu Park Station (Line 2)',
    district: 'Yuexiu District',
    category: 'Sightseeing',
    desc: 'Guangzhou\'s largest urban park, home to the Five Rams Statue & Ming Dynasty city walls.'
  },
  {
    id: 'loc-sun-yatsen',
    name: 'Sun Yat-sen Memorial Hall',
    coords: [23.1352, 113.2659],
    metro: 'Memorial Hall Station (Line 2)',
    district: 'Yuexiu District',
    category: 'Culture',
    desc: 'Octagonal blue-tiled dome hall built in memory of Dr. Sun Yat-sen.'
  },
  {
    id: 'loc-six-banyans',
    name: 'Temple of the Six Banyans',
    coords: [23.1317, 113.2656],
    metro: 'Gongyuanqian Station (Line 1/2)',
    district: 'Yuexiu District',
    category: 'Culture',
    desc: 'Ancient Buddhist temple featuring the 57m Six Harmonies Flower Pagoda.'
  },
  {
    id: 'loc-wenming-rd',
    name: 'Wenming Road Food Crawl',
    coords: [23.1282, 113.2659],
    metro: 'Beijing Rd Station (Line 6)',
    district: 'Yuexiu District',
    category: 'Food',
    desc: 'Guangzhou\'s premier dessert street – home to Baihua Sweet Soup & Dayang Herbal Coconut Soup.'
  },
  {
    id: 'loc-taikoo-hui',
    name: 'Taikoo Hui',
    coords: [23.1245, 113.3231],
    metro: 'Shipaiqiao Station (Line 3)',
    district: 'Tianhe District',
    category: 'Shopping',
    desc: 'High-end luxury shopping complex with gourmet eateries and rooftop garden.'
  },
  {
    id: 'loc-grandview',
    name: 'Grandview Mall',
    coords: [23.1261, 113.3253],
    metro: 'Tiyu Xilu Station (Line 1/3)',
    district: 'Tianhe District',
    category: 'Shopping',
    desc: 'Massive shopping center featuring indoor ocean world, food courts & lifestyle brands.'
  }
];

export const DAYS_DATA = [
  {
    dayNumber: 1,
    date: 'Wed, Jan 13',
    title: 'Arrival Evening',
    subtitle: 'Check-in, Beijing Road & Dafo Temple Lights',
    themeColor: '#0d9488',
    activities: [
      {
        id: 'd1-1',
        time: '19:30',
        title: 'Check in at CityNote Hotel',
        notes: 'Freshen up at hotel',
        category: 'Hotel',
        locationId: 'loc-citynote',
        coords: [23.1261, 113.2638],
        transit: {
          toNext: 'Beijing Road – Dinner',
          recommended: 'walk',
          duration: '1–2 mins',
          distance: '50m',
          summary: 'Walk 1–2 mins (~50m) directly on Beijing Road Pedestrian Street',
          options: [
            { mode: 'walk', label: 'Walk 1–2 min (~50m)', detail: 'CityNote Hotel is right on Beijing Road Pedestrian Street. Walk down to food spots.', recommended: true }
          ]
        }
      },
      {
        id: 'd1-2',
        time: '20:00',
        title: 'Beijing Road – Dinner',
        notes: 'Min Ji (claypot rice) or Yongji (congee)',
        category: 'Food',
        locationId: 'loc-citynote',
        coords: [23.1261, 113.2638],
        transit: {
          toNext: 'Dafo Temple',
          recommended: 'walk',
          duration: '3 mins',
          distance: '250m',
          summary: 'Walk 3 mins (~250m) south along Beijing Road',
          options: [
            { mode: 'walk', label: 'Walk 3 min (~250m)', detail: 'Head south on Beijing Rd pedestrian street; Dafo Temple entrance is right on Huixin West St.', recommended: true }
          ]
        }
      },
      {
        id: 'd1-3',
        time: '21:30',
        title: 'Dafo Temple',
        notes: '3-min walk from Beijing Rd, dazzling night illumination, free entry',
        category: 'Culture',
        locationId: 'loc-dafo',
        coords: [23.1267, 113.2646],
        transit: {
          toNext: 'Pearl River Walk (Tianzi Pier)',
          recommended: 'walk',
          duration: '8–10 mins',
          distance: '700m',
          summary: 'Walk 8–10 mins (~700m) south down Beijing Road to Pearl River',
          options: [
            { mode: 'walk', label: 'Walk 8–10 min (~700m)', detail: 'Walk straight south down Beijing Rd to Yanjiang Middle Rd at Pearl Riverfront.', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~5 min)', detail: 'Short taxi ride south to Tianzi Pier (~¥12–15).' }
          ]
        }
      },
      {
        id: 'd1-4',
        time: '22:30',
        title: 'Pearl River Walk (Optional)',
        notes: '8-min walk to river bank for a refreshing night stroll',
        category: 'Sightseeing',
        locationId: 'loc-cruise',
        coords: [23.1172, 113.2615],
        transit: {
          toNext: 'Back to CityNote Hotel',
          recommended: 'walk',
          duration: '8–10 mins',
          distance: '700m',
          summary: 'Walk 8–10 mins (~700m) north back up Beijing Road to hotel',
          options: [
            { mode: 'walk', label: 'Walk 8–10 min (~700m)', detail: 'Walk straight north up Beijing Road Pedestrian Street back to CityNote Hotel.', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~5 min)', detail: 'Direct taxi to Beijing Rd hotel area (~¥12).' }
          ]
        }
      }
    ]
  },
  {
    dayNumber: 2,
    date: 'Thu, Jan 14',
    title: 'Old Town & River Cruise',
    subtitle: 'Lingnan Heritage, Enning Road Arcades & Night Cruise',
    themeColor: '#e11d48',
    activities: [
      {
        id: 'd2-1',
        time: '09:30',
        title: 'Chen Clan Academy',
        notes: '10 RMB ticket – MUST book on WeChat mini-program in advance',
        category: 'Culture',
        bookingAlert: 'Requires WeChat Reservation',
        locationId: 'loc-chen-clan',
        coords: [23.1275, 113.2362],
        startTransitFromHotel: {
          summary: 'Metro Line 6 → 1 (~15 mins) OR DiDi Taxi (~15 mins)',
          options: [
            { mode: 'metro', label: 'Metro Line 6 → Line 1 (~15 min)', detail: 'Beijing Rd (Line 6) → Gongyuanqian, transfer Line 1 to Chen Clan Academy Station Exit D (¥3)', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~15–20 min)', detail: 'Direct taxi ride from Beijing Rd (~4.5 km, ~¥18–22)' }
          ]
        },
        transit: {
          toNext: 'Lunch – Baohua Road',
          recommended: 'walk',
          duration: '12 mins',
          distance: '900m',
          summary: 'Walk 12 mins (~900m) south down Baohua Rd OR Metro 1 stop',
          options: [
            { mode: 'walk', label: 'Walk 12 min (~900m)', detail: 'Stroll south along Baohua Rd passing classic Xiguan architecture.', recommended: true },
            { mode: 'metro', label: 'Metro Line 1 (5 min)', detail: 'Chen Clan Academy Station → Changshou Rd Station Exit D (1 stop, ¥2).' },
            { mode: 'didi', label: 'DiDi Taxi (~6 min)', detail: 'Short ride south to Baohua Rd (~¥13).' }
          ]
        }
      },
      {
        id: 'd2-2',
        time: '12:00',
        title: 'Lunch – Baohua Road',
        notes: 'Famous Chen Tianji crispy fish skin & Cantonese snacks',
        category: 'Food',
        locationId: 'loc-yongqing-fang',
        coords: [23.1161, 113.2346],
        transit: {
          toNext: 'Yongqing Fang + Enning Road',
          recommended: 'walk',
          duration: '5–8 mins',
          distance: '500m',
          summary: 'Walk 5–8 mins (~500m) south down Baohua Rd into Enning Rd',
          options: [
            { mode: 'walk', label: 'Walk 5–8 min (~500m)', detail: 'Continue south on Baohua Rd directly entering historic Enning Rd & Yongqing Fang.', recommended: true }
          ]
        }
      },
      {
        id: 'd2-3',
        time: '13:30',
        title: 'Yongqing Fang + Enning Road',
        notes: 'Historic Qilou arcade streets, Cantonese opera museum & Bruce Lee house',
        category: 'Sightseeing',
        locationId: 'loc-yongqing-fang',
        coords: [23.1161, 113.2346],
        transit: {
          toNext: 'Shamian Island',
          recommended: 'walk',
          duration: '10–12 mins',
          distance: '800m',
          summary: 'Walk 10–12 mins (~800m) south across pedestrian overpass into Shamian',
          options: [
            { mode: 'walk', label: 'Walk 10–12 min (~800m)', detail: 'Walk south down Enning Rd, cross Liuersan Rd pedestrian overpass into Shamian Island.', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~5 min)', detail: 'Quick ride over to Shamian North Ave (~¥12–15).' }
          ]
        }
      },
      {
        id: 'd2-4',
        time: '16:00',
        title: 'Shamian Island',
        notes: 'Colonial villas, shaded European avenues, ideal photo spots',
        category: 'Sightseeing',
        locationId: 'loc-shamian',
        coords: [23.1099, 113.2368],
        transit: {
          toNext: 'Dinner near Shamian',
          recommended: 'walk',
          duration: '3–5 mins',
          distance: '300m',
          summary: 'Walk 3–5 mins (~300m) inside Shamian or Huangsha area',
          options: [
            { mode: 'walk', label: 'Walk 3–5 min (~300m)', detail: 'Walk towards Huangsha Station / Shamian North Ave eateries.', recommended: true }
          ]
        }
      },
      {
        id: 'd2-5',
        time: '18:30',
        title: 'Dinner near Shamian',
        notes: 'Light meal or tea restaurant near Huangsha',
        category: 'Food',
        locationId: 'loc-shamian',
        coords: [23.1099, 113.2368],
        transit: {
          toNext: 'Pearl River Night Cruise (Tianzi Pier)',
          recommended: 'metro',
          duration: '20 mins',
          distance: '4.8 km',
          summary: 'Metro Line 1 → 2 (~20 mins) OR DiDi (~15 mins along riverfront)',
          options: [
            { mode: 'metro', label: 'Metro Line 1 → Line 2 (~20 min)', detail: 'Huangsha Station (Line 1) → Gongyuanqian, transfer Line 2 to Haizhu Sq Exit A + 5 min walk (¥3).', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~15 min)', detail: 'Scenic taxi ride along Yanjiang Rd riverfront (~4.8 km, ~¥20–25).' }
          ]
        }
      },
      {
        id: 'd2-6',
        time: '20:00',
        title: 'Pearl River Night Cruise',
        notes: 'Tianzi Pier boarding. Tickets 80–150 RMB. Illuminated bridges & Canton Tower',
        category: 'Sightseeing',
        locationId: 'loc-cruise',
        coords: [23.1172, 113.2615],
        transit: {
          toNext: 'Back to CityNote Hotel',
          recommended: 'walk',
          duration: '8–10 mins',
          distance: '700m',
          summary: 'Walk 8–10 mins (~700m) north up Beijing Road to hotel',
          options: [
            { mode: 'walk', label: 'Walk 8–10 min (~700m)', detail: 'Walk straight north up Beijing Road Pedestrian Street back to CityNote Hotel.', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~5 min)', detail: 'Direct taxi to Beijing Rd hotel area (~¥12).' }
          ]
        }
      },
      {
        id: 'd2-7',
        time: '22:00',
        title: 'Back to CityNote Hotel',
        notes: 'Short walk or quick taxi back to Beijing Road',
        category: 'Transport',
        locationId: 'loc-citynote',
        coords: [23.1261, 113.2638]
      }
    ]
  },
  {
    dayNumber: 3,
    date: 'Fri, Jan 15',
    title: 'Modern Landmarks',
    subtitle: 'Zhujiang New Town, Opera House & Canton Tower',
    themeColor: '#3b82f6',
    activities: [
      {
        id: 'd3-1',
        time: '09:30',
        title: 'Guangdong Museum',
        notes: 'FREE – MUST book 3–7 days ahead on WeChat mini-program!',
        category: 'Culture',
        bookingAlert: 'Book 3–7 Days Ahead on WeChat',
        locationId: 'loc-museum',
        coords: [23.1175, 113.3211],
        startTransitFromHotel: {
          summary: 'Metro Line 6 → APM (~25 mins) OR DiDi Taxi (~20 mins)',
          options: [
            { mode: 'metro', label: 'Metro Line 6 → APM Line (~25 min)', detail: 'Beijing Rd (Line 6) → Haizhu Sq / Yide Rd, APM Line to Opera House Station Exit B (¥4)', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~20 min)', detail: 'Taxi ride to Zhujiang New Town (~9 km, ~¥28–35)' }
          ]
        },
        transit: {
          toNext: 'Lunch – Huacheng Square',
          recommended: 'walk',
          duration: '3–5 mins',
          distance: '300m',
          summary: 'Walk 3–5 mins (~300m) west into Mall of the World underground food court',
          options: [
            { mode: 'walk', label: 'Walk 3–5 min (~300m)', detail: 'Cross into Mall of the World underground complex at Huacheng Square.', recommended: true }
          ]
        }
      },
      {
        id: 'd3-2',
        time: '12:30',
        title: 'Lunch – Huacheng Square',
        notes: 'Underground food court at Mall of the World / Huacheng Square',
        category: 'Food',
        locationId: 'loc-huacheng',
        coords: [23.1199, 113.3193],
        transit: {
          toNext: 'Huacheng Square Stroll',
          recommended: 'walk',
          duration: '2 mins',
          distance: '100m',
          summary: 'Walk 2 mins outside onto central park plaza',
          options: [
            { mode: 'walk', label: 'Walk 2 min', detail: 'Step outside onto Huacheng Square central lawn park.', recommended: true }
          ]
        }
      },
      {
        id: 'd3-3',
        time: '14:00',
        title: 'Huacheng Square Stroll',
        notes: 'Spacious central park with skyscraper views (CTF Finance Centre, IFC)',
        category: 'Sightseeing',
        locationId: 'loc-huacheng',
        coords: [23.1199, 113.3193],
        transit: {
          toNext: 'Haixin Bridge',
          recommended: 'walk',
          duration: '8–10 mins',
          distance: '600m',
          summary: 'Walk 8–10 mins (~600m) south along central plaza to riverfront',
          options: [
            { mode: 'walk', label: 'Walk 8–10 min (~600m)', detail: 'Walk south through Huacheng Square straight to north entrance of Haixin Bridge.', recommended: true }
          ]
        }
      },
      {
        id: 'd3-4',
        time: '15:30',
        title: 'Haixin Bridge',
        notes: 'Pedestrian bridge crossing Pearl River, spectacular skyline photos',
        category: 'Sightseeing',
        locationId: 'loc-haixin',
        coords: [23.1109, 113.3143],
        transit: {
          toNext: 'Canton Tower',
          recommended: 'walk',
          duration: '3–5 mins',
          distance: '300m',
          summary: 'Walk 3–5 mins (~300m) upon crossing Haixin Bridge to Canton Tower',
          options: [
            { mode: 'walk', label: 'Walk 3–5 min (~300m)', detail: 'Exit south end of bridge directly onto Canton Tower plaza.', recommended: true }
          ]
        }
      },
      {
        id: 'd3-5',
        time: '16:30',
        title: 'Canton Tower',
        notes: 'Explore base plaza or buy optional ticket up to 433m deck',
        category: 'Sightseeing',
        locationId: 'loc-canton-tower',
        coords: [23.1055, 113.3195],
        transit: {
          toNext: 'Guangzhou Opera House',
          recommended: 'apm',
          duration: '3–5 mins',
          distance: '1.2 km',
          summary: 'APM Line 1 stop (3 mins) OR Walk back over bridge (10 mins)',
          options: [
            { mode: 'apm', label: 'APM Line (~3 min)', detail: 'Canton Tower Station → Opera House Station (1 stop, ¥2).', recommended: true },
            { mode: 'walk', label: 'Walk 10–12 min (~1.2 km)', detail: 'Cross back over Haixin Bridge to north bank Opera House.' }
          ]
        }
      },
      {
        id: 'd3-6',
        time: '17:30',
        title: 'Guangzhou Opera House',
        notes: 'Architectural masterpiece by Zaha Hadid (Exterior photos)',
        category: 'Sightseeing',
        locationId: 'loc-opera',
        coords: [23.1205, 113.3183],
        transit: {
          toNext: 'Dinner – Tao Tao Ju (Beijing Rd)',
          recommended: 'metro',
          duration: '25 mins',
          distance: '8.5 km',
          summary: 'Metro APM → Line 3/5/6 (~25 mins) OR DiDi Taxi (~20 mins)',
          options: [
            { mode: 'metro', label: 'Metro (~25 min)', detail: 'APM Opera House → Zhujiang New Town → Line 3/5 to Line 6 Beijing Rd (¥4).', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~20 min)', detail: 'Direct taxi from Zhujiang New Town to Beijing Rd (~8.5 km, ~¥25–32).' }
          ]
        }
      },
      {
        id: 'd3-7',
        time: '19:00',
        title: 'Dinner – Tao Tao Ju (Beijing Rd)',
        notes: 'Famous Cantonese dim sum & legendary BBQ pork buns',
        category: 'Food',
        locationId: 'loc-citynote',
        coords: [23.1261, 113.2638]
      }
    ]
  },
  {
    dayNumber: 4,
    date: 'Sat, Jan 16',
    title: 'Nature & Heritage',
    subtitle: 'Yuexiu Park, Sun Yat-sen Hall & Food Crawl',
    themeColor: '#f97316',
    activities: [
      {
        id: 'd4-1',
        time: '09:30',
        title: 'Yuexiu Park',
        notes: 'Five Rams Statue, Ming Dynasty city wall & Zhenhai Tower',
        category: 'Sightseeing',
        locationId: 'loc-yuexiu-park',
        coords: [23.1413, 113.2656],
        startTransitFromHotel: {
          summary: 'Metro Line 2 (~12 mins) OR DiDi Taxi (~10 mins)',
          options: [
            { mode: 'metro', label: 'Metro Line 2 (~12 min)', detail: 'Walk to Gongyuanqian Station Line 2 → Yuexiu Park Station Exit B1 (2 stops, ¥2)', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~10 min)', detail: 'Quick taxi north to Yuexiu Park Main Gate (~3.2 km, ~¥15–18)' }
          ]
        },
        transit: {
          toNext: 'Sun Yat-sen Memorial Hall',
          recommended: 'walk',
          duration: '5–8 mins',
          distance: '500m',
          summary: 'Walk 5–8 mins (~500m) south from Yuexiu Park South Gate',
          options: [
            { mode: 'walk', label: 'Walk 5–8 min (~500m)', detail: 'Exit Park South Gate, cross Dongfeng Middle Rd overpass to Memorial Hall.', recommended: true }
          ]
        }
      },
      {
        id: 'd4-2',
        time: '11:30',
        title: 'Sun Yat-sen Memorial Hall',
        notes: 'Iconic octagonal blue-tiled dome, 300-year-old silk cotton tree',
        category: 'Culture',
        locationId: 'loc-sun-yatsen',
        coords: [23.1352, 113.2659],
        transit: {
          toNext: 'Lunch near Memorial Hall',
          recommended: 'walk',
          duration: '3–5 mins',
          distance: '300m',
          summary: 'Walk 3–5 mins (~300m) around Memorial Hall area',
          options: [
            { mode: 'walk', label: 'Walk 3–5 min (~300m)', detail: 'Walk to nearby Cantonese roast eateries along Dongfeng / Zhongshan Rd.', recommended: true }
          ]
        }
      },
      {
        id: 'd4-3',
        time: '13:00',
        title: 'Lunch near Memorial Hall',
        notes: 'Local Cantonese roast meat eatery near Memorial Hall Station',
        category: 'Food',
        locationId: 'loc-sun-yatsen',
        coords: [23.1352, 113.2659],
        transit: {
          toNext: 'Temple of the Six Banyans',
          recommended: 'walk',
          duration: '8–10 mins',
          distance: '600m',
          summary: 'Walk 8–10 mins (~600m) south down Liurong Road',
          options: [
            { mode: 'walk', label: 'Walk 8–10 min (~600m)', detail: 'Walk south down tree-lined Liurong Rd to Six Banyans Temple.', recommended: true }
          ]
        }
      },
      {
        id: 'd4-4',
        time: '14:30',
        title: 'Temple of the Six Banyans',
        notes: 'Ancient Buddhist temple & 57m colorful Flower Pagoda',
        category: 'Culture',
        locationId: 'loc-six-banyans',
        coords: [23.1317, 113.2656],
        transit: {
          toNext: 'Back to CityNote – Rest',
          recommended: 'walk',
          duration: '12–15 mins',
          distance: '1 km',
          summary: 'Walk 12–15 mins (~1 km) east along Zhongshan 5th Rd OR Metro 1 stop',
          options: [
            { mode: 'walk', label: 'Walk 12–15 min (1 km)', detail: 'Stroll east along Zhongshan 5th Rd directly into Beijing Rd.', recommended: true },
            { mode: 'metro', label: 'Metro Line 1 → 6 (~8 min)', detail: 'Gongyuanqian Station → Beijing Rd Station (1 stop, ¥2).' },
            { mode: 'didi', label: 'DiDi Taxi (~5 min)', detail: 'Quick taxi back to Beijing Rd hotel (~¥12).' }
          ]
        }
      },
      {
        id: 'd4-5',
        time: '16:30',
        title: 'Back to CityNote – Rest',
        notes: 'Mid-afternoon chill & rest at hotel',
        category: 'Rest',
        locationId: 'loc-citynote',
        coords: [23.1261, 113.2638],
        transit: {
          toNext: 'Wenming Road Food Crawl',
          recommended: 'walk',
          duration: '5–8 mins',
          distance: '500m',
          summary: 'Walk 5–8 mins (~500m) east from Beijing Road to Wenming Road',
          options: [
            { mode: 'walk', label: 'Walk 5–8 min (~500m)', detail: 'Walk east along Wenming Rd to Baihua Desserts & Dayang Coconut Soup.', recommended: true }
          ]
        }
      },
      {
        id: 'd4-6',
        time: '19:00',
        title: 'Wenming Road Food Crawl',
        notes: 'Baihua Sweet Soup (Mango Sago) + Dayang Coconut Chicken Soup',
        category: 'Food',
        locationId: 'loc-wenming-rd',
        coords: [23.1282, 113.2659]
      }
    ]
  },
  {
    dayNumber: 5,
    date: 'Sun, Jan 17',
    title: 'Shopping & Departure',
    subtitle: 'Tianhe Shopping Malls & Airport Transit',
    themeColor: '#a855f7',
    activities: [
      {
        id: 'd5-1',
        time: '09:30',
        title: 'Check out – Store Luggage',
        notes: 'Store luggage at CityNote Hotel reception',
        category: 'Hotel',
        locationId: 'loc-citynote',
        coords: [23.1261, 113.2638],
        transit: {
          toNext: 'Metro to Tianhe District',
          recommended: 'metro',
          duration: '25 mins',
          distance: '8.5 km',
          summary: 'Metro Line 6 → Line 3/1 (~25 mins) OR DiDi Taxi (~25 mins)',
          options: [
            { mode: 'metro', label: 'Metro Line 6 → 3 (~25 min)', detail: 'Beijing Rd (Line 6) → Dongshankou/Yanjiang, Line 3/1 to Tiyu Xilu or Shipaiqiao (¥4)', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~25 min)', detail: 'Direct taxi to Taikoo Hui / Grandview Mall (~8.5 km, ~¥28–35)' }
          ]
        }
      },
      {
        id: 'd5-2',
        time: '10:00',
        title: 'Metro to Tianhe District',
        notes: 'Line 6 → Line 3 or 1 (~25 min journey)',
        category: 'Transport',
        locationId: 'loc-taikoo-hui',
        coords: [23.1245, 113.3231],
        transit: {
          toNext: 'Taikoo Hui or Grandview Mall',
          recommended: 'walk',
          duration: '2 mins',
          distance: '100m',
          summary: 'Walk 2 mins directly from metro exit into mall',
          options: [
            { mode: 'walk', label: 'Walk 2 min', detail: 'Direct underground exit into Taikoo Hui or Grandview Mall.', recommended: true }
          ]
        }
      },
      {
        id: 'd5-3',
        time: '10:30',
        title: 'Taikoo Hui or Grandview Mall',
        notes: 'Souvenir shopping, tea, lifestyle shops & pastry bakeries',
        category: 'Shopping',
        locationId: 'loc-grandview',
        coords: [23.1261, 113.3253],
        transit: {
          toNext: 'Lunch at Mall',
          recommended: 'walk',
          duration: '2 mins',
          distance: '100m',
          summary: 'Walk 2 mins inside mall complex',
          options: [
            { mode: 'walk', label: 'Walk 2 min', detail: 'Walk within Grandview Mall / Taikoo Hui dining concourse.', recommended: true }
          ]
        }
      },
      {
        id: 'd5-4',
        time: '12:30',
        title: 'Lunch at Mall',
        notes: 'Food court or restaurant inside Grandview / Taikoo Hui',
        category: 'Food',
        locationId: 'loc-grandview',
        coords: [23.1261, 113.3253],
        transit: {
          toNext: 'Back to CityNote – Pick up luggage',
          recommended: 'metro',
          duration: '25 mins',
          distance: '8.5 km',
          summary: 'Metro Line 1/3 → Line 6 (~25 mins) OR DiDi Taxi (~25 mins)',
          options: [
            { mode: 'metro', label: 'Metro Line 1/3 → Line 6 (~25 min)', detail: 'Tiyu Xilu / Shipaiqiao → Beijing Rd Station (¥4).', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~25 min)', detail: 'Taxi back to Beijing Rd hotel (~8.5 km, ~¥28–35).' }
          ]
        }
      },
      {
        id: 'd5-5',
        time: '14:00',
        title: 'Back to CityNote – Pick up luggage',
        notes: 'Metro back to Beijing Rd & retrieve bags from hotel',
        category: 'Hotel',
        locationId: 'loc-citynote',
        coords: [23.1261, 113.2638],
        transit: {
          toNext: 'Metro to Airport North (T2)',
          recommended: 'metro',
          duration: '50–55 mins',
          distance: '38 km',
          summary: 'Metro Line 6 → 2 → 3 North (~55 mins, ¥7) OR DiDi Taxi (~50 mins, ~¥110)',
          options: [
            { mode: 'metro', label: 'Metro Line 6 → 2 → 3 North (~55 min)', detail: 'Beijing Rd (Line 6) → Gongyuanqian (Line 2) → Jiahewanggang (Line 3 North) to Airport North T2 (¥7, fast & avoids highway traffic!)', recommended: true },
            { mode: 'didi', label: 'DiDi Taxi (~45–50 min)', detail: 'Direct highway taxi from Beijing Rd to Baiyun Airport Terminal 2 (~38 km, ~¥100–130).' }
          ]
        }
      },
      {
        id: 'd5-6',
        time: '15:30',
        title: 'Metro to Airport North',
        notes: '~55 min journey: Metro Line 2 (Gongyuanqian) → Line 3 North to Airport North (T2)',
        category: 'Transport',
        locationId: null,
        coords: [23.3925, 113.3086] // Airport T2
      },
      {
        id: 'd5-7',
        time: '16:30',
        title: 'Arrive T2 & Check In',
        notes: 'Baiyun International Airport Terminal 2 check-in & security',
        category: 'Transport',
        locationId: null,
        coords: [23.3925, 113.3086]
      },
      {
        id: 'd5-8',
        time: '18:50',
        title: 'Flight CZ351 Departs',
        notes: 'Board China Southern CZ351 flight home!',
        category: 'Transport',
        locationId: null,
        coords: [23.3925, 113.3086]
      }
    ]
  }
];

export const CATEGORY_ICONS = {
  Food: '🍲',
  Culture: '🏛️',
  Sightseeing: '🗼',
  Transport: '🚇',
  Shopping: '🛍️',
  Rest: '☕',
  Hotel: '🏨'
};
