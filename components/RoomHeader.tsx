import type { Room } from "../types/listing";

type RoomHeaderProps = {
  room: Room;
};

export default function RoomHeader({ room }: RoomHeaderProps) {
  return (
    <header className="space-y-3">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          {room.title}
        </h1>
        <p className="mt-1 text-sm text-zinc-600">{room.location}</p>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-700 sm:text-sm">
        <span className="font-medium">&#9733; {room.rating}</span>
        <span className="text-zinc-500">{room.reviewCount} reseñas</span>
        <span>{room.maxGuests} huéspedes</span>
        <span>{room.beds} camas</span>
        <span>{room.bathrooms} baños</span>
      </div>
    </header>
  );
}
