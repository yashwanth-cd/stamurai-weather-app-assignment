import { toast } from "react-hot-toast";
const API_KEY = "a24d0389c1a23b6ef8e229a01263f13c";

export async function getCityName() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          try {
            const cityName = await fetchCityName(lat, lon);
            toast.success("Successfully Fetched current location");
            resolve(cityName);
          } catch (error) {
            reject(error);
          }
        },
        (error) => {
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

async function fetchCityName(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  );
  const data = await res.json();
  return data.name;
}
