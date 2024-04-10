import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="bg-indigo-300 flex justify-between items-center sm:py-1 sticky top-0">
      <Logo />
      <SearchBar />
      <p className="mr-8">current location</p>
    </div>
  );
}
