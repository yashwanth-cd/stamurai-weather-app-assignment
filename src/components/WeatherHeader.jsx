export default function WeatherHeader(city) {
  return (
    <h1 className="font-semibold sm:text-[20px] text-slate-600 ml-10 mt-10 md:text-[26px] lg:text-[32px]">
      Weather forecast of {city.city}
    </h1>
  );
}
