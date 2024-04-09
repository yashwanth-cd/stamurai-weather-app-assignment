import { useSearchParams } from "react-router-dom";
import { useCity } from "../hooks/useCity";

import useRedirect from "../hooks/useRedirect";
import Loader from "../loaders/Loader";

export default function WeatherPage() {
  const navigate = useRedirect();
  const [searchParams] = useSearchParams();
  const redirectedCity = searchParams.get("city");

  const { cityDetails, isCityLoading, error } = useCity(redirectedCity);
  console.log(cityDetails);

  if (isCityLoading) return <Loader />;
  if (!cityDetails || error) return;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
