import { toast } from "react-hot-toast";

const API_KEY = "a24d0389c1a23b6ef8e229a01263f13c";

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export async function getCityName(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position: Position) => {
          const { latitude, longitude } = position.coords;
          try {
            const cityName = await fetchCityName(latitude, longitude);
            resolve(cityName);
          } catch (error) {
            reject(error);
          }
        },
        (error: GeolocationPositionError) => {
          toast.error(
            "Error getting your location, please turn on your location",
          );
          reject(error);
        },
      );
    } else {
      toast.error("Your browser doesn't support geolocation");
      reject(new Error("Geolocation is not supported by your browser"));
    }
  });
}

async function fetchCityName(lat: number, lon: number): Promise<string> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  );
  const data = await res.json();
  return data.name;
}
