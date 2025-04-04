"use client";

import { useState } from "react";

interface CategoryMenuProps {
  categories: string[];
  onSelect: (category: string | null) => void;
}

export function CategoryMenu({ categories, onSelect }: CategoryMenuProps) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleClick(category: string | null) {
    setSelected(category);
    onSelect(category);
  }

  return (
    <div className="flex gap-4 flex-wrap p-2">
      <button
        className={`px-4 py-2 rounded ${selected === null ? "btn bg-lime-500 hover:bg-lime-500/80 text-white" : "bg-gray-200"}`}
        onClick={() => handleClick(null)}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded ${
            selected === category ? "btn bg-lime-500 hover:bg-lime-500/80 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
