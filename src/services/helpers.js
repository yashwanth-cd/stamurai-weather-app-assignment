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
