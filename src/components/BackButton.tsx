import React from "react";
import useRedirect from "../hooks/useRedirect";

const BackButton: React.FC = () => {
  const navigate = useRedirect();
  return (
    <button
      className="border-slate-600 bg-indigo-600 rounded-lg py-2 text-indigo-50 px-3 mt-8 ml-12 hover:bg-indigo-300 hover:text-slate-800 transition ease-out delay-120 drop-shadow-lg"
      onClick={() => navigate(-1)}
    >
      &larr; Back
    </button>
  );
};

export default BackButton;
