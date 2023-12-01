import { Popover as PopoverHeadlessui } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface IPopover {
  button: ReactNode;
  children?: ReactNode;
  className?: string;
  color: "primary" | "secondary" | "tertiary";
}

const PopoverVariants = cva(
  "absolute z-10 mt-2 w-fit rounded p-2 text-xs text-white group-hover:flex group-hover:flex-wrap",
  {
    variants: {
      color: {
        primary: "bg-gray-950 text-white",
        secondary: "bg-white text-gray-950",
        tertiary: "bg-primary-300 text-gray-100",
      },
    },
  },
);

type PopoverVariantProps = VariantProps<typeof PopoverVariants>;

export interface PopoverProps extends PopoverVariantProps, IPopover {
  color: "primary" | "secondary" | "tertiary";
}

const Popover = ({ button, children, className, color = "primary", ...rest }: PopoverProps) => {
  return (
    <PopoverHeadlessui className="relative">
      <PopoverHeadlessui.Button>{button}</PopoverHeadlessui.Button>
      <PopoverHeadlessui.Panel
        className={`${twMerge(PopoverVariants({ color }), className)}`}
        {...rest}
      >
        {children}
      </PopoverHeadlessui.Panel>
    </PopoverHeadlessui>
  );
};

export default Popover;
