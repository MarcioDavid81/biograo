import Link from "next/link";
import { getNoticeBySlug } from "../../../../actions";
import Image from "next/image";
import notFound from "../../../../public/page-nf.jpg";
import { Metadata } from "next";
import { dateFormat } from "../../../../utils";

interface NoticePageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: NoticePageProps): Promise<Metadata> {
  const notice = await getNoticeBySlug(params);

  return {
    title: `${notice?.title.rendered} - BioGrão Comércio Agrícola`,
    description: notice?.acf.subtitle,
  };
}

export default async function NoticePage({ params }: NoticePageProps) {
  const notice = await getNoticeBySlug(params);

  if (!notice)
    return (
      <div className="max-w-4xl flex flex-col items-center mx-auto px-4 py-8">
        <Image
          src={notFound}
          alt="404"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="mt-6">
          <Link
            href="/notices"
            className="btn border-2 border-lime-500 text-gray-800 hover:bg-lime-500/80 hover:text-white transition-all duration-300 ease-in-out"
          >
            Return to Notices Page
          </Link>
        </div>
      </div>
    );

  return (
    <>
    {/* Header da página */}
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 text-white py-12 md:py-16">
        <div className="container-custom w-[90%]">
          <div className="max-w-3xl">
            <h1 className="mb-4">{notice.title.rendered}</h1>
            <p className="text-lg opacity-90">
              {notice.acf.category.name}
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Thumbnail */}
      {notice.acf.thumbnail && (
        <div className="mb-1 rounded-t-lg overflow-hidden">
          <Image
            src={notice.acf.thumbnail}
            alt={notice.title.rendered}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
          {/* Subtitle */}
          {notice.acf.subtitle && (
            <p className="text-xs text-gray-700 mb-2">{notice.acf.subtitle}</p>
          )}
        </div>
      )}

      {/* Metadata */}
      <div className="flex items-center gap-4 text-gray-600 font-extralight mb-6 text-xs">
        <span>{`Data: ${dateFormat(notice.date)}`}</span>
        {notice.acf.author?.data?.display_name && (
          <span>Por: {notice.acf.author.data.display_name}</span>
        )}
        {notice.acf.category?.name && (
          <span className=" text-lime-500 border border-lime-500 px-2 py-1 rounded-full">
            {notice.acf.category.name}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="max-w-none">{notice.acf.content}</div>
      <div className="mt-6">
        <Link
          href="/notices"
          className="btn bg-lime-500 hover:bg-lime-500/80 text-white"
        >
          Voltar
        </Link>
      </div>
    </div>
    </>
  );
}

// Opcional: Gerar slugs estáticos no build (para SSG)
export async function generateStaticParams() {
  // const slugs = await getAllNoticeSlugs();
  // return slugs.map((slug) => ({ slug }));
  return []; // Deixe vazio se não quiser pré-renderizar
}
