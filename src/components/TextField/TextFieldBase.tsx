import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

type InputElement = "input" | "textarea";

export interface ITextFieldBase
  extends Omit<React.InputHTMLAttributes<any>, "label" | "placeholder" | "size"> {
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
  onClickIcon?: () => void;
}

const TextFieldBaseVariants = cva(
  "rounded-plug-md relative my-2 w-full border text-md hover:bg-gray-50 focus:border-primary-100 focus:outline-none",
  {
    variants: {
      size: {
        small: "h-11",
        medium: "h-12",
        large: "h-14",
      },
      error: {
        true: "border-error-500 caret-error-500",
        false: "caret-primary-100",
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

const IconVariants = cva("absolute top-1/2 h-6 w-6 text-gray-500", {
  variants: {
    error: {
      true: "text-error-500",
      false: "text-gray-500",
    },
    position: {
      left: "left-2",
      right: "right-2",
    },
  },
});

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
  error = false,
  name,
  errorMsg,
  onClickIcon = () => {},
  ...rest
}: TextFieldBaseProps) => {
  const InputElement = inputElement;
  const leftIconPresent = !!LeftIcon;
  const textfieldClasses = twMerge(
    TextFieldBaseVariants({ size, error, leftIconPresent }),
    className,
  );
  const opacityClass = disabled ? "opacity-50 relative" : "relative";

  return (
    <div className={opacityClass}>
      <label htmlFor={name} className="text-sm font-medium text-gray-900">
        {label}
      </label>
      <InputElement
        disabled={disabled}
        id={name}
        name={name}
        placeholder={placeholder}
        className={textfieldClasses}
        {...rest}
      />
      {error ? (
        <span className="text-sm text-error-500">{errorMsg}</span>
      ) : (
        <span className="text-sm text-gray-600">{supportText}</span>
      )}

      {LeftIcon && <LeftIcon onClick={() => onClickIcon()} className={IconVariants({ error, position: "left" })} />}
      {RightIcon && <RightIcon onClick={() => onClickIcon()} className={IconVariants({ error, position: "right" })} />}
    </div>
  );
};
