export const Title = ({
  type,
  textCase,
  textColor,
  content,
  customClass,
  borderColor,
}: any) => {
  return (
    <>
      {type === "h4" ? (
        <h4
          className={`max-w-[100%] h-max lg:text-xl text-base ${textCase} text-[var(--${
            textColor ?? "black"
          })] py-1 ${
            borderColor !== null && borderColor !== undefined
              ? `border-b-4 border-[var(--${borderColor ?? "primary-blue"})]`
              : ""
          } font-medium tracking-[var(--letter-spacing-reg)] ${customClass}`}
        >
          {content}
        </h4>
      ) : (
        type === "h5" && (
          <h5
            className={`max-w-[100%] h-max lg:text-base text-sm ${textCase} text-[var(--${
              textColor ?? "black"
            })] py-1 ${
              borderColor !== null && borderColor !== undefined
                ? `border-b-4 border-[var(--${borderColor ?? "primary-blue"})]`
                : ""
            } font-medium tracking-[var(--letter-spacing-reg)] ${customClass}`}
          >
            {content}
          </h5>
        )
      )}
    </>
  );
};


export const Paragraphs = ({
  textCase,
  textColor,
  children,
  customClass,
  borderColor,
}: any) => {
  return (
    <>
      <p
        className={`max-w-[100%] text-sm ${textCase} text-[var(--${
          textColor ?? "black"
        })] py-1 font-light ${customClass}`}
      >
        {children}
      </p>
    </>
  );
};