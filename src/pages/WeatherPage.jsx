import { useSearchParams } from "react-router-dom";
import { useCity } from "../hooks/useCity";

import Loader from "../loaders/Loader";
import Navbar from "../components/Navbar";
import WeatherHeader from "../components/WeatherHeader";
import WeatherDetails from "../components/WeatherDetails";
import TemperatureDetails from "../components/TemperatureDetails";
import ErrorPage from "../components/ErrorPage";
import BackButton from "../components/BackButton";

export default function WeatherPage() {
  const [searchParams] = useSearchParams();
  const redirectedCity = searchParams.get("city");
  const { cityDetails, isCityLoading } = useCity(redirectedCity);

  if (isCityLoading) return <Loader />;

  if (cityDetails?.cod === "404") {
    return (
      <div>
        <Navbar />
        <BackButton />
        <ErrorPage message={cityDetails.message} />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <BackButton />
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
