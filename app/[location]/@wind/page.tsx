import Image from "next/image";
import windIcon from "@/public/assets/icons/icon_wind.png";
export default function WindPage() {
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Wind</h6>
        <div className="feature-main">
          <Image
            className="max-w-20"
            src={windIcon}
            alt="wind icon"
          />
          <h3 className="feature-title">Wind</h3>
          <span className="feature-name">Moderate Wind</span>
        </div>
      </div>
    </div>
  );
}
