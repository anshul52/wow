export const navLinks = [
  { href: '#section-stacked', label: 'Categories', num: '01' },
  { href: '#section-destinations', label: 'Destinations', num: '02' },
  { href: '#section-bento', label: 'Attractions', num: '03' },
  { href: '#section-packages', label: 'Packages', num: '04' },
  { href: '#section-uae', label: 'Emirates', num: '05' },
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
  hint: 'Scroll — the cube hops between emirates as you plan your route.',
  waypoints: [
    { label: 'Dubai', sub: 'Burj Khalifa' },
    { label: 'Abu Dhabi', sub: 'Louvre Abu Dhabi' },
    { label: 'Fujairah', sub: 'East coast' },
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

export const brand = {
  name: 'UAE Wow',
  tagline: 'Six emirates · Endless journeys',
  bookCta: 'Book now',
  planCta: 'Plan your journey',
}
