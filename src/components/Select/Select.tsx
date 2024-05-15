import { ElementType } from "react";
import ReactSelect, { Props } from "react-select";
import ErrorMessage from "src/internal/ErrorMessage";
import FormLabel from "src/internal/FormLabel";

import { DropdownIndicator, selectClassName, selectStyles } from "./styles";

export interface SelectOptionProps {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<Props, "size" | "options"> {
  options: SelectOptionProps[];
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
  return (
    <>
      <FormLabel name={name} label={label} />
      <ReactSelect
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
        styles={selectStyles}
        classNames={selectClassName({ size, error, className })}
        {...rest}
      />
      {<ErrorMessage error={error} supportText={supportText} errorMsg={errorMsg} />}
    </>
  );
};
