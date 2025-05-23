import InputMask from "@mona-health/react-input-mask";
import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType, forwardRef } from "react";
import SupportOrErrorMessage from "src/internal/SupportOrErrorMessage";
import { twMerge } from "tailwind-merge";

import FormLabel from "../../internal/FormLabel";

type InputElement = typeof InputMask | "textarea" | "input";

export interface ITextFieldBase
  extends Omit<React.InputHTMLAttributes<any>, "label" | "placeholder" | "size"> {
  name: string;
  inputElement: InputElement;
  label?: string;
  supportText?: string;
  supportTextClassName?: string;
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
  labelClassName?: string;
}

const TextFieldBaseVariants = cva(
  "sw-ui-rounded-curvature-md sw-ui-input w-full text-ellipsis border border-coolGray-400 text-md text-coolGray-900 hover:bg-coolGray-50 focus:outline-none",
  {
    variants: {
      size: {
        small: "h-10 text-sm",
        medium: "h-11",
        large: "h-14",
      },
      error: {
        true: "border-error-500 caret-error-500",
        false: "",
      },
      leftIconPresent: {
        true: "pl-9",
        false: "pl-3",
      },
      rightIconPresent: {
        true: "pr-9",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

const IconVariants = cva(
  "text-field-icon absolute top-1/2 -translate-y-1/2 text-coolGray-500 focus:text-coolGray-700",
  {
    variants: {
      error: {
        true: "text-error-500",
        false: "text-coolGray-500",
      },
      position: {
        left: "left-2",
        right: "right-2",
      },
      size: {
        large: "h-5 w-5",
        medium: "h-5 w-5",
        small: "h-4 w-4",
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

export const TextFieldBase = /* @__PURE__ */ forwardRef(
  (
    {
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      inputElement = "input",
      placeholder,
      size = "medium",
      label,
      className,
      supportText,
      supportTextClassName,
      disabled,
      error = false,
      name,
      errorMsg,
      mask = "",
      maskChar = " ",
      labelClassName,
      onClickIcon = () => {},
      ...rest
    }: TextFieldBaseProps,
    ref: React.Ref<HTMLTextAreaElement>,
  ) => {
    const InputElement = inputElement as any;
    const leftIconPresent = !!LeftIcon;
    const rightIconPresent = !!RightIcon;
    const textfieldClasses = twMerge(
      TextFieldBaseVariants({ size, error, leftIconPresent, rightIconPresent }),
      className,
    );

    const opacityClass = disabled ? "opacity-50 relative" : "relative";

    return (
      <div className={`flex w-full flex-col gap-2 ${opacityClass}`}>
        <FormLabel label={label} name={name} className={labelClassName} />
        <div className="relative">
          <InputElement
            ref={ref ? ref : undefined}
            disabled={disabled}
            id={name}
            name={name}
            placeholder={placeholder}
            className={textfieldClasses}
            // @ts-ignore
            mask={inputElement === InputMask ? mask : undefined}
            {...(mask ? { maskChar: maskChar } : {})}
            {...rest}
          />
          {LeftIcon && (
            <LeftIcon
              onClick={() => onClickIcon()}
              className={IconVariants({
                error,
                position: "left",
                size: size,
              })}
            />
          )}
          {RightIcon && (
            <RightIcon
              onClick={() => onClickIcon()}
              className={IconVariants({ error, position: "right", size: size })}
            />
          )}
        </div>
        <SupportOrErrorMessage
          error={error}
          errorMsg={errorMsg}
          supportText={supportText}
          supportTextClassName={supportTextClassName}
        />
      </div>
    );
  },
);
