import { arrow, autoPlacement, autoUpdate, FloatingArrow, useFloating } from "@floating-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode, useRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ITooltip {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const TooltipVariants = cva(
  "absolute z-30 hidden w-fit rounded p-2 text-xs text-white group-hover:flex group-hover:flex-wrap",
  {
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
  },
);

type TooltipVariantProps = VariantProps<typeof TooltipVariants>;

export interface TooltipProps extends TooltipVariantProps, ITooltip {
  content: ReactNode;
}

const Tooltip = ({
  title,
  color,
  children,
  className,
  content,
  description,
  ...rest
}: TooltipProps) => {
  const arrowRef = useRef(null);
  const { refs, context } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [
      arrow({
        element: arrowRef,
      }),
      autoPlacement(),
    ],
  });

  return (
    <div className="group relative h-fit w-fit cursor-pointer">
      <div className="z-10 mx-1" ref={refs.setReference}>
        {content}
      </div>
      <span
        className={twMerge(TooltipVariants({ color }), className)}
        {...rest}
        ref={refs.setFloating}
      >
        <div className="z-30 flex flex-col">
          {children ? (
            <>{children}</>
          ) : (
            <>
              <span className="pb-2 text-xs font-semibold">{title}</span>
              {description && (
                <span
                  className={twMerge(
                    TooltipVariants({ color }),
                    className,
                    `pb-2 text-xs font-medium`,
                  )}
                >
                  {description}
                </span>
              )}
            </>
          )}
        </div>
        <FloatingArrow ref={arrowRef} context={context} width={8} height={5} fill="#7343C6" />
      </span>
    </div>
  );
};

export default Tooltip;
