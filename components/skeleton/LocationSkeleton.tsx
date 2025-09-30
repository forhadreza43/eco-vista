import React from "react";

export default function LocationSkeleton() {
  return (
    <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
      <div>
        <div className="mb-2 flex items-center gap-2">
          {/* Location title skeleton */}
          <div className="h-8 bg-gray-600 rounded animate-pulse w-32 lg:h-10 lg:w-40 2xl:h-12 2xl:w-48"></div>
          {/* Location switcher button skeleton */}
          <div className="w-9 h-9 bg-gray-600 rounded animate-pulse"></div>
        </div>

        {/* Country and city skeleton */}
        <div className="h-5 bg-gray-600 rounded animate-pulse w-48 lg:h-6 lg:w-56 mb-2"></div>

        {/* Date and time skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-3 bg-gray-600 rounded animate-pulse w-16 lg:h-4 lg:w-20"></div>
          <div className="h-3 bg-gray-600 rounded animate-pulse w-20 lg:h-4 lg:w-24"></div>
        </div>
      </div>
    </div>
  );
}
