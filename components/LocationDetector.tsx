"use client";

import { currentLocationContext } from "@/app/context/current-location";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function LocationDetector() {
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const { currentLocation } = useContext(currentLocationContext);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    if (currentLocation) {
      params.set("latitude", currentLocation.latitude.toString());
      params.set("longitude", currentLocation.longitude.toString());
      setLoading(false);
      router.push(`/current?${params.toString()}`);
    }
  }, [currentLocation, pathName, router, searchParams]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            src="/network.gif"
            alt="Loading..."
            height={500}
            width={500}
            className="border rounded-md my-4"
            unoptimized
          />
          <p className="text-4xl text-center">Detecting Location...</p>
        </>
      )}
    </div>
  );
}
