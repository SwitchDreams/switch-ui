import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType, forwardRef } from "react";
import InputMask from "react-input-mask";
import { twMerge } from "tailwind-merge";

type InputElement = typeof InputMask | "textarea" | "input";
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
  mask?: string;
  maskChar?: string;
  ref?: any;
}

const TextFieldBaseVariants = cva(
  "caretColor rounded-plug-md input relative my-2 w-full text-ellipsis border pr-10 text-md hover:bg-gray-50 focus:outline-none ",
  {
    variants: {
      size: {
        small: "h-10",
        medium: "h-11",
        large: "h-14",
      },
      error: {
        true: "border-error-500 caret-error-500",
        false: "caretColor",
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

const IconVariants = cva("text-field-icon absolute top-1/2 h-6 w-6 text-gray-500", {
  variants: {
    error: {
      true: "text-error-500",
      false: "text-gray-500",
    },
    position: {
      left: "left-2",
      right: "right-2",
    },
    label: {
      false: "top-1/3",
    },
  },
});

type TextfieldVariantProps = VariantProps<typeof TextFieldBaseVariants>;

export interface TextFieldBaseProps
  extends Omit<TextfieldVariantProps, "error" | "leftIconPresent">,
    ITextFieldBase {}

export const TextFieldBase = forwardRef(
  (
    {
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
      mask = "",
      maskChar = " ",
      onClickIcon = () => {},
      ...rest
    }: TextFieldBaseProps,
    ref: React.Ref<HTMLTextAreaElement>,
  ) => {
    const InputElement = inputElement;
    const leftIconPresent = !!LeftIcon;
    const textfieldClasses = twMerge(
      TextFieldBaseVariants({ size, error, leftIconPresent }),
      className,
    );
    const opacityClass = disabled ? "opacity-50 relative" : "relative";

    return (
      <div className={opacityClass}>
        {label && (
          <label htmlFor={name} className="text-sm font-medium text-gray-900">
            {label}
          </label>
        )}
        <InputElement
          ref={ref ? ref : undefined}
          disabled={disabled}
          id={name}
          name={name}
          placeholder={placeholder}
          className={textfieldClasses}
          mask={mask}
          maskChar={maskChar}
          {...rest}
        />
        {error ? (
          <span className="text-sm text-error-500">{errorMsg}</span>
        ) : (
          <span className="text-sm text-gray-600">{supportText}</span>
        )}

        {LeftIcon && (
          <LeftIcon
            onClick={() => onClickIcon()}
            className={IconVariants({ error, position: "left", label: !!label })}
          />
        )}
        {RightIcon && (
          <RightIcon
            onClick={() => onClickIcon()}
            className={IconVariants({ error, position: "right", label: !!label })}
          />
        )}
      </div>
    );
  },
);
