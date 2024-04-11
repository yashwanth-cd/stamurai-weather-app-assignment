/* eslint-disable react/prop-types */
import { FiSunrise, FiSunset } from "react-icons/fi";
import { getSunTime } from "../services/helpers";
import TempType from "./TempType";
import Weather from "./Weather";
import { RiTimerLine } from "react-icons/ri";
import { useGetCities } from "../hooks/useGetCities";
import { FaRegEye } from "react-icons/fa6";

export default function WindDetails({ cityDetails }) {
  const { sunrise, sunset } = cityDetails.sys;
  const { timezone, visibility } = cityDetails;
  const currTimezone = "";

  const sunriseTime = getSunTime(sunrise, timezone);
  const sunsetTime = getSunTime(sunset, timezone);

  return (
    <div>
      <Weather>
        <Weather.Body>
          <h1 className="mb-4  text-indigo-600 rounded-xl bg-indigo-200 inline-block px-4">
            Sun and Visibility
          </h1>
          <div className="block 2xl:justify-evenly sm:block md:block 2xl:flex px-4 space-y-3 2xl:mt-16 ">
            <TempType>
              <FiSunrise />
              <span className="text-[25px] text-slate-700 font-semibold">
                {sunriseTime} am
              </span>
            </TempType>
            <TempType>
              <FiSunset />
              <span className="text-[25px] text-slate-700 font-semibold">
                {sunsetTime} am
              </span>
            </TempType>
            <TempType>
              <RiTimerLine />
              <span className="text-[25px] text-slate-700 font-semibold">
                {currTimezone}
              </span>
            </TempType>
            <TempType>
              <FaRegEye />
              <span className="text-[25px] text-slate-700 font-semibold">
                {visibility / 1000} Km
              </span>
            </TempType>
          </div>
        </Weather.Body>
      </Weather>
    </div>
  );
}
