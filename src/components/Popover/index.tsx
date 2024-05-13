import { Popover as PopoverHeadlessui, PopoverButton, PopoverPanel } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const PositionTranslation = (position: any) => {
  switch (position) {
    case "bottomRight":
      return "bottom end";
    case "bottomLeft":
      return "bottom start";
    case "topRight":
      return "top end";
    case "topLeft":
      return "top start";
    case "left":
      return "start";
    case "right":
      return "end";
    default:
      return position;
  }
};

export interface IPopover {
  button: ReactNode;
  children?: ReactNode;
  className?: string;
  position?: any;
}

const PopoverVariants = cva("fixed z-10 mt-2 w-fit rounded text-xs");

type PopoverVariantProps = VariantProps<typeof PopoverVariants>;

export interface PopoverProps extends PopoverVariantProps, IPopover {}

const Popover = ({ button, children, className, position = "start", ...rest }: PopoverProps) => {
  return (
    <PopoverHeadlessui className="relative w-fit">
      <PopoverButton>{button}</PopoverButton>
      <PopoverPanel
        anchor={PositionTranslation(position)}
        className={`${twMerge(PopoverVariants(), className)}`}
        {...rest}
      >
        {children}
      </PopoverPanel>
    </PopoverHeadlessui>
  );
};

export default Popover;
