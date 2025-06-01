"use client";

import { useEffect, useState } from "react";
import { getPropertyById, getAgentById } from "@/lib/data";
import { Property, Agent } from "@/lib/types";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import PropertyGallery from "./property-gallery";
import PropertyDetails from "./property-details";
import PropertyMap from "./property-map";
import ContactForm from "./contact-form";

interface PropertyDetailPageProps {
  propertyId: string;
}

const PropertyDetailPage = ({ propertyId }: PropertyDetailPageProps) => {
  const [property, setProperty] = useState<Property | null>(null);
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchPropertyData = () => {
      setLoading(true);

      const propertyData = getPropertyById(propertyId);

      if (propertyData) {
        setProperty(propertyData);

        const agentData = getAgentById(propertyData.agentId);
        if (agentData) {
          setAgent(agentData);
        }
      }

      setLoading(false);
    };

    fetchPropertyData();
  }, [propertyId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!property || !agent) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-6">The property you are looking for does not exist or has been removed.</p>
            <Link href="/properties" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold">
              <FiArrowLeft className="mr-2" />
              Back to Properties
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/properties" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold">
            <FiArrowLeft className="mr-2" />
            Back to Properties
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2">
            <PropertyGallery property={property} />
            <PropertyDetails property={property} />
            <PropertyMap property={property} />
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ContactForm property={property} agent={agent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
