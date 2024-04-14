import Table from "./Table";
import Loader from "../loaders/Loader";
import CityRow from "./CityRow";
import SortAndFilter from "./SortAndFilter";

import { useGetCities } from "../hooks/useGetCities";
import { useState } from "react";

export default function CitiesTable() {
  const [sortBy, setSortBy] = useState("alphabetical-order");
  const [filterBy, setFilterBy] = useState("All");
  const { cities: results, isCitiesLoading, error } = useGetCities();

  if (error) throw new Error(error.message);
  if (isCitiesLoading) return <Loader />;
  const citiesResult = results.results;

  let cities;

  // SORTING BY APLHABETICAL ORDER
  if (sortBy === "alphabetical-order") {
    cities = citiesResult.sort((a, b) => a.name.localeCompare(b.name));
  }

  // SORTING BY GEONAME_ID
  if (sortBy === "geoname-id") {
    cities = citiesResult.sort((a, b) => {
      return parseInt(a.geoname_id) - parseInt(b.geoname_id);
    });
  }

  // FILTERING BY ALL (DISPLAY ALL THE CITIES)
  if (filterBy === "All") {
    cities = citiesResult;
  }

  // FILTERING BY POPULATION < 10K
  if (filterBy === "<5000") {
    cities = citiesResult.filter((city) => city.population < 5000);
  }

  // FILTERING BY POPULATION < 50K
  if (sortBy === "<7000") {
    cities = citiesResult.filter((city) => city.population < 7000);
  }

  // FILTERING BY POPULATION > 50K
  if (sortBy === ">7000") {
    cities = citiesResult.filter((city) => city.population > 7000);
  }

  return (
    <>
      <div className="flex justify-between items-center mt-6">
        <h1 className="text-slate-400 text-xl md:text-2xl lg:text-3xl font-semibold mx-6">
          Geonames - All the cities with a population &gt; 1000
        </h1>
        <SortAndFilter
          sortBy={sortBy}
          filterBy={filterBy}
          setSortBy={setSortBy}
          setFilterBy={setFilterBy}
        />
      </div>
      <Table columns="0.5fr 1fr 1fr 1fr">
        <Table.Header>
          <div>SI no.</div>
          <div>City Name</div>
          <div>Country</div>
          <div>Timezone</div>
        </Table.Header>

        <Table.Body
          data={cities}
          render={(city, index) => (
            <CityRow index={index} city={city} key={city.name} />
          )}
        />
        <Table.Footer>
          <div>
            Developed with <strong>Passion</strong> by <b>Yashwanth Sai</b>
          </div>
          <div className="flex items-center gap-2">
            <img style={{ height: "45px" }} src="stamurai.png" alt="" />
            <b>Stamurai</b> Assignment
          </div>
        </Table.Footer>
      </Table>
    </>
  );
}
