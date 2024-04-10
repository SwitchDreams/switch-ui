import { Popover as PopoverHeadlessui } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode, useEffect, useState } from "react";
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
        right: "left-[calc(100%+5px)] top-1/2 -translate-y-1/2",
        left: "right-[calc(100%+5px)] top-1/2 -translate-y-1/2",
        topRight: "bottom-[calc(100%+5px)] left-1/2 translate-x-[5%]",
        bottomRight: "left-1/2 top-[calc(100%+5px)]",
        topLeft: "bottom-[calc(100%+5px)] right-1/2 translate-x-[5%]",
        bottomLeft: "right-1/2 top-[calc(100%+5px)]",
      },
    },
  },
);

type PopoverVariantProps = VariantProps<typeof PopoverVariants>;

export interface PopoverProps extends PopoverVariantProps, IPopover {
  position?:
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "topRight"
    | "bottomRight"
    | "topLeft"
    | "bottomLeft"
    | null
    | undefined;
  positionsBreakPoint?: {
    sm?:
      | "top"
      | "bottom"
      | "right"
      | "left"
      | "topRight"
      | "bottomRight"
      | "topLeft"
      | "bottomLeft"
      | null
      | undefined;
    md?:
      | "top"
      | "bottom"
      | "right"
      | "left"
      | "topRight"
      | "bottomRight"
      | "topLeft"
      | "bottomLeft"
      | null
      | undefined;
    lg?:
      | "top"
      | "bottom"
      | "right"
      | "left"
      | "topRight"
      | "bottomRight"
      | "topLeft"
      | "bottomLeft"
      | null
      | undefined;
    xl?:
      | "top"
      | "bottom"
      | "right"
      | "left"
      | "topRight"
      | "bottomRight"
      | "topLeft"
      | "bottomLeft"
      | null
      | undefined;
  };
}

const Popover = ({
  button,
  children,
  className,
  position,
  positionsBreakPoint = {},
  ...rest
}: PopoverProps) => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPosition = () => {
    const width = windowSize.width;
    if (width >= 1280 && positionsBreakPoint?.xl) {
      return positionsBreakPoint.xl;
    } else if (width >= 1024 && positionsBreakPoint?.lg) {
      return positionsBreakPoint.lg;
    } else if (width >= 768 && positionsBreakPoint?.md) {
      return positionsBreakPoint.md;
    } else if (positionsBreakPoint?.sm) {
      return positionsBreakPoint.sm;
    }
    return position || "bottomLeft";
  };

  return (
    <PopoverHeadlessui className="relative w-fit">
      <PopoverHeadlessui.Button>{button}</PopoverHeadlessui.Button>
      <PopoverHeadlessui.Panel
        className={`${twMerge(PopoverVariants({ position: getPosition() }), className)}`}
        {...rest}
      >
        {children}
      </PopoverHeadlessui.Panel>
    </PopoverHeadlessui>
  );
};

export default Popover;
