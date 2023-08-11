import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

type Options = {
  info: any;
};

interface SearchInputType {
  label: string;
  options?: Options[];
  size?: "lg" | "md" | "sm";
  disabled?: boolean;
  selectedValue?: string;
  setSelectedValue: (value: any) => void;
}

export type SearchInputVariantProps = VariantProps<typeof SearchInputVariants>;

export const SearchInputVariants = cva(
  "peer w-full rounded-lg border border-gray-100 px-8 text-md text-gray-900 outline-none hover:bg-gray-50 focus:border-primary-100",
  {
    variants: {
      size: {
        lg: "h-14",
        md: "h-12",
        sm: "h-11",
      },
    },
  },
);

interface SearchInputHTMLAttributes extends InputHTMLAttributes<HTMLInputElement> {}

export interface SearchInputProps
  extends Omit<SearchInputVariantProps, "size">,
    SearchInputType,
    Omit<SearchInputHTMLAttributes, "size" | "onChange"> {}

function SearchInput({
  options = [],
  size = "md",
  label,
  disabled = false,
  className,
  selectedValue = "",
  setSelectedValue,
  ...rest
}: SearchInputProps) {
  const [query, setQuery] = useState("");

  const filteredOption =
    query === ""
      ? options
      : options.filter((option) => {
          return option.info.toLowerCase().includes(query.toLowerCase());
        });

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="relative flex items-center justify-center">
      <input
        type="text"
        placeholder={label}
        disabled={disabled}
        value={selectedValue}
        className={twMerge(SearchInputVariants({ size }), className)}
        {...rest}
        onChange={(e) => {
          setQuery(e.target.value);
          handleOptionClick(e.target.value);
        }}
      />
      {filteredOption.length !== 0 && (
        <ul className="absolute inset-x-0 top-full mt-1 flex max-h-52 flex-col rounded-lg border border-gray-100 bg-white opacity-0 peer-focus:opacity-100">
          {filteredOption.map((option) => (
            <div
              key={option.info}
              className="flex h-14 cursor-pointer items-center px-4 text-md text-gray-900 hover:bg-gray-50"
              onClick={() => {
                handleOptionClick(option.info);
              }}
            >
              {option.info}
            </div>
          ))}
        </ul>
      )}
      {selectedValue !== "" && (
        <XMarkIcon
          className="absolute right-2 h-5 w-5 cursor-pointer text-gray-500 peer-focus:text-gray-700"
          onClick={() => {
            handleOptionClick("");
            setQuery("");
          }}
          data-testid="clear-icon"
        ></XMarkIcon>
      )}
      <MagnifyingGlassIcon className="absolute left-2 h-5 w-5 cursor-pointer text-gray-500 peer-focus:text-gray-700"></MagnifyingGlassIcon>
    </div>
  );
}

export default SearchInput;