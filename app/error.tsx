"use client";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 font-sans">
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ef4444"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginBottom: "1rem" }}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12" y2="16" />
      </svg>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        Location Not Found
      </h1>
      <p style={{ marginBottom: "1.5rem", color: "#64748b" }}>
        We couldn&apos;t process your request.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-red-500 text-white rounded-md font-bold hover:bg-red-600 transition"
      >
        Go to Current Location
      </Link>
    </div>
  );
};

export default Error;
