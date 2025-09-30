import React from "react";
import Card from "../Card";

export default function CardSkeleton() {
  return (
    <Card>
      {/* Feature name skeleton */}
      <div className="h-4 bg-gray-600 rounded animate-pulse w-32 mb-4"></div>

      <div className="feature-main">
        {/* Icon skeleton */}
        <div className="w-20 h-20 bg-gray-600 rounded-full animate-pulse mb-2"></div>

        {/* Title skeleton */}
        <div className="h-8 bg-gray-600 rounded animate-pulse w-24 mb-2"></div>

        {/* Subtitle skeleton */}
        <div className="h-4 bg-gray-600 rounded animate-pulse w-28"></div>
      </div>
    </Card>
  );
}
