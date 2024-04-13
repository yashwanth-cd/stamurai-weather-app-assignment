import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useRedirect from "../hooks/useRedirect";
import SearchSuggestions from "./SearchSuggestions";

const inputStyles =
  "relative text-sm sm:text-lg lg:xl md:text-md font-semibold rounded-md p-3 pr-10 py-2 sm:pr-12 lg:pr-14 lg:py-3 outline-none shadow-xl bg-indigo-50 relative";

interface SearchBarProps {}

interface Suggestion {
  city: string;
  country: string;
}

export default function SearchBar({}: SearchBarProps) {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const navigate = useRedirect();

  useEffect(() => {
    const controller = new AbortController();
    async function fetchQueryData() {
      if (query.length < 2) return;
      try {
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=6e11af102ae94b8e8afd821ccbe1feb6`,
          { signal: controller.signal }
        );

        const data = await res.json();
        const cityAndCountry: Suggestion[] = data?.features.map(
          (feature: any) => {
            return {
              city: feature.properties.city,
              country: feature.properties.country,
            };
          }
        );
        setSuggestions(cityAndCountry);
      } catch (err) {
        throw new Error(err.message);
      }
    }
    fetchQueryData();

    return function () {
      controller.abort();
    };
  }, [query]);

  function handleQuery(e: React.FormEvent<HTMLFormElement>) {
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
          suggestions={suggestions}
          setQuery={setQuery}
          setSuggestions={setSuggestions}
        />
      )}
    </form>
  );
}
