import { ElementType } from "react";
import ReactSelect, { Props } from "react-select";
import FormLabel from "src/internal/FormLabel";
import SupportOrErrorMessage from "src/internal/SupportOrErrorMessage";

import { Control, DropdownIndicator, selectClassName, selectStyles } from "./styles";

export interface SelectOptionProps {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<Props, "size" | "options"> {
  options: SelectOptionProps[];
  size?: "lg" | "md" | "sm";
  label?: string;
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
  noOptionsMessage = () => "Sem opções encontradas",
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
          Control,
        }}
        noOptionsMessage={noOptionsMessage}
        isDisabled={disabled}
        isMulti={multiple}
        name={name}
        options={options}
        closeMenuOnSelect={closeMenuOnSelect}
        hideSelectedOptions={hideSelectedOptions}
        unstyled
        styles={selectStyles}
        classNames={selectClassName({ size, error, className })}
        {...rest}
      />
      {<SupportOrErrorMessage error={error} supportText={supportText} errorMsg={errorMsg} />}
    </>
  );
};
