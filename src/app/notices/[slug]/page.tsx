import Link from "next/link";
import { getNoticeBySlug } from "../../../../actions";
import Image from "next/image";
import notFound from "../../../../public/page-nf.jpg";
import { Metadata } from "next";

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
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-center mb-6">{notice.title.rendered}</h1>
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
      <div className="flex items-center gap-4 text-gray-600 mb-6 text-xs">
        <span>{new Date(notice.date).toLocaleDateString()}</span>
        {notice.acf.author?.data?.display_name && (
          <span>Por: {notice.acf.author.data.display_name}</span>
        )}
        {notice.acf.category?.name && (
          <span className="bg-lime-100 text-lime-800 px-2 py-1 rounded text-sm">
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
  );
}

// Opcional: Gerar slugs estáticos no build (para SSG)
export async function generateStaticParams() {
  // const slugs = await getAllNoticeSlugs();
  // return slugs.map((slug) => ({ slug }));
  return []; // Deixe vazio se não quiser pré-renderizar
}
