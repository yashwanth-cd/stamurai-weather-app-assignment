const API_KEY: string = "a24d0389c1a23b6ef8e229a01263f13c";

interface ForecastData {
  // Define the structure of your forecast data here
}

export async function get5DayForecast(
  lat: number,
  lon: number,
): Promise<ForecastData> {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    );
    const data: ForecastData = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
