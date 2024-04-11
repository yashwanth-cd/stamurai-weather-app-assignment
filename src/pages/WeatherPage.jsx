import { useSearchParams } from "react-router-dom";
import { useCity } from "../hooks/useCity";
import useRedirect from "../hooks/useRedirect";

import Loader from "../loaders/Loader";
import Navbar from "../components/Navbar";
import WeatherHeader from "../components/WeatherHeader";
import WeatherDetails from "../components/WeatherDetails";
import TemperatureDetails from "../components/TemperatureDetails";
import ErrorPage from "../components/ErrorPage";

export default function WeatherPage() {
  const navigate = useRedirect();
  const [searchParams] = useSearchParams();
  const redirectedCity = searchParams.get("city");
  const { cityDetails, isCityLoading } = useCity(redirectedCity);

  if (isCityLoading) return <Loader />;
  console.log(cityDetails);

  if (cityDetails?.cod === "404") {
    return <ErrorPage message={cityDetails.message} />;
  }

  return (
    <div>
      <Navbar />

      <button
        className="border-slate-600 bg-indigo-600 rounded-lg py-2 text-indigo-50 px-3 mt-8 ml-12 hover:bg-blue-400 hover:text-slate-800 hover:transition delay-120 ease-out"
        onClick={() => navigate(-1)}
      >
        &larr; Back
      </button>
      <div className="mx-10 mt-6">
        <WeatherHeader city={redirectedCity} cityDetails={cityDetails} />
        <div className="lg:flex sm:block overflow-x-hidden">
          <WeatherDetails cityDetails={cityDetails} />
          <TemperatureDetails cityDetails={cityDetails} />
        </div>
      </div>
    </div>
  );
}
