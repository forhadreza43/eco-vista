import AQIcomponent from "@/components/AQIcomponent";
import AQISkeleton from "@/components/skeleton/AQISkeleton";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolvedLatLon } from "@/lib/location-info";
import { Suspense } from "react";
export default async function AqiPage({
  params,
  searchParams,
}: {
  params: Promise<{ location: string }>;
  searchParams: Promise<{ latitude: string; longitude: string }>;
}) {
  const { latitude, longitude } = await searchParams;
  const { location } = await params;
  const resolvedLatLon = await getResolvedLatLon(location, latitude, longitude);
  // console.log(resolvedLatLon);
  if (resolvedLatLon?.lat && resolvedLatLon?.lon) {
    return (
      <Suspense fallback={<AQISkeleton />}>
        <AQIcomponent lat={resolvedLatLon?.lat} lon={resolvedLatLon?.lon} />
      </Suspense>
    );
  } else return <NoLocationFound />;
}
