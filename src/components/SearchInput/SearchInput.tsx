import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, useEffect, useState, Fragment, ReactNode, ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Text } from "../Text";

export type SearchInputOption = {
  label: string;
  value: any;
};

interface SearchInputRemoteDataConfig {
  debounceTime: number;
}

// eslint-disable-next-line @typescript-eslint/ban-types
const debounce = (fn: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

interface SearchInputType {
  label: string;
  options?: SearchInputOption[];
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  selectedValue?: string | string[];
  fetchRemoteData?: (query: string) => Promise<SearchInputOption[]>;
  remoteDataConfig?: SearchInputRemoteDataConfig;
  setSelectedValue: (value: any) => void;
  multiple: boolean;
  placeholder?: string;
  error?: boolean;
  leftIcon?: ElementType;
}

export type SearchInputVariantProps = VariantProps<typeof SearchInputButtonVariants>;

export const SearchInputOptionsVariants = cva(
  "rounded-plug-md flex cursor-pointer select-none items-center m-1 pl-2 justify-between text-gray-800",
  {
    variants: {
      size: {
        lg: "h-14 py-3 text-md",
        md: "h-11 py-2 text-md",
        sm: "h-10 py-1 text-sm",
      },
      active: {
        true: "bg-gray-100",
        false: "text-gray-950 ",
      },
      selected: {
        true: "bg-gray-100",
        false: "",
      },
    },
  },
);

export const SearchInputButtonVariants = cva(
  "rounded-plug-md relative my-2 pl-3 w-full cursor-default border pr-10 text-left text-gray-600 hover:bg-gray-100",
  {
    variants: {
      disabled: {
        true: "opacity-40",
        false: "opacity-100",
      },
      size: {
        lg: "x-1 h-14 text-md",
        md: "x-0.5 h-11 text-md",
        sm: "x h-10 text-sm",
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

interface SearchInputHTMLAttributes extends InputHTMLAttributes<HTMLInputElement> {}

export interface SearchInputProps
  extends Omit<SearchInputVariantProps, "size" | "disabled" | "error">,
    SearchInputType,
    Omit<SearchInputHTMLAttributes, "size" | "disabled" | "multiple"> {}

    
// function SearchInput({
//   options = [],
//   size = "md",
//   label,
//   disabled = false,
//   className,
//   selectedValue = "",
//   fetchRemoteData,
//   remoteDataConfig = {
//     debounceTime: 300,
//   },
//   setSelectedValue,
//   multiple = false,
//   ...rest
// }: SearchInputProps) {
//   const [query, setQuery] = useState("");
//   const [apiOptions, setApiOptions] = useState<SearchInputOption[person]>([]);
//   const [loading, setLoading] = useState(false);

//   const array = fetchRemoteData ? apiOptions : options;

//   useEffect(() => {
//     if (!fetchRemoteData) {
//       return;
//     }

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchRemoteData(query);
//         setApiOptions(data);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const debouncedFetchData = debounce(fetchData, remoteDataConfig.debounceTime);

//     debouncedFetchData();
//   }, [query, fetchRemoteData]);

//   let filteredOption: SearchInputOption[] = [];

//   // Handles filtering options
//   if (fetchRemoteData) {
//     filteredOption = apiOptions;
//   } else {
//     if (query === "") {
//       filteredOption = options;
//     } else {
//       filteredOption = options.filter((option) =>
//         option.label.toLowerCase().includes(query.toLowerCase()),
//       );
//     }
//   }

//   const handleOptionClick = (value: string) => {
//     if (multiple) {
//       const newSelectedValues = Array.isArray(selectedValue) ? [...selectedValue] : [];
//       const index = newSelectedValues.indexOf(value);
//       if (index === -1) {
//         newSelectedValues.push(value);
//       } else {
//         newSelectedValues.splice(index, 1);
//       }
//       setSelectedValue(newSelectedValues);
//     } else {
//       setSelectedValue(value);
//     }
//   };

//   const labelValue = () => {
//     const auxArray = [];
//     if (multiple && selectedValue.length > 0) {
//       for (const x in array) {
//         for (const y in selectedValue as string[]) {
//           if (array[x].value == selectedValue[y]) {
//             auxArray.push(array[x].label);
//           }
//         }
//       }
//       return auxArray.join(", ");
//     } else {
//       return array.find((option) => option.value === selectedValue)?.label;
//     }
//   };

//   const checked = (option: SearchInputOption) => {
//     const selected = array.indexOf(option.value);
//     if (selected) {dropdownIconVariant({ size, open })
//       return (
//         <Text size="md" className="text-gray-700">
//           {option.label}
//         </Text>
//       );
//     } else {
//       return (
//         <Text size="md" className="text-primary-300">
//           {option.label}
//         </Text>
//       );
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center">
//       <input
//         type="text"
//         placeholder={label}
//         disabled={disabled}
//         value={labelValue()}
//         className={twMerge(SearchInputVariants({ size }), className)}
//         {...rest}
//         onChange={(e) => {
//           setQuery(e.target.value);
//           // handleOptionClick(e.target.value);
//         }}
//       />
//       {loading && (
//         <div className="absolute right-2 top-1/2 -translate-y-1/2">
//           {/* Aqui você pode usar um ícone de carregamento, por exemplo, um spinner */}
//           <div className="h-5 w-5 animate-spin rounded-full border-t-2 border-solid border-primary-500"></div>
//         </div>
//       )}
//       {filteredOption.length > 0 ? (
//         <div className="absolute inset-x-0 top-full mt-1 flex h-auto max-h-52 flex-col overflow-y-auto rounded-lg border border-gray-100 bg-white opacity-0 peer-focus:opacity-100">
//           {filteredOption.map((option) => (
//             <div
//               key={option.value}
//               className={`flex h-14 cursor-pointer items-center px-4 text-md text-gray-900 hover:bg-gray-50 ${
//                 multiple && selectedValue.includes(option.value)
//                   ? "bg-gray-200" // Adicione um estilo diferente para opções selecionadas
//                   : ""
//               }`}
//               onClick={() => {
//                 handleOptionClick(option.value);
//               }}
//             >
//               {checked(option)}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="absolute inset-x-0 top-full mt-1 flex max-h-52 flex-col rounded-lg border border-gray-100 bg-white opacity-0 peer-focus:opacity-100">
//           <div className="flex h-14 items-center px-4 text-md text-gray-900">
//             {!loading ? "Nenhum resultado encontrado" : "Carregando..."}
//           </div>
//         </div>
//       )}
//       {selectedValue !== "" && (
//         <XMarkIcon
//           className="absolute right-2 h-5 w-5 cursor-pointer text-gray-500 peer-focus:text-gray-700"
//           onClick={() => {
//             setSelectedValue("");
//           }}
//           data-testid="clear-icon"
//         />
//       )}
//       <MagnifyingGlassIcon className="absolute left-2 h-5 w-5 cursor-pointer text-gray-500 peer-focus:text-gray-700" />
//     </div>
//   );
// }


export const dropdownIconVariant = cva("text-gray-700", {
  variants: {
    size: {
      lg: "h-6 w-6",
      md: "h-6 w-6",
      sm: "h-5 w-5",
    },
    open: {
      true: "rotate-180"
    }
  },
});


function SearchInput({
    options = [],
    size = "md",
    label,
    disabled = false,
    className,
    selectedValue = "",
    fetchRemoteData,
    remoteDataConfig = {
      debounceTime: 300,
    },
    leftIcon: LeftIcon,
    placeholder,
    setSelectedValue,
    multiple = false,
    error = false,
    ...rest
  }: SearchInputProps) {

    const [selected, setSelected] = useState<any>(multiple ? [] : "");
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [optionsInput, setOptionsInput] = useState(options)

  useEffect(() => {
    if (!fetchRemoteData) {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchRemoteData(query);
        console.log(data)
        setOptionsInput(data);
      } finally {
        setLoading(false);
      }
    };

    const debouncedFetchData = debounce(fetchData, remoteDataConfig.debounceTime);

    debouncedFetchData();
  }, [query, fetchRemoteData]);

  
    const filteredOptions =
      query === ''
        ? optionsInput
        : optionsInput.filter((option) =>
            option.label
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          )

    const placeHolderMultiple = () => {
      const auxArray = [];
      for(let i in selected) {
        auxArray.push(selected[i].label);
      }
      return auxArray.join(', ')
    }


    return (
    <div className="w-full">
      <Combobox value={selected} onChange={setSelected} {...rest} multiple>
      {({ open }) => (
        <div>
          {label && <Combobox.Label className="text-sm font-medium text-gray-900">{label}</Combobox.Label>}
          <div className={`relative w-full`}>
            <Combobox.Input
              className={twMerge(SearchInputButtonVariants({size, disabled, error, open}), LeftIcon && "pl-10")}
              displayValue={(option: SearchInputOption) => placeholder && (selected.length == 0 || selected == "") ? placeholder : multiple ? placeHolderMultiple() : option.label}
              onChange={(event) => setQuery(event.target.value)}
            />

            {
            LeftIcon && 
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <LeftIcon className={twMerge(dropdownIconVariant({ size, open }), "transform-none")} />
            </div>
            }
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpIcon  aria-hidden="true" className={dropdownIconVariant({ size, open })} />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="appearence-none headlessui-listbox-option-:r1o:ring-primary-100 rounded-plug-md z-30 mt-1 max-h-60 w-full overflow-auto bg-white py-1 ring-1 ring-gray-100">
              {filteredOptions.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-3 py-2 text-gray-800">
                  Nothing found.
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <Combobox.Option
                    key={option.value}
                    className={({ active, selected }) =>
                    SearchInputOptionsVariants({size, active, selected})
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className="flex w-full items-center justify-between truncate text-gray-800"
                        >
                          {option.label}
                        </span>
                        {selected && (
                          <CheckIcon className="mr-3 h-5 w-5 text-gray-800" />
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      )}
      </Combobox>
    </div>
  )
  }

export default SearchInput;
