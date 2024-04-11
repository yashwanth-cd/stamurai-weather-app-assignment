import { TiLocationArrow } from "react-icons/ti";
import useRedirect from "../hooks/useRedirect";
import { useCityName } from "../hooks/useCityName";

const buttonClass =
  "mr-8 flex items-center bg-indigo-400 rounded-full px-4 py-2 hover:bg-indigo-200 hover:text-slate-700 transition ease-out delay-120 drop-shadow-lg";

export default function CurrentLocation() {
  const { cityName, isCityNameLoading } = useCityName();
  console.log(cityName);
  const navigate = useRedirect();

  function handleCurrentLocation() {
    if (!cityName) return;

    navigate(`/weather?city=${cityName}`);
  }

  return (
    <button className={buttonClass} onClick={handleCurrentLocation}>
      {isCityNameLoading ? (
        "Loading..."
      ) : (
        <>
          <TiLocationArrow size={30} />
          <span className="text-md font-semibold">current location</span>
        </>
      )}
    </button>
  );
}
