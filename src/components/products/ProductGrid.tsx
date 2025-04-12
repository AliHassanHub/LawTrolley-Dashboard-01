import React from "react";
import { ProductCard } from "./ProductCard";

const products = Array(9).fill({
  type: "PDF",
  title: "How to win a case",
  categories: "Business Law | Creative Law | Huma....",
  price: "$50",
  stock: "(32 copies left)",
});

export const ProductGrid = () => {
  return (
    <div className="w-full font-medium mt-12 max-md:mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}; 