import { Popover as PopoverHeadlessui, PopoverButton, PopoverPanel } from "@headlessui/react";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// This method is used to support the old API from the original Popover component
const positionTranslate = (position: any) => {
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

export interface PopoverProps {
  button: ReactNode;
  children?: ReactNode;
  className?: string;
  classNameContainer?: string;
  position?: any;
}

const Popover = ({
  button,
  children,
  className,
  classNameContainer,
  position = "start",
  ...rest
}: PopoverProps) => {
  return (
    <PopoverHeadlessui className={twMerge("relative w-fit", classNameContainer)}>
      <PopoverButton>{button}</PopoverButton>
      <PopoverPanel
        anchor={positionTranslate(position)}
        className={twMerge("fixed z-10 mt-2 w-fit rounded-sm text-xs", className)}
        {...rest}
      >
        {children}
      </PopoverPanel>
    </PopoverHeadlessui>
  );
};

export default Popover;
