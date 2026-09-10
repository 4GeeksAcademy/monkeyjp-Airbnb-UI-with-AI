"use client";

type Category = {
  id: string;
  label: string;
};

type CategoryNavProps = {
  categories: Category[];
  activeCategoryId: string;
  onSelect: (categoryId: string) => void;
};

const categorySymbols: Record<string, string> = {
  all: "◉",
  beach: "☼",
  city: "⌂",
  countryside: "♧",
  trending: "✦",
};

export default function CategoryNav({
  categories,
  activeCategoryId,
  onSelect,
}: CategoryNavProps) {
  return (
    <nav aria-label="Categorías" className="w-full overflow-x-auto">
      <div className="flex min-w-max gap-3 px-1 py-1">
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;

          return (
            <button
              key={category.id}
              type="button"
              aria-current={isActive ? "true" : undefined}
              onClick={() => onSelect(category.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full border px-5 py-3 text-base font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-zinc-900/20 ${
                isActive
                  ? "border-zinc-300 bg-zinc-50 text-zinc-900 shadow-[0_3px_8px_rgba(0,0,0,0.12)]"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:text-zinc-900"
              }`}
            >
              <span aria-hidden="true" className="text-lg leading-none">
                {categorySymbols[category.id] ?? "•"}
              </span>
              {category.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
