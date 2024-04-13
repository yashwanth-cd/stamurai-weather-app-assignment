import React from "react";
import CurrentLocation from "./CurrentLocation";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  return (
    <div className="bg-indigo-400 flex justify-between items-center sm:py-1 sticky top-0 z-10">
      <Logo />
      <SearchBar />
      <CurrentLocation />
    </div>
  );
}

export default Navbar;
