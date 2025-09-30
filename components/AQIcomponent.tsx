import { getAqiData } from "@/lib/weather-info";
import Image from "next/image";
import React from "react";
import airIcon from "@/public/assets/icons/icon_air_element.png";
import Card from "./Card";

export default async function AQIcomponent({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) {
  const aqidata = await getAqiData(lat, lon);
//   console.log(aqidata);
const getAQIRating = (aqi: number) => {
  switch (aqi) {
    case 1:
      return "Good";
    case 2:
      return "Fair";
    case 3:
      return "Moderate";
    case 4:
      return "Poor";
    case 5:
      return "Very Poor";
    default:
      return "unknown";
  }
};
  return (
    <Card>
      <h6 className="feature-name">Air Pollution & Quality</h6>

      {/* <!-- info items --> */}
      <div className="mt-3 space-y-2 lg:space-y-3">
        {/* <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image className="max-w-[18px]" src={airIcon} alt="icon" />
            Air Quality Index
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {getAQIRating(aqidata?.main?.aqi)}
          </span>
        </div>
        {/* <!-- item ends -->
                  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image className="max-w-[18px]" src={airIcon} alt="icon" />
            Carbon Monoxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {aqidata?.components?.co} µg/m³
          </span>
        </div>
        {/* <!-- item ends -->
                  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image className="max-w-[18px]" src={airIcon} alt="icon" />
            Nitric Oxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {aqidata?.components?.no} ppm
          </span>
        </div>
        {/* <!-- item ends -->
                  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image className="max-w-[18px]" src={airIcon} alt="icon" />
            Nitrogen Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {aqidata?.components?.no2} ppm
          </span>
        </div>
        {/* <!-- item ends -->
                  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image className="max-w-[18px]" src={airIcon} alt="icon" />
            Ozone
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {aqidata?.components?.o3} µg/m³
          </span>
        </div>
        {/* <!-- item ends -->
                  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image className="max-w-[18px]" src={airIcon} alt="icon" />
            Sulfur Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {aqidata?.components?.so2} ppm
          </span>
        </div>
        {/* <!-- item ends -->
                  <!-- item --> */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image className="max-w-[18px]" src={airIcon} alt="icon" />
            PM2.5
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {aqidata?.components?.pm2_5} µg/m³
          </span>
        </div>
        {/* <!-- item ends --> */}
      </div>
      {/* <!-- info items ends --> */}
    </Card>
  );
}
