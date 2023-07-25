import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";
import { Fragment, SetStateAction, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"
import { EnvelopeIcon, CheckIcon } from "@heroicons/react/24/outline";

type Options = {
  id: number,
  option: string
}
interface SelectBoxType extends React.ButtonHTMLAttributes<HTMLSelectElement> {
  options: Options[];
  size?: "lg" | "md" | "sm";
  label: string;
  disabled?: boolean;
  supportText?: string;
}

export type SelectBoxVariantProps = VariantProps<typeof selectBoxVariants>;

export const selectBoxVariants = cva("", {
  variants: {
    size: {
      lg: "text-md x-1 py-3",
      md: "text-md x-0.5 py-2",
      sm: "text-md x py-1",
    },
  },
});

export const selectBoxDisabledVariants = cva(
  "relative w-full cursor-default rounded-lg text-left shadow-md hover:bg-gray-100", {
  variants: {
    disabled: {
      true: "opacity-40",
      false: "opacity-100",
    },
    size: {
      lg: "text-md x-1 py-3",
      md: "text-md x-0.5 py-2",
      sm: "text-md x py-1",
    }
  },
});

export interface SelectBoxProps extends Omit<SelectBoxVariantProps, "size">, SelectBoxType {}

function SelectBox({
  options,
  size = 'md',
  label,
  disabled = false,
  className,
  supportText,
  ...rest
}: SelectBoxProps) {
  const [selected, setSelected] = useState<SetStateAction<any>>(options[0].option);
  const [isOpenClass, setIsOpenClass] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const seletBoxClass = twMerge(selectBoxVariants({ size }), className);
  const selectBoxDisabledClass = twMerge(selectBoxDisabledVariants({disabled, size}), className);

  const isOpen = () => {
    const buttonElement = document.querySelector("button[aria-expanded]");
    const ariaExpandedValue = buttonElement?.getAttribute("aria-expanded"); 
    
    if(ariaExpandedValue == 'true') {
      setIsOpenClass(' border border-primary-100');
      setIsDropdownOpen(true);
    }
    else {
      setIsOpenClass('');
      setIsDropdownOpen(false);
    }
  }

  document.addEventListener("click", isOpen);


  return (
    <div >
      <label className="mb-1 block text-md text-gray-900">{label}</label>
      <Listbox value={selected} onChange={setSelected} disabled={disabled} {...rest}>
        <div className="relative">
          <Listbox.Button
            className={
              selectBoxDisabledClass + isOpenClass
            }
          >
            <span className="block truncate pl-3 flex gap-2">
              <EnvelopeIcon className="h-6 w-6 text-gray-700" />
              {selected}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              {isDropdownOpen ? (
                <ChevronDownIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
              ) : (
                <ChevronUpIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
              )}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-gray-100">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className={({ active }) =>
                    `relative cursor-default select-none rounded pl-3 m-1 ${
                      active ? " bg-white hover:bg-gray-100" : "text-gray-950"
                    } ${seletBoxClass}`
                  }
                  value={option.option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "text-md flex justify-between" : "text-gray-800"}`}>
                        {option.option}
                        {selected && <CheckIcon className="h-5 w-5 text-gray-700 mr-3" />}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <p className="mb-1 block pt-2 text-xs text-gray-500">{supportText}</p>
    </div>
  );
}

export default SelectBox;
