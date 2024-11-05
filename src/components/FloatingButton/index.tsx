import { cva, type VariantProps } from "class-variance-authority";
import React, { ElementType } from "react";
import FormLabel from "src/internal/FormLabel";
import { twMerge } from "tailwind-merge";

interface FloatingButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  name: string;
  icon: ElementType;
  labelClassName?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export type FloatingButtonVariantProps = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  "sw-ui-rounded-curvature-full flex items-center justify-center gap-2 drop-shadow-lg",
  {
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
    },
  },
);

export interface FloatingButtonProps
  extends Omit<FloatingButtonVariantProps, "variant" & "size">,
    FloatingButtonType {}

const FloatingButton = ({
  variant = "primary",
  name,
  size = "md",
  label,
  labelClassName,
  icon: Icon,
  className,
  onClick,
  ...rest
}: FloatingButtonProps) => {
  const buttonClasses = twMerge(buttonVariants({ variant, size }), className);
  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {<Icon className="h-4 w-4 stroke-2" />}
      {label && <FormLabel label={label} name={name} className={`${labelClassName}`} />}
    </button>
  );
};

export default FloatingButton;
