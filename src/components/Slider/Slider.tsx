import { cva, type VariantProps } from "class-variance-authority";
import React, { forwardRef, HTMLProps, useRef } from "react";
import { twMerge } from "tailwind-merge";

const sliderVariants = cva("slider relative w-full appearance-none rounded-lg border-0", {
  variants: {
    size: {
      small: "h-1",
      medium: "h-2",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export interface SliderProps
  extends Omit<HTMLProps<HTMLInputElement>, "size">,
    VariantProps<typeof sliderVariants> {
  value?: number;
  min: number;
  max: number;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ size, min, max, value, step, className, ...rest }, ref: React.Ref<any>) => {
    const box = useRef<any>();

    const onInput = (element: any) => {
      const newValue = element.target.value;
      box.current.textContent = newValue;
      const percentage = ((newValue - min) / (max - min)) * 100;
      const thumbWidth = parseFloat(
        getComputedStyle(element.target).getPropertyValue("--thumb-width") || "40px",
      );
      const sliderWidth = element.target.clientWidth - thumbWidth;
      const left = (percentage / 100) * sliderWidth;
      box.current.style.left = `calc(${left}px)`;
      box.current?.classList.add("visible");
      box.current?.classList.remove("hidden");
    };

    const onBlur = () => {
      box.current?.classList.remove("visible");
      box.current?.classList.add("hidden");
    };

    return (
      <div className="relative mt-10" ref={ref}>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onInput={onInput}
          onBlur={onBlur}
          className={twMerge(sliderVariants({ size }), className)}
          {...rest}
        />
        <div
          data-testid="value-box"
          className="absolute bottom-full mt-2 hidden h-8 w-10 flex-none -translate-x-1/2 items-center justify-center rounded-sm bg-primary-300 py-1 text-center text-gray-white"
          ref={box}
        >
          {value}
        </div>
      </div>
    );
  },
);
