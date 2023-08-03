import { Combobox } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type Options = {
  info?: string;
};

interface SearchInputType {
  options: Options[];
  size?: "lg" | "md" | "sm";
  label: string;
  disabled?: boolean;
}

export type SearchInputVariantProps = VariantProps<typeof SearchInputVariants>;

export const SearchInputVariants = cva("w-full ", {
  variants: {
    size: {
      lg: "h-11",
      md: "h-12",
      sm: "h-14",
    },
    disabled: {
      true: "",
    },
  },
});

export interface SearchInputProps
  extends Omit<SearchInputVariantProps, "size" | "disabled">,
    SearchInputType,
    Omit<React.InputHTMLAttributes<"input">, "size"> {}

function SearchInput({
  options,
  size = "md",
  label,
  disabled = false,
  className,
  ...rest
}: SearchInputProps) {
  const [selectedPerson, setSelectedPerson] = useState(options[0]);
  const [query, setQuery] = useState("");

  const filteredOption =
    query === ""
      ? options
      : options.filter((option) => {
          return option.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className={twMerge(SearchInputVariants({ size, disabled }), className)} {...rest}>
      <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Label>{label}</Combobox.Label>
        <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
        <Combobox.Options>
          {filteredOption.map((option) => (
            <Combobox.Option key={option} value={option}>
              {option}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}

export default SearchInput;
