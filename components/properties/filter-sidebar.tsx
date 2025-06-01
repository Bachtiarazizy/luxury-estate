"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { FiFilter, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { PropertyFilter, SortOption } from "@/lib/types";

interface FilterSidebarProps {
  onFilterChange: (filters: PropertyFilter) => void;
  onSortChange: (sortOption: SortOption) => void;
  initialFilters?: PropertyFilter;
  initialSort?: SortOption;
  totalProperties: number;
}

const FilterSidebar = ({ onFilterChange, onSortChange, initialFilters = {}, initialSort = "price-desc", totalProperties }: FilterSidebarProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<PropertyFilter>(initialFilters);
  const [sortOption, setSortOption] = useState<SortOption>(initialSort as SortOption);

  // Filter sections expanded state
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    bedrooms: true,
    bathrooms: true,
    propertyType: true,
    status: true,
  });

  // Initialize filters from URL parameters on component mount
  useEffect(() => {
    const urlFilters: PropertyFilter = {};

    // Extract filters from URL
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const bedrooms = searchParams.get("bedrooms");
    const bathrooms = searchParams.get("bathrooms");
    const propertyType = searchParams.get("propertyType");
    const status = searchParams.get("status");
    const sort = searchParams.get("sort");

    if (minPrice) urlFilters.minPrice = Number(minPrice);
    if (maxPrice) urlFilters.maxPrice = Number(maxPrice);
    if (bedrooms) urlFilters.bedrooms = Number(bedrooms);
    if (bathrooms) urlFilters.bathrooms = Number(bathrooms);
    if (propertyType) urlFilters.propertyType = propertyType;
    if (status) urlFilters.status = status;

    // Set filters and sort from URL if they exist
    if (Object.keys(urlFilters).length > 0) {
      setFilters(urlFilters);
      onFilterChange(urlFilters);
    }

    if (sort && sort !== sortOption) {
      setSortOption(sort as SortOption);
      onSortChange(sort as SortOption);
    }
  }, [searchParams, onFilterChange, onSortChange, sortOption]);

  // Update URL with current filters and sort
  const updateURL = (newFilters: PropertyFilter, newSort: SortOption) => {
    const params = new URLSearchParams();

    // Add filters to URL params
    if (newFilters.minPrice) params.set("minPrice", newFilters.minPrice.toString());
    if (newFilters.maxPrice) params.set("maxPrice", newFilters.maxPrice.toString());
    if (newFilters.bedrooms) params.set("bedrooms", newFilters.bedrooms.toString());
    if (newFilters.bathrooms) params.set("bathrooms", newFilters.bathrooms.toString());
    if (newFilters.propertyType) params.set("propertyType", newFilters.propertyType);
    if (newFilters.status) params.set("status", newFilters.status);

    // Add sort to URL params
    if (newSort !== "price-desc") {
      params.set("sort", newSort);
    }

    // Update the URL without causing a page refresh
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.replace(newUrl);
  };

  // Toggle filter sidebar on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Toggle section expansion
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  // Handle filter changes
  const handleFilterChange = (key: keyof PropertyFilter, value: string | number | undefined) => {
    const newFilters = { ...filters, [key]: value };

    // Remove undefined values to keep URL clean
    if (value === undefined) {
      delete newFilters[key];
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
    updateURL(newFilters, sortOption);
  };

  // Handle sort changes
  const handleSortChange = (value: SortOption) => {
    setSortOption(value);
    onSortChange(value);
    updateURL(filters, value);
  };

  // Clear all filters
  const clearFilters = () => {
    const emptyFilters = {};
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
    updateURL(emptyFilters, sortOption);
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button onClick={toggleSidebar} className="flex items-center justify-center w-full py-2 px-4 bg-primary text-white rounded-md">
          <FiFilter className="mr-2" />
          Filters & Sort
        </button>
      </div>

      {/* Filter Sidebar - Mobile Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={toggleSidebar}></div>

      {/* Filter Sidebar Content */}
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-white shadow-xl z-50 overflow-y-auto transform transition-transform duration-300 lg:relative lg:inset-auto lg:transform-none lg:w-full lg:shadow-none lg:z-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b lg:hidden">
          <h3 className="text-lg font-semibold">Filters & Sort</h3>
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700" aria-label="Close filters">
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4">
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">{totalProperties}</span> properties found
            </p>
            {Object.keys(filters).length > 0 && (
              <button onClick={clearFilters} className="text-primary hover:text-primary-dark text-sm mt-1">
                Clear all filters
              </button>
            )}
          </div>

          {/* Sort Options */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Sort By</h4>
            <select value={sortOption} onChange={(e) => handleSortChange(e.target.value as SortOption)} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="price-desc">Price (High to Low)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
            </select>
          </div>

          {/* Price Filter */}
          <FilterSection title="Price Range" isExpanded={expandedSections.price} onToggle={() => toggleSection("price")}>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm text-gray-600 block mb-1">Min Price</label>
                <select
                  value={filters.minPrice || ""}
                  onChange={(e) => handleFilterChange("minPrice", e.target.value ? Number(e.target.value) : undefined)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">No Min</option>
                  <option value="100000">$100,000</option>
                  <option value="200000">$200,000</option>
                  <option value="300000">$300,000</option>
                  <option value="500000">$500,000</option>
                  <option value="750000">$750,000</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="2000000">$2,000,000</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Max Price</label>
                <select
                  value={filters.maxPrice || ""}
                  onChange={(e) => handleFilterChange("maxPrice", e.target.value ? Number(e.target.value) : undefined)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">No Max</option>
                  <option value="200000">$200,000</option>
                  <option value="300000">$300,000</option>
                  <option value="500000">$500,000</option>
                  <option value="750000">$750,000</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="2000000">$2,000,000</option>
                  <option value="5000000">$5,000,000</option>
                </select>
              </div>
            </div>
          </FilterSection>

          {/* Bedrooms Filter */}
          <FilterSection title="Bedrooms" isExpanded={expandedSections.bedrooms} onToggle={() => toggleSection("bedrooms")}>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => handleFilterChange("bedrooms", filters.bedrooms === num ? undefined : num)}
                  className={`px-4 py-2 rounded-md border ${filters.bedrooms === num ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-300 hover:border-primary"}`}
                >
                  {num}+
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Bathrooms Filter */}
          <FilterSection title="Bathrooms" isExpanded={expandedSections.bathrooms} onToggle={() => toggleSection("bathrooms")}>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => handleFilterChange("bathrooms", filters.bathrooms === num ? undefined : num)}
                  className={`px-4 py-2 rounded-md border ${filters.bathrooms === num ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-300 hover:border-primary"}`}
                >
                  {num}+
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Property Type Filter */}
          <FilterSection title="Property Type" isExpanded={expandedSections.propertyType} onToggle={() => toggleSection("propertyType")}>
            <div className="space-y-2">
              {["house", "apartment", "condo", "townhouse", "land"].map((type) => (
                <div key={type} className="flex items-center">
                  <input
                    type="radio"
                    id={`type-${type}`}
                    name="propertyType"
                    checked={filters.propertyType === type}
                    onChange={() => handleFilterChange("propertyType", filters.propertyType === type ? undefined : type)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label htmlFor={`type-${type}`} className="ml-2 text-gray-700 capitalize">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Status Filter */}
          <FilterSection title="Status" isExpanded={expandedSections.status} onToggle={() => toggleSection("status")}>
            <div className="space-y-2">
              {["for-sale", "for-rent", "sold", "pending"].map((status) => (
                <div key={status} className="flex items-center">
                  <input
                    type="radio"
                    id={`status-${status}`}
                    name="status"
                    checked={filters.status === status}
                    onChange={() => handleFilterChange("status", filters.status === status ? undefined : status)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label htmlFor={`status-${status}`} className="ml-2 text-gray-700 capitalize">
                    {status.replace("-", " ")}
                  </label>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Apply Filters Button (Mobile Only) */}
          <div className="mt-6 lg:hidden">
            <button onClick={toggleSidebar} className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

const FilterSection = ({ title, children, isExpanded, onToggle }: FilterSectionProps) => {
  return (
    <div className="mb-6 border-b border-gray-200 pb-6">
      <button onClick={onToggle} className="flex items-center justify-between w-full text-left font-semibold mb-3">
        <span>{title}</span>
        {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      <div className={`transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>{children}</div>
    </div>
  );
};

export default FilterSidebar;
