export const getLocationData = async (lat: string, lon: string) => {
  try {
    const res = await fetch(
      `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=${process.env.BIGDATA_API_KEY}`
    );
    if (!res.ok) throw new Error("Failed to fetch location data");
    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return null;
  }
};

export const getLocationLatLonList = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/location`);
    if (!res.ok) throw new Error("Failed to fetch location list");
    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return null;
  }
};

export const getLocationLatLon = async (locationName: string) => {
  try {
    // console.log("From util:", locationName);
    const res = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    if (!res.ok) throw new Error("Failed to fetch location");
    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return null;
  }
};

export const getResolvedLatLon = async (
  location: string,
  lat: string,
  lon: string
) => {
  if (lat && lon) return { lat, lon };
  if (location) {
    const resolved = await getLocationLatLon(location);
    if (resolved)
      return {
        lat: resolved.latitude.toString(),
        lon: resolved.longitude.toString(),
      };
  }
};
