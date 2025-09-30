import LocationInfo from "@/components/LocationInfo";
import { getResolvedLatLon } from "@/lib/location-info";
import { Suspense } from "react";

export default async function Page({
  params,
  searchParams,
}: {
  params: { location: string };
  searchParams: { latitude: string; longitude: string };
}) {
  const { latitude, longitude } = await searchParams;
  const { location } = await params;
  const resolvedLatLon = await getResolvedLatLon(location, latitude, longitude);
  // console.log("Wind Page:", resolvedLatLon);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <h1>Location Information</h1> */}
      <LocationInfo
        latitude={resolvedLatLon?.lat}
        longitude={resolvedLatLon?.lon}
      />
    </Suspense>
  );
}
