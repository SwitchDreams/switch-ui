import { cva, type VariantProps } from "class-variance-authority";
import { ChangeEvent, HTMLProps, useState } from "react";
import FormLabel from "src/internal/FormLabel";
import SupportOrErrorMessage from "src/internal/SupportOrErrorMessage";
import { twMerge } from "tailwind-merge";

export interface IRadioButton {
  disabled?: boolean;
  label?: string;
  name: string;
  error?: boolean;
  errorMsg?: string;
  supportText?: string;
  labelClassName?: string;
}

const radioButtonVariants = cva(
  "relative appearance-none rounded-full border border-coolGray-400 checked:border-primary-300  checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:rounded-full checked:after:border-primary-300 checked:after:bg-primary-300 checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:border-primary-300 hover:bg-primary-25 focus:ring-4 focus:ring-primary-25",
  {
    variants: {
      size: {
        small: "h-4 w-4 checked:after:h-[0.4rem] checked:after:w-[0.4rem]",
        medium: "h-5 w-5 checked:after:h-[0.54rem] checked:after:w-[0.54rem]",
        large: "h-6 w-6 checked:after:h-[0.6rem] checked:after:w-[0.6rem]",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export interface RadioButtonProps
  extends Omit<HTMLProps<HTMLInputElement>, "size" | "disabled" | "name">,
    IRadioButton,
    VariantProps<typeof radioButtonVariants> {}

export const RadioButton = ({
  size,
  disabled = false,
  className,
  labelClassName,
  label,
  name,
  error = false,
  errorMsg,
  supportText,
  ...rest
}: RadioButtonProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <div className="flex gap-3">
        <input
          type="radio"
          disabled={disabled}
          checked={checked}
          name={name}
          onChange={handleChange}
          className={
            disabled
              ? twMerge(
                  radioButtonVariants({ size }),
                  className,
                  "border-gray-200 bg-gray-200 opacity-100 checked:border-gray-200 checked:after:bg-gray-500 hover:border-gray-200 hover:bg-gray-100",
                )
              : twMerge(radioButtonVariants({ size }), className)
          }
          {...rest}
        ></input>
        <FormLabel label={label} name={name} className={labelClassName} />
      </div>
      <SupportOrErrorMessage error={error} errorMsg={errorMsg} supportText={supportText} />
    </>
  );
};
