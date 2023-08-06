import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ITooltip {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const TooltipVariants = cva(
  "absolute hidden w-[17rem] rounded p-2 text-xs text-white group-hover:flex group-hover:flex-wrap",
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
      color: {
        primary: "bg-gray-950 text-white",
        secondary: "bg-white text-gray-950",
        tertiary: "bg-primary-300 text-gray-100",
      },
    },
    defaultVariants: {
      position: "top",
      color: "tertiary",
    },
  },
);

const ArrowVariants = cva("absolute hidden border-[6px] group-hover:inline-block", {
  variants: {
    position: {
      top: "bottom-full left-1/2 -translate-x-1/2 border-b-0 border-x-transparent ",
      bottom: "left-1/2 top-full -translate-x-1/2 border-t-0 border-x-transparent ",
      right: "right-full top-1/2 -translate-y-1/2 border-r-0 border-y-transparent ",
      left: "left-full top-1/2 -translate-y-1/2 border-l-0 border-y-transparent ",
      topRight: "bottom-full left-[110%] -translate-x-1/2 border-b-0 border-x-transparent",
      bottomRight: "left-[90%] top-full -translate-x-1/2 border-t-0 border-x-transparent",
      topLeft: "bottom-full left-[15%] -translate-x-1/2 border-b-0 border-x-transparent",
      bottomLeft: "left-[10%] top-full -translate-x-1/2 border-t-0 border-x-transparent",
      none: "",
    },
    color: {
      primary: "border-gray-950",
      secondary: "border-white",
      tertiary: "border-primary-300",
    },
  },
  defaultVariants: {
    position: "none",
    color: "tertiary",
  },
});

type TooltipVariantProps = VariantProps<typeof TooltipVariants>;

export interface TooltipProps extends TooltipVariantProps, ITooltip {}

const Tooltip = ({
  title,
  position,
  color,
  children,
  className,
  description,
  ...rest
}: TooltipProps) => (
  <div className="group relative h-fit w-fit cursor-pointer">
    <div className="mx-1">{children}</div>
    <span className={twMerge(TooltipVariants({ position, color }), className)} {...rest}>
      <div className="flex flex-col p-2">
        <span className="pb-2 text-xs font-semibold">{title}</span>
        <span className="pb-2 text-xs font-medium">{description}</span>
      </div>
    </span>
    <span className={twMerge(ArrowVariants({ position, color }))} {...rest}></span>
  </div>
);

export default Tooltip;