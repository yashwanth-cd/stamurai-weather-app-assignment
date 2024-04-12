import { convertDateFormat, kelvinToCelcius } from "../services/helpers";

/* eslint-disable react/prop-types */
export function NextDays({ filteredDates }) {
  return (
    <>
      <div className="flex rounded-xl bg-indigo-200 px-4 justify-center py-1">
        <span className="text-[20px] text-slate-700 font-semibold">
          {convertDateFormat(filteredDates.at(0).date)} &rarr;{" "}
          {kelvinToCelcius(filteredDates.at(0).temp).value.toFixed(2)}
          &#x2103;
        </span>
      </div>
      <div className="flex rounded-xl bg-indigo-200 px-4 justify-center py-1">
        <span className="text-[20px] text-slate-700 font-semibold">
          {convertDateFormat(filteredDates.at(1).date)} &rarr;{" "}
          {kelvinToCelcius(filteredDates.at(1).temp).value.toFixed(2)}
          &#x2103;
        </span>
      </div>
      <div className="flex rounded-xl bg-indigo-200 px-4 justify-center py-1">
        <span className="text-[20px] text-slate-700 font-semibold">
          {convertDateFormat(filteredDates.at(2).date)} &rarr;{" "}
          {kelvinToCelcius(filteredDates.at(2).temp).value.toFixed(2)}
          &#x2103;
        </span>
      </div>
      <div className="flex rounded-xl bg-indigo-200 px-4 justify-center py-1">
        <span className="text-[20px] text-slate-700 font-semibold">
          {convertDateFormat(filteredDates.at(3).date)} &rarr;{" "}
          {kelvinToCelcius(filteredDates.at(3).temp).value.toFixed(2)}
          &#x2103;
        </span>
      </div>
      <div className="flex rounded-xl bg-indigo-200 px-4 justify-center py-1">
        <span className="text-[20px] text-slate-700 font-semibold">
          {convertDateFormat(filteredDates.at(4).date)} &rarr;{" "}
          {kelvinToCelcius(filteredDates.at(4).temp).value.toFixed(2)}
          &#x2103;
        </span>
      </div>
    </>
  );
}
