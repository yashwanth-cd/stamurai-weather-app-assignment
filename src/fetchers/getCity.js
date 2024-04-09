const API_KEY = "a24d0389c1a23b6ef8e229a01263f13c";

export async function getCity(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("Fetching city details failed");
  }
}
