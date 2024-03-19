import { CheckBox } from "../components/CheckBox";
import { RadioButton } from "../components/RadioButton";
import SearchInput from "../components/SearchInput/SearchInput";
import SelectBox from "../components/SelectBox";
import { Text } from "../components/Text";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";

// import { CheckBox, RadioButton, SearchInput, SelectBox, TextArea, TextField } from "../index";

export const All = () => (
  <div>
    <Text className="pb-6">Todos os componentes de formulário</Text>
    <TextField label="Teste" name="Teste" />
    <CheckBox name="Teste" />
    <RadioButton />
    <SelectBox label="Teste" options={options} />
    <SearchInput label="Teste" name="Teste" setSelectedValue={() => {}} />
    <TextArea label="Teste" name="Teste" />
  </div>
);
All.storyName = "Todos os Componentes";

export default {
  title: "Forms/Todos",
  component: All,
};

const options = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 4, label: "Option 3" },
];
