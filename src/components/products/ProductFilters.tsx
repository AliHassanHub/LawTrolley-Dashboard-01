import React, { useState } from "react";

interface FilterHeaderProps {
  appliedCount: number;
  onClearAll?: () => void;
}

export const FilterHeader: React.FC<FilterHeaderProps> = ({
  appliedCount,
  onClearAll,
}) => {
  return (
    <div className="flex items-center justify-between mb-6 px-4 pt-4">
      <div className="text-base font-medium tracking-[-0.32px]">Filters</div>
      <div className="flex items-center gap-2 rounded bg-[#F0E6F2] px-3 py-1.5">
        <div className="text-[#6B047C] text-sm font-medium">{appliedCount} applied</div>
        {onClearAll && (
          <button onClick={onClearAll} className="text-[#6B047C]">
            ×
          </button>
        )}
      </div>
    </div>
  );
};

interface Tag {
  id: string;
  label: string;
}

interface SelectFilterProps {
  label: string;
  options: Tag[];
  selectedTags: Tag[];
  onAddTag: (tag: Tag) => void;
  onRemoveTag: (id: string) => void;
  placeholder?: string;
}

const SelectFilter: React.FC<SelectFilterProps> = ({
  label,
  options,
  selectedTags,
  onAddTag,
  onRemoveTag,
  placeholder = "- select -",
}) => {
  const availableOptions = options.filter(
    (opt) => !selectedTags.find((t) => t.id === opt.id)
  );

  return (
    <div className="mb-4 px-4">
      <div className="text-sm font-medium mb-2">{label}</div>
      <div className="relative">
        <select
          value=""
          onChange={(e) => {
            const selected = options.find((o) => o.id === e.target.value);
            if (selected) onAddTag(selected);
          }}
          className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm text-[#999] appearance-none"
        >
          <option value="">{placeholder}</option>
          {availableOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="#999" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedTags.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-1 px-2 py-1 bg-[#F0E6F2] rounded"
            >
              <span className="text-[#6B047C] text-sm">{tag.label}</span>
              <button
                onClick={() => onRemoveTag(tag.id)}
                className="text-[#6B047C] text-sm"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const ProductFilters = () => {
  // Set slider initial value to 0
  const [price, setPrice] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState("Books");
  const products = ["Books", "Templates", "Software", "Courses"];

  // Example options - replace with real data
  const sectorOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
    { id: "3", label: "Criminal law" },
  ];
  const lawOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
    { id: "3", label: "Contract law" },
  ];
  const languageOptions: Tag[] = [
    { id: "1", label: "English" },
    { id: "2", label: "Spanish" },
    { id: "3", label: "French" },
  ];
  const bookTypeOptions: Tag[] = [
    { id: "1", label: "E-book" },
    { id: "2", label: "Audio" },
    { id: "3", label: "Hard copy" },
  ];

  const [author, setAuthor] = useState<string>("");
  const [seller, setSeller] = useState<string>("");
  const [publishDate, setPublishDate] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [selectedSectors, setSelectedSectors] = useState<Tag[]>([]);
  const [selectedGoverningLaw, setSelectedGoverningLaw] = useState<Tag[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<Tag[]>([]);
  const [selectedBookTypes, setSelectedBookTypes] = useState<Tag[]>([]);
  const [version, setVersion] = useState<Tag[]>([]);
  const [condition, setCondition] = useState<string>("New");
  const [cost, setCost] = useState<string>("All");
  const [dateOption, setDateOption] = useState<string>("Today");
  const [starRating, setStarRating] = useState<number>(0);

  const clearAll = () => {
    setAuthor("");
    setSeller("");
    setPublishDate("");
    setDate("");
    setSelectedSectors([]);
    setSelectedGoverningLaw([]);
    setSelectedLanguages([]);
    setSelectedBookTypes([]);
    setVersion([]);
    setCondition("New");
    setCost("All");
    setDateOption("Today");
    setPrice(0);
    setStarRating(0);
  };

  const appliedCount = [
    author,
    seller,
    publishDate,
    date,
    condition !== "New" ? condition : "",
    cost !== "All" ? cost : "",
    dateOption !== "Today" ? dateOption : "",
    price > 0 ? price.toString() : "",
    starRating > 0 ? starRating.toString() : "",
    ...selectedSectors.map((t) => t.label),
    ...selectedGoverningLaw.map((t) => t.label),
    ...selectedLanguages.map((t) => t.label),
    ...selectedBookTypes.map((t) => t.label),
    ...version.map((t) => t.label),
  ]
    .filter(Boolean)
    .length;

  // Calculate slider track background based on current value:
  const sliderBackground = `linear-gradient(to right, #6B047C 0%, #6B047C ${(price / 100) *
    100}%, #D1B1D6 ${(price / 100) * 100}%, #D1B1D6 100%)`;

  return (
    <div className="w-[280px] bg-[#FBF6FC] text-[#1A011E] pb-4">
      <FilterHeader appliedCount={appliedCount} onClearAll={clearAll} />

      {/* PRODUCT Section */}
      <div className="px-4 mb-6 bg-white">
        <div className="text-[10px] uppercase font-medium text-[#666666] mb-2">
          PRODUCT
        </div>
        <div className="flex flex-col">
          {products.map((product) => (
            <button
              key={product}
              onClick={() => setSelectedProduct(product)}
              className={`text-left px-3 py-2.5 text-sm font-medium rounded-none ${
                selectedProduct === product
                  ? "bg-[#F0E6F2] text-[#6B047C] border-l-2 border-[#6B047C]"
                  : "bg-white text-[#1A011E] hover:bg-[#F0E6F2] hover:border-l-2 hover:border-[#6B047C]"
              }`}
            >
              {product}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Author</div>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="E.g Austin Kelaina"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm placeholder:text-[#999]"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Seller</div>
          <input
            type="text"
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
            placeholder="E.g Austin Kelaina"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm placeholder:text-[#999]"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Publish date</div>
          <input
            type="date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm"
          />
        </div>

        <SelectFilter
          label="Sector"
          options={sectorOptions}
          selectedTags={selectedSectors}
          onAddTag={(tag) => setSelectedSectors((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedSectors((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Governing law"
          options={lawOptions}
          selectedTags={selectedGoverningLaw}
          onAddTag={(tag) => setSelectedGoverningLaw((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedGoverningLaw((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Language"
          options={languageOptions}
          selectedTags={selectedLanguages}
          onAddTag={(tag) => setSelectedLanguages((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedLanguages((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Book type"
          options={bookTypeOptions}
          selectedTags={selectedBookTypes}
          onAddTag={(tag) => setSelectedBookTypes((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedBookTypes((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Date</div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm"
          />
        </div>

        <SelectFilter
          label="Version"
          options={[]}
          selectedTags={version}
          onAddTag={() => {}}
          onRemoveTag={() => {}}
        />

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Condition</div>
          <div className="py-2.5 px-3 bg-white rounded">
            <div className="space-x-6">
              {["New", "Used"].map((opt) => (
                <label key={opt} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="condition"
                    value={opt}
                    checked={condition === opt}
                    onChange={() => setCondition(opt)}
                    className="w-4 h-4 border-gray-300 accent-[#6B047C]"
                  />
                  <span className="ml-2 text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Cost</div>
          <div className="py-2.5 px-3 bg-white rounded">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["All", "Free", "Paid", "Discounted"].map((opt) => (
                <label key={opt} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="cost"
                    value={opt}
                    checked={cost === opt}
                    onChange={() => setCost(opt)}
                    className="w-4 h-4 border-gray-300 accent-[#6B047C]"
                  />
                  <span className="ml-2 text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Date</div>
          <div className="py-2.5 px-3 bg-white rounded">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["Today", "Free", "Paid"].map((opt) => (
                <label key={opt} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="dateOption"
                    value={opt}
                    checked={dateOption === opt}
                    onChange={() => setDateOption(opt)}
                    className="w-4 h-4 border-gray-300 accent-[#6B047C]"
                  />
                  <span className="ml-2 text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Price range</div>
          <input
            type="range"
            min="0"
            max="100"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            // Dynamic slider track background:
            style={{ background: sliderBackground }}
            className="w-full h-1 rounded-lg appearance-none cursor-pointer accent-[#6B047C]"
          />
          <div className="text-xs mt-2">${price}</div>
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Star ratings</div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="text-2xl text-[#FFD700]"
                onClick={() => setStarRating(star)}
              >
                {star <= starRating ? "★" : "☆"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
