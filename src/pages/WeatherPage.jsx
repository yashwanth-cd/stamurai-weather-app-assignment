import { useSearchParams } from "react-router-dom";
import { useCity } from "../hooks/useCity";
import useRedirect from "../hooks/useRedirect";

import Loader from "../loaders/Loader";
import Navbar from "../components/Navbar";
import WeatherHeader from "../components/WeatherHeader";
import { getIcon } from "../fetchers/getIcon";

export default function WeatherPage() {
  const navigate = useRedirect();
  const [searchParams] = useSearchParams();
  const redirectedCity = searchParams.get("city");
  const { cityDetails, isCityLoading } = useCity(redirectedCity);
  const iconUrl = getIcon(cityDetails?.weather?.at(0).icon);

  if (isCityLoading) return <Loader />;

  return (
    <div>
      <Navbar />
      <WeatherHeader city={redirectedCity} />

      <button
        className="border-slate-600 bg-indigo-600 rounded-lg py-2 text-indigo-50 px-3"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <img src={iconUrl} alt="weather icon" />
    </div>
  );
}
