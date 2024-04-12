/* eslint-disable react/prop-types */
import Weather from "./Weather";

import CurrentWeatherDetails from "./CurrentWeatherDetails";
import ForecastDetails from "./ForecastDetails";

export default function WeatherDetails({ cityDetails }) {
  return (
    <div>
      <Weather columns="4" type="flex">
        <div className="sm:block">
          <Weather.SmallBody>
            <CurrentWeatherDetails cityDetails={cityDetails} />
          </Weather.SmallBody>
        </div>
      </Weather>
      <Weather.SmallBody>
        <ForecastDetails cityDetails={cityDetails} />
      </Weather.SmallBody>
    </div>
  );
}
