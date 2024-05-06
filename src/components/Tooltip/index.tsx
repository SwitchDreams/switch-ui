import {
  arrow,
  autoPlacement,
  autoUpdate,
  FloatingArrow,
  FloatingPortal,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

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
  children,
  className,
  content,
  description,
  ...rest
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, context } = useFloating({
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "right",
    middleware: [
      arrow({
        element: arrowRef,
      }),
      autoPlacement({
        alignment: "right-start",
      }),
    ],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

  return (
    <>
      <div {...getReferenceProps()} ref={refs.setReference} className="h-fit w-fit">
        {content}
      </div>
      {isOpen && (
        <div
          {...getFloatingProps()}
          className={twMerge(TooltipVariants({ color }), className)}
          {...rest}
          ref={refs.setFloating}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Tooltip;
