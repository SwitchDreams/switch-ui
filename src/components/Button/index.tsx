import { cva, type VariantProps } from "class-variance-authority";
import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";
interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  label: string;
  iconSide?: "left" | "right";
  icon?: ElementType;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva("rounded-plug-md flex items-center justify-center gap-2", {
  variants: {
    variant: {
      primary: [
        "bg-primary-300",
        "hover:bg-primary-400",
        "active:bg-primary-500",
        "focus:bg-primary-300",
        "text-white",
      ],
      outline: [
        "bg-white",
        "hover:bg-primary-25",
        "active:bg-primary-100",
        "focus:bg-white",
        "border border-solid border-primary-50",
        "text-primary-300",
      ],
      invisible: [
        "bg-white",
        "hover:bg-gray-50",
        "active:bg-gray-100",
        "focus:bg-white",
        "text-gray-800",
      ],
      danger: [
        "bg-error-600",
        "hover:bg-error-700",
        "active:bg-error-800",
        "focus:bg-error-600",
        "text-white",
      ],
    },
    size: {
      xl: ["text-xl", "px-9 py-6"],
      lg: ["text-sm", "px-8 py-5"],
      md: ["text-sm", "px-7 py-4"],
      sm: ["text-sm", "px-6 py-3"],
      xs: ["text-xs", "px-5 py-2"],
    },
    disabled: {
      true: ["opacity-40"],
      false: ["opacity-100"],
    },
  },
});

export interface ButtonProps extends Omit<ButtonVariantProps, "disabled">, ButtonType {}

const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  label,
  iconSide,
  icon: Icon,
  className,
  onClick,
}: ButtonProps) => {
  const buttonClasses = twMerge(buttonVariants({ variant, size, disabled }), className);
  return (
    <button className={buttonClasses} onClick={onClick}>
      {Icon && iconSide == "right" && <Icon className="h-4 w-4 stroke-2" />}
      {label}
      {Icon && iconSide == "left" && <Icon className="h-4 w-4 stroke-2" />}
    </button>
  );
};

export default Button;
