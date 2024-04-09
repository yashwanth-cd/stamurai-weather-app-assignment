import Table from "./Table";
import Loader from "../loaders/Loader";
import CityRow from "./CityRow";

import { useGetCities } from "../services/apiCities";

export default function CitiesTable() {
  const { cities: results, isCitiesLoading, error } = useGetCities();

  if (error) throw new Error(error.message);

  if (isCitiesLoading) return <Loader />;

  const cities = results.results;

  return (
    <>
      <h1 className="text-slate-400 text-xl md:text-2xl lg:text-3xl font-semibold mx-6 mt-12">
        Geonames - All the cities with a population &gt; 1000
      </h1>
      <Table columns="1fr 1fr 1fr">
        <Table.Header>
          <div>City Name</div>
          <div>Country</div>
          <div>Timezone</div>
        </Table.Header>

        <Table.Body
          data={cities}
          render={(city) => <CityRow city={city} key={city.name} />}
        />
      </Table>
    </>
  );
}
