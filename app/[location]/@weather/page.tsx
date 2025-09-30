import { Suspense } from "react";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLon } from "@/lib/location-info";
export default async function WeatherPage({
  params,
  searchParams,
}: {
  params: { location: string };
  searchParams: { latitude: string; longitude: string };
}) {
  const { latitude, longitude } = await searchParams;
  const { location } = await params;
  const resolvedLatLon = await getResolvedLatLon(location, latitude, longitude);
  // console.log("Weather:",resolvedLatLon);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeatherComponent lat={resolvedLatLon?.lat} lon={resolvedLatLon?.lon} />
    </Suspense>
  );
}
