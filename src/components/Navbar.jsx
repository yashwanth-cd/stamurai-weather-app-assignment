import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="bg-indigo-300 flex justify-between items-center sm:py-1 ">
      <Logo />
      <SearchBar />
    </div>
  );
}
