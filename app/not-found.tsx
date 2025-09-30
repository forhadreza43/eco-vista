import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="mb-6 text-center">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          style={{
            padding: "0.75rem 1.5rem",
            background: "#ef4444",
            color: "#fff",
            borderRadius: "0.375rem",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Go Current Location
        </Link>
      </div>
    );
}