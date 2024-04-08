import { useGetCities } from "../services/apiCities";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Navbar() {
  
  const { cities, isCitiesLoading, error } = useGetCities();
  console.log(cities, isCitiesLoading, error);
  
  return (
    <div className="bg-indigo-400 flex justify-between items-center sm:py-1 lg:py-2">
      <Logo />
      <SearchBar />
    </div>
  );
}
