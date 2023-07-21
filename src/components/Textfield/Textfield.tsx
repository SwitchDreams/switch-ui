import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

export interface ITextfield {
  label: string;
  support?: string;
  placeholder: string;
  leftIcon: ElementType;
  rightIcon?: ElementType;
  disabled?: boolean;
  error?: boolean;
}

const TextfieldVariants = cva(
  "w-full rounded-lg border pl-9 text-md hover:bg-gray-50 focus:border-primary-100 focus:outline-none",
  {
    variants: {
      size: {
        small: "h-[44px]",
        medium: "h-[48px]",
        large: "h-[52px]",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

type TextfieldVariantProps = VariantProps<typeof TextfieldVariants>;

export interface TextfieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "label" | "placeholder" | "size">,
    TextfieldVariantProps,
    ITextfield {}

export const Textfield = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  placeholder,
  size,
  label,
  className,
  support,
  disabled,
  error,
  ...rest
}: TextfieldProps) => {
  const textfieldClasses = twMerge(TextfieldVariants({ size }), className);

  return (
    <div className={`${disabled && "opacity-50"}`}>
      <label htmlFor="switchTextfield" className="text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        disabled={disabled}
        id="switchTextfield"
        type="text"
        placeholder={placeholder}
        className={`${textfieldClasses} relative my-2 ${
          error ? "border-error-500" : "border-gray-100"
        }`}
        {...rest}
      />
      <label
        htmlFor="switchTextfield"
        className={`text-sm  ${error ? "text-error-500" : "text-gray-600"}`}
      >
        {support}
      </label>
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
