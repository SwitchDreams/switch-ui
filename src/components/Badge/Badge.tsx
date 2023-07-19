import { XMarkIcon } from "@heroicons/react/24/solid";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface IBadgeProps {
  label: string;
  icon?: boolean;
  iconSide?: "right" | "left";
  outline?: boolean;
  opacity?: boolean;
  switchCore?: "primary" | "secondary" | "tertiary";
}

const badgeVariants = cva("badge", {
  variants: {
    type: {
      default: {
        switchCore: {
          primary:
            "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-primary-25 px-3 text-xs font-medium text-primary-300",
          secondary:
            "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-secondary-25 px-3 text-xs font-medium text-secondary-800",
          tertiary:
            "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-orange-25 px-3 text-xs font-medium text-orange-700",
        },
      },
      success: {
        outline: {
          true: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-success-600 bg-success-50 px-3 text-xs font-medium text-success-600",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-success-600 px-3 text-xs font-medium text-success-600",
            },
          },
          false: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-success-50 px-3 text-xs font-medium text-success-600",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-success-600 px-3 text-xs font-medium text-gray-white",
            },
          },
        },
      },
      warning: {
        outline: {
          true: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-orange-500 bg-orange-50 px-3 text-xs font-medium text-orange-500",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-orange-500 px-3 text-xs font-medium text-orange-500",
            },
          },
          false: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-orange-50 px-3 text-xs font-medium text-orange-500",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-orange-500 px-3 text-xs font-medium text-black",
            },
          },
        },
      },
      danger: {
        outline: {
          true: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-error-600 bg-error-50 px-3 text-xs font-medium text-error-600",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl border border-error-600 px-3 text-xs font-medium text-error-600",
            },
          },
          false: {
            opacity: {
              true: "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-error-50 px-3 text-xs font-medium text-error-600",
              false:
                "flex h-7 w-fit items-center justify-center gap-1 rounded-3xl bg-error-600 px-3 text-xs font-medium text-gray-white",
            },
          },
        },
      },
    },
  },
});

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export interface BadgeProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "type" | "label" | "outline">,
    BadgeVariantProps,
    IBadgeProps {}

export const Badge = ({
  label,
  icon = false,
  iconSide = "right",
  type,
  outline = false,
  opacity = false,
  switchCore = "primary",
}: BadgeProps & BadgeVariantProps) => {
  const badgeClasses = twMerge(badgeVariants({ type, outline, opacity, switchCore }));

  return (
    <div className={badgeClasses}>
      {iconSide === "left" && icon && <XMarkIcon className="h-4 w-4 font-bold" />}
      <p>{label}</p>
      {iconSide === "right" && icon && <XMarkIcon className="h-4 w-4 font-bold" />}
    </div>
  );
};
