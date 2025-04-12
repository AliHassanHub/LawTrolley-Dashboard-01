import React from "react";

interface ProductCardProps {
  type: string;
  title: string;
  categories: string;
  price: string;
  stock: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  type,
  title,
  categories,
  price,
  stock,
}) => {
  return (
    <article className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Mobile/List View (below md breakpoint) */}
      <div className="md:hidden flex flex-row w-full">
        <div className="relative w-[120px] h-[120px] flex flex-col items-center justify-center">
          <div className="absolute top-2 right-2 bg-[#6B047C] text-white text-xs font-medium px-2 py-1 rounded">
            {type}
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/57b86d68086c16f2b2bdbcd66624c9e65e8ccbb0"
              alt="Books icon"
              className="w-12 h-12 object-contain"
            />
            <div className="text-[#6B047C] text-sm font-medium mt-1">Books</div>
          </div>
        </div>
        <div className="flex-1 bg-white p-4 flex flex-col justify-center">
          <h3 className="text-[#1A011E] text-base font-semibold leading-tight mb-1">{title}</h3>
          <p className="text-[#1A011E] text-sm mb-2">{categories}</p>
          <div className="flex items-center gap-2">
            <span className="text-[#1A011E] text-base font-medium">{price}</span>
            <span className="text-[#808080] text-xs">{stock}</span>
          </div>
        </div>
      </div>

      {/* Grid View (md breakpoint and above) */}
      <div className="hidden md:flex flex-col w-full">
        <div className="relative h-[180px] flex flex-col items-center justify-center">
          <div className="absolute top-2 right-2 bg-[#6B047C] text-white text-xs font-medium px-2 py-1 rounded">
            {type}
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/57b86d68086c16f2b2bdbcd66624c9e65e8ccbb0"
              alt="Books icon"
              className="w-16 h-16 object-contain"
            />
            <div className="text-[#6B047C] text-lg font-medium mt-2">Books</div>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col gap-2">
          <h3 className="text-[#1A011E] text-lg font-semibold leading-tight">{title}</h3>
          <p className="text-[#1A011E] text-sm">{categories}</p>
          <div className="flex items-center gap-2">
            <span className="text-[#1A011E] text-base font-medium">{price}</span>
            <span className="text-[#808080] text-xs">{stock}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
