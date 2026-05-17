export const navLinks = [
  { href: '#section-stacked', label: 'Categories', num: '01' },
  { href: '#section-destinations', label: 'Destinations', num: '02' },
  { href: '#section-bento', label: 'Attractions', num: '03' },
  { href: '#section-packages', label: 'Packages', num: '04' },
  { href: '#section-uae', label: 'Emirates', num: '05' },
  { href: '#section-gallery', label: 'Gallery', num: '06' },
]

export const hero = {
  eyebrow: 'United Arab Emirates',
  lines: ['Where every', 'horizon', 'surprises'],
  sub: 'Six emirates. Endless journeys. Scroll to begin.',
  stats: [
    { value: '6', label: 'Emirates' },
    { value: '200+', label: 'Attractions' },
    { value: '365', label: 'Sunny days' },
  ],
  ctaPrimary: { href: '#section-stacked', label: 'Explore categories' },
  ctaSecondary: { href: '#section-uae', label: 'View all emirates' },
}

export const attractions = {
  kicker: 'Top attractions',
  title: "Dubai's",
  titleEm: 'finest stops',
  lede: 'Scroll to spotlight each experience — curated picks with honest timing and pricing.',
}

export const destinations = {
  kicker: 'Build your trip',
  title: 'Six places worth',
  titleEm: 'crossing the world for',
  hint: 'Scroll — the photo card hops between emirates as you plan your route.',
  waypoints: [
    {
      label: 'Dubai',
      sub: 'Burj Khalifa',
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=85&fit=crop&crop=entropy',
      alt: 'Burj Khalifa and Dubai skyline at dusk',
    },
    {
      label: 'Abu Dhabi',
      sub: 'Louvre Abu Dhabi',
      image:
        'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=85&fit=crop&crop=entropy',
      alt: 'Louvre Abu Dhabi museum and waterfront',
    },
    {
      label: 'Fujairah',
      sub: 'East coast',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=85&fit=crop&crop=entropy',
      alt: 'Fujairah east coast and Gulf waters',
    },
  ],
}

export const categories = {
  kicker: 'Discover UAE',
  title: 'Choose your',
  titleEm: 'journey style',
  items: [
    {
      title: 'Desert & dunes',
      blurb: 'Liwa silence, falconry at golden hour, and star-filled empty-quarter skies.',
      badge: 'Most scenic',
      image:
        'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=900&q=85&fit=crop&crop=entropy',
    },
    {
      title: 'Coast & islands',
      blurb: 'Pearl diving heritage, mangrove kayaks, and crystal Gulf water.',
      badge: 'Family favourite',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85&fit=crop&crop=entropy',
    },
    {
      title: 'Skyline nights',
      blurb: 'Rooftops, neon-lit souks, and the creek glowing after dark.',
      badge: 'Iconic',
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85&fit=crop&crop=entropy',
    },
    {
      title: 'Heritage trails',
      blurb: 'Wind towers, mosques, craft quarters, and the scent of oud.',
      badge: 'UNESCO listed',
      image:
        'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=85&fit=crop&crop=entropy',
    },
  ],
}

export const packages = {
  kicker: 'Curated packages',
  title: 'Plan your',
  titleEm: 'ideal itinerary',
  lede: 'Hand-picked multi-day routes across the UAE — honest pricing, no guesswork.',
  items: [
    {
      days: 2,
      title: 'Weekend pulse',
      price: 'From AED 1,200',
      badge: 'Best seller',
      stops: ['DXB skyline & Burj top', 'Creek abra & Gold souk', 'Desert edge sunset'],
    },
    {
      days: 3,
      title: 'Emirate sampler',
      price: 'From AED 2,400',
      badge: 'Popular',
      stops: ['Dubai highlights', 'Sharjah heritage quarter', 'Sheikh Zayed Mosque, AUH'],
    },
    {
      days: 5,
      title: 'Coast to wadi',
      price: 'From AED 4,800',
      badge: 'Best value',
      stops: [
        'Fujairah east coast',
        'Hatta mountain dam',
        'Al Ain oasis & zoo',
        'Dubai city deep dive',
        'Abu Dhabi grand finale',
      ],
    },
  ],
}

