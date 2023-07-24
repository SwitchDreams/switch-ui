import { cva, type VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

const sliderVariants = cva("button", {
  variants: {
    size: {
      small: "px-2 py-1 text-sm",
      medium: "text-base px-4 py-2",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export interface SliderProps
  extends Omit<HTMLProps<HTMLInputElement>, "size">,
    VariantProps<typeof sliderVariants> {}

export const Slider = ({ size, className, ...rest }: SliderProps) => {
  return (
    <div className={twMerge(sliderVariants({ size }), className)} {...rest}>
      <input type="range"></input>
    </div>
  );
};
