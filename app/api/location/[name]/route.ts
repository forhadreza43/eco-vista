import { NextRequest, NextResponse } from "next/server";
import { getLocationByName } from "../location-util";

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  const { name } = await params;
  const location = await getLocationByName(name);
  if (!location)
    return NextResponse.json({ error: "Location not found" }, { status: 404 });
  return NextResponse.json(location);
}
