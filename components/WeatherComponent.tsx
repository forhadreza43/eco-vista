import { getWeatherData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";
import rainIcon from "@/public/assets/icons/icon_rain.png";

export default async function WeatherComponent({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) {
  const weatherData = await getWeatherData(lat, lon);
    console.log("Weather Data:", weatherData);

  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image className="max-w-20" src={rainIcon} alt="rain icon" />
        <h3 className="feature-title">{weatherData?.main}</h3>
        <span className="feature-name">{weatherData?.description}</span>
      </div>
    </Card>
  );
}
