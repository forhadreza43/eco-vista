import { NextResponse } from "next/server";
import { getLocation } from "./location-util";

export function GET() {
    const locations = getLocation();
    return NextResponse.json(locations);
}