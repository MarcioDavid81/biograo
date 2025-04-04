import Link from "next/link";
import Image from "next/image";


export function ProductCardWP({ thumbnail, title, description, name, btnLabel, href, price, category }: any) {

  return (
    <div className="border rounded-lg shadow-md">
      <Link href={href}>
        <Image
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
          className="w-full h-48 object-contain mb-4"
        />
      </Link>
      <div className="bg-gray-200 p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="truncate">{description}</p>
        <div className="flex gap-4">
          <p className="mt-2 text-xs text-gray-500">{category}</p>
        </div>
          <h3 className="mt-2 text-xl">{price}</h3>
        <div className="mt-6">
          <Link className="btn bg-lime-500 hover:bg-lime-500/80 text-white" href={href}>{btnLabel}</Link>
        </div>
      </div>
    </div>
  );
}
