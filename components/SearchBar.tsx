"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Empieza a buscar",
}: SearchBarProps) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">Buscar alojamientos</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-2xl leading-none text-zinc-800"
      >
        &#8981;
      </span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-16 w-full rounded-full border border-zinc-200 bg-white pl-14 pr-6 text-base font-medium text-zinc-900 shadow-[0_4px_16px_rgba(0,0,0,0.10)] outline-none transition placeholder:text-zinc-800 focus:border-zinc-300 focus:ring-2 focus:ring-zinc-900/10"
      />
    </label>
  );
}
