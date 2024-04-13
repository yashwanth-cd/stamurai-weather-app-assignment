/* eslint-disable react/prop-types */
import React from "react";
import useRedirect from "../hooks/useRedirect";
import Table from "./Table";

interface City {
  name: string;
  cou_name_en: string;
  timezone: string;
}

interface CityRowProps {
  city: City;
  index: number;
}

const CityRow: React.FC<CityRowProps> = ({ city, index }) => {
  const navigate = useRedirect();
  const { name, cou_name_en: country, timezone } = city;

  if (!city) return null;

  return (
    <Table.Row onClick={() => navigate(`/weather?city=${name}`)}>
      <div>{index + 1}</div>
      <div>{name}</div>
      <div>{country}</div>
      <div>{timezone}</div>
    </Table.Row>
  );
};

export default CityRow;
