import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { ElementType } from "react";
import ReactSelect, { components, DropdownIndicatorProps } from "react-select";
import ErrorMessage from "src/internal/ErrorMessage";
import FormLabel from "src/internal/FormLabel";
import { twMerge } from "tailwind-merge";

interface Options {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Options[];
  size?: "lg" | "md" | "sm";
  label: string;
  disabled?: boolean;
  leftIcon?: ElementType;
  supportText?: string;
  className?: string;
  error?: boolean;
  placeholder?: string;
  name: string;
  multiple?: boolean;
  errorMsg?: string;
}

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon className="h-5 w-5" />
    </components.DropdownIndicator>
  );
};

const selectBoxButtonVariants = cva(
  "rounded-plug-md relative my-2 w-full cursor-default border text-left text-coolGray-900 hover:bg-coolGray-50",
  {
    variants: {
      disabled: {
        true: "opacity-40",
        false: "opacity-100",
      },
      size: {
        lg: "h-14 text-md",
        md: "h-11 text-md",
        sm: "h-10 text-sm",
      },
      error: {
        true: "border-error-600",
      },
    },
  },
);

export const Select = ({
  options,
  name,
  size = "md",
  label,
  disabled,
  supportText,
  placeholder,
  multiple,
  errorMsg,
  className,
  error = false,
  ...rest
}: SelectProps) => {
  const controlStyles = {
    base: twMerge(
      selectBoxButtonVariants({
        size,
        error,
      }),
      className,
    ),
    focus: "border-primary-100",
    nonFocus: "border-coolGray-400 hover:border-primary-100",
  };
  const selectInputStyles = "pl-4 text-md";
  const singleValueStyles = "leading-7 ml-5 text-red";
  const multiValueStyles = "rounded items-center py-1.5 pl-3 pr-2 gap-2.5";
  const multiValueLabelStyles = "leading-6";
  const indicatorsContainerStyles = "p-1.5 gap-2";
  const dropdownIndicatorStyles =
    "p-1.5 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black";
  const menuStyles = "p-1.5 mt-2 border border-gray-200 bg-white rounded-lg";
  const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
  const optionStyles = {
    base: "hover:cursor-pointer px-3 py-2 rounded-plug-md",
    focus: "bg-coolGray-50",
    selected: "after:content-['✔'] after:ml-3 bg-coolGray-50 after:text-green-500 text-gray-500",
  };
  const noOptionsMessageStyles =
    "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";
  const placeholderStyles = "text-coolGray-500 pl-5 text-md";

  return (
    <div>
      <FormLabel name={name} label={label} />
      <ReactSelect
        {...rest}
        components={{
          DropdownIndicator,
        }}
        isDisabled={disabled}
        isMulti={multiple}
        placeholder={placeholder}
        name={label}
        options={options}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        unstyled
        styles={{
          input: (base) => ({
            ...base,
            "input:focus": {
              boxShadow: "none",
            },
          }),
          multiValueLabel: (base) => ({
            ...base,
            whiteSpace: "normal",
            overflow: "visible",
          }),
          control: (base) => ({
            ...base,
            transition: "none",
          }),
        }}
        classNames={{
          control: ({ isFocused }) =>
            twMerge(isFocused ? controlStyles.focus : controlStyles.nonFocus, controlStyles.base),
          input: () => selectInputStyles,
          placeholder: () => placeholderStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          indicatorsContainer: () => indicatorsContainerStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          menu: () => menuStyles,
          groupHeading: () => groupHeadingStyles,
          option: ({ isFocused, isSelected }) =>
            twMerge(
              isFocused && optionStyles.focus,
              isSelected && optionStyles.selected,
              optionStyles.base,
            ),
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
      />
      {<ErrorMessage error={error} supportText={supportText} errorMsg={errorMsg} />}
    </div>
  );
};
