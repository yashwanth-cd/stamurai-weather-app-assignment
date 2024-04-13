import React from "react";
import { convertDateFormat, kelvinToCelcius } from "../services/helpers";

interface NextDaysProps {
  filteredDates: { date: string; temp: number }[];
}

const NextDays: React.FC<NextDaysProps> = ({ filteredDates }) => {
  return (
    <>
      <div className="flex rounded-xl bg-indigo-200 px-4 justify-center py-1">
        <span className="text-[20px] text-slate-700 font-semibold">
          {convertDateFormat(filteredDates[0].date)} &rarr;{" "}
          {kelvinToCelcius(filteredDates[0].temp).value.toFixed(2)}
          &#x2103;
        </span>
      </div>
      <div className="flex rounded-xl bg-indigo-200 px-4 justify-center py-1">
        <span className="text-[20px] text-slate-700 font-semibold">
          {convertDateFormat(filteredDates[1].date)} &rarr;{" "}
          {kelvinToCelcius(filteredDates[1].temp).value.toFixed(2)}
          &#x2103;
        </span>
      </div>
      <div className="flex rounded-xl bg-indigo-200 px-4 justify-center py-1">
        <span className="text-[20px] text-slate-700 font-semibold">
          {convertDateFormat(filteredDates[2].date)} &rarr;{" "}
          {kelvinToCelcius(filteredDates[2].temp).value.toFixed(2)}
          &#x2103;
        </span>
      </div>
      <div className="flex rounded-xl bg-indigo-200 px-4 justify-center py-1">
        <span className="text-[20px] text-slate-700 font-semibold">
          {convertDateFormat(filteredDates[3].date)} &rarr;{" "}
          {kelvinToCelcius(filteredDates[3].temp).value.toFixed(2)}
          &#x2103;
        </span>
      </div>
      <div className="flex rounded-xl bg-indigo-200 px-4 justify-center py-1">
        <span className="text-[20px] text-slate-700 font-semibold">
          {convertDateFormat(filteredDates[4].date)} &rarr;{" "}
          {kelvinToCelcius(filteredDates[4].temp).value.toFixed(2)}
          &#x2103;
        </span>
      </div>
    </>
  );
}

export default NextDays;
