import PropertyDetailPage from "@/components/property/property-details-page";

interface PropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  return <PropertyDetailPage propertyId={id} />;
}
