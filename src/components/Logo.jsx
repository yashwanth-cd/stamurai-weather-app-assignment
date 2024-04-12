import useRedirect from "../hooks/useRedirect";

export default function Logo() {
  const navigate = useRedirect();
  return (
    <div
      className="ml-3 my-1 sm:mx-4 lg:mx-12 lg:my-2 flex justify-center items-center gap-2 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img className="h-[80px] rounded-full" src="logo.jpeg" alt="" />
      <h2 className="text-3xl text-[20px] sm:text-[24px] lg:text-[28px] text-indigo-100">
        <span className="text-orange-300 font-semibold">Stamurai</span>
        <span className="text-white font-semibold">Cloud</span>
      </h2>
    </div>
  );
}
