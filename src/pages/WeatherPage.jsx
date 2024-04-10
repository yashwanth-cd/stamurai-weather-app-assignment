import { useSearchParams } from "react-router-dom";
import { useCity } from "../hooks/useCity";
import useRedirect from "../hooks/useRedirect";

import Loader from "../loaders/Loader";
import Navbar from "../components/Navbar";
import WeatherHeader from "../components/WeatherHeader";
import WeatherDetails from "../components/WeatherDetails";
import TemperatureDetails from "../components/TemperatureDetails";

export default function WeatherPage() {
  const navigate = useRedirect();
  const [searchParams] = useSearchParams();
  const redirectedCity = searchParams.get("city");
  const { cityDetails, isCityLoading } = useCity(redirectedCity);
  console.log(cityDetails);

  if (isCityLoading) return <Loader />;

  return (
    <div>
      <Navbar />
      <div className="mx-10 mt-10">
        <WeatherHeader city={redirectedCity} cityDetails={cityDetails} />
        <div className="lg:flex sm:block overflow-x-hidden">
          <WeatherDetails
            cityDetails={cityDetails}
            isCityLoading={isCityLoading}
          />
          <TemperatureDetails />
        </div>

        <button
          className="border-slate-600 bg-indigo-600 rounded-lg py-2 text-indigo-50 px-3"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
}
