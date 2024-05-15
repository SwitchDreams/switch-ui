import { CheckBox } from "../components/CheckBox";
import { RadioButton } from "../components/RadioButton";
import { Select } from "../components/Select";
import { Text } from "../components/Text";
import TextArea from "../components/TextArea";
import { TextField } from "../components/TextField";
import ToggleSwitch from "../components/ToggleSwitch";

export const All = () => (
  <div>
    <Text className="pb-6">Todos os componentes de formulário</Text>
    <TextField label="Teste" name="Teste" supportText="Help" placeholder="Hello World" />
    <Select name="Test" label="Teste" options={options} placeholder="Hello World" />
    <TextArea label="Teste" name="Teste" placeholder="Hello World" />
    <CheckBox name="Teste" />
    <RadioButton name="teste1" />
    <div>
      <ToggleSwitch />
    </div>
  </div>
);
All.storyName = "Todos os Componentes";

export default {
  title: "Forms/Todos",
  component: All,
};

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "4", label: "Option 3" },
];
