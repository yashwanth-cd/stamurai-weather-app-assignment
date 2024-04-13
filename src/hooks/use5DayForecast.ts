import { useQuery } from "@tanstack/react-query";
import { get5DayForecast } from "../fetchers/get5DayForcast";

export function use5DayForecast(lat: number, lon: number) {
  const {
    data: forecast,
    isLoading: isForecastLoading,
    error,
  } = useQuery({
    queryKey: ["5dayforecast", lat, lon],
    queryFn: () => get5DayForecast(lat, lon),
  });

  return { forecast, isForecastLoading, error };
}
