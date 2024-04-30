import { cva, type VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import ErrorMessage from "src/internal/ErrorMessage";
import FormLabel from "src/internal/FormLabel";
import { twMerge } from "tailwind-merge";

export interface ICheckBox {
  disabled?: boolean;
  name: string;
  label?: string;
  error?: boolean;
  errorMsg?: string;
  supportText?: string;
  position?: "side" | "bottom";
}

const checkBoxVariants = cva(
  "peer relative appearance-none border border-primary-400 transition-all duration-200",
  {
    variants: {
      shape: {
        circle: "rounded-full",
        square: "rounded-sm",
      },
      size: {
        small: "h-4 w-4",
        medium: "h-5 w-5",
        large: "h-6 w-6",
      },
      color: {
        primary: "checkbox-primary checked:hover:bg-primary-200 focus:ring-4 focus:ring-primary-25",
        secondary:
          "border-error-600 checked:bg-error-700 hover:bg-error-100 checked:hover:bg-error-600 focus:ring-4 focus:ring-error-100",
      },
    },
    defaultVariants: {
      size: "medium",
      shape: "square",
      color: "primary",
    },
  },
);

const checkboxLabel = cva("flex items-center justify-center gap-2", {
  variants: {
    position: {
      side: "flex-row-reverse",
      bottom: "flex-col-reverse",
    },
  },
  defaultVariants: {
    position: "side",
  },
});

const iconVariants = cva(
  "pointer-events absolute left-1/2 top-1/2 z-[-1] -translate-x-1/2 -translate-y-1/2 font-bold text-white peer-checked:z-10 peer-checked:text-opacity-100",
  {
    variants: {
      size: {
        small: "top-[0.55rem] h-[10px] w-[10px]",
        medium: "h-3 w-3",
        large: "h-4 w-4",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

const backgroundVariant = cva("relative", {
  variants: {
    size: {
      small: "h-4 w-4",
      medium: "h-5 w-5",
      large: "h-6 w-6",
    },
  },
});

export interface CheckBoxProps
  extends Omit<HTMLProps<HTMLInputElement>, "size" | "disabled" | "shape" | "color" | "name">,
    ICheckBox,
    VariantProps<typeof checkBoxVariants> {}

export const CheckBox = ({
  size,
  shape,
  disabled = false,
  color,
  className,
  name,
  label,
  error = false,
  errorMsg,
  supportText,
  position = "side",
  ...rest
}: CheckBoxProps) => {
  return (
    <div className={checkboxLabel({ position })}>
      <FormLabel label={label} name={name} />
      <div className={backgroundVariant({ size })}>
        <label>
          <input
            name={name}
            aria-label={name}
            type="checkbox"
            disabled={disabled}
            className={
              disabled
                ? twMerge(
                    checkBoxVariants({ size, shape }),
                    "border-gray-400 bg-gray-200 opacity-100 checked:border-gray-200 checked:after:bg-gray-500 hover:border-gray-200 hover:bg-gray-200",
                  )
                : twMerge(checkBoxVariants({ size, shape, color }), className)
            }
            {...rest}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="currentColor"
            className={
              disabled
                ? twMerge(
                    iconVariants({ size }),
                    className,
                    "border-gray-200 bg-gray-100 checked:border-gray-200 checked:after:bg-gray-500 hover:border-gray-200 hover:bg-gray-100",
                  )
                : twMerge(iconVariants({ size }), className)
            }
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </label>
      </div>
      <ErrorMessage error={error} errorMsg={errorMsg} supportText={supportText} />
    </div>
  );
};
