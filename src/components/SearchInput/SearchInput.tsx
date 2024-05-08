import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Field,
  Label,
  Transition,
} from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { cva, type VariantProps } from "class-variance-authority";
import { ElementType, Fragment, InputHTMLAttributes, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

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
  label?: string;
  name: string;
  options?: SearchInputOption[];
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  fetchRemoteData?: (query: string) => Promise<SearchInputOption[]>;
  remoteDataConfig?: SearchInputRemoteDataConfig;
  selectedValue?: string;
  setSelectedValue: (value: any) => void;
  multiple?: boolean;
  placeholder?: string;
  error?: boolean;
  leftIcon?: ElementType;
}

export type SearchInputVariantProps = VariantProps<typeof SearchInputButtonVariants>;

export const SearchInputOptionsVariants = cva(
  "rounded-plug-md m-1 flex cursor-pointer select-none items-center justify-between pl-2 text-coolGray-900",
  {
    variants: {
      size: {
        lg: "h-14 py-3 text-md",
        md: "h-11 py-2 text-md",
        sm: "h-10 py-1 text-sm",
      },
      active: {
        true: "bg-coolGray-50",
        false: "",
      },
      selected: {
        true: "bg-coolGray-50",
        false: "",
      },
    },
  },
);

export const SearchInputButtonVariants = cva(
  "rounded-plug-md input relative my-2 w-full cursor-default border border-coolGray-400 pl-3 pr-10 text-left text-coolGray-500 hover:bg-coolGray-50 focus:outline-none",
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
        false: "border-coolGray-400",
      },
      error: {
        true: "border-error-600",
      },
    },
  },
);

export const iconVariant = cva("text-coolGray-500", {
  variants: {
    size: {
      lg: "h-5 w-5",
      md: "h-5 w-5",
      sm: "h-4 w-4",
    },
  },
});

interface SearchInputHTMLAttributes extends InputHTMLAttributes<HTMLInputElement> {}

export interface SearchInputProps
  extends Omit<SearchInputVariantProps, "size" | "disabled" | "error">,
    SearchInputType,
    Omit<SearchInputHTMLAttributes, "size" | "disabled" | "multiple" | "name"> {}

