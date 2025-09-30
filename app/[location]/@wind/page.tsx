import { Suspense } from "react";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLon } from "@/lib/location-info";
import NoLocationFound from "@/components/NoLocationFound";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
export default async function WindPage({
  params,
  searchParams,
}: {
  params: Promise<{ location: string }>;
  searchParams: Promise<{ latitude: string; longitude: string }>;
}) {
  const { latitude, longitude } = await searchParams;
  const { location } = await params;
  const resolvedLatLon = await getResolvedLatLon(location, latitude, longitude);
  if (resolvedLatLon?.lat && resolvedLatLon?.lon) {
    return (
      <Suspense fallback={<CardSkeleton />}>
        <WindComponent lat={resolvedLatLon?.lat} lon={resolvedLatLon?.lon} />
      </Suspense>
    );
  } else return <NoLocationFound />;
}
