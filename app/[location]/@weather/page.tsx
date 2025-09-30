import { Suspense } from "react";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLon } from "@/lib/location-info";
import NoLocationFound from "@/components/NoLocationFound";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
export default async function WeatherPage({
  params,
  searchParams,
}: {
  params: Promise<{ location: string }>;
  searchParams: Promise<{ latitude: string; longitude: string }>;
}) {
  const { latitude, longitude } = await searchParams;
  const { location } = await params;
  const resolvedLatLon = await getResolvedLatLon(location, latitude, longitude);
  // console.log("Weather:",resolvedLatLon);
  if (resolvedLatLon?.lat && resolvedLatLon?.lon) {
    return (
      <Suspense fallback={<CardSkeleton />}>
        <WeatherComponent lat={resolvedLatLon?.lat} lon={resolvedLatLon?.lon} />
      </Suspense>
    );
  } else return <NoLocationFound />;
}
