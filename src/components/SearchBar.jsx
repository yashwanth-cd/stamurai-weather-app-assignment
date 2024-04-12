import { useEffect, useState } from "react";
import useRedirect from "../hooks/useRedirect";
import { IoSearchSharp } from "react-icons/io5";
import SearchSuggestions from "./SearchSuggestions";

const inputStyles =
  "relative text-sm sm:text-lg lg:xl md:text-md font-semibold rounded-md p-3 pr-10 py-2 sm:pr-12 lg:pr-14 lg:py-3 outline-none shadow-xl bg-indigo-50 relative";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState({});
  const navigate = useRedirect();

  useEffect(() => {
    const controller = new AbortController();
    async function fetchQueryData() {
      // Logic
      // 1) send request to the api and fetch the names

      if (query.length < 2) return;
      try {
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=6e11af102ae94b8e8afd821ccbe1feb6`,
          { signal: controller.signal },
        );

        const data = await res.json();
        const cityAndCountry = data?.features.map((feature) => {
          return {
            city: feature.properties.city,
            country: feature.properties.country,
          };
        });
        setSuggestions(cityAndCountry);
      } catch (err) {
        throw new Error(err.message);
      }
    }
    fetchQueryData();

    return function () {
      controller.abort();
    };

    // 2) store them in a state
    // 3) use them to display a list of options under the search bar
  }, [query]);

  function handleQuery(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/weather?city=${query}`);
  }

  return (
    <form
      onSubmit={handleQuery}
      className="mr-3 sm:mx-12 lg:mx-24 flex justify-center items-center gap-2 input-wrapper"
    >
      <IoSearchSharp
        size={30}
        color="#818cf8"
        style={{ backgroundColor: "#eef2ff" }}
        className="ml-2"
      />
      <input
        className={inputStyles}
        type="text"
        placeholder="Search a place..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query.length > 2 && (
        <SearchSuggestions
          suggestions={suggestions || []}
          setQuery={setQuery}
          setSuggestions={setSuggestions}
        />
      )}
    </form>
  );
}
