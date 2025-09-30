import TemperatureComponent from "@/components/TemperatureComponent";
import { Suspense } from "react";

export default async function TemperaturePage({
  searchParams,
}: {
  searchParams: { latitude: string; longitude: string };
}) {
  const { latitude, longitude } = await searchParams;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TemperatureComponent lat={latitude} lon={longitude} />
    </Suspense>
  );
}
