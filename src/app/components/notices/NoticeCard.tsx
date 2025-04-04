import Image from "next/image";
import Link from "next/link";

export default function NoticeCard({ thumbnail, title, subtitle, btnLabel, href, date, category, author }: any) {
  return (
    <div className="mt-6 mb-6 group overflow-hidden rounded-t-lg min-h-[400px]">
      <Link href={href}>
        <Image
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
          className="rounded-t-lg w-full h-full object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </Link>
      <div className="bg-gray-200 p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="truncate">{subtitle}</p>
        <div className="flex gap-4">
          <p className="mt-2 text-xs text-gray-500">{category}</p>
          <p className="mt-2 text-xs text-gray-500">{author}</p>
        </div>
          <p className="mt-2 text-xs text-gray-500">{date}</p>
        <div className="mt-6">
          <Link className="btn bg-lime-500 hover:bg-lime-500/80 text-white" href={href}>{btnLabel}</Link>
        </div>
      </div>
    </div>
  );
}
