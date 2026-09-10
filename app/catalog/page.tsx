"use client";

import Link from "next/link";
import { useState } from "react";

import ListingCard from "../../components/ListingCard";
import MapPlaceholder from "../../components/MapPlaceholder";
import { mockListings } from "../../data/listings";
import type { Listing } from "../../types/listing";

type SortOrder = "price-asc" | "price-desc";

export default function CatalogPage() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("price-asc");

  const sortedListings: Listing[] = [...mockListings].sort((first, second) => {
    return sortOrder === "price-asc"
      ? first.price - second.price
      : second.price - first.price;
  });

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-6 text-zinc-900 sm:px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="space-y-3">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
          >
            Volver al inicio
          </Link>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-500">Explora alojamientos</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                Resultados disponibles
              </h1>
              <p className="mt-1 text-sm text-zinc-500">
                {sortedListings.length} alojamientos encontrados
              </p>
            </div>

            <label className="flex items-center gap-2 text-sm text-zinc-600">
              <span>Ordenar por</span>
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value as SortOrder)}
                className="rounded-full border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
              >
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
              </select>
            </label>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] md:items-start md:gap-8">
          <section aria-labelledby="catalog-results" className="order-2 space-y-4 md:order-1">
            <h2 id="catalog-results" className="text-lg font-semibold">
              Alojamientos
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {sortedListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </section>

          <aside className="order-1 md:order-2 md:sticky md:top-6">
            <MapPlaceholder />
          </aside>
        </div>
      </div>
    </main>
  );
}
