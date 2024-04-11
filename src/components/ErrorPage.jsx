/* eslint-disable react/prop-types */
export default function ErrorPage({ message }) {
  return (
    <div className="flex justify-center items-center">
      <h1>{message}</h1>
    </div>
  );
}
