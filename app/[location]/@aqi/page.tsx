import AQIcomponent from "@/components/AQIcomponent";
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AQIcomponent lat={latitude} lon={longitude} />
    </Suspense>
  );
}
