import { cva, type VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export interface ICheckBox {
  disabled?: boolean;
  name: string;
}

const checkBoxVariants = cva("peer appearance-none transition-all duration-200", {
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
        type="checkbox"
        disabled={disabled}
        className={twMerge(checkBoxVariants({ size, shape, color }), className)}
        {...rest}
      ></input>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        className="absolute top-1/2 z-[-1] h-3 w-3 font-bold text-white peer-checked:z-10 peer-checked:text-opacity-100"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </label>
  );
};
