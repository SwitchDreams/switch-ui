// This component is a little bit difference to reuse this styles in AsyncSelect and Select components.

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { components, ControlProps, DropdownIndicatorProps } from "react-select";
import { twMerge } from "tailwind-merge";

const selectVariants = cva(
  "sw-ui-rounded-curvature-md relative my-2 w-full cursor-default border text-left text-coolGray-900 hover:bg-coolGray-50",
  {
    variants: {
      disabled: {
        true: "opacity-40",
        false: "opacity-100",
      },
      size: {
        lg: "min-h-14 text-md",
        md: "min-h-11 text-md",
        sm: "min-h-10 text-sm",
      },
      error: {
        true: "border-error-600",
      },
    },
  },
);

export const selectStyles = {
  input: (base: any) => ({
    ...base,
    "input:focus": {
      boxShadow: "none",
    },
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    whiteSpace: "normal",
    overflow: "visible",
  }),
  control: (base: any) => ({
    ...base,
    transition: "none",
  }),
};

interface ControlStylesProps {
  size: "lg" | "md" | "sm";
  error: boolean;
  className?: string;
}

export const Control = ({ children, ...props }: ControlProps) => {
  // @ts-ignore
  const LeftIcon = props.selectProps?.leftIcon;

  return (
    <components.Control {...props}>
      {LeftIcon && <LeftIcon className="ml-2 h-5 w-5 text-coolGray-500" />}
      {children}
    </components.Control>
  );
};

const controlStylesCalc = ({ size, error, className }: ControlStylesProps) => ({
  base: twMerge(
    selectVariants({
      size,
      error,
    }),
    className,
  ),
  focus: "border-primary-100",
  nonFocus: "border-coolGray-400 hover:border-primary-100",
});

const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 mt-1 rounded text-md h-11",
  focus: "bg-coolGray-50",
  selected: "bg-primary-25 text-coolGray-900",
};

export const selectClassName = ({ ...rest }: ControlStylesProps) => {
  const controlStyles = controlStylesCalc(rest);
  return {
    control: ({ isFocused }: { isFocused: boolean }) =>
      twMerge(isFocused ? controlStyles.focus : controlStyles.nonFocus, controlStyles.base),
    input: () => "text-coolGray-900 pl-3 text-md",
    placeholder: () => "text-coolGray-500 pl-3 text-md",
    singleValue: () => "text-coolGray-900 pl-3 text-md",
    multiValue: () =>
      "ml-1 my-1 rounded-3xl bg-primary-25 px-2.5 py-2 text-primary-500 text-xs items-center gap-2.5",
    indicatorsContainer: () => "p-1.5 gap-2 cursor-pointer",
    dropdownIndicator: () => "p-1.5 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black",
    menu: () => "p-1.5 mt-2 border border-primary-25 bg-white rounded-lg shadow-md",
    groupHeading: () => "ml-3 mt-2 mb-1 text-gray-500 text-md",
    option: ({ isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }) =>
      twMerge(
        isFocused && optionStyles.focus,
        isSelected && optionStyles.selected,
        optionStyles.base,
      ),
    noOptionsMessage: () =>
      "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm",
  };
};

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon className="h-5 w-5" />
    </components.DropdownIndicator>
  );
};
