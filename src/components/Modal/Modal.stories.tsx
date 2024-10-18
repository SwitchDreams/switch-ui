import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../Text";
import Modal from "./index";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Overlay/Modal",
  component: Modal,
  argTypes: {
    children: {
      description: "Elementos que fazem parte de corpo do modal",
    },
    setOpen: {
      description: "Função usada para controlar o estado de abertura do modal.",
    },
    confirmLabel: {
      description: "O texto para o botão de confirmação.",
      control: "text",
      defaultValue: "Confirmar",
    },
    cancelLabel: {
      description: "O texto para o botão de cancelamento.",
      control: "text",
      defaultValue: "Cancelar",
    },
    onClickConfirm: {
      description: "Função chamada quando o botão de confirmar é clicado.",
      action: "confirm clicked",
    },
    onClickCancel: {
      description: "Função chamada quando o botão de cancelar é clicado.",
      action: "cancel clicked",
    },
    open: {
      description: "Controla se o modal está aberto ou fechado.",
      control: "boolean",
      defaultValue: false,
    },
    error: {
      description: "Define o estado de erro, modificando o estilo dos botões.",
      control: "boolean",
    },
    loading: {
      description: "Desativa o botão de confirmar quando está carregando.",
      control: "boolean",
    },
    buttons: {
      description: "Define se os botões de ação devem ser renderizados.",
      control: "boolean",
      defaultValue: true,
    },
    cancelOutline: {
      description: "Deixa o botão de cancelar no estilo de outline",
    },
    confirmOutline: {
      description: "Deixa o botão de confirmar no estilo de outline",
    },
    iconConfirm: {
      description: "Define um ícone a ser renderizado no botão de confirmar",
    },
    handleClose: {
      description: "Função chamada ao clicar no ícone de fechar o modal.",
    },
    className: {
      description: "Define estilos que podem ser passados para o corpo do modal.",
    },
  },
  tags: [],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <div className="flex flex-col items-center justify-center gap-5">
        <ExclamationCircleIcon className="h-40 w-40 text-primary-50" />
        <Text className="text-3xl font-medium">Título do modal</Text>
        <Text className="font-regular text-center text-sm">
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
          interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora{" "}
        </Text>
      </div>
    ),
    open: true,
    confirmLabel: "Confirmar",
    cancelLabel: "Cancelar",
    onClickCancel: () => {},
    onClickConfirm: () => {},
    setOpen: () => {},
    cancelOutline: true,
    confirmOutline: false,
    error: false,
    loading: false,
    buttons: true,
  },
  render: (args) => (
    <div className="flex h-screen items-center justify-center">
      <Modal {...args} />
    </div>
  ),
};
