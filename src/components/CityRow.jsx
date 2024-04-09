/* eslint-disable react/prop-types */
import useRedirect from "../hooks/useRedirect";
import Table from "./Table";

export default function CityRow({ city }) {
  const navigate = useRedirect();
  const { name, cou_name_en: country, timezone } = city;

  if (!city) return;

  return (
    <Table.Row onClick={() => navigate(`/weather?city=${name}`)}>
      <div>{name}</div>
      <div>{country}</div>
      <div>{timezone}</div>
    </Table.Row>
  );
}
