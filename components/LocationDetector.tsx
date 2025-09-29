"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocationDetector() {
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        params.set("latitude", latitude.toString());
        params.set("longitude", longitude.toString());
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathName, router, searchParams]);

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
          />
          <p className="text-4xl text-center">Detecting Location...</p>
        </>
      )}
    </div>
  );
}
