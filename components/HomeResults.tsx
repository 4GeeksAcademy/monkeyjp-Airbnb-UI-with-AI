import Link from "next/link";

import ListingCard from "./ListingCard";
import LoadingIndicator from "./LoadingIndicator";
import type { Listing } from "../types/listing";

type HomeResultsProps = {
  listings: Listing[];
  isLoading: boolean;
};

export default function HomeResults({ listings, isLoading }: HomeResultsProps) {
  return (
    <section aria-live="polite" className="space-y-4">
      <div className="flex items-end justify-between gap-4 py-2">
        <div>
          <h2 className="text-xl font-semibold">Alojamientos destacados</h2>
          {!isLoading && (
            <p className="mt-1 text-sm text-zinc-500">
              {listings.length} opciones disponibles
            </p>
          )}
        </div>
        <Link
          href="/catalog"
          className="shrink-0 text-sm font-semibold text-zinc-700 transition hover:text-zinc-950"
        >
          Ver catálogo
        </Link>
      </div>

      {isLoading ? (
        <LoadingIndicator />
      ) : listings.length > 0 ? (
        <div className=" flex snap-x gap-5 overflow-x-auto px-4 pb-4 pl-6 pr-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="w-[82vw] min-w-[82vw] max-w-sm snap-start md:w-auto md:min-w-0 md:max-w-none"
            >
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center text-sm text-zinc-500">
          No encontramos alojamientos con esos criterios.
        </p>
      )}
    </section>
  );
}
