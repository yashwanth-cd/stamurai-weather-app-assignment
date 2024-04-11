/* eslint-disable react/prop-types */
import {
  FaTemperatureArrowDown,
  FaTemperatureArrowUp,
  FaTemperatureLow,
} from "react-icons/fa6";
import SunAndVisibility from "./SunAndVisibility";
import Weather from "./Weather";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { kelvinToCelcius } from "../services/helpers";
import TempType from "./TempType";

export default function TemperatureDetails({ cityDetails }) {
  const {
    humidity,
    pressure,
    temp,
    temp_max: tempMax,
    temp_min: tempMin,
  } = cityDetails.main;

  return (
    <Weather>
      <Weather.Body>
        <h1 className="mb-4  text-indigo-600 rounded-xl bg-indigo-200 inline-block px-4">
          Tempertature
        </h1>
        <div className="block 2xl:justify-evenly sm:block md:block 2xl:flex px-4 space-y-3 2xl:mt-16 ">
          <TempType>
            <FaTemperatureLow className="2xl:mb-4" />
            <span className="text-[25px] text-slate-700 font-semibold">
              {kelvinToCelcius(temp).value.toFixed(2)} &#x2103;
            </span>
          </TempType>
          <TempType>
            <FaTemperatureArrowDown className="2xl:mb-4" />
            <span className="text-[25px] text-slate-700 font-semibold">
              {kelvinToCelcius(tempMin).value.toFixed(2)} &#x2103;
            </span>
          </TempType>
          <TempType>
            <FaTemperatureArrowUp className="2xl:mb-4" />
            <span className="text-[25px] text-slate-700 font-semibold">
              {kelvinToCelcius(tempMax).value.toFixed(2)} &#x2103;
            </span>
          </TempType>
          <TempType>
            <WiHumidity className="2xl:mb-4" />
            <span className="text-[25px] text-slate-700 font-semibold">
              {humidity} %
            </span>
          </TempType>
          <TempType>
            <FiWind className="2xl:mb-4" />
            <span className="text-[25px] text-slate-700 font-semibold">
              {pressure} hPa
            </span>
          </TempType>
        </div>
      </Weather.Body>
      <SunAndVisibility cityDetails={cityDetails} />
    </Weather>
  );
}
