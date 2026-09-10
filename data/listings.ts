import type { Amenity, Host, Listing, Room } from "../types/listing";

export const mockListings: Listing[] = [
  {
    id: "lisbon-river-loft",
    title: "Riverlight Loft in Alfama",
    location: "Lisboa, Portugal",
    imageUrls: [
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=1200&q=80",
    ],
    price: 128,
    currency: "EUR",
    rating: 4.91,
    reviewCount: 184,
    category: "city",
    dates: ["12-17 Jun"],
  },
  {
    id: "lisbon-coast-house",
    title: "Sunlit House near the Coast",
    location: "Cascais, Lisboa",
    imageUrls: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    price: 176,
    currency: "EUR",
    rating: 4.84,
    reviewCount: 96,
    category: "beach",
    dates: ["20-25 Jun"],
  },
  {
    id: "porto-garden-studio",
    title: "Garden Studio in Cedofeita",
    location: "Porto, Portugal",
    imageUrls: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80",
    ],
    price: 92,
    currency: "EUR",
    rating: 4.78,
    reviewCount: 142,
    category: "trending",
    dates: ["14-18 Jul"],
  },
  {
    id: "porto-vineyard-retreat",
    title: "Vineyard Retreat by the Douro",
    location: "Vila Nova de Gaia, Porto",
    imageUrls: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    ],
    price: 154,
    currency: "EUR",
    rating: 4.96,
    reviewCount: 73,
    category: "countryside",
    dates: ["2-7 Sep"],
  },
  {
    id: "vigo-harbor-flat",
    title: "Harbor View Flat",
    location: "Vigo, Spain",
    imageUrls: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    ],
    price: 110,
    currency: "EUR",
    rating: 4.73,
    reviewCount: 88,
    category: "beach",
    dates: ["8-12 Aug"],
  },
  {
    id: "madrid-rooftop-home",
    title: "Rooftop Home in Malasana",
    location: "Madrid, Spain",
    imageUrls: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    ],
    price: 143,
    currency: "EUR",
    rating: 4.88,
    reviewCount: 211,
    category: "city",
    dates: ["5-10 Oct"],
  },
];

const lisbonHost: Host = {
  id: "host-ines",
  name: "Ines",
  avatarUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  yearsHosting: 6,
};

const portoHost: Host = {
  id: "host-tiago",
  name: "Tiago",
  avatarUrl:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  yearsHosting: 8,
};

const madridHost: Host = {
  id: "host-clara",
  name: "Clara",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  yearsHosting: 4,
};

const lisbonAmenities: Amenity[] = [
  { id: "wifi", name: "WiFi" },
  { id: "kitchen", name: "Cocina" },
  { id: "balcony", name: "Balcón" },
];

const portoAmenities: Amenity[] = [
  { id: "wifi", name: "WiFi" },
  { id: "parking", name: "Aparcamiento gratuito" },
  { id: "garden", name: "Jardín" },
];

const madridAmenities: Amenity[] = [
  { id: "wifi", name: "WiFi" },
  { id: "workspace", name: "Zona de trabajo" },
  { id: "air-conditioning", name: "Aire acondicionado" },
];

export const mockRooms: Room[] = [
  {
    ...mockListings[0],
    description:
      "Un loft luminoso en una calle tranquila de Alfama, con vistas al río y acceso a los rincones históricos de Lisboa.",
    maxGuests: 2,
    beds: 1,
    bathrooms: 1,
    amenities: lisbonAmenities,
    host: lisbonHost,
  },
  {
    ...mockListings[2],
    description:
      "Estudio independiente con jardín privado en Cedofeita, ideal para descubrir el centro de Porto a pie.",
    maxGuests: 3,
    beds: 2,
    bathrooms: 1,
    amenities: portoAmenities,
    host: portoHost,
  },
  {
    ...mockListings[5],
    description:
      "Apartamento acogedor con terraza en Malasana, rodeado de cafés, galerías y restaurantes del centro de Madrid.",
    maxGuests: 4,
    beds: 2,
    bathrooms: 1,
    amenities: madridAmenities,
    host: madridHost,
  },
  {
    ...mockListings[1],
    description:
      "Casa luminosa cerca de la costa de Cascais, perfecta para disfrutar de la playa y los atardeceres junto al océano.",
    maxGuests: 5,
    beds: 3,
    bathrooms: 2,
    amenities: lisbonAmenities,
    host: lisbonHost,
  },
  {
    ...mockListings[3],
    description:
      "Refugio tranquilo entre viñedos junto al Douro, con jardín y vistas abiertas sobre las colinas de Porto.",
    maxGuests: 6,
    beds: 3,
    bathrooms: 2,
    amenities: portoAmenities,
    host: portoHost,
  },
  {
    ...mockListings[4],
    description:
      "Piso acogedor frente al puerto de Vigo, con luz natural y acceso sencillo al paseo marítimo y al centro de la ciudad.",
    maxGuests: 4,
    beds: 2,
    bathrooms: 1,
    amenities: lisbonAmenities,
    host: lisbonHost,
  },
];
