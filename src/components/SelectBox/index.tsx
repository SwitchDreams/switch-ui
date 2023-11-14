import { Listbox, ListboxProps, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";
import { ElementType, Fragment, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Text } from "../Text";

type Options = {
  value: number;
  label: string;
};

interface SelectBoxType extends ListboxProps<any, any, any> {
  options: Options[];
  size?: "lg" | "md" | "sm";
  label: string;
  disabled?: boolean;
  supportText?: string;
  leftIcon?: ElementType;
  error?: boolean;
  placeholder?: string;
  multiple?: boolean;
}

export type SelectBoxVariantProps = VariantProps<typeof selectBoxVariants>;

export const selectBoxVariants = cva(
  "rounded-plug-md relative m-1 cursor-default select-none pl-2 text-gray-100",
  {
    variants: {
      size: {
        lg: "h-14 py-3 text-md",
        md: "h-11 py-2 text-md",
        sm: "h-10 py-1 text-md",
      },
      active: {
        true: "bg-white hover:bg-gray-100",
        false: "text-gray-950",
      },
    },
  },
);

export const selectBoxButtonVariants = cva(
  "rounded-plug-md relative my-2 w-full cursor-default border pr-10 text-left text-gray-600 hover:bg-gray-100",
  {
    variants: {
      disabled: {
        true: "opacity-40",
        false: "opacity-100",
      },
      size: {
        lg: "x-1 h-14 text-md",
        md: "x-0.5 h-12 text-md",
        sm: "x h-11 text-md",
      },
      open: {
        true: "border-primary-100",
        false: "border-gray-100",
      },
      error: {
        true: "border-error-600",
      },
    },
  },
);

export const selectBoxSupportTextVariants = cva("mb-1 block pt-2 text-xs text-gray-600", {
  variants: {
    error: {
      true: "text-error-600",
    },
  },
});

export interface SelectBoxProps extends Omit<SelectBoxVariantProps, "size">, SelectBoxType {}

// Helper function to render the chevron icon based on the open state
const renderChevron = (open: boolean): ReactNode => {
  const icon = open ? <ChevronDownIcon /> : <ChevronUpIcon />;
  return (
    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
      {icon}
    </span>
  );
};

// Helper function to find selected option labels for multiple selection
const findOption = (options: any[], selectedOption: string | any[]): string => {
  const selectedLabels = options
    .filter((option) => selectedOption.includes(option.value))
    .map((option) => option.label);

  return selectedLabels.join(", ");
};

function SelectBox({
  options,
  size = "md",
  label,
  disabled = false,
  className,
  supportText,
  leftIcon: LeftIcon,
  error = false,
  placeholder,
  multiple = false,
  onChange = () => {},
  defaultValue,
  ...rest
}: SelectBoxProps) {
  // Initialize selectedOption state based on multiple prop
  const [selectedOption, setSelectedOption] = useState(
    multiple ? defaultValue || [] : defaultValue || -1,
  );

  // Event handler for option selection change
  const handleOptionChange = (e: any) => {
    setSelectedOption(e);
    onChange(e);
  };

  return (
    <div>
      <Listbox multiple={multiple} value={selectedOption} onChange={handleOptionChange} {...rest}>
        {({ open }) => (
          <>
            <Listbox.Label className="text-sm font-medium text-gray-900">{label}</Listbox.Label>
            <div className="relative">
              <Listbox.Button
                className={twMerge(
                  selectBoxButtonVariants({ disabled, size, error, open }),
                  className,
                )}
              >
                <>
                  <span className="flex gap-2 truncate pl-3">
                    {LeftIcon && <LeftIcon className="h-6 w-6 text-gray-700" />}
                    {multiple
                      ? selectedOption.length === 0
                        ? placeholder
                        : findOption(options, selectedOption)
                      : selectedOption === -1
                      ? placeholder
                      : options.find((option) => option.value === selectedOption)?.label}
                  </span>
                  {renderChevron(open)}
                </>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="rounded-plug-md absolute z-30 mt-1 max-h-60 w-full overflow-auto bg-white py-1 ring-1 ring-gray-100">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.value}
                      value={option.value}
                      className={({ active }) => selectBoxVariants({ size, active })}
                    >
                      {({ selected }) => (
                        <span
                          className={`block truncate ${
                            selected ? "flex justify-between text-md" : "text-gray-800"
                          }`}
                        >
                          {selected ? (
                            <div className="text-secondary-700">{option.label}</div>
                          ) : (
                            <div className="text-primary-700">{option.label}</div>
                          )}
                          {selected && <CheckIcon className="mr-3 h-5 w-5 text-secondary-700" />}
                        </span>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      {supportText && (
        <Text className={selectBoxSupportTextVariants({ error })} as="span">
          {supportText}
        </Text>
      )}
    </div>
  );
}

export default SelectBox;
