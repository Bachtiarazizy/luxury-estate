"use client";

import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/types";
import { FiMaximize2, FiMapPin } from "react-icons/fi";
import { FaBath, FaBed } from "react-icons/fa";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Property Image */}
      <div className="relative h-64 w-full">
        <Image src={property.images[0] || "/images/property-placeholder.jpg"} alt={property.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
              property.status === "for-sale" ? "bg-green-500 text-white" : property.status === "for-rent" ? "bg-blue-500 text-white" : property.status === "sold" ? "bg-red-500 text-white" : "bg-yellow-500 text-white"
            }`}
          >
            {property.status.replace("-", " ")}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            {formatPrice(property.price)}
            {property.status === "for-rent" && "/mo"}
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{property.title}</h3>

        <div className="flex items-center text-gray-500 mb-4">
          <FiMapPin className="mr-1" />
          <span className="text-sm line-clamp-1">
            {property.address}, {property.city}, {property.state}
          </span>
        </div>

        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <FaBed className="mr-1 text-gray-500" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1 text-gray-500" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <FiMaximize2 className="mr-1 text-gray-500" />
            <span className="text-sm">{property.squareFeet} sqft</span>
          </div>
        </div>

        <Link href={`/property/${property.id}`} className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-md transition duration-300">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
