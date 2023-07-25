import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

type InputElement = "input" | "textarea";

export interface ITextFieldBase
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "label" | "placeholder" | "size"> {
  label: string;
  name: string;
  inputElement: InputElement;
  supportText?: string;
  placeholder?: string;
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  disabled?: boolean;
  error?: boolean;
  errorMsg?: string;
}

const TextFieldBaseVariants = cva(
  "relative my-2 w-full rounded-lg border text-md hover:bg-gray-50 focus:border-primary-100 focus:outline-none",
  {
    variants: {
      size: {
        small: "h-11",
        medium: "h-12",
        large: "h-14",
      },
      error: {
        true: "border-error-500",
        false: "border-gray-100",
      },
      leftIconPresent: {
        true: "pl-9",
        false: "pl-3",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

type TextfieldVariantProps = VariantProps<typeof TextFieldBaseVariants>;

export interface TextFieldBaseProps
  extends Omit<TextfieldVariantProps, "error" | "leftIconPresent">,
    ITextFieldBase {}

export const TextFieldBase = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  inputElement = "input",
  placeholder,
  size,
  label,
  className,
  supportText,
  disabled,
  error,
  name,
  errorMsg,
  ...rest
}: TextFieldBaseProps) => {
  const InputElement = inputElement;
  const leftIconPresent = !!LeftIcon;
  const textfieldClasses = twMerge(
    TextFieldBaseVariants({ size, error, leftIconPresent }),
    className,
  );
  const opacityClass = disabled ? "opacity-50" : "";

  return (
    <div className={opacityClass}>
      <label htmlFor={name} className="text-sm font-medium text-gray-900">
        {label}
      </label>
      <InputElement
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        className={textfieldClasses}
        {...rest}
      />
      {error ? (
        <span className="text-sm text-error-500">{errorMsg}</span>
      ) : (
        <span className="text-sm  text-gray-600">{supportText}</span>
      )}

      {LeftIcon && (
        <LeftIcon className="absolute left-[2.4rem] top-[5.25rem] h-6 w-6 text-gray-200" />
      )}
      {RightIcon && (
        <RightIcon
          className={`absolute right-[2.4rem] top-[5.25rem] h-6 w-6 ${
            error ? "text-error-500" : "text-gray-200"
          } `}
        />
      )}
    </div>
  );
};
