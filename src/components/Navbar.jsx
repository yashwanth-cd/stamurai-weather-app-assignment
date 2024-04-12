import CurrentLocation from "./CurrentLocation";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="bg-indigo-400 flex justify-between items-center sm:py-1 sticky top-0 z-10">
      <Logo />
      <SearchBar />
      <CurrentLocation />
    </div>
  );
}
