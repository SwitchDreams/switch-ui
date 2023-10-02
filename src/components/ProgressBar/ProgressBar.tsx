import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const ProgressBarVariants = cva("rounded-full bg-primary-25", {
  variants: {
    size: {
      sm: "h-1 w-full",
      md: "h-2 w-full",
      lg: "h-3 w-full",
      xl: "h-4 w-full",
      "2xl": "h-5 w-full",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ProgressBarProps extends VariantProps<typeof ProgressBarVariants> {
  percentage: number;
  className?: string;
  bgColor?: string;
}

export const ProgressBar = ({
  size = "md",
  percentage,
  bgColor = "bg-primary-300",
  className,
  ...rest
}: ProgressBarProps) => {
  return (
    <div className={twMerge(ProgressBarVariants({ size }), className)} {...rest}>
      <div
        data-testid="progress-bar"
        className={twMerge(
          ProgressBarVariants({ size }),
          className,
          `rounded-full transition-all duration-300 ease-linear ${bgColor}`,
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
