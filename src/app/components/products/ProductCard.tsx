import React from "react";
import { Product } from "../../../../types";

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">★ {product.rating.rate}</span>
        <span className="text-gray-500 ml-2">
          ({product.rating.count} reviews)
        </span>
      </div>
    </div>
  );
}
