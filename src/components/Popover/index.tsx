import { Popover as PopoverHeadlessui } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface IPopover {
  button: ReactNode;
  children?: ReactNode;
  className?: string;
}

const PopoverVariants = cva(
  "absolute z-10 mt-2 w-fit rounded p-28 text-xs group-hover:flex group-hover:flex-wrap",
  {
    variants: {
      position: {
        top: "bottom-[calc(100%+5px)] left-1/2 translate-x-[-50%]",
        bottom: "left-1/2 top-[calc(100%+5px)] translate-x-[-50%]",
        right: "right-[calc(100%+5px)] top-1/2 translate-y-[-50%]",
        left: "left-[calc(100%+5px)] top-1/2 translate-y-[-50%]",
        topRight: "bottom-[calc(100%+5px)] left-1/2 translate-x-[5%]",
        bottomRight: "left-1/2 top-[calc(100%+5px)]",
        topLeft: "bottom-[calc(100%+5px)] right-1/2 translate-x-[5%]",
        bottomLeft: "right-1/2 top-[calc(100%+5px)]",
      },
    },
  },
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
        className={`${twMerge(PopoverVariants({ position }), className)}`}
        {...rest}
      >
        {children}
      </PopoverHeadlessui.Panel>
    </PopoverHeadlessui>
  );
};

export default Popover;
