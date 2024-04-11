import { ThreeDots } from "react-loader-spinner";

export default function ThreeDotLoader() {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#a5b4fc"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
