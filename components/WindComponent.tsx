import React from "react";
import Card from "./Card";
import { getWindData } from "@/lib/weather-info";
import Image from "next/image";
import windIcon from "@/public/assets/icons/icon_wind.png";
export default async function WindComponent({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) {
  const windData = await getWindData(lat, lon);
  console.log("Wind Data:", windData);
  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image className="max-w-20" src={windIcon} alt="wind icon" />
        <h3 className="feature-title">{windData?.speed} meter/sec</h3>
        <span className="feature-name">{windData?.deg} degrees</span>
      </div>
    </Card>
  );
}
