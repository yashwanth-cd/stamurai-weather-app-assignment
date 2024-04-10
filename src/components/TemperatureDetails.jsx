import Map from "./Map";
import Weather from "./Weather";

export default function TemperatureDetails() {
  return (
    <Weather>
      <Weather.Body>
        <p>Temperature details</p>
      </Weather.Body>
      <Map />
    </Weather>
  );
}
