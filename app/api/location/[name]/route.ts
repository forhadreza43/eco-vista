import { NextRequest, NextResponse,  } from "next/server";
import { getLocationByName } from "../location-util";

export function GET(request: NextRequest, { params }: { params: { name: string } }) {
    const { name } = params;
    const location = getLocationByName(name);
    if (!location) return NextResponse.json({ error: "Location not found" }, { status: 404 });
    return NextResponse.json(location);
}