import { Image } from "react-native";

export const ButtonLoader = () => {
  return (
    <span className={`row-all-centered gap-x-2 w-max h-max button-loader`}>
      <Image
        width={100}
        height={100}
        className="w-6 h-6"
        src={"/animations/eclipse-white-loader.svg"}
        alt="logo"
      />
    </span>
  );
};