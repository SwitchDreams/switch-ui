import { Popover as PopoverHeadlessui } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface IPopover {
  button: ReactNode;
  children?: ReactNode;
  className?: string;
}

const PopoverVariants = cva(
  "absolute z-10 mt-2 w-fit rounded text-xs group-hover:flex group-hover:flex-wrap",
  {
    variants: {
      position: {
        top: "bottom-[calc(100%+5px)] left-1/2 translate-x-[-50%]",
        right: "right-[calc(100%+5px)] top-[calc(50%+5px)] translate-y-[-50%]",
        left: "left-[calc(100%+5px)] top-[calc(50%+5px)] translate-y-[-50%]",
      },
    },
  },
);

type PopoverVariantProps = VariantProps<typeof PopoverVariants>;

export interface PopoverProps extends PopoverVariantProps, IPopover {}

const Popover = ({ button, children, className, position = "top", ...rest }: PopoverProps) => {
  const [popoverPosition, setPopoverPosition] = useState(position);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePopoverPosition = () => {
      if (popoverRef.current) {
        const { top, left, right } = popoverRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (top < 0) {
          setPopoverPosition("top");
        } else if (right > windowWidth) {
          setPopoverPosition("left");
        } else if (left < 0) {
          setPopoverPosition("right");
        }
      }
    };

    window.addEventListener("resize", updatePopoverPosition);
    updatePopoverPosition();

    return () => window.removeEventListener("resize", updatePopoverPosition);
  }, []);

  return (
    <PopoverHeadlessui className="relative w-fit" ref={popoverRef}>
      <PopoverHeadlessui.Button>{button}</PopoverHeadlessui.Button>
      <PopoverHeadlessui.Panel
        className={`${twMerge(PopoverVariants({ position: popoverPosition }), className)}`}
        {...rest}
      >
        {children}
      </PopoverHeadlessui.Panel>
    </PopoverHeadlessui>
  );
};

export default Popover;
