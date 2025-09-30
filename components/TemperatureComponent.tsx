import React from "react";
import Card from "./Card";
import { getTemperatureData } from "@/lib/weather-info";
import Image from "next/image";
import temperatureIcon from "@/public/assets/icons/icon_tempareture.png";
export default async function TemperatureComponent({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) {
  const tempdata = await getTemperatureData(lat, lon);
  // console.log(tempdata);
  return (
    <Card>
      <h6 className="feature-name">Current Temperature</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src={temperatureIcon}
          alt="temperature icon"
        />
        <h3 className="feature-title">{tempdata?.temp}°C</h3>

        <span className="feature-name">
          Feels Like {tempdata?.feels_like}°C
        </span>
      </div>
    </Card>
  );
}
