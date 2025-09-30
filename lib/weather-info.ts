export const getWeatherData = async (lat: string, lon: string) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`,
      { next: { revalidate: 600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch weather data");
    const data = await res.json();
    return data?.weather[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return null;
  }
};

export const getTemperatureData = async (lat: string, lon: string) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`,
      { next: { revalidate: 600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch temperature data");
    const data = await res.json();
    return data?.main;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return null;
  }
};

export const getWindData = async (lat: string, lon: string) => {
  try {
    // console.log("Wind:", lat, lon);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`,
      { next: { revalidate: 600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch wind data");
    const data = await res.json();
    return data?.wind;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return null;
  }
};

export const getAqiData = async (lat: string, lon: string) => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`,
      { next: { revalidate: 600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch AQI data");
    const data = await res.json();
    return data?.list[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return null;
  }
};
