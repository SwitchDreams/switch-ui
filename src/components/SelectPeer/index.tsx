import Select from "react-select";

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

const SelectInput = ({
  options,
  //   size,
  label,
  disabled,
  supportText,
  //   error,
  placeholder,
  multiple,
  errorMsg,
}: SelectType) => {
  return (
    <div>
      <p>{label}</p>
      <Select
        styles={{ height: "100%", width: "100%" }}
        className="h-52 border border-primary-500"
        isDisabled={disabled}
        isMulti={multiple}
        placeholder={placeholder}
        name={label}
        options={options}
      />
      <p>{supportText}</p>
      <p>{errorMsg}</p>
    </div>
  );
};

export default SelectInput;
