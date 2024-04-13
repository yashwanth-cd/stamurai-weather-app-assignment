/* eslint-disable react/prop-types */
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import {
  formatDay,
  getCountryName,
  kelvinToCelcius,
} from "../services/helpers";
import { getIcon } from "../fetchers/getIcon";

interface CityDetails {
  weather: { icon: string; description: string }[];
  main: { temp: number };
  dt: number;
  timezone: number;
  name: string;
  sys: { country: string };
}

interface CurrentWeatherDetailsProps {
  cityDetails: CityDetails | null;
}

const CurrentWeatherDetails: React.FC<CurrentWeatherDetailsProps> = ({
  cityDetails,
}) => {
  const icon = cityDetails?.weather?.[0]?.icon;
  const description = cityDetails?.weather?.[0]?.description;
  const iconUrl = getIcon(icon);
  const currentTemp =
    kelvinToCelcius(cityDetails?.main?.temp)?.value.toFixed(0) || "";
  const currentDate =
    formatDay(
      new Date(
        (cityDetails?.dt || 0) * 1000 + (cityDetails?.timezone || 0) * 1000,
      ),
    ) || "";

  const countryName = getCountryName(cityDetails?.sys.country) || "";
  const currentLocation = `${cityDetails?.name}, ${countryName}`;

  return (
    <div>
      <h1 className="mb-4  text-indigo-600 rounded-xl bg-indigo-200 inline-block px-4">
        Now
      </h1>
      <div className="flex justify-between items-center">
        <span className="font-bold text-6xl mr-20">{currentTemp}&#8451;</span>
        <img
          src={iconUrl}
          alt="weather icon"
          className="bg-indigo-200 rounded-2xl w-32"
        />
      </div>
      <span className="text-xl">{description}</span>
      <div className=" border-t-2 w-full border-slate-400">
        <span className="flex items-center gap-4">
          <FiCalendar className="my-5" />
          <p className="text-xl font-semibold">{currentDate}</p>
        </span>
        <span className="flex items-center gap-4">
          <MdOutlineLocationOn />
          <p className="text-xl font-semibold">{currentLocation}</p>
        </span>
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;
