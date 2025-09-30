import { Suspense } from "react";
import WindComponent from "@/components/WindComponent";
export default async function WindPage({
  searchParams,
}: {
  searchParams: { latitude: string; longitude: string };
}) {
  const { latitude, longitude } = await searchParams;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WindComponent lat={latitude} lon={longitude} />
    </Suspense>
  );
}
