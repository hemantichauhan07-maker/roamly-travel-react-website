
export const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    country: "Indonesia",
    type: "Island",
    days: "5 days",
    price: 899,
    rating: "4.9",
    tag: "BEST SELLER",
    description: "Jungle temples, emerald rice terraces and slow island mornings.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 2,
    name: "Swiss Alps",
    country: "Switzerland",
    type: "Mountains",
    days: "6 days",
    price: 1299,
    rating: "4.8",
    tag: "SCENIC",
    description: "Alpine villages, panoramic rail rides and crisp mountain air.",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 3,
    name: "Amalfi Coast",
    country: "Italy",
    type: "Coast",
    days: "4 days",
    price: 1099,
    rating: "4.9",
    tag: "ROMANTIC",
    description: "Pastel seaside towns, lemon groves and Mediterranean sunsets.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 4,
    name: "Kyoto, Japan",
    country: "Japan",
    type: "Culture",
    days: "5 days",
    price: 999,
    rating: "4.8",
    tag: "CULTURE",
    description: "Quiet shrines, lantern-lit lanes and traditional tea houses.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 5,
    name: "Marrakech, Morocco",
    country: "Morocco",
    type: "Culture",
    days: "4 days",
    price: 749,
    rating: "4.7",
    tag: "HIDDEN GEM",
    description: "Colourful souks, courtyard riads and desert-inspired design.",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 6,
    name: "Lago di Braies",
    country: "Italy",
    type: "Mountains",
    days: "3 days",
    price: 679,
    rating: "4.8",
    tag: "NATURE",
    description: "Mirror-clear water, forest trails and mountain views.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85"
  }
];

export const packages = [
  {
    id: 1,
    title: "Island Slowdown",
    place: "Bali, Indonesia",
    duration: "5 days · 4 nights",
    price: 899,
    category: "Relax",
    image: destinations[0].image,
    includes: [
      "Boutique stay with breakfast",
      "Private airport transfers",
      "Ubud cultural day tour"
    ]
  },
  {
    id: 2,
    title: "Alpine Escape",
    place: "Swiss Alps, Switzerland",
    duration: "6 days · 5 nights",
    price: 1299,
    category: "Adventure",
    image: destinations[1].image,
    includes: [
      "Mountain-view hotel",
      "Scenic rail pass",
      "Guided valley hike"
    ]
  },
  {
    id: 3,
    title: "La Dolce Vita",
    place: "Amalfi Coast, Italy",
    duration: "4 days · 3 nights",
    price: 1099,
    category: "Romance",
    image: destinations[2].image,
    includes: [
      "Sea-view accommodation",
      "Coastal boat excursion",
      "Local food walk"
    ]
  }
];

export const guides = [
  {
    name: "Maya Patel",
    role: "Culture & local food",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85",
    languages: "English, Japanese"
  },
  {
    name: "Luca Moretti",
    role: "Coastal adventures",
    location: "Amalfi, Italy",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
    languages: "English, Italian"
  },
  {
    name: "Amira El Fassi",
    role: "Markets & heritage",
    location: "Marrakech, Morocco",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=85",
    languages: "English, Arabic, French"
  }
];