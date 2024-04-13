import { useQuery } from "@tanstack/react-query";
import { getCity } from "../fetchers/getCity";

export function useCity(city: string) {
  const {
    data: cityDetails,
    isLoading: isCityLoading,
    error,
  } = useQuery({
    queryKey: ["city", city],
    queryFn: () => getCity(city),
  });

  return { cityDetails, isCityLoading, error };
}
