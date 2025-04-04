"use client";

import React, { useEffect, useState } from "react";
import { getNotices } from "../../../../actions";
import NoticeCard from "./NoticeCard";
import { format } from "date-fns";
import { dateFormat } from "../../../../utils";

export default function NoticeView() {
  const [notices, setNotices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotices() {
      try {
        const data = await getNotices();
        setNotices(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNotices();
  }, []);

  return (
    <>
      {/* Header da página */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 text-white py-12 md:py-16">
        <div className="container-custom w-[90%]">
          <div className="max-w-3xl">
            <h1 className="mb-4">Notícias</h1>
            <p className="text-lg opacity-90">
              Mantenha-se atualizado sobre os principais assuntos do mundo Agro.
            </p>
          </div>
        </div>
      </section>
      <div className="container w-[90%] mx-auto flex flex-col mt-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="ml-4 text-gray-600">Carregando...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center group-[&>*]:">
            {notices.map((notice: any) => (
              <NoticeCard
                key={notice.id}
                thumbnail={notice.acf.thumbnail}
                title={notice.title.rendered}
                subtitle={notice.acf.subtitle}
                date={`Data: ${dateFormat(notice.date)}`}
                category={`Categoria: ${notice.acf.category.name}`}
                author={`Autor: ${notice.acf.author.data.display_name}`}
                btnLabel="Leia Mais"
                href={`/notices/${notice.acf.slug}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
