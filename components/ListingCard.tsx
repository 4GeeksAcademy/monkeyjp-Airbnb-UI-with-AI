import Image from "next/image";
import Link from "next/link";
import type { Listing } from "../types/listing";

type ListingCardProps = {
  listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-transparent">
      <Link href={`/rooms/${listing.id}`} className="block">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100">
          <Image
            src={listing.imageUrls[0]}
            alt={listing.title}
            fill
            sizes="(min-width: 768px) 33vw, 88vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm">
            {listing.category === "trending" ? "Tendencia" : "Recomendado"}
          </span>
        </div>

        <div className="space-y-1.5 px-1 pt-3">
          <h2 className="truncate text-base font-semibold text-zinc-900">
            {listing.title}
          </h2>
          <p className="truncate text-sm text-zinc-600">{listing.location}</p>
          <p className="truncate text-sm text-zinc-500">
            {listing.dates.join(" · ")} · Anfitrión
          </p>

          <div className="flex items-center gap-1 text-sm text-zinc-700">
            <span aria-label={`Valoración ${listing.rating}`}>&#9733;</span>
            <span>{listing.rating}</span>
            <span className="text-zinc-400">·</span>
            <span className="text-zinc-500">{listing.reviewCount} reseñas</span>
          </div>

          <p className="flex items-baseline gap-1 text-sm text-zinc-900">
            <span className="font-semibold">{listing.price}</span>
            <span>{listing.currency} en total</span>
          </p>
        </div>
      </Link>
      <button
        type="button"
        aria-label="Añadir a favoritos"
        className="absolute right-3 top-3 z-10 text-3xl leading-none text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
      >
        &#9825;
      </button>
    </div>
  );
}
