// Trip Data extracted and enriched from location.xlsx
export const TRIP_INFO = {
  title: "Guangzhou 5-Day Explorer",
  subtitle: "Lingnan Culture, Culinary Wonders & Modern Architecture",
  dates: "Jan 13 – Jan 17, 2026",
  baseHotel: "Hotel Kspace (Beijing Road)",
  baseCoords: [23.1261, 113.2638],
  baseMetro: "Beijing Rd Station (Line 6)"
};

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
    id: 'loc-kspace',
    name: 'Beijing Road (Hotel Kspace)',
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
        title: 'Check in at Kspace',
        notes: 'Freshen up at hotel',
        category: 'Hotel',
        locationId: 'loc-kspace',
        coords: [23.1261, 113.2638]
      },
      {
        id: 'd1-2',
        time: '20:00',
        title: 'Beijing Road – Dinner',
        notes: 'Min Ji (claypot rice) or Yongji (congee)',
        category: 'Food',
        locationId: 'loc-kspace',
        coords: [23.1261, 113.2638]
      },
      {
        id: 'd1-3',
        time: '21:30',
        title: 'Dafo Temple',
        notes: '3-min walk from Beijing Rd, dazzling night illumination, free entry',
        category: 'Culture',
        locationId: 'loc-dafo',
        coords: [23.1267, 113.2646]
      },
      {
        id: 'd1-4',
        time: '22:30',
        title: 'Pearl River Walk (Optional)',
        notes: '8-min walk to river bank for a refreshing night stroll',
        category: 'Sightseeing',
        locationId: 'loc-cruise',
        coords: [23.1172, 113.2615]
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
        coords: [23.1275, 113.2362]
      },
      {
        id: 'd2-2',
        time: '12:00',
        title: 'Lunch – Baohua Road',
        notes: 'Famous Chen Tianji crispy fish skin & Cantonese snacks',
        category: 'Food',
        locationId: 'loc-yongqing-fang',
        coords: [23.1161, 113.2346]
      },
      {
        id: 'd2-3',
        time: '13:30',
        title: 'Yongqing Fang + Enning Road',
        notes: 'Historic Qilou arcade streets, Cantonese opera museum & Bruce Lee house',
        category: 'Sightseeing',
        locationId: 'loc-yongqing-fang',
        coords: [23.1161, 113.2346]
      },
      {
        id: 'd2-4',
        time: '16:00',
        title: 'Shamian Island',
        notes: 'Colonial villas, shaded European avenues, ideal photo spots',
        category: 'Sightseeing',
        locationId: 'loc-shamian',
        coords: [23.1099, 113.2368]
      },
      {
        id: 'd2-5',
        time: '18:30',
        title: 'Dinner near Shamian',
        notes: 'Light meal or tea restaurant near Huangsha',
        category: 'Food',
        locationId: 'loc-shamian',
        coords: [23.1099, 113.2368]
      },
      {
        id: 'd2-6',
        time: '20:00',
        title: 'Pearl River Night Cruise',
        notes: 'Tianzi Pier boarding. Tickets 80–150 RMB. Illuminated bridges & Canton Tower',
        category: 'Sightseeing',
        locationId: 'loc-cruise',
        coords: [23.1172, 113.2615]
      },
      {
        id: 'd2-7',
        time: '22:00',
        title: 'Back to Kspace',
        notes: 'Short walk or quick taxi back to Beijing Road',
        category: 'Transport',
        locationId: 'loc-kspace',
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
        coords: [23.1175, 113.3211]
      },
      {
        id: 'd3-2',
        time: '12:30',
        title: 'Lunch – Huacheng Square',
        notes: 'Underground food court at Mall of the World / Huacheng Square',
        category: 'Food',
        locationId: 'loc-huacheng',
        coords: [23.1199, 113.3193]
      },
      {
        id: 'd3-3',
        time: '14:00',
        title: 'Huacheng Square Stroll',
        notes: 'Spacious central park with skyscraper views (CTF Finance Centre, IFC)',
        category: 'Sightseeing',
        locationId: 'loc-huacheng',
        coords: [23.1199, 113.3193]
      },
      {
        id: 'd3-4',
        time: '15:30',
        title: 'Haixin Bridge',
        notes: 'Pedestrian bridge crossing Pearl River, spectacular skyline photos',
        category: 'Sightseeing',
        locationId: 'loc-haixin',
        coords: [23.1109, 113.3143]
      },
      {
        id: 'd3-5',
        time: '16:30',
        title: 'Canton Tower',
        notes: 'Explore base plaza or buy optional ticket up to 433m deck',
        category: 'Sightseeing',
        locationId: 'loc-canton-tower',
        coords: [23.1055, 113.3195]
      },
      {
        id: 'd3-6',
        time: '17:30',
        title: 'Guangzhou Opera House',
        notes: 'Architectural masterpiece by Zaha Hadid (Exterior photos)',
        category: 'Sightseeing',
        locationId: 'loc-opera',
        coords: [23.1205, 113.3183]
      },
      {
        id: 'd3-7',
        time: '19:00',
        title: 'Dinner – Tao Tao Ju (Beijing Rd)',
        notes: 'Famous Cantonese dim sum & legendary BBQ pork buns',
        category: 'Food',
        locationId: 'loc-kspace',
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
        coords: [23.1413, 113.2656]
      },
      {
        id: 'd4-2',
        time: '11:30',
        title: 'Sun Yat-sen Memorial Hall',
        notes: 'Iconic octagonal blue-tiled dome, 300-year-old silk cotton tree',
        category: 'Culture',
        locationId: 'loc-sun-yatsen',
        coords: [23.1352, 113.2659]
      },
      {
        id: 'd4-3',
        time: '13:00',
        title: 'Lunch near Memorial Hall',
        notes: 'Local Cantonese roast meat eatery near Memorial Hall Station',
        category: 'Food',
        locationId: 'loc-sun-yatsen',
        coords: [23.1352, 113.2659]
      },
      {
        id: 'd4-4',
        time: '14:30',
        title: 'Temple of the Six Banyans',
        notes: 'Ancient Buddhist temple & 57m colorful Flower Pagoda',
        category: 'Culture',
        locationId: 'loc-six-banyans',
        coords: [23.1317, 113.2656]
      },
      {
        id: 'd4-5',
        time: '16:30',
        title: 'Back to Kspace – Rest',
        notes: 'Mid-afternoon chill & rest at hotel',
        category: 'Rest',
        locationId: 'loc-kspace',
        coords: [23.1261, 113.2638]
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
        notes: 'Store luggage at Hotel Kspace reception',
        category: 'Hotel',
        locationId: 'loc-kspace',
        coords: [23.1261, 113.2638]
      },
      {
        id: 'd5-2',
        time: '10:00',
        title: 'Metro to Tianhe District',
        notes: 'Line 6 → Line 3 or 1 (~25 min journey)',
        category: 'Transport',
        locationId: 'loc-taikoo-hui',
        coords: [23.1245, 113.3231]
      },
      {
        id: 'd5-3',
        time: '10:30',
        title: 'Taikoo Hui or Grandview Mall',
        notes: 'Souvenir shopping, tea, lifestyle shops & pastry bakeries',
        category: 'Shopping',
        locationId: 'loc-grandview',
        coords: [23.1261, 113.3253]
      },
      {
        id: 'd5-4',
        time: '12:30',
        title: 'Lunch at Mall',
        notes: 'Food court or restaurant inside Grandview / Taikoo Hui',
        category: 'Food',
        locationId: 'loc-grandview',
        coords: [23.1261, 113.3253]
      },
      {
        id: 'd5-5',
        time: '14:00',
        title: 'Back to Kspace – Pick up luggage',
        notes: 'Metro back to Beijing Rd & retrieve bags from hotel',
        category: 'Hotel',
        locationId: 'loc-kspace',
        coords: [23.1261, 113.2638]
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
