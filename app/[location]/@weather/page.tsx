import { Suspense } from "react";
import WeatherComponent from "@/components/WeatherComponent";
export default async function WeatherPage({
  searchParams,
}: {
  searchParams: { latitude: string; longitude: string };
}) {
  const { latitude, longitude } = await searchParams;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeatherComponent lat={latitude} lon={longitude} />
    </Suspense>
  );
}
