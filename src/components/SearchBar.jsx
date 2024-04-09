import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SearchBar() {
  return (
    <form className="mr-3 sm:mx-12 lg:mx-24 flex justify-center items-center gap-2">
      <input
        className="text-sm sm:text-lg lg:xl md:text-md font-semibold rounded-md p-3 pr-10 py-2 sm:pr-12 lg:pr-14 lg:py-3 outline-none ring ring-indigo-500 ring-offset-2 shadow-xl"
        type="text"
        placeholder="Search for a place"
      />
      <HiMagnifyingGlass size={40} className="text-indigo-100" />
    </form>
  );
}
