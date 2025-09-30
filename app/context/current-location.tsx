"use client";
import { createContext, useEffect, useState } from "react";

export const currentLocationContext = createContext({
  currentLocation: null as { latitude: number; longitude: number } | null,
});

export default function CurrentLocation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      });
    }
  }, []);

  return (
    <currentLocationContext.Provider value={{ currentLocation }}>
      {children}
    </currentLocationContext.Provider>
  );
}
