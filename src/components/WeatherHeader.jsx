/* eslint-disable react/prop-types */
import { convertToFlag } from "../services/helpers";

export default function WeatherHeader({ city, cityDetails }) {
  const countryFlag = convertToFlag(cityDetails?.sys?.country || "");
  return (
    <h1 className="font-semibold sm:text-[20px] text-slate-600 md:text-[26px] lg:text-[32px] flex items-center gap-4">
      Weather forecast of <b>{city}</b>
      <span style={{ fontSize: "3rem" }}>{countryFlag}</span>
    </h1>
  );
}
