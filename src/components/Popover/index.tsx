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
        top: "bottom-[calc(100%+5px)] left-1/2 -translate-x-1/2",
        bottom: "left-1/2 top-[calc(100%+5px)] -translate-x-1/2",
        right: "right-[calc(100%+5px)] top-1/2 -translate-y-1/2",
        left: "left-[calc(100%+5px)] top-1/2 -translate-y-1/2",
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

const Popover = ({ button, children, className, position = "top", ...rest }: PopoverProps) => {
  const [popoverPosition, setPopoverPosition] = useState(position);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePopoverPosition = () => {
      if (popoverRef.current) {
        const { top, left, right, bottom } = popoverRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const fitsHorizontally = left >= 0 && right <= windowWidth;
        const fitsVertically = top >= 0 && bottom <= windowHeight;

        if (!fitsHorizontally) {
          if (position === "right") {
            setPopoverPosition("left");
          }
          if (position === "left") {
            setPopoverPosition("right");
          }
          if (position === "bottomRight") {
            setPopoverPosition("bottomLeft");
          }
          if (position === "bottomLeft") {
            setPopoverPosition("bottomRight");
          }
          if (position === "topLeft") {
            setPopoverPosition("topRight");
          }
          if (position === "topRight") {
            setPopoverPosition("topLeft");
          }
        } else if (!fitsVertically) {
          if (position === "top") {
            setPopoverPosition("bottom");
          }
          if (position === "bottom") {
            setPopoverPosition("top");
          }
          if (position === "bottomRight") {
            setPopoverPosition("topRight");
          }
          if (position === "bottomLeft") {
            setPopoverPosition("topLeft");
          }
          if (position === "topLeft") {
            setPopoverPosition("bottomRight");
          }
          if (position === "topRight") {
            setPopoverPosition("bottomRight");
          }
        } else {
          setPopoverPosition(position);
        }
      }
      window.addEventListener("resize", updatePopoverPosition);
      return () => window.removeEventListener("resize", updatePopoverPosition);
    };
    updatePopoverPosition();
  }, [position]);

  return (
    <PopoverHeadlessui className="relative w-fit">
      <PopoverHeadlessui.Button>{button}</PopoverHeadlessui.Button>
      <PopoverHeadlessui.Panel
        ref={popoverRef}
        className={`${twMerge(PopoverVariants({ position: popoverPosition }), className)}`}
        {...rest}
      >
        {children}
      </PopoverHeadlessui.Panel>
    </PopoverHeadlessui>
  );
};

export default Popover;
