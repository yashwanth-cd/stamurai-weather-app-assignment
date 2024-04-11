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

export function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(dateStr));
}

export function getCountryName(countryCode) {
  const countryName = getName(countryCode);
  return countryName;
}

export function getSunTime(timestamp) {
  const date = new Date(timestamp * 1000);
  // Convert adjusted timestamp to a Date object
  function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  }
  return extractTime(date);
}
