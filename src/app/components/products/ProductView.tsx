"use client"

import React, { useEffect, useState } from 'react'
import { ProductCardWP } from './ProductCardWP';
import { priceFormat } from '../../../../utils';
import { getProducts } from '../../../../actions';

export default function ProductView() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchProducts() {
        try {
          const data = await getProducts();
          setProducts(data);
        } catch (error) {
          console.error("Erro ao buscar produtos:", error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchProducts();
    }, []);
  
    return (
      <>
        {/* Header da página */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-600 opacity-90 text-white py-12 md:py-16">
          <div className="container-custom w-[90%]">
            <div className="max-w-3xl">
              <h1 className="mb-4">Nossos Produtos</h1>
              <p className="text-lg opacity-90">
                Conheça nossos parceiros e toda a linha de produtos que
                oferecemos.
              </p>
            </div>
          </div>
        </section>
        <div className="container mx-auto py-4 container-custom w-[90%]">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="ml-4 text-gray-600">Carregando...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product: any) => (
                <ProductCardWP
                  key={product.id}
                  thumbnail={product.acf.thumbnail}
                  name={product.acf.name}
                  category={product.acf.category.name}
                  price={priceFormat(product.acf.price)}
                  btnLabel="Detalhes do Produto"
                  href={`/products/${product.id}`}
                />
              ))}
            </div>
          )}
        </div>
      </>
    );
}
