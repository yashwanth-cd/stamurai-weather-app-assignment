/* eslint-disable react/prop-types */
import useRedirect from "../hooks/useRedirect";
import Table from "./Table";

export default function CityRow({ city, index }) {
  const navigate = useRedirect();
  const { name, cou_name_en: country, timezone } = city;

  if (!city) return;

  return (
    <Table.Row onClick={() => navigate(`/weather?city=${name}`)}>
      <div>{index + 1}</div>
      <div>{name}</div>
      <div>{country}</div>
      <div>{timezone}</div>
    </Table.Row>
  );
}
