/* eslint-disable react/prop-types */
const selectSyles =
  "border-slate-600 bg-indigo-600 rounded-lg py-2 text-indigo-50 px-3  hover:bg-indigo-300 hover:text-slate-800 transition ease-out delay-120 drop-shadow-lg md:mb-2 sm:mb-2";

export default function SortAndFilter({
  sortBy,
  filterBy,
  setSortBy,
  setFilterBy,
}) {
  return (
    <div className="mr-10 sm:block md:block items-center lg:flex lg:gap-4">
      <select
        value={sortBy}
        className={selectSyles}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="alphabetical-order">Sort by Alphabetical order</option>
        <option value="geoname-id">Sort by Geoname id</option>
      </select>

      <select
        value={filterBy}
        className={selectSyles}
        onChange={(e) => setFilterBy(e.target.value)}
      >
        <option value="All">Filter By All</option>
        <option value="<5000">Filter By Population &lt; 5K</option>
        <option value="<7000">Filter By Population &lt; 7K</option>
        <option value=">7000">Filter By Population &gt; 7K</option>
      </select>
    </div>
  );
}
