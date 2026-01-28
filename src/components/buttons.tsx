import { IButtonProps } from "../../interfaces/IElements";
import { ButtonLoader } from "./loaders";

export const ButtonInstance = ({
  loading,
  clickEvt,
  customClass,
  disabled,
  showIcon,
  icon,
  iconColor,
  iconSize,
  iconPosition,
  label,
  customStyle,
  type,
  title,
  buttonColor,
}: IButtonProps) => {
  return (
    <button
      title={title ?? ""}
      className={`row-all-centered lg:px-6 px-4 py-3 ${
        buttonColor == "blue"
          ? "bg-[var(--primary-blue)]"
          : buttonColor == "orange"
          ? "bg-[var(--primary-orange)]"
          : buttonColor == "red"
          ? "bg-[var(--danger)]"
          : buttonColor == "white"
          ? "bg-white"
          : "bg-[var(--transparent-black-1)]"
      } text-${
        iconColor ?? "white"
      } md:text-sm text-xs rounded cursor-pointer ${customClass} ${
        disabled && "bg-gray-400 cursor-not-allowed"
      }`}
      onClick={clickEvt}
      type={type ?? "button"}
      disabled={disabled}
    >
      {loading ? (
        <ButtonLoader />
      ) : (
        <>
          {/* {showIcon && iconPosition === "left" && (
            <IconInstance
              Icon={icon}
              size={iconSize ?? 22}
              color={iconColor ?? `var(--white)`}
            />
          )} */}
          {label && (
            <label className={iconColor ? `text-${iconColor}` : `text-white`}>
              {label}
            </label>
          )}
          {/* {((showIcon && iconPosition === "right") ||
            (showIcon && !iconPosition)) && (
            <IconInstance
              Icon={icon}
              size={iconSize ?? 22}
              color={iconColor ?? `var(--white)`}
            />
          )} */}
        </>
      )}
    </button>
  );
};
