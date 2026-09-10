import AmenitiesList from "./AmenitiesList";
import BookingCard from "./BookingCard";
import HostInfo from "./HostInfo";
import ImageGallery from "./ImageGallery";
import RoomHeader from "./RoomHeader";
import type { Room } from "../types/listing";

type RoomContentProps = {
  room: Room;
};

export default function RoomContent({ room }: RoomContentProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] md:items-start">
      <article className="space-y-8">
        <ImageGallery images={room.imageUrls} alt={room.title} />
        <RoomHeader room={room} />
        <HostInfo host={room.host} />
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">Sobre este alojamiento</h2>
          <p className="text-sm leading-7 text-zinc-600">{room.description}</p>
        </section>
        <AmenitiesList amenities={room.amenities} />
      </article>

      <aside className="md:sticky md:top-6">
        <BookingCard room={room} />
      </aside>
    </div>
  );
}
