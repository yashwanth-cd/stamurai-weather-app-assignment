/* eslint-disable react/prop-types */
import React from "react";

interface ErrorPageProps {
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center mt-28">
      <h1 className="font-semibold text-2xl bg-indigo-200 px-20 py-20 rounded-xl">
        Oops {message} :( <br />
        <span>Enter a valid city name</span>
      </h1>
    </div>
  );
}

export default ErrorPage;
