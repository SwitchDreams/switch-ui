import { cva, type VariantProps } from "class-variance-authority";
import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface FloatingButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ElementType;
  rounded?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type FloatingButtonVariantProps = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva("flex items-center justify-center gap-2 drop-shadow-lg", {
  variants: {
    variant: {
      primary: ["bg-primary-25", "hover:bg-primary-50", "focus:bg-primary-100", "text-gray-800"],

      invisible: ["bg-white", "hover:bg-gray-50", "focus:bg-gray-100", "text-gray-800"],
    },
    size: {
      lg: ["text-sm", "p-5"],
      md: ["text-sm", "p-4"],
      sm: ["text-sm", "p-3"],
    },
    rounded: {
      true: " rounded-full",
    },
  },
});

export interface FloatingButtonProps
  extends Omit<FloatingButtonVariantProps, ("variant" & "size") | "rounded">,
    FloatingButtonType {}

const FloatingButton = ({
  variant = "primary",
  size = "md",
  label,
  icon: Icon,
  className,
  rounded = true,
  onClick,
}: FloatingButtonProps) => {
  const buttonClasses = twMerge(buttonVariants({ variant, size, rounded }), className);
  return (
    <button className={buttonClasses} onClick={onClick}>
      {<Icon className="h-4 w-4 stroke-2" />}
      {label && label}
    </button>
  );
};

export default FloatingButton;
