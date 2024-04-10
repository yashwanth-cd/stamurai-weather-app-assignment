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
