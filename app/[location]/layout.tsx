import type { Metadata } from "next";
import "../globals.css";
import bgImage from "@/public/assets/images/background.png";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Eco Vista",
  description: "A weather dashboard",
};

export default function Layout({
  children,
  aqi,
  temperature,
  weather,
  wind,
}: {
  children: React.ReactNode;
  aqi: React.ReactNode;
  temperature: React.ReactNode;
  weather: React.ReactNode;
  wind: React.ReactNode;
}) {
  return (
    <div className={`wrapper`}>
      <Image src={bgImage} alt="Background" className="bg-img" priority />
      <div className="overlay"></div>

      <main className="!z-50 w-full mx-auto">
        <div className="container mx-auto *:px-4">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {aqi}
            {temperature}
            {weather}
            {wind}
          </div>
        </div>
      </main>
    </div>
  );
}
