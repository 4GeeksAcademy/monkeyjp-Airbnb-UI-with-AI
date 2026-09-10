export default function LoadingIndicator() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-32 items-center justify-center p-6 text-sm text-zinc-500"
    >
      <span className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900"
        />
        Cargando alojamientos...
      </span>
    </div>
  );
}
