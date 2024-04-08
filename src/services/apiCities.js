import { useQuery } from '@tanstack/react-query';
import { getCities } from '../fetchers/getCities';

export function useGetCities() {
  const { data: cities, isLoading: isCitiesLoading, error } = useQuery({
    queryKey: ['cities'],
    queryFn: getCities,
  });

  return { cities, isCitiesLoading, error };
}
