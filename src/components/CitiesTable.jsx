import Table from "./Table";
import Loader from "../loaders/Loader";
import CityRow from "./CityRow";

import { useGetCities } from "../hooks/useGetCities";

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
            Developed with <strong>passion</strong> by <b>Yashwanth Sai</b>
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
