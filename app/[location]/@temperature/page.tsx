import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLon } from "@/lib/location-info";
import { Suspense } from "react";

export default async function TemperaturePage({
  params,
  searchParams,
}: {
  params: { location: string };
  searchParams: { latitude: string; longitude: string };
}) {
  const { latitude, longitude } = await searchParams;
  const { location } = await params;
  const resolvedLatLon = await getResolvedLatLon(location, latitude, longitude);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TemperatureComponent
        lat={resolvedLatLon?.lat}
        lon={resolvedLatLon?.lon}
      />
    </Suspense>
  );
}
