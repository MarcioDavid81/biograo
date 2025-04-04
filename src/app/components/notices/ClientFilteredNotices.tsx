"use client";

import { useState } from "react";
import { Notice } from "../../../../types";
import { CategoryMenu } from "./MenuBarCategory";
import Link from "next/link";
import NoticeCard from "./NoticeCard";
import { format } from "date-fns";

interface Props {
  notices: Notice[];
  categories: string[];
}

export function ClientFilteredNotices({ notices, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = selectedCategory
    ? notices.filter((n) => n.acf.category.name === selectedCategory)
    : notices;

  return (
    <div>
      <CategoryMenu categories={categories} onSelect={setSelectedCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filtered.slice(0, 3).map((notice) => (
          <div key={notice.id}>
            <NoticeCard
              thumbnail={notice.acf.thumbnail}
              title={notice.title.rendered}
              subtitle={notice.acf.subtitle}
              date={`Postado dia: ${format(
                new Date(notice.date),
                "dd/MM/yyyy"
              )}`}
              author={`Por: ${notice.acf.author.data.display_name}`}
              btnLabel="Leia Mais"
              href={`/notices/${notice.acf.slug}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
