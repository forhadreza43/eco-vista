import AQIcomponent from "@/components/AQIcomponent";
import { getResolvedLatLon } from "@/lib/location-info";
import { Suspense } from "react";
export default async function AqiPage({
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
      <AQIcomponent lat={resolvedLatLon?.lat} lon={resolvedLatLon?.lon} />
    </Suspense>
  );
}
