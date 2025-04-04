import React from "react";
import { getProductById } from "../../../../actions";
import Image from "next/image";
import { priceFormat } from "../../../../utils";
import Link from "next/link";
import { Metadata } from "next";

interface ProductPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params);

  return {
    title: `${product?.acf.name} - BioGrão Comércio Agrícola`,
    description: product?.acf.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params);

  return (
    <>
      {/* Header da página */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 text-white py-12 md:py-16">
        <div className="container-custom w-[90%]">
          <div className="max-w-3xl">
            <h1 className="mb-4">{product.acf.name}</h1>
            <p className="text-lg opacity-90">{product.acf.category.name}</p>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center w-[90%] mx-auto space-y-4 my-6">
        <Image
          src={product.acf.thumbnail}
          alt={product.acf.name}
          width={300}
          height={300}
        />
        <h2 className="text-3xl text-black">{product.acf.name}</h2>
        <p>{product.acf.description}</p>
        <div>
          <span className="text-gray-500 text-xs">Por apenas</span>
          <h3>{priceFormat(product.acf.price)}</h3>
          <span className="bg-lime-200">
            em até 12x de {priceFormat(product.acf.price / 12)}
          </span>
          <p className="text-gray-500 text-xs">nos cartões de crédito</p>
        </div>
        <div className="mt-6">
          <Link
            href="/products"
            className="btn bg-lime-500 hover:bg-lime-500/80 text-white"
          >
            Voltar
          </Link>
        </div>
      </div>
    </>
  );
}
