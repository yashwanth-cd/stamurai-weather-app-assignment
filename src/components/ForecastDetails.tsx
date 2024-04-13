/* eslint-disable react/prop-types */
import React from "react";
import { use5DayForecast } from "../hooks/use5DayForecast";
import Loader from "../loaders/Loader";
import { filterForecastByDay } from "../services/helpers";
import NextDays from "./NextDays";

interface CityDetails {
  coord: {
    lat: number;
    lon: number;
  };
}

interface ForecastDetailsProps {
  cityDetails: CityDetails;
}

export default function ForecastDetails({ cityDetails }: ForecastDetailsProps) {
  const { lat, lon } = cityDetails.coord;
  const { forecast, isForecastLoading } = use5DayForecast(lat, lon);

  if (isForecastLoading)
    return (
      <div>
        <h1 className="mb-4  text-indigo-600 rounded-xl bg-indigo-200 inline-block px-4">
          Next 5 days
        </h1>
        <Loader />
      </div>
    );

  const filteredDates = filterForecastByDay(forecast).splice(1);

  return (
    <div>
      <h1 className="mb-4  text-indigo-600 rounded-xl bg-indigo-200 inline-block px-4">
        Next 5 days
      </h1>
      <div className="sm:block px-4 space-y-5">
        <NextDays filteredDates={filteredDates} />
      </div>
    </div>
  );
}
