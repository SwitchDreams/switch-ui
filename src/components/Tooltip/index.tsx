import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { Tooltip as ToolTipFloatingUi, TooltipContent, TooltipTrigger } from "./TooltipFloatingUI";

export interface ITooltip {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const TooltipVariants = cva("h-fit w-fit rounded p-2 text-xs text-white", {
  variants: {
    color: {
      primary: "bg-gray-950 text-white",
      secondary: "bg-white text-gray-950",
      tertiary: "bg-primary-300 text-gray-100",
    },
  },
  defaultVariants: {
    color: "tertiary",
  },
});

type TooltipVariantProps = VariantProps<typeof TooltipVariants>;

export interface TooltipProps extends TooltipVariantProps, ITooltip {
  content: ReactNode;
}

const Tooltip = ({
  title,
  color,
  className,
  children,
  content,
  description,
  ...rest
}: TooltipProps) => {
  const body = () => {
    if (children) {
      return children;
    } else {
      return (
        <div className="z-30 flex flex-col">
          <span className="pb-2 text-xs font-semibold">{title}</span>
          <span
            className={twMerge(TooltipVariants({ color }), className, "pb-2 text-xs font-medium")}
          >
            {description}
          </span>
        </div>
      );
    }
  };
  return (
    <ToolTipFloatingUi>
      <TooltipTrigger>{content}</TooltipTrigger>
      <TooltipContent className={twMerge(TooltipVariants({ color }), className)} {...rest}>
        {body()}
      </TooltipContent>
    </ToolTipFloatingUi>
  );
};

export default Tooltip;
