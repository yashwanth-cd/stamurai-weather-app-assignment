import { Celcius, Fahrenheit, Kelvin } from "@khanisak/temperature-converter";

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
    weekday: "short",
  }).format(new Date(dateStr));
}
