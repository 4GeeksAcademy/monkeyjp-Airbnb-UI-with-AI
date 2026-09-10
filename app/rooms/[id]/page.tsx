"use client";

import LoadingIndicator from "../../../components/LoadingIndicator";
import RoomContent from "../../../components/RoomContent";
import { mockRooms } from "../../../data/listings";
import type { Room } from "../../../types/listing";
import Link from "next/link";
import { use, useEffect, useState } from "react";

type RoomPageProps = {
  params: Promise<{ id: string }>;
};

export default function RoomPage({ params }: RoomPageProps) {
  const { id } = use(params);
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const matchingRoom = mockRooms.find((candidate) => candidate.id === id) ?? null;
      setRoom(matchingRoom);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [id]);

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
        <LoadingIndicator />
      </main>
    );
  }

  if (!room) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 text-center">
        <section className="space-y-4">
          <h1 className="text-2xl font-semibold text-zinc-900">Alojamiento no encontrado</h1>
          <p className="text-sm text-zinc-600">
            No pudimos encontrar una habitación con ese identificador.
          </p>
          <Link
            href="/catalog"
            className="inline-flex rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            Volver al catálogo
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-6 text-zinc-900 sm:px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <Link
          href="/catalog"
          className="inline-flex w-fit text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
        >
          Volver al catálogo
        </Link>

        <RoomContent room={room} />
      </div>
    </main>
  );
}
