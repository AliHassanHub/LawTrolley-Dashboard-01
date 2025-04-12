import React, { useState } from "react";

const productTypes = [
  { id: "books", label: "Books" },
  { id: "templates", label: "Templates" },
  { id: "software", label: "Software" },
  { id: "courses", label: "Courses" },
];

export const ProductTypeNav = () => {
  const [activeType, setActiveType] = useState("books");

  return (
    <nav className="flex flex-col gap-2 mb-6">
      <h3 className="text-sm font-medium text-gray-500 uppercase">PRODUCT</h3>
      <div className="flex flex-col">
        {productTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setActiveType(type.id)}
            className={`text-left px-4 py-2 rounded-lg transition-colors ${
              activeType === type.id
                ? "bg-[#F9F5FA] text-[#6B047C]"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>
    </nav>
  );
}; 