export default function MapPlaceholder() {
  return (
    <div
      aria-label="Mapa de alojamientos pendiente de implementar"
      className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-emerald-50 p-6 text-center md:min-h-80"
    >
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(35deg,transparent_45%,#a7c7b3_46%,#a7c7b3_48%,transparent_49%),linear-gradient(120deg,transparent_45%,#a7c7b3_46%,#a7c7b3_48%,transparent_49%)] [background-size:5rem_5rem]" />
      <div className="relative space-y-2 rounded-xl border border-emerald-200 bg-white/90 px-5 py-4 shadow-sm">
        <p className="text-sm font-semibold text-zinc-900">Mapa de alojamientos</p>
        <p className="text-xs text-zinc-500">Disponible próximamente</p>
      </div>
    </div>
  );
}
