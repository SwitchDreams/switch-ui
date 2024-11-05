import { ElementType } from "react";
import ReactAsyncSelect, { AsyncProps } from "react-select/async";
import ErrorMessage from "src/internal/ErrorMessage";
import FormLabel from "src/internal/FormLabel";

import { DropdownIndicator, selectClassName, selectStyles } from "./styles";

export interface SelectOptionsProps {
  value: string;
  label: string;
}

export interface AsyncSelectProps extends Omit<AsyncProps<any, any, any>, "size" | "options"> {
  options: SelectOptionsProps[];
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
  containerClassName?: string;
  labelClassName?: string;
}

export const AsyncSelect = ({
  options,
  name,
  size = "md",
  label,
  disabled,
  supportText,
  multiple,
  errorMsg,
  className,
  containerClassName = "size-fit",
  error = false,
  loadingMessage = () => "Carregando...",
  noOptionsMessage = () => "Sem opções encontradas",
  closeMenuOnSelect = !multiple,
  hideSelectedOptions = false,
  labelClassName,
  ...rest
}: AsyncSelectProps) => {
  return (
    <div className={`${containerClassName}`}>
      <FormLabel name={name} label={label} className={`${labelClassName}`} />
      <ReactAsyncSelect
        components={{
          DropdownIndicator,
        }}
        loadingMessage={loadingMessage}
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
      {<ErrorMessage error={error} supportText={supportText} errorMsg={errorMsg} />}
    </div>
  );
};
