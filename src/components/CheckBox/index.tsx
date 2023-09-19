import { cva, type VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export interface ICheckBox {
  disabled?: boolean;
  name: string;
}

const checkBoxVariants = cva("checkbox peer appearance-none border transition-all duration-200", {
  variants: {
    shape: {
      circle: "rounded-full",
      square: "rounded-sm",
    },
    size: {
      small: "h-4 w-4",
      medium: " h-5 w-5",
      large: "h-6 w-6",
    },
    color: {
      primary:
        "border border-primary-300 checked:bg-primary-300 hover:bg-primary-25 checked:hover:bg-primary-200 focus:ring-4 focus:ring-primary-25",
      secundary:
        "border border-error-600 checked:bg-error-700 hover:bg-error-100 checked:hover:bg-error-600 focus:ring-4 focus:ring-error-100",
    },
  },
  defaultVariants: {
    size: "medium",
    shape: "square",
    color: "primary",
  },
});

const iconVariants = cva(
  "absolute z-[-1] font-bold text-white peer-checked:z-10 peer-checked:text-opacity-100",
  {
    variants: {
      size: {
        small: "left-[0.2rem] top-[0.25rem] h-[10px] w-[10px]",
        medium: "left-[0.25rem] top-[0.05rem] h-3 w-3",
        large: "left-[0.25rem] top-[-0.2rem] h-4 w-4",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

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
  ...rest
}: CheckBoxProps) => {
  return (
    <label className="relative" htmlFor={name}>
      <input
        name={name}
        aria-label={name}
        type="checkbox"
        disabled={disabled}
        className={
          disabled
            ? twMerge(
                checkBoxVariants({ size, shape }),
                "border-gray-200 bg-gray-100 checked:border-gray-200 checked:after:bg-gray-500 hover:border-gray-200",
              )
            : twMerge(checkBoxVariants({ size, shape, color }), className)
        }
        {...rest}
      ></input>
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
  );
};
