import { useSearchParams } from "react-router-dom";
import { useCity } from "../hooks/useCity";
import Table from "../components/Table";

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
      <Table>
        <Table.Footer>
          <div>
            Developed with <strong></strong> by <b>Yashwanth Sai</b>
          </div>
          <div className="flex items-center gap-2">
            <img style={{ height: "45px" }} src="stamurai.png" alt="" />
            <b>Stamurai</b> Assignment
          </div>
        </Table.Footer>
      </Table>
    </div>
  );
}
