import React from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { getSunTime } from "../services/helpers";
import TempType from "./TempType";
import WeatherComponent from "./Weather"; // Renaming Weather to WeatherComponent
import { RiTimerLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import { useTimezone } from "../hooks/useTimezone";

interface Coord {
  lat: number;
  lon: number;
}

interface Sys {
  sunrise: number;
  sunset: number;
}

interface CityDetails {
  coord: Coord;
  sys: Sys;
  timezone: string;
  visibility: number;
}

export default function WindDetails({
  cityDetails,
}: {
  cityDetails: CityDetails;
}) {
  const { lat, lon } = cityDetails.coord;
  const { sunrise, sunset } = cityDetails.sys;
  const { timezone, visibility } = cityDetails;
  const { timezoneValue, isTimezoneLoading } = useTimezone(lat, lon);

  const sunriseTime = getSunTime(sunrise);
  const sunsetTime = getSunTime(sunset);

  if (isTimezoneLoading) return null;

  return (
    <div>
      <WeatherComponent type="flex">
        {" "}
        {/* Passing type prop */}
        <WeatherComponent.Body>
          {" "}
          {/* Using renamed WeatherComponent */}
          <h1 className="mb-4  text-indigo-600 rounded-xl bg-indigo-200 inline-block px-4">
            Sun and Visibility
          </h1>
          <div className="block 2xl:justify-evenly sm:block md:block 2xl:flex px-4 space-y-6 2xl:mt-16 ">
            <TempType>
              <FiSunrise />
              <span className="text-[25px] text-slate-700 font-semibold">
                {sunriseTime} am
              </span>
            </TempType>
            <TempType>
              <FiSunset />
              <span className="text-[25px] text-slate-700 font-semibold">
                {sunsetTime} pm
              </span>
            </TempType>
            <TempType>
              <RiTimerLine />
              <span className="text-[25px] text-slate-700 font-semibold">
                {timezoneValue}
              </span>
            </TempType>
            <TempType>
              <FaRegEye />
              <span className="text-[25px] text-slate-700 font-semibold">
                {visibility / 1000} Km
              </span>
            </TempType>
          </div>
        </WeatherComponent.Body>{" "}
        {/* Using renamed WeatherComponent */}
      </WeatherComponent>{" "}
      {/* Using renamed WeatherComponent */}
    </div>
  );
}
