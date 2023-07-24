import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

export interface ITextfield
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "label" | "placeholder" | "size"> {
  label: string;
  name: string;
  supportText?: string;
  placeholder?: string;
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  disabled?: boolean;
  error?: boolean;
  errorMsg?: string;
}

const TextfieldVariants = cva(
  "w-full rounded-lg border pl-9 text-md hover:bg-gray-50 focus:border-primary-100 focus:outline-none",
  {
    variants: {
      size: {
        small: "h-11",
        medium: "h-12",
        large: "h-14",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

type TextfieldVariantProps = VariantProps<typeof TextfieldVariants>;

export interface TextfieldProps extends TextfieldVariantProps, ITextfield {}

export const Textfield = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
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
}: TextfieldProps) => {
  const textfieldClasses = twMerge(TextfieldVariants({ size }), className);

  return (
    <div className={`${disabled && "opacity-50"}`}>
      <label htmlFor={name} className="text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        disabled={disabled}
        name={name}
        type="text"
        placeholder={placeholder}
        className={`${textfieldClasses} relative my-2 ${
          error ? "border-error-500" : "border-gray-100"
        }`}
        {...rest}
      />
      {error ? (
        <span className="text-sm text-error-500">{errorMsg}</span>
      ) : (
        <span className="text-sm  text-gray-600">{supportText}</span>
      )}

      {LeftIcon && (
        <LeftIcon
          className="absolute left-[2.4rem] top-[5.25rem] h-6 w-6 
            text-gray-200"
        />
      )}
      {RightIcon && (
        <RightIcon
          className={` absolute right-[2.4rem] top-[5.25rem] h-6 w-6
           ${error ? "text-error-500" : "text-gray-200"} `}
        />
      )}
    </div>
  );
};
