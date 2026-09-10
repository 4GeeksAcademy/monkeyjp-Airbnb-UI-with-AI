export interface Listing {
  id: string;
  title: string;
  location: string;
  imageUrls: string[];
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  category: string;
  dates: string[];
}

export interface Room extends Listing {
  description: string;
  maxGuests: number;
  beds: number;
  bathrooms: number;
  amenities: Amenity[];
  host: Host;
}

export interface Host {
  id: string;
  name: string;
  avatarUrl: string;
  yearsHosting: number;
}

export interface Amenity {
  id: string;
  name: string;
}
