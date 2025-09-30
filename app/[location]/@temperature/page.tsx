import CardSkeleton from "@/components/skeleton/CardSkeleton";
import NoLocationFound from "@/components/NoLocationFound";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLon } from "@/lib/location-info";
import { Suspense } from "react";

export default async function TemperaturePage({
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
        <TemperatureComponent
          lat={resolvedLatLon?.lat}
          lon={resolvedLatLon?.lon}
        />
      </Suspense>
    );
  } else return <NoLocationFound />;
}
