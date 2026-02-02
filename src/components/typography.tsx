import { Text } from "react-native";

export const Title = ({
  type = "h4",
  textCase = "",
  textColor = "text-black",
  content,
  customClass = "",
  borderColor,
}: any) => {
  const sizeClass =
    type === "h3"
      ? "text-2xl":
    
    type === "h4"
      ? "text-xl"
      : type === "h5"
      ? "text-base lg:text-base"
      : "text-base";

  return (
    <Text
      className={`
        max-w-full
        ${sizeClass}
        ${textCase}
        ${textColor}
        py-1
        font-medium
        ${borderColor ? `border-b-4 ${borderColor}` : ""}
        ${customClass}
      `}
    >
      {content}
    </Text>
  );
};



export const Paragraphs = ({
  textCase = "",
  textColor = "text-black",
  children,
  customClass = "",
}: any) => {
  return (
    <Text
      className={`
        max-w-full
        text-sm
        ${textCase}
        ${textColor}
        py-1
        font-light
        ${customClass}
      `}
    >
      {children}
    </Text>
  );
};
