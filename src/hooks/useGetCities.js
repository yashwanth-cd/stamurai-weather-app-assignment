import { useQuery } from "@tanstack/react-query";
import { getCities } from "../fetchers/getCities";
import { toast } from "react-hot-toast";

export function useGetCities() {
  const {
    data: cities,
    isLoading: isCitiesLoading,
    error,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
    onSuccess: () => {
      toast.success("Succesfully fetched cities");
    },
    onError: () => {
      toast.error("Fetching cities failed");
    },
  });

  return { cities, isCitiesLoading, error };
}
