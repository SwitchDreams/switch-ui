import { XMarkIcon } from "@heroicons/react/24/solid";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface IBadgeProps {
  label: string;
  icon?: boolean;
  iconSide?: "right" | "left";
  outline?: boolean;
  opacity?: boolean;
}

const badgeVariants = cva(
  "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl px-3 text-xs font-medium",
  {
    variants: {
      color: {
        primary: "bg-primary-25 text-primary-300",
        secondary: "bg-secondary-25 text-secondary-800",
        success: "bg-success-50 text-success-700",
        warning: "bg-warning-50 text-warning-700",
        danger: "bg-error-50 text-error-700",
      },
      outline: {
        true: "border",
      },
      opacity: {
        true: "bg-opacity-50",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        outline: true,
        opacity: false,
        class: "border-primary-300 bg-transparent",
      },
      {
        color: "primary",
        outline: true,
        opacity: true,
        class: "border-primary-300",
      },
      {
        color: "secondary",
        outline: true,
        opacity: false,
        class: "border-secondary-800 bg-transparent",
      },
      {
        color: "secondary",
        outline: true,
        opacity: true,
        class: "border border-secondary-25",
      },
      {
        color: "success",
        outline: true,
        opacity: false,
        class: "border-success-600 bg-transparent",
      },
      {
        color: "success",
        outline: true,
        opacity: true,
        class: "border-success-50 border-success-600",
      },
      {
        color: "warning",
        outline: true,
        opacity: false,
        class: "border-warning-700 bg-transparent",
      },
      {
        color: "warning",
        outline: true,
        opacity: true,
        class: "border-warning-50 border-warning-700",
      },
      {
        color: "danger",
        outline: true,
        opacity: false,
        class: "border-error-700 bg-transparent",
      },
      {
        color: "danger",
        outline: true,
        opacity: true,
        class: "border-error-50 border-error-700",
      },
    ],
  },
);

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export interface BadgeProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "color" | "label">,
    Omit<BadgeVariantProps, "outline" | "opacity">,
    IBadgeProps {}

export const Badge = ({
  label,
  icon = false,
  iconSide = "right",
  color,
  outline = false,
  opacity = false,
}: BadgeProps) => {
  const badgeClasses = twMerge(badgeVariants({ color, outline, opacity }));

  return (
    <div className={badgeClasses}>
      {iconSide === "left" && icon && <XMarkIcon className="h-4 w-4 font-bold" />}
      <p>{label}</p>
      {iconSide === "right" && icon && <XMarkIcon className="h-4 w-4 font-bold" />}
    </div>
  );
};
