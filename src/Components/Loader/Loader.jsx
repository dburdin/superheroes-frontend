import { TailSpin } from "react-loader-spinner";

export const Loader = () => {
  return (
    <TailSpin
      height="150"
      width="150"
      color="#221efc"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ justifyContent: "center", marginTop: "150px" }}
      visible={true}
    />
  );
};
