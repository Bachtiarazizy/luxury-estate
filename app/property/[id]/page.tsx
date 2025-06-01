import PropertyDetailPage from "@/components/property/property-details-page";

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  return <PropertyDetailPage propertyId={params.id} />;
}
