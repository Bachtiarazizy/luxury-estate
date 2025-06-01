"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch, FiMapPin } from "react-icons/fi";

const Hero = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [status, setStatus] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (propertyType) params.append("type", propertyType);
    if (status) params.append("status", status);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Find Your Dream Home</h1>
        <p className="text-xl text-white mb-10 max-w-2xl mx-auto">Discover the perfect property that matches your lifestyle and preferences with our extensive listings and expert guidance.</p>

        {/* Search Form */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMapPin className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Status</option>
                <option value="for-sale">For Sale</option>
                <option value="for-rent">For Rent</option>
              </select>
            </div>

            <button type="submit" className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md transition duration-300 flex items-center justify-center">
              <FiSearch className="mr-2" />
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
