import { Switch } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { cva, VariantProps } from "class-variance-authority";
import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

interface ToggleSwitchCustomProps {
  checked?: boolean;
  disabled?: boolean;
  withIcon?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const switchVariants = cva("relative inline-flex items-center rounded-full", {
  variants: {
    checked: {
      true: "bg-primary-200 hover:bg-primary-300",
      false: "bg-coolGray-300 hover:bg-coolGray-400",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
    size: {
      sm: "h-4 w-6",
      md: "h-5 w-9",
      lg: "h-6 w-11",
    },
  },
  defaultVariants: {
    checked: false,
    disabled: false,
    size: "md",
  },
});

const dotVariants = cva(
  "inline-flex h-4 w-4 items-center justify-center rounded-full bg-white transition",
  {
    variants: {
      checked: {
        true: "translate-x-5",
        false: "translate-x-1",
      },
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5",
      },
    },
    compoundVariants: [
      {
        checked: true,
        size: "md",
        className: "translate-x-4",
      },
      {
        checked: true,
        size: "sm",
        className: "translate-x-2",
      },
    ],
  },
);

const iconVariants = cva("items-center", {
  variants: {
    checked: {
      true: "text-primary-300",
      false: "text-coolGray-400",
    },
    size: {
      sm: "h-2 w-2",
      md: "h-3 w-3",
      lg: "h-4 w-4",
    },
  },
});

type SwitchVariantsProps = VariantProps<typeof switchVariants>;

export interface ToggleSwitchProps
  extends Omit<SwitchVariantsProps, "enabled" | "checked" | "disabled">,
    ToggleSwitchCustomProps {}

export const ToggleSwitch = ({
  checked: externalChecked,
  onChange,
  disabled = false,
  withIcon = true,
  size = "md",
  className,
  ...rest
}: ToggleSwitchProps) => {
  return (
    <Switch
      checked={externalChecked}
      onChange={onChange}
      as={Fragment}
      defaultChecked={externalChecked}
      disabled={disabled}
      {...rest}
    >
      {({ checked }) => (
        <button
          disabled={disabled}
          className={twMerge(switchVariants({ checked, disabled, size }), className)}
        >
          <span className={twMerge(dotVariants({ checked, size }))}>
            {withIcon &&
              (checked ? (
                <CheckIcon
                  className={twMerge(iconVariants({ checked, size }))}
                  aria-hidden="true"
                />
              ) : (
                <XMarkIcon
                  className={twMerge(iconVariants({ checked, size }))}
                  aria-hidden="true"
                />
              ))}
          </span>
        </button>
      )}
    </Switch>
  );
};

export default ToggleSwitch;
