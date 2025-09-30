"use client";
import React, { useContext, useEffect, useState } from "react";
import linkIcon from "@/public/assets/icons/link.svg";
import Image from "next/image";
import { getLocationLatLonList } from "@/lib/location-info";
import { Location } from "@/utils/defination";
import Link from "next/link";
import { currentLocationContext } from "@/app/context/current-location";

export default function LocationSwitcher() {
  const [open, setOpen] = useState<boolean>(false);
  const [locations, setLocations] = useState([]);
  const { currentLocation } = useContext(currentLocationContext);
  console.log("Current Location:", currentLocation);
  useEffect(() => {
    async function fetchLocations() {
      const locationData = await getLocationLatLonList();
      setLocations(locationData);
    }
    fetchLocations();
  }, []);
  //   console.log(locations);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <Image className="size-9" src={linkIcon} alt="link icon" />
      </button>
      {open && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            <li>
              <Link
                href={`/current?latitude=${currentLocation?.latitude}&longitude=${currentLocation?.longitude}`}
              >
                Current
              </Link>
            </li>
            {locations.length > 0 &&
              locations.map((loc: Location) => (
                <li key={loc.location}>
                  <Link
                    href={`/${loc.location}?latitude=${loc.latitude}&longitude=${loc.longitude}`}
                  >
                    {loc.location}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
