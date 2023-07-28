import { Listbox, ListboxProps, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";
import { ElementType, Fragment, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { Text } from "../Text";

type Options = {
  id: number;
  option: string;
};

interface SelectBoxType extends ListboxProps<any, any, any> {
  options: Options[];
  size?: "lg" | "md" | "sm";
  label: string;
  disabled?: boolean;
  supportText?: string;
  leftIcon?: ElementType;
  error?: boolean;
}

export type SelectBoxVariantProps = VariantProps<typeof selectBoxVariants>;

export const selectBoxVariants = cva("relative m-1 cursor-default select-none rounded pl-2", {
  variants: {
    size: {
      lg: "x-1 py-3 text-md",
      md: "x-0.5 py-2 text-md",
      sm: "x py-1 text-md",
    },
    active: {
      true: "bg-white hover:bg-gray-100",
      false: "text-gray-950",
    },
  },
});

export const selectBoxButtonVariants = cva(
  "relative w-full cursor-default rounded-lg border text-left hover:bg-gray-100",
  {
    variants: {
      disabled: {
        true: "opacity-40",
        false: "opacity-100",
      },
      size: {
        lg: "x-1 py-3 text-md",
        md: "x-0.5 py-2 text-md",
        sm: "x py-1 text-md",
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

function SelectBox({
  options,
  size = "md",
  label,
  disabled = false,
  className,
  supportText,
  leftIcon: LeftIcon,
  error = false,
  ...rest
}: SelectBoxProps) {
  const renderChevron = (open: boolean): ReactNode => {
    if (disabled) {
      return <ChevronDownIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />;
    }
    return (
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        {open ? (
          <ChevronDownIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
        ) : (
          <ChevronUpIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
        )}
      </span>
    );
  };
  return (
    <div>
      <Listbox disabled={disabled} {...rest}>
        {({ open, value }) => (
          <>
            <Listbox.Label className="mb-1 block text-md text-gray-900">{label}</Listbox.Label>
            <div className="relative">
              <Listbox.Button
                className={twMerge(
                  selectBoxButtonVariants({ disabled, size, error, open }),
                  className,
                )}
              >
                <span className="flex gap-2 truncate pl-3">
                  {LeftIcon && <LeftIcon className="h-6 w-6 text-gray-700" />}
                  {value}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  {renderChevron(open)}
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 ring-1 ring-gray-100">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={({ active }) => selectBoxVariants({ size, active })}
                      value={option.option}
                    >
                      {({ selected }) => (
                        <span
                          className={`block truncate ${
                            selected ? "flex justify-between text-md" : "text-gray-800"
                          }`}
                        >
                          {option.option}
                          {selected && <CheckIcon className="mr-3 h-5 w-5 text-gray-700" />}
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
