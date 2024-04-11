import { useQuery } from "@tanstack/react-query";
import { getTimezone } from "../fetchers/getTimezone";

export function useTimezone(latitude, longitude) {
  const {
    data: timezoneValue,
    isTimezoneLoading,
    error,
  } = useQuery({
    queryKey: ["timezone", latitude, longitude],
    queryFn: () => getTimezone(latitude, longitude),
  });

  return { timezoneValue, isTimezoneLoading, error };
}
