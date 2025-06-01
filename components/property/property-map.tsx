"use client";

import { useEffect, useRef } from "react";
import { Property } from "@/lib/types";
import "leaflet/dist/leaflet.css";

interface PropertyMapProps {
  property: Property;
}

const PropertyMap = ({ property }: PropertyMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    // Dynamic import of Leaflet to avoid SSR issues
    const initMap = async () => {
      if (typeof window !== "undefined" && mapRef.current && !mapInstanceRef.current) {
        const L = (await import("leaflet")).default;

        // Fix for default marker icon
        delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        });

        // Create map instance
        const map = L.map(mapRef.current).setView([property.location.lat, property.location.lng], 15);

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        // Add marker
        L.marker([property.location.lat, property.location.lng]).addTo(map).bindPopup(`<b>${property.title}</b><br>${property.address}, ${property.city}, ${property.state}`).openPopup();

        mapInstanceRef.current = map;
      }
    };

    initMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [property]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Location</h2>
      <div ref={mapRef} className="h-80 rounded-lg overflow-hidden"></div>
    </div>
  );
};

export default PropertyMap;
