import { CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import { ProductCardWP } from './ProductCardWP'
import { priceFormat } from '../../../../utils'
import { getProducts } from '../../../../actions'

export default async function ProductCarouselContent () {
    const products = await getProducts();

  return (
    <CarouselContent>
        {products.slice(0, 6).map((product: any) => (
          <CarouselItem key={product.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <ProductCardWP
              key={product.id}
              thumbnail={product.acf.thumbnail}
              name={product.acf.name}
              category={product.acf.category.name}
              price={priceFormat(product.acf.price)}
              btnLabel="Detalhes do Produto"
              href={`/products/${product.id}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
  )
}
