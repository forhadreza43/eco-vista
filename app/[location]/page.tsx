import LocationInfo from "@/components/LocationInfo";
import LocationSkeleton from "@/components/skeleton/LocationSkeleton";
import { getResolvedLatLon } from "@/lib/location-info";
import { Suspense } from "react";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ location: string }>;
  searchParams: Promise<{ latitude: string; longitude: string }>;
}) {
  const { latitude, longitude } = await searchParams;
  const { location } = await params;
  const resolvedLatLon = await getResolvedLatLon(location, latitude, longitude);
  // console.log("Wind Page:", resolvedLatLon);
  return (
    <Suspense fallback={<LocationSkeleton />}>
      {/* <h1>Location Information</h1> */}
      <LocationInfo
        latitude={resolvedLatLon?.lat}
        longitude={resolvedLatLon?.lon}
      />
    </Suspense>
  );
}
