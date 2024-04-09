/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Table from "./Table";

export default function CityRow({ city }) {
  const navigate = useNavigate();

  if (!city) return;
  const { name, cou_name_en: country, timezone } = city;

  return (
    <Table.Row onClick={() => navigate(`/weather?city=${name}`)}>
      <div>{name}</div>
      <div>{country}</div>
      <div>{timezone}</div>
    </Table.Row>
  );
}
