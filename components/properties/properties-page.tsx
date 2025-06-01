"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PropertyFilter, SortOption } from "@/lib/types";
import { FiGrid, FiList } from "react-icons/fi";
import { filterProperties, properties, sortProperties } from "@/lib/data";
import FilterSidebar from "./filter-sidebar";
import PropertyCard from "./property-card";

const PropertiesPage = () => {
  const searchParams = useSearchParams();

  // Initialize filters from URL parameters
  const initialFilters: PropertyFilter = {
    location: searchParams.get("location") || undefined,
    propertyType: searchParams.get("type") || undefined,
    status: searchParams.get("status") || undefined,
    minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
    maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
    bedrooms: searchParams.get("bedrooms") ? Number(searchParams.get("bedrooms")) : undefined,
    bathrooms: searchParams.get("bathrooms") ? Number(searchParams.get("bathrooms")) : undefined,
  };

  const [filters, setFilters] = useState<PropertyFilter>(initialFilters);
  const [sortOption, setSortOption] = useState<SortOption>("price-desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Apply filters and sorting
  useEffect(() => {
    let result = filterProperties(filters);
    result = sortProperties(result, sortOption);
    setFilteredProperties(result);
  }, [filters, sortOption]);

  // Handle filter changes
  const handleFilterChange = (newFilters: PropertyFilter) => {
    setFilters(newFilters);
  };

  // Handle sort changes
  const handleSortChange = (newSortOption: SortOption) => {
    setSortOption(newSortOption);
  };

  // Toggle view mode
  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Property Listings</h1>
          <p className="text-gray-600">Browse our extensive collection of properties to find your perfect match</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <FilterSidebar onFilterChange={handleFilterChange} onSortChange={handleSortChange} initialFilters={filters} initialSort={sortOption} totalProperties={filteredProperties.length} />
          </div>

          {/* Property Listings */}
          <div className="lg:w-3/4">
            {/* View Toggle and Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">{filteredProperties.length}</span> properties found
              </p>
              <button
                onClick={toggleViewMode}
                className="flex items-center bg-white p-2 rounded-md border border-gray-300 hover:border-primary transition-colors duration-300"
                aria-label={`Switch to ${viewMode === "grid" ? "list" : "grid"} view`}
              >
                {viewMode === "grid" ? <FiList className="text-gray-600" /> : <FiGrid className="text-gray-600" />}
              </button>
            </div>

            {filteredProperties.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
              </div>
            ) : (
              <div
                className={`
                ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"}
              `}
              >
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
