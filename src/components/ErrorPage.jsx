/* eslint-disable react/prop-types */
export default function ErrorPage({ message }) {
  return (
    <div className="flex justify-center items-center mt-28">
      <h1 className="font-semibold text-2xl bg-indigo-200 px-20 py-20 rounded-xl">
        Oops {message} :( <br />
        <span>Enter a valid city name</span>
      </h1>
    </div>
  );
}
