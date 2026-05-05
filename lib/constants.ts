export const MALL_DATA = {
  name: "IOI City Mall",
  tagline: "Southeast Asia's Largest Shopping Destination",
  location: "Putrajaya, Malaysia",
  
  // Core Statistics
  stats: {
    totalGFA: "2.5 Million",
    retailNLA: "1.5 Million",
    stores: "500+",
    annualVisitors: "35 Million",
    dailyVisitors: "100,000+",
    parkingBays: "12,000",
    directMRT: true,
    yearsOperating: "Since 2014",
  },

  // Demographics & Catchment
  demographics: {
    primaryCatchment: "2.5 Million",
    secondaryCatchment: "10 Million",
    avgHouseholdIncome: "RM 12,500/month",
    coreAgeGroup: "25-45 years",
    avgDwellTime: "4.2 hours",
    avgSpend: "RM 250/visit",
    internationalVisitors: "40%",
    repeatVisitRate: "78%",
  },

  // Location & Access
  location_details: {
    address: "Lebuh IRC, IOI Resort City, 62502 Putrajaya, Malaysia",
    fromKLIA: "25 minutes",
    fromKL: "30 minutes",
    mrtStation: "IOI City Mall MRT (Putrajaya Line)",
    highways: ["ELITE Highway", "SKVE Highway", "Maju Expressway"],
    busRoutes: "15+ routes",
  },

  // Key Tenants by Category
  tenants: {
    anchors: [
      { name: "AEON", category: "Department Store", size: "250,000 sq ft" },
      { name: "Golden Screen Cinemas", category: "Entertainment", size: "65,000 sq ft" },
      { name: "H&M", category: "Fashion", size: "35,000 sq ft" },
      { name: "Uniqlo", category: "Fashion", size: "25,000 sq ft" },
      { name: "Zara", category: "Fashion", size: "20,000 sq ft" },
    ],
    luxury: [
      "Coach", "Michael Kors", "Kate Spade", "Tory Burch", "Furla",
      "Pandora", "Swarovski", "Tag Heuer", "Tissot", "Longines",
    ],
    fashion: [
      "Zara", "H&M", "Uniqlo", "Cotton On", "Pull&Bear", "Bershka",
      "Mango", "Charles & Keith", "Pedro", "Vincci", "Padini",
    ],
    electronics: [
      "Apple Premium Reseller", "Samsung Experience Store", "Sony Centre",
      "Huawei", "Oppo", "Harvey Norman", "Senheng", "Best Denki",
    ],
    fAndB: [
      "Din Tai Fung", "Nando's", "TGI Friday's", "Chili's", "Kenny Rogers",
      "Secret Recipe", "Starbucks Reserve", "The Coffee Bean", "Boost Juice",
    ],
    entertainment: [
      "District 21", "Icescape Ice Rink", "GSC IMAX", "Escape Room",
      "SuperPark", "Kidzania (coming soon)", "Timezone",
    ],
  },

  // Attractions & Entertainment
  attractions: {
    district21: {
      name: "District 21",
      description: "Malaysia's largest indoor adventure theme park",
      size: "100,000 sq ft",
      attractions: 21,
      ageRange: "4-60 years",
      highlights: ["Roller Glider", "Tubby Ride", "Power Station", "Flying Fox"],
    },
    icescape: {
      name: "Icescape Ice Rink",
      description: "Olympic-size ice skating rink",
      size: "50,000 sq ft",
      capacity: "500 skaters",
      features: ["Ice hockey", "Figure skating", "Skating lessons", "Private events"],
    },
    cinema: {
      name: "Golden Screen Cinemas",
      halls: 21,
      seats: "2,800+",
      formats: ["IMAX", "4DX", "MX4D", "Dolby Atmos", "ScreenX"],
    },
  },

  // Event Spaces
  eventSpaces: {
    centralAtrium: {
      name: "Central Court",
      size: "50,000 sq ft",
      height: "6 stories",
      capacity: "5,000 standing",
      features: ["Full AV infrastructure", "Rigging points", "LED walls"],
    },
    conventionHall: {
      name: "IOI Convention Centre",
      size: "30,000 sq ft",
      capacity: "3,000 seated",
      features: ["Modular halls", "Breakout rooms", "Full catering"],
    },
    outdoorPlaza: {
      name: "IOI Plaza",
      size: "80,000 sq ft",
      capacity: "10,000",
      features: ["Outdoor amphitheater", "Festival space", "Night market area"],
    },
  },

  // Event Portfolio
  pastEvents: [
    { name: "Malaysia International Motor Show", attendance: "150,000", type: "Exhibition" },
    { name: "K-Pop Festival Malaysia", attendance: "30,000", type: "Concert" },
    { name: "Samsung Galaxy Launch", attendance: "15,000", type: "Product Launch" },
    { name: "Fashion Week Malaysia", attendance: "25,000", type: "Fashion" },
    { name: "CNY Celebration", attendance: "500,000", type: "Festival" },
  ],

  // Sponsorship Tiers
  sponsorshipTiers: [
    {
      name: "Presenting Partner",
      investment: "From RM 500,000",
      benefits: ["Exclusive naming rights", "Premium brand placement", "VIP hospitality", "Digital amplification", "Dedicated account team"],
      featured: true,
    },
    {
      name: "Official Partner",
      investment: "From RM 200,000",
      benefits: ["Co-branded visibility", "Brand activation space", "Event access", "Social media features"],
      featured: false,
    },
    {
      name: "Supporting Partner",
      investment: "From RM 50,000",
      benefits: ["Logo visibility", "Sampling opportunities", "Event passes", "Newsletter features"],
      featured: false,
    },
  ],

  // Leasing Information
  leasing: {
    retailRates: {
      prime: "RM 25-35 psf/month",
      standard: "RM 15-25 psf/month",
      basement: "RM 10-15 psf/month",
    },
    availableUnits: {
      retail: "50+ units",
      fAndB: "20+ units",
      kiosk: "100+ locations",
      popUp: "Flexible",
    },
    leaseTenures: ["3 years", "5 years", "10 years", "Short-term (events)"],
  },

  // Contact Information
  contact: {
    leasing: "leasing@ioicitymall.com.my",
    events: "events@ioicitymall.com.my",
    partnerships: "partnerships@ioicitymall.com.my",
    general: "info@ioicitymall.com.my",
    phone: "+60 3-8328 8888",
    website: "www.ioicitymall.com.my",
  },

  // Social Proof
  awards: [
    "Best Shopping Mall Malaysia 2023",
    "Excellence in Retail Design 2022",
    "Top Tourist Destination Selangor 2023",
    "Green Building Index Certified",
  ],
};

export const SLIDES_CONFIG = [
  { id: "cover", label: "Home", icon: "Home" },
  { id: "intro", label: "Intro", icon: "Play" },
  { id: "overview", label: "Why IOI City Mall", icon: "Building2" },
  { id: "retail", label: "Retail", icon: "ShoppingBag" },
  { id: "luxury", label: "Luxury", icon: "Gem" },
  { id: "dining", label: "Dining", icon: "UtensilsCrossed" },
  { id: "attractions", label: "Attractions", icon: "Sparkles" },
  { id: "events", label: "Events & Venues", icon: "Calendar" },
  { id: "sponsorship", label: "Partnerships", icon: "Handshake" },
  { id: "leasing", label: "Leasing", icon: "Key" },
  { id: "contact", label: "Contact", icon: "Mail" },
] as const;

export type SlideId = (typeof SLIDES_CONFIG)[number]["id"];
