import type { Amenity } from "../types/listing";

type AmenitiesListProps = {
  amenities: Amenity[];
};

export default function AmenitiesList({ amenities }: AmenitiesListProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-zinc-900">Lo que ofrece este lugar</h2>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-zinc-700">
        {amenities.map((amenity) => (
          <li key={amenity.id} className="flex items-center gap-2 border-b border-zinc-200 py-2">
            <span aria-hidden="true" className="text-base text-zinc-500">
              &#10003;
            </span>
            {amenity.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
