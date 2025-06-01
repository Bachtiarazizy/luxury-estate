"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { Property } from "@/lib/types";

interface PropertyGalleryProps {
  property: Property;
}

const PropertyGallery = ({ property }: PropertyGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? property.images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === property.images.length - 1 ? 0 : prevIndex + 1));
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  return (
    <div className="mb-8">
      {/* Main Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Featured Image */}
        <div className="md:col-span-2 relative h-72 md:h-96 rounded-lg overflow-hidden cursor-pointer" onClick={() => openLightbox(0)}>
          <Image src={property.images[0] || "/images/property-placeholder.jpg"} alt={`${property.title} - Featured Image`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>

        {/* Thumbnail Images */}
        {property.images.slice(1, 5).map((image, index) => (
          <div key={index} className="relative h-40 rounded-lg overflow-hidden cursor-pointer" onClick={() => openLightbox(index + 1)}>
            <Image src={image} alt={`${property.title} - Image ${index + 2}`} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
            {index === 3 && property.images.length > 5 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">+{property.images.length - 5} more</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10" aria-label="Close gallery">
            <FiX className="h-8 w-8" />
          </button>

          <button onClick={handlePrevious} className="absolute left-4 text-white hover:text-gray-300 z-10" aria-label="Previous image">
            <FiChevronLeft className="h-10 w-10" />
          </button>

          <div className="relative h-[80vh] w-[80vw]">
            <Image src={property.images[currentImageIndex] || "/images/property-placeholder.jpg"} alt={`${property.title} - Image ${currentImageIndex + 1}`} fill sizes="80vw" className="object-contain" />
          </div>

          <button onClick={handleNext} className="absolute right-4 text-white hover:text-gray-300 z-10" aria-label="Next image">
            <FiChevronRight className="h-10 w-10" />
          </button>

          <div className="absolute bottom-4 text-white text-center w-full">
            <p>
              {currentImageIndex + 1} / {property.images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;
