import { useQuery } from "@tanstack/react-query";
import { getCityName } from "../fetchers/getCityName";

export function useCityName() {
  const { data: cityName, isLoading: isCityNameLoading } = useQuery({
    queryKey: ["coords"],
    queryFn: () => getCityName(),
  });

  return { cityName, isCityNameLoading };
}
