import React from "react";
import Card from "../Card";

export default function AQISkeleton() {
  return (
    <Card>
      {/* Feature name skeleton */}
      <div className="h-4 bg-gray-600 rounded animate-pulse w-40 mb-3"></div>

      {/* Info items skeleton */}
      <div className="mt-3 space-y-2 lg:space-y-3">
        {/* Generate 7 skeleton items for AQI data */}
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {/* Icon skeleton */}
              <div className="w-[18px] h-[18px] bg-gray-600 rounded animate-pulse"></div>
              {/* Label skeleton */}
              <div className="h-4 bg-gray-600 rounded animate-pulse w-24 lg:w-28"></div>
            </div>
            {/* Value skeleton */}
            <div className="h-4 bg-gray-600 rounded animate-pulse w-16"></div>
          </div>
        ))}
      </div>
    </Card>
  );
}
