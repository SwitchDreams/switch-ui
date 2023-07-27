import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ITooltip {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

const TooltipVariants = cva(
  "absolute hidden whitespace-nowrap rounded bg-neutral-900 p-2 text-xs text-white group-hover:inline-block",
  {
    variants: {
      position: {
        top: "bottom-[calc(100%+5px)] left-1/2 -translate-x-1/2",
        bottom: "left-1/2 top-[calc(100%+5px)] -translate-x-1/2",
        right: "right-[calc(100%+5px)] top-1/2 -translate-y-1/2",
        left: "left-[calc(100%+5px)] top-1/2 -translate-y-1/2",
        topRight: "bottom-[calc(100%+5px)] left-1/2 -translate-x-[5%]",
      },
    },
    defaultVariants: {
      position: "top",
    },
  },
);

const ArrowVariants = cva("absolute hidden border-[6px] group-hover:inline-block", {
  variants: {
    position: {
      top: "bottom-full left-1/2 -translate-x-1/2 border-b-0 border-x-transparent border-t-neutral-900",
      bottom:
        "left-1/2 top-full -translate-x-1/2 border-t-0 border-x-transparent border-b-neutral-900",
      right:
        "right-full top-1/2 -translate-y-1/2 border-r-0 border-y-transparent border-l-neutral-900",
      left: "left-full top-1/2 -translate-y-1/2 border-l-0 border-y-transparent border-r-neutral-900",
      topRight:
        "bottom-full left-[15%] -translate-x-1/2 border-b-0 border-x-transparent border-t-neutral-900",
      none: "",
    },
  },
  defaultVariants: {
    position: "none",
  },
});

type TooltipVariantProps = VariantProps<typeof TooltipVariants>;

export interface TooltipProps extends TooltipVariantProps, ITooltip {}

const Tooltip = ({ position, children, className, description, ...rest }: TooltipProps) => (
  <div id="tooltip" className="group relative cursor-pointer h-fit w-fit">
    <div className="mx-1">{children}</div>
    <span className={twMerge(TooltipVariants({ position }), className)} {...rest}>
      {description}
    </span>
    <span className={twMerge(ArrowVariants({ position }), className)} {...rest}></span>
  </div>
);

export default Tooltip;
