import { cva, type VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

const spinnerVariants = cva(
  "animate-spin rounded-full border-solid border-primary-25 border-r-primary-300",
  {
    variants: {
      size: {
        small: "h-5 w-5 border-2",
        medium: "h-7 w-7 border-[3px]",
        large: "h-9 w-9 border-[5px]",
        xl: "h-11 w-11 border-[6px]",
        "2xl": "h-14 w-14 border-[7px]",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export interface SpinnerProps
  extends Omit<HTMLProps<HTMLDivElement>, "size">,
    VariantProps<typeof spinnerVariants> {}

export const Spinner = ({ size, className, ...rest }: SpinnerProps) => {
  return (
    <div
      data-testid="spinner"
      className={twMerge(spinnerVariants({ size }), className)}
      {...rest}
    ></div>
  );
};
