import { Celcius, Fahrenheit, Kelvin } from "@khanisak/temperature-converter";
import { getName } from "country-list";

export function celciusToFahrenheit(temp) {
  return new Celcius(temp).toFahrenheit();
}
export function FahrenheitToKelvin(temp) {
  return new Fahrenheit(temp).toKelvin();
}
export function kelvinToCelcius(temp) {
  return new Kelvin(temp).toCelcius();
}

export function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

export function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export function getCountryName(countryCode) {
  const countryName = getName(countryCode);
  return countryName;
}

export function getSunTime(timestamp) {
  const date = new Date(timestamp * 1000);
  function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  }
  return extractTime(date);
}

// Function to filter and group forecast data by date without the year
export function filterForecastByDay(forecastData) {
  const dailyForecast = {};
  forecastData.list.forEach((forecast) => {
    const dateParts = forecast.dt_txt.split(" ")[0].split("-"); // Splitting date string into parts
    const dateWithoutYear = `${dateParts[1]}-${dateParts[2]}`; // Concatenating month and day
    if (!dailyForecast[dateWithoutYear]) {
      // Create an entry for the date if it doesn't exist
      dailyForecast[dateWithoutYear] = {
        date: dateWithoutYear,
        temp: forecast.main.temp, // Assuming you want the temperature from the first entry of each day
        // You can add more properties if needed
      };
    }
  });
  return Object.values(dailyForecast);
}

// Function to convert date from "MM-DD" format to "DD Month" format
export function convertDateFormat(dateString) {
  const [month, day] = dateString.split("-"); // Splitting date string into month and day parts
  const date = new Date(`${month}-${day}`); // Creating a Date object
  const options = { day: "numeric", month: "long" }; // Options for formatting
  return date.toLocaleDateString("en-US", options); // Formatting the date
}
