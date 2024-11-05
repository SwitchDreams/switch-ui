import { cva, type VariantProps } from "class-variance-authority";
import React, { ElementType } from "react";
import FormLabel from "src/internal/FormLabel";
import { twMerge } from "tailwind-merge";

import { Spinner } from "../Spinner";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  label: string;
  iconSide?: "left" | "right";
  icon?: ElementType;
  loading?: boolean;
  spinnerColor?: string;
  labelClassName?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  "sw-ui-rounded-curvature-md flex items-center justify-center gap-2",
  {
    variants: {
      variant: {
        primary: "sw-ui-btn-primary",
        outline: "sw-ui-btn-outline border border-solid border-primary-50",
        invisible: "sw-ui-btn-invisible",
        danger: "bg-error-600 text-white hover:bg-error-700 focus:bg-error-600 active:bg-error-800",
      },
      size: {
        xl: ["text-xl", "h-[56px] w-full"],
        lg: ["text-sm", "h-[48px] w-full"],
        md: ["text-sm", "h-[44px] w-full"],
        sm: ["text-sm", "h-[40px] w-full"],
        xs: ["text-xs", "h-[34px] w-full"],
      },
      disabled: {
        true: ["opacity-40"],
        false: ["opacity-100"],
      },
    },
  },
);

export interface ButtonProps extends Omit<ButtonVariantProps, "disabled">, ButtonType {}

const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  label,
  iconSide,
  icon: Icon,
  className,
  labelClassName,
  spinnerColor = "border-r-coolGray-400",
  loading = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const buttonClasses = twMerge(buttonVariants({ variant, size, disabled }), className);
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={loading ? true : disabled}
      {...rest}
    >
      {loading ? (
        <Spinner className={`${spinnerColor}`} />
      ) : (
        <>
          {Icon && iconSide === "left" && label && (
            <Icon className="h-4 w-4 translate-x-[-4px] stroke-2" />
          )}
          <FormLabel className={`${labelClassName}`} label={label} />
          {Icon && iconSide === "right" && label && (
            <Icon className="h-4 w-4 translate-x-1 stroke-2" />
          )}
          {Icon && !label && <Icon className="h-4 w-4 stroke-2" />}
        </>
      )}
    </button>
  );
};

export default Button;
