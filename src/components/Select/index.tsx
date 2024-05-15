import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { ElementType } from "react";
import ReactSelect, { components, DropdownIndicatorProps, Props } from "react-select";
import ErrorMessage from "src/internal/ErrorMessage";
import FormLabel from "src/internal/FormLabel";
import { twMerge } from "tailwind-merge";

interface SelectOptions {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<Props, "size" | "options"> {
  options: SelectOptions[];
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
  multiple,
  errorMsg,
  className,
  error = false,
  closeMenuOnSelect = !multiple,
  hideSelectedOptions = false,
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

  const optionStyles = {
    base: "hover:cursor-pointer px-3 py-2 rounded text-sm h-11",
    focus: "bg-coolGray-50",
    selected: "bg-primary-25 text-coolGray-900",
  };

  return (
    <>
      <FormLabel name={name} label={label} />
      <ReactSelect
        {...rest}
        components={{
          DropdownIndicator,
        }}
        isDisabled={disabled}
        isMulti={multiple}
        name={label}
        options={options}
        closeMenuOnSelect={closeMenuOnSelect}
        hideSelectedOptions={hideSelectedOptions}
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
          input: () => "text-coolGray-900 pl-3 text-sm",
          placeholder: () => "text-coolGray-500 pl-3 text-sm",
          singleValue: () => "text-coolGray-900 pl-3 text-sm",
          multiValue: () =>
            "rounded-3xl bg-primary-25 px-2.5 py-2 text-primary-500 text-xs items-center gap-2.5",
          indicatorsContainer: () => "p-1.5 gap-2",
          dropdownIndicator: () =>
            "p-1.5 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black",
          menu: () => "p-1.5 mt-2 border border-gray-200 bg-white rounded-lg",
          groupHeading: () => "ml-3 mt-2 mb-1 text-gray-500 text-sm",
          option: ({ isFocused, isSelected }) =>
            twMerge(
              isFocused && optionStyles.focus,
              isSelected && optionStyles.selected,
              optionStyles.base,
            ),
          noOptionsMessage: () =>
            "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm",
        }}
      />
      {<ErrorMessage error={error} supportText={supportText} errorMsg={errorMsg} />}
    </>
  );
};
