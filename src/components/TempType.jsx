/* eslint-disable react/prop-types */
export default function TempType({ children }) {
  return (
    <div className="flex sm:flex md:flex 2xl:block 2xl:items-center gap-6 rounded-xl bg-indigo-200 px-4 py-1 2xl:py-8 xl:px-10">
      {children}
    </div>
  );
}
