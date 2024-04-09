import { TiWeatherCloudy } from "react-icons/ti";

export default function Logo() {
  return (
    <div className="ml-3 sm:mx-4 lg:mx-12 flex justify-center items-center">
      <TiWeatherCloudy size={100} color="#e0e7ff" />
      <h2 className="text-3xl sm:text-[40px] text-indigo-100">StamuraiCloud</h2>
    </div>
  );
}
