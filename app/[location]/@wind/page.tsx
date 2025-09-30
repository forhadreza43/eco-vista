import { Suspense } from "react";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLon } from "@/lib/location-info";
export default async function WindPage({
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
      <WindComponent lat={resolvedLatLon?.lat} lon={resolvedLatLon?.lon} />
    </Suspense>
  );
}
