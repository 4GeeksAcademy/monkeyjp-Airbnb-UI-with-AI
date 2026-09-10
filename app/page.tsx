"use client";

import { useEffect, useState } from "react";

import CategoryNav from "../components/CategoryNav";
import HomeResults from "../components/HomeResults";
import SearchBar from "../components/SearchBar";
import { mockListings } from "../data/listings";
import type { Listing } from "../types/listing";

const categories = [
  { id: "all", label: "Todo" },
  { id: "beach", label: "Playa" },
  { id: "city", label: "Ciudad" },
  { id: "countryside", label: "Campo" },
  { id: "trending", label: "Tendencias" },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setListings(mockListings);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredListings = listings.filter((listing) => {
    const matchesSearch =
      normalizedSearchTerm.length === 0 ||
      listing.title.toLowerCase().includes(normalizedSearchTerm) ||
      listing.location.toLowerCase().includes(normalizedSearchTerm);
    const matchesCategory =
      activeCategoryId === "all" || listing.category === activeCategoryId;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-6 text-zinc-900 sm:px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="space-y-4">
          <div>
            <p className="text-sm font-medium text-zinc-500">Descubre tu próxima estancia</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Encuentra un lugar para quedarte
            </h1>
          </div>
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <CategoryNav
            categories={categories}
            activeCategoryId={activeCategoryId}
            onSelect={setActiveCategoryId}
          />
        </section>

        <HomeResults listings={filteredListings} isLoading={isLoading} />
      </div>
    </main>
  );
}
