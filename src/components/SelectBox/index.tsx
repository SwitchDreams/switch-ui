import { useState, Fragment, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react';
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";


interface SelectBoxType extends React.ButtonHTMLAttributes<HTMLSelectElement> {
  options: string[],
  size: 'lg' | 'md' | 'sm',
  label: string,
  disabled: boolean,
  supportText: string
}

export type SelectBoxVariantProps = VariantProps<typeof selectBoxVariants>;

export const selectBoxVariants = cva("", {
  variants: {
    size: {
      lg: ["text-md", "px-1 py-3"],
      md: ["text-md", "px-0.5 py-2"],
      sm: ["text-md", "px py-1"],
    },
  },
});

export interface SelectBoxProps extends Omit<SelectBoxVariantProps,'size'>, SelectBoxType {}

function SelectBox({
  options,
  size,
  label,
  disabled=false,
  className,
  supportText
}: SelectBoxProps) {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const seletBoxClass = twMerge(selectBoxVariants({ size }), className);
  let disableClass = "";
  let isOpenClass = "";

  const buttonElement = document.querySelector('button[aria-expanded]');
  const ariaExpandedValue = buttonElement?.getAttribute('aria-expanded');


  useEffect(() => {
    setIsOpen(!Boolean(ariaExpandedValue))
  }, [ariaExpandedValue])

  if(isOpen) {
    isOpenClass = "border border-primary-100 "
  }

  if(disabled) {
    disableClass = ' opacity-40 ';
  }

  return (
    <div>
    <label className="block mb-1 text-md text-gray-900">{label}</label>
    <Listbox value={selected} onChange={setSelected} disabled={disabled}>
      <div className="relative">
        <Listbox.Button onClick={() => setIsOpen(!isOpen)} className={"relative w-full hover:bg-gray-100 cursor-default rounded-lg text-left shadow-md " + isOpenClass + disableClass + seletBoxClass}>
          <span className="block truncate pl-4">{selected}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            {isOpen ? 
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              /> :
              <ChevronUpIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true" 
              />
            }
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="bg-white absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 shadow-lg ring-1 ring-gray-100 z-30">
            {options.map((option) => (
              <Listbox.Option
                key={option}
                className={({ active }) =>
                  `relative cursor-default select-none rounded pl-4 ${
                    active ? ' bg-white hover:bg-gray-100' : 'text-gray-950'
                  } ${seletBoxClass}`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'text-md' : 'text-gray-800'
                      }`}
                    >
                      {option}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
    <p className="block mb-1 text-xs text-gray-500 pt-2">{supportText}</p>
    </div>
  )
}

export default SelectBox;