import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import SearchInput, { SearchInputOption, SearchInputProps } from "./SearchInput";

export default {
  title: "Forms/SearchInput - Depreciado",
  component: SearchInput,
  tags: [],
} as Meta<typeof SearchInput>;

const Template: StoryFn<typeof SearchInput> = (args: SearchInputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);

  return (
    <SearchInput
      name={args.name}
      label={args.label}
      options={args.options}
      size={args.size}
      multiple={args.multiple}
      fetchRemoteData={args.fetchRemoteData}
      disabled={args.disabled}
      setSelectedValue={setSelectedValue}
      placeholder={args.placeholder}
      leftIcon={args.leftIcon}
      className=""
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "default",
  label: "Buscar",
  selectedValue: "",
  options: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ],
  size: "md",
  placeholder: "Buscar",
  leftIcon: EnvelopeIcon,
  multiple: false,
};

const mockApiCall = async (query: string): Promise<SearchInputOption[]> => {
  // Simulando uma chamada de API assíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = [
        { label: "Result 1", value: "result1" },
        { label: "Result 2", value: "result2" },
        { label: "Result 3", value: "result3" },
      ];
      resolve(results.filter((result) => result.label.toLowerCase().includes(query.toLowerCase())));
    }, 1000); // Simula um atraso de 1 segundo
  });
};

export const WithMockedAPICall = Template.bind({});
WithMockedAPICall.args = {
  label: "Requisição para API",
  selectedValue: "",
  fetchRemoteData: mockApiCall,
  size: "md",
  placeholder: "hello",
  leftIcon: EnvelopeIcon,
  multiple: false,
};

const apiCall = async (query: string): Promise<SearchInputOption[]> => {
  const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
  const data = await response.json();
  return data.items.map((item: any) => ({ label: item.full_name, value: item.id }));
};

export const WithAPICall = Template.bind({});
WithAPICall.args = {
  label: "Requisição de repositórios do GitHub",
  selectedValue: "",
  fetchRemoteData: apiCall,
  size: "md",
  placeholder: "hello",
  leftIcon: EnvelopeIcon,
  multiple: true,
};
