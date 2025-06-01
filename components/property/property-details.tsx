"use client";

import { Property } from "@/lib/types";
import { FiMaximize2, FiCalendar, FiHome, FiMapPin, FiCheck } from "react-icons/fi";
import { FaBath, FaBed } from "react-icons/fa";

interface PropertyDetailsProps {
  property: Property;
}

const PropertyDetails = ({ property }: PropertyDetailsProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center text-gray-600">
            <FiMapPin className="mr-2" />
            <span>
              {property.address}, {property.city}, {property.state} {property.zipCode}
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="text-2xl md:text-3xl font-bold text-primary">
            {formatPrice(property.price)}
            {property.status === "for-rent" && <span className="text-lg font-normal">/mo</span>}
          </div>
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase mt-2 ${
              property.status === "for-sale" ? "bg-green-500 text-white" : property.status === "for-rent" ? "bg-blue-500 text-white" : property.status === "sold" ? "bg-red-500 text-white" : "bg-yellow-500 text-white"
            }`}
          >
            {property.status.replace("-", " ")}
          </div>
        </div>
      </div>

      {/* Key Details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-t border-b border-gray-200 py-4">
        <div className="flex flex-col items-center p-3">
          <div className="flex items-center text-gray-600 mb-1">
            <FaBed className="mr-2" size={20} />
            <span className="text-lg font-semibold">{property.bedrooms}</span>
          </div>
          <span className="text-sm text-gray-500">Bedrooms</span>
        </div>
        <div className="flex flex-col items-center p-3">
          <div className="flex items-center text-gray-600 mb-1">
            <FaBath className="mr-2" size={20} />
            <span className="text-lg font-semibold">{property.bathrooms}</span>
          </div>
          <span className="text-sm text-gray-500">Bathrooms</span>
        </div>
        <div className="flex flex-col items-center p-3">
          <div className="flex items-center text-gray-600 mb-1">
            <FiMaximize2 className="mr-2" size={20} />
            <span className="text-lg font-semibold">{property.squareFeet.toLocaleString()}</span>
          </div>
          <span className="text-sm text-gray-500">Square Feet</span>
        </div>
        <div className="flex flex-col items-center p-3">
          <div className="flex items-center text-gray-600 mb-1">
            <FiCalendar className="mr-2" size={20} />
            <span className="text-lg font-semibold">{property.yearBuilt}</span>
          </div>
          <span className="text-sm text-gray-500">Year Built</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>

      {/* Property Details */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Property Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <FiHome className="text-primary mr-3" />
            <div>
              <span className="text-gray-600">Property Type:</span>
              <span className="ml-2 font-medium capitalize">{property.propertyType}</span>
            </div>
          </div>
          <div className="flex items-center">
            <FiCalendar className="text-primary mr-3" />
            <div>
              <span className="text-gray-600">Listed Date:</span>
              <span className="ml-2 font-medium">{new Date(property.listedDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {property.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <FiCheck className="text-primary mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
