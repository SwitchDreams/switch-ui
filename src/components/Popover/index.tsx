import { Popover as PopoverHeadlessui } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface IPopover {
  button: ReactNode;
  children?: ReactNode;
  className?: string;
  position?: string;
}

const PopoverVariants = cva(
  "absolute z-10 mt-2 w-fit rounded text-xs group-hover:flex group-hover:flex-wrap",
);

type PopoverVariantProps = VariantProps<typeof PopoverVariants>;

export interface PopoverProps extends PopoverVariantProps, IPopover {}

const Popover = ({
  button,
  children,
  className,
  position = "bottomLeft",
  ...rest
}: PopoverProps) => {
  return (
    <PopoverHeadlessui className="relative w-fit">
      <PopoverHeadlessui.Button>{button}</PopoverHeadlessui.Button>
      <PopoverHeadlessui.Panel
        anchor={position}
        className={`${twMerge(PopoverVariants(), className)}`}
        {...rest}
      >
        {children}
      </PopoverHeadlessui.Panel>
    </PopoverHeadlessui>
  );
};

export default Popover;
