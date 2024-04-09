import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Oval
        visible={true}
        height="60"
        width="100"
        color="#2563eb"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeWidth={6}
      />
    </div>
  );
}
