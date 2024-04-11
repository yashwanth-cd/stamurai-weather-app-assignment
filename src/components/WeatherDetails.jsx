/* eslint-disable react/prop-types */
import Weather from "./Weather";

import CurrentWeatherDetails from "./CurrentWeatherDetails";

export default function WeatherDetails({ cityDetails }) {
  return (
    <div>
      <Weather columns="4" type="flex">
        <div className="sm:block">
          <Weather.SmallBody>
            <CurrentWeatherDetails cityDetails={cityDetails} />
          </Weather.SmallBody>

          <Weather.SmallBody>
            <div>next 5 days</div>
          </Weather.SmallBody>
        </div>
      </Weather>
    </div>
  );
}
