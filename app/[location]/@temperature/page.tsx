import Image from "next/image";
import temperatureIcon from "@/public/assets/icons/icon_tempareture.png";
export default function TemperaturePage() {
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Current Temperature</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src={temperatureIcon}
            alt="temperature icon"
          />
          <h3 className="feature-title">246.43°C</h3>

          <span className="feature-name">Feels Like 244°C</span>
        </div>
      </div>
    </div>
  );
}
