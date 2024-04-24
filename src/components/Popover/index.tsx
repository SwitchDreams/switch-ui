import { autoPlacement, autoUpdate, useFloating } from "@floating-ui/react";
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
  "absolute z-10 mt-2 w-fit rounded text-xs group-hover:flex group-hover:flex-wrap",
);

type PopoverVariantProps = VariantProps<typeof PopoverVariants>;

export interface PopoverProps extends PopoverVariantProps, IPopover {}

const Popover = ({ button, children, className, ...rest }: PopoverProps) => {
  const { refs } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [autoPlacement()],
  });
  return (
    <PopoverHeadlessui className="relative w-fit">
      <PopoverHeadlessui.Button ref={refs.setReference}>{button}</PopoverHeadlessui.Button>
      <PopoverHeadlessui.Panel
        ref={refs.setFloating}
        className={`${twMerge(PopoverVariants(), className)}`}
        {...rest}
      >
        {children}
      </PopoverHeadlessui.Panel>
    </PopoverHeadlessui>
  );
};

export default Popover;
