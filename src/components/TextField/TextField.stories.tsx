import { XMarkIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from ".";

const meta = {
  title: "Forms/TextField",
  component: TextField,
  argTypes: {
    label: {
      description: "Texto exibido como rótulo do campo.",
      control: { type: "text" },
    },
    placeholder: {
      description: "Texto de exemplo exibido no campo quando ele está vazio.",
      control: { type: "text" },
    },
    name: {
      description: "O nome do campo de texto. Usado para identificar o campo em formulários.",
      control: { type: "text" },
    },
    disabled: {
      description: "Desabilita o campo de entrada, impedindo a interação.",
      control: { type: "boolean" },
    },
    leftIcon: {
      description: "Ícone a ser exibido à esquerda do campo de texto.",
    },
    rightIcon: {
      description: "Ícone a ser exibido à direita do campo de texto.",
    },
    error: {
      description: "Define se o campo está em estado de erro.",
      control: "boolean",
    },
    errorMsg: {
      description: "Mensagem de erro exibida abaixo do campo de texto quando `error` é verdadeiro.",
      control: { type: "text" },
    },
    className: {
      description: "Classe CSS adicional para customizar o estilo do campo.",
      control: { type: "text" },
    },
  },
  tags: [],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Hello World",
    name: "name",
    disabled: false,
    supportText: "Texto de suporte",
    supportTextClassName: "",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tygmPPx4ux69Uu3MzLKvtb/Switch-UI?type=design&node-id=98-5780&mode=design&t=gZZUlZlP5z4zMgQD-4",
    },
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "Label",
    placeholder: "Hello World",
    leftIcon: XMarkIcon,
    name: "name",
    disabled: false,
  },
};

export const WithError: Story = {
  args: {
    label: "Label",
    placeholder: "Hello World",
    name: "name",
    disabled: false,
    error: true,
    errorMsg: "Mensagem de erro",
    className: "w-94",
  },
};

export const WithTwoIcons: Story = {
  args: {
    label: "Label",
    placeholder: "Hello World",
    leftIcon: XMarkIcon,
    rightIcon: XMarkIcon,
    name: "name",
    disabled: false,
    error: true,
    errorMsg: "Mensagem de erro",
    className: "w-94",
  },
};
