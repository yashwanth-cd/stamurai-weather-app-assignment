import React from "react";
import CitiesTable from "../components/CitiesTable";
import Navbar from "../components/Navbar";

const Cities: React.FC = () => {
  return (
    <div>
      <Navbar />
      <CitiesTable />
    </div>
  );
}

export default Cities;
