import Image from "next/image";
import rainIcon from "@/public/assets/icons/icon_rain.png";
export default function WeatherPage() {
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Current Weather</h6>
        <div className="feature-main">
          <Image className="max-w-20" src={rainIcon} alt="rain icon" />
          <h3 className="feature-title">Rain</h3>
          <span className="feature-name">Moderate Rain</span>
        </div>
      </div>
    </div>
  );
}
