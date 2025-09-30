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
