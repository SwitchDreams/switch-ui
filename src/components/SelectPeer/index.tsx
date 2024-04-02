import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Select, { components, DropdownIndicatorProps } from "react-select";

interface Options {
  value: string;
  label: string;
}

export interface SelectType {
  options: Options[];
  size?: "lg" | "md" | "sm";
  label: string;
  disabled?: boolean;
  supportText?: string;
  error?: boolean;
  placeholder?: string;
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

const controlStyles = {
  base: "border rounded-lg bg-white hover:cursor-pointer",
  focus: "border-primary-100",
  nonFocus: "border-coolGray-400 hover:border-primary-100",
};

const placeholderStyles = "text-coolGray-500 pl-3 py-2 text-md";
const selectInputStyles = "pl-1 py-1.5 text-md";
const valueContainerStyles = "p-1.5 gap-2";
const singleValueStyles = "leading-7 ml-2";
const multiValueStyles = "bg-gray-100 rounded items-center py-1.5 pl-3 pr-2 gap-2.5";
const multiValueLabelStyles = "leading-6 py-1.5";
const multiValueRemoveStyles =
  "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md";
const indicatorsContainerStyles = "p-1.5 gap-2";
const clearIndicatorStyles = "text-gray-500 p-1.5 rounded-md hover:bg-red-50 hover:text-red-800";
const indicatorSeparatorStyles = "bg-gray-300";
const dropdownIndicatorStyles = "p-1.5 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black";
const menuStyles = "p-1.5 mt-2 border border-gray-200 bg-white rounded-lg";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded-plug-md",
  focus: "bg-gray-100 active:bg-gray-200",
  selected: "after:content-['✔'] after:ml-3 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

const SelectInput = ({
  options,
  label,
  disabled,
  supportText,
  placeholder,
  multiple,
  errorMsg,
}: SelectType) => {
  return (
    <div>
      <p>{label}</p>
      <Select
        components={{ DropdownIndicator }}
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
            clsx(isFocused ? controlStyles.focus : controlStyles.nonFocus, controlStyles.base),
          placeholder: () => placeholderStyles,
          input: () => selectInputStyles,
          valueContainer: () => valueContainerStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          indicatorsContainer: () => indicatorsContainerStyles,
          clearIndicator: () => clearIndicatorStyles,
          indicatorSeparator: () => indicatorSeparatorStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          menu: () => menuStyles,
          groupHeading: () => groupHeadingStyles,
          option: ({ isFocused, isSelected }) =>
            clsx(
              isFocused && optionStyles.focus,
              isSelected && optionStyles.selected,
              optionStyles.base,
            ),
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
      />
      <p>{supportText}</p>
      <p>{errorMsg}</p>
    </div>
  );
};

export default SelectInput;