function SearchInput({
  options = [],
  size = "md",
  label,
  name,
  disabled = false,
  className,
  fetchRemoteData,
  remoteDataConfig = {
    debounceTime: 300,
  },
  leftIcon: LeftIcon,
  placeholder,
  setSelectedValue,
  multiple = false,
  error,
  ...rest
}: SearchInputProps) {
  const [selected, setSelected] = useState<any>(multiple ? [] : "");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [optionsInput, setOptionsInput] = useState(options);
  const [placeholderButton, setPlaceholderButton] = useState(placeholder);

  useEffect(() => {
    if (!fetchRemoteData) {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchRemoteData(query);
        setOptionsInput(data);
      } finally {
        setLoading(false);
      }
    };

    const debouncedFetchData = debounce(fetchData, remoteDataConfig.debounceTime);

    debouncedFetchData();
  }, [query, fetchRemoteData]);

  useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);

  const placeHolderMultiple = () => {
    const auxArray = [];
    for (const i in selected) {
      auxArray.push(selected[i].label);
    }
    return auxArray.join(", ");
  };

  let filteredOptions: SearchInputOption[] = [];

  if (fetchRemoteData) {
    filteredOptions = optionsInput;
  } else {
    if (query === "") {
      filteredOptions = optionsInput;
    } else {
      filteredOptions = optionsInput.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase()),
      );
    }
  }

  if (multiple) {
    return (
      <Field className="w-full">
        <Combobox disabled={disabled} value={selected} onChange={setSelected} {...rest} multiple>
          {({ open }) => (
            <div>
              {label && <Label className="text-sm font-medium text-coolGray-900">{label}</Label>}
              <div className="relative w-full">
                <ComboboxInput
                  name={name}
                  className={twMerge(
                    SearchInputButtonVariants({ size, disabled, error, open }),
                    className,
                    LeftIcon && "pl-10",
                  )}
                  displayValue={() =>
                    placeholderButton && (selected.length == 0 || selected == "")
                      ? placeholderButton
                      : placeHolderMultiple()
                  }
                  onChange={(event) => setQuery(event.target.value)}
                  onClick={() => setPlaceholderButton("")}
                />

                {LeftIcon && (
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <LeftIcon className={twMerge(iconVariant({ size }))} />
                  </div>
                )}
                {loading ? (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    {/* Aqui você pode usar um ícone de carregamento, por exemplo, um spinner */}
                    <div className="h-5 w-5 animate-spin rounded-full border-t-2 border-solid border-primary-300"></div>
                  </div>
                ) : (
                  selected.length > 0 && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <XMarkIcon
                        data-testid="clear-icon"
                        onClick={() => setSelected([])}
                        className={twMerge(iconVariant({ size }), "cursor-pointer")}
                      />
                    </div>
                  )
                )}
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <ComboboxOptions className="appearence-none rounded-plug-md z-30 mt-1 max-h-60 w-full overflow-auto bg-white py-1 shadow-md shadow-primary-25 ring-2 ring-primary-25">
                  {filteredOptions.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none px-3 py-2 text-coolGray-800">
                      Nothing found.
                    </div>
                  ) : (
                    filteredOptions.map((option: SearchInputOption) => (
                      <ComboboxOption
                        key={option.value}
                        className={({ active, selected }) =>
                          SearchInputOptionsVariants({ size, active, selected })
                        }
                        value={option}
                      >
                        {({ selected }) => (
                          <>
                            <span className="flex w-full items-center justify-between truncate text-coolGray-800">
                              {option.label}
                            </span>
                            {selected && <CheckIcon className="mr-3 h-5 w-5 text-coolGray-800" />}
                          </>
                        )}
                      </ComboboxOption>
                    ))
                  )}
                </ComboboxOptions>
              </Transition>
            </div>
          )}
        </Combobox>
      </Field>
    );
  } else {
    return (
      <Field className="w-full">
        <Combobox value={selected} onChange={setSelected} {...rest}>
          {({ open }) => (
            <div>
              {label && <Label className="text-sm font-medium text-coolGray-900">{label}</Label>}
              <div className="relative w-full">
                <ComboboxInput
                  name={name}
                  className={twMerge(
                    SearchInputButtonVariants({ size, disabled, error, open }),
                    LeftIcon && "pl-10",
                  )}
                  displayValue={(option: SearchInputOption) =>
                    placeholderButton && (selected.length == 0 || selected == "")
                      ? placeholderButton
                      : option.label
                  }
                  onChange={(event) => setQuery(event.target.value)}
                  onClick={() => setPlaceholderButton("")}
                />

                {LeftIcon && (
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <LeftIcon className={twMerge(iconVariant({ size }))} />
                  </div>
                )}
                {loading ? (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    {/* Aqui você pode usar um ícone de carregamento, por exemplo, um spinner */}
                    <div className="h-5 w-5 animate-spin rounded-full border-t-2 border-solid border-primary-300"></div>
                  </div>
                ) : (
                  selected != "" && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <XMarkIcon
                        data-testid="clear-icon"
                        onClick={() => setSelected("")}
                        className={twMerge(iconVariant({ size }), "cursor-pointer")}
                      />
                    </div>
                  )
                )}
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <ComboboxOptions className="appearence-none rounded-plug-md z-30 mt-1 max-h-60 w-full overflow-auto bg-white py-1 shadow shadow-primary-25 ring-1 ring-primary-25">
                  {filteredOptions.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none px-3 py-2 text-coolGray-800">
                      Nothing found.
                    </div>
                  ) : (
                    filteredOptions.map((option: SearchInputOption) => (
                      <ComboboxOption
                        key={option.value}
                        className={({ active, selected }) =>
                          SearchInputOptionsVariants({ size, active, selected })
                        }
                        value={option}
                      >
                        {({ selected }) => (
                          <>
                            <span className="flex w-full items-center justify-between truncate text-coolGray-800">
                              {option.label}
                            </span>
                            {selected && <CheckIcon className="mr-3 h-5 w-5 text-coolGray-800" />}
                          </>
                        )}
                      </ComboboxOption>
                    ))
                  )}
                </ComboboxOptions>
              </Transition>
            </div>
          )}
        </Combobox>
      </Field>
    );
  }
}

export default SearchInput;