export const emirates = {
  kicker: 'All six emirates',
  title: 'Every corner',
  titleEm: 'of the UAE',
  lede: 'From skyline nights to mountain wadis — six distinct journeys in one federation.',
  items: [
    {
      name: 'Dubai',
      tagline: 'Future-forward waterfront city',
      bestTime: 'Nov – Mar',
      highlights: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Desert safari'],
    },
    {
      name: 'Abu Dhabi',
      tagline: 'Islands, mangroves, and grand museums',
      bestTime: 'Oct – Apr',
      highlights: ['Sheikh Zayed Mosque', 'Louvre', 'Yas Island', 'Mangrove kayak'],
    },
    {
      name: 'Sharjah',
      tagline: 'UNESCO book capital, heritage soul',
      bestTime: 'Oct – Mar',
      highlights: ['Heart of Sharjah', 'Blue Souk', 'Calligraphy Museum', 'Mleiha'],
    },
    {
      name: 'Fujairah',
      tagline: 'Hajar mountains meet Indian Ocean blues',
      bestTime: 'Oct – May',
      highlights: ['Snoopy Island diving', 'Al Bidya Mosque', 'Khorfakkan', 'Wadi hikes'],
    },
    {
      name: 'Ras Al Khaimah',
      tagline: 'Jebel Jais heights and adventure coast',
      bestTime: 'Nov – Mar',
      highlights: ['Jebel Jais via ferrata', "World's longest zipline", 'Dhayah Fort', 'Al Hamra'],
    },
    {
      name: 'Ajman',
      tagline: 'Quiet beaches and corniche sunsets',
      bestTime: 'Nov – Apr',
      highlights: ['Ajman Museum', 'Manama souq', 'Al Zorah nature reserve', 'Corniche walk'],
    },
  ],
}

export const scrollGallery = {
  kicker: 'Visual journey',
  title: 'Scroll through',
  titleEm: 'the Emirates',
  lede: 'A pinned gallery that turns vertical scroll into smooth horizontal motion — just like the GSAP demo.',
  scrollHint: 'Scroll down for the gallery',
  outro: 'Keep exploring — packages and emirates await below.',
  items: [
    {
      label: 'Dubai skyline',
      meta: 'Burj Khalifa district',
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85&fit=crop&crop=entropy',
      alt: 'Dubai skyline with Burj Khalifa at dusk',
    },
    {
      label: 'Desert dunes',
      meta: 'Liwa Empty Quarter',
      image:
        'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=900&q=85&fit=crop&crop=entropy',
      alt: 'Golden sand dunes in the UAE desert',
    },
    {
      label: 'Louvre Abu Dhabi',
      meta: 'Saadiyat Island',
      image:
        'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=900&q=85&fit=crop&crop=entropy',
      alt: 'Louvre Abu Dhabi museum exterior',
    },
    {
      label: 'Gulf coast',
      meta: 'Fujairah east coast',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85&fit=crop&crop=entropy',
      alt: 'Turquoise Gulf waters along the UAE coast',
    },
    {
      label: 'Heritage quarter',
      meta: 'Heart of Sharjah',
      image:
        'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=85&fit=crop&crop=entropy',
      alt: 'Traditional architecture in a UAE heritage district',
    },
    {
      label: 'Mountain wadi',
      meta: 'Hatta region',
      image:
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=85&fit=crop&crop=entropy',
      alt: 'Mountain road and wadi landscape near Hatta',
    },
    {
      label: 'Mangrove kayak',
      meta: 'Abu Dhabi coast',
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=85&fit=crop&crop=entropy',
      alt: 'Kayaking through mangrove channels',
    },
    {
      label: 'Corniche sunset',
      meta: 'Ajman waterfront',
      image:
        'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&q=85&fit=crop&crop=entropy',
      alt: 'Sunset over a UAE corniche waterfront',
    },
  ],
}

export const brand = {
  name: 'UAE Wow',
  tagline: 'Six emirates · Endless journeys',
  bookCta: 'Book now',
  planCta: 'Plan your journey',
}

export const footer = {
  lede: 'Curated journeys across all six emirates — from skyline nights to desert silence and Gulf shores.',
  quickLinks: [
    { href: '#section-stacked', label: 'Journey categories' },
    { href: '#section-packages', label: 'Travel packages' },
    { href: '#section-gallery', label: 'Photo gallery' },
    { href: '#section-packages', label: 'Book a trip' },
  ],
  contact: {
    email: 'hello@uaewow.travel',
    phone: '+971 4 000 0000',
    address: 'Dubai Design District, Dubai, UAE',
  },
  social: [
    { href: 'https://instagram.com', label: 'Instagram', network: 'instagram' },
    { href: 'https://facebook.com', label: 'Facebook', network: 'facebook' },
    { href: 'https://x.com', label: 'X (Twitter)', network: 'x' },
    { href: 'https://youtube.com', label: 'YouTube', network: 'youtube' },
  ],
  legal: [
    { href: '#', label: 'Privacy' },
    { href: '#', label: 'Terms' },
    { href: '#', label: 'Cookies' },
  ],
}
