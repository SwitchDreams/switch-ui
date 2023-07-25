import { cva, type VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

const sliderVariants = cva(
  "w-full appearance-none border-0 accent-primary-300 hover:accent-primary-400 [&::-webkit-slider-thumb]:h-[40px] [&::-webkit-slider-thumb]:w-[40px] [&::-webkit-slider-thumb]:bg-primary-25",
  {
    variants: {
      size: {
        small: "px-2 py-1 text-sm",
        medium: "text-base px-4 py-2",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export interface SliderProps
  extends Omit<HTMLProps<HTMLInputElement>, "size">,
    VariantProps<typeof sliderVariants> {}

export const Slider = ({ size, min, max, value, step, className, ...rest }: SliderProps) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      step={step}
      className={twMerge(sliderVariants({ size }), className)}
      {...rest}
    ></input>
  );
};
