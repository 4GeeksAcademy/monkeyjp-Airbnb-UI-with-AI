"use client";

import { useState } from "react";
import type { Room } from "../types/listing";

type BookingCardProps = {
  room: Room;
};

export default function BookingCard({ room }: BookingCardProps) {
  const [guestCount, setGuestCount] = useState(1);

  const decreaseGuests = () => {
    setGuestCount((currentCount) => Math.max(1, currentCount - 1));
  };

  const increaseGuests = () => {
    setGuestCount((currentCount) => Math.min(room.maxGuests, currentCount + 1));
  };

  return (
    <section className="space-y-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-none md:rounded-2xl md:p-5 md:shadow-sm">
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-semibold text-zinc-900">{room.price}</span>
        <span className="text-sm text-zinc-600">{room.currency} / noche</span>
      </div>

      <div className="flex items-center justify-between border-y border-zinc-200 py-3">
        <div>
          <p className="text-sm font-medium text-zinc-900">Huéspedes</p>
          <p className="text-xs text-zinc-500">Máximo {room.maxGuests}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Reducir huéspedes"
            onClick={decreaseGuests}
            disabled={guestCount === 1}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-base text-zinc-700 transition hover:border-zinc-900 disabled:cursor-not-allowed disabled:opacity-40"
          >
            -
          </button>
          <span className="min-w-4 text-center text-sm font-semibold text-zinc-900">
            {guestCount}
          </span>
          <button
            type="button"
            aria-label="Aumentar huéspedes"
            onClick={increaseGuests}
            disabled={guestCount === room.maxGuests}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 text-base text-zinc-700 transition hover:border-zinc-900 disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900/30"
      >
        Reservar
      </button>
    </section>
  );
}
