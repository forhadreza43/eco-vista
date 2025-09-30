import { NextResponse } from "next/server";
import { getLocation } from "./location-util";

export async function GET() {
    const locations = getLocation();
    return NextResponse.json(locations);
}