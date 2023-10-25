import { ThreeDots } from "react-loader-spinner";

export const Spinner = () => (
  <div className="w-full h-full flex-center">
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="#00a6a6"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </div>
);
