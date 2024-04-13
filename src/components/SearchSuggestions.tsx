import React from "react";
import useRedirect from "../hooks/useRedirect";

interface Suggestion {
  city: string;
  country: string;
}

interface SearchSuggestionsProps {
  suggestions: Suggestion[];
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setSuggestions: React.Dispatch<React.SetStateAction<Suggestion[]>>;
}

export default function SearchSuggestions({
  suggestions,
  setQuery,
  setSuggestions,
}: SearchSuggestionsProps) {
  const navigate = useRedirect();

  if (Object.keys(suggestions).length < 1) return null;

  return (
    <ul className="absolute top-20 bg-indigo-200 px-2 py-2 rounded-lg">
      {suggestions.map((suggestion, index) => {
        return (
          <li
            className="text-sm sm:text-lg lg:xl md:text-md font-semibold rounded-md p-3 py-2 sm:pr-12 lg:pr-14 lg:py-3 outline-none shadow-xl bg-indigo-100 relative w-80 block h-12 cursor-pointer border border-slate-600 mt-[2px]"
            key={index}
            onClick={() => {
              navigate(
                `/weather?city=${suggestion.city || suggestion.country}`
              );
              setQuery("");
              setSuggestions([]);
            }}
          >
            {suggestion.city ? `${suggestion.city}, ` : ""} {suggestion.country}
          </li>
        );
      })}
    </ul>
  );
}
