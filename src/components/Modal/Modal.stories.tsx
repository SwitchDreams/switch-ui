import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../Text";
import Modal from "./index";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Overlay/Modal",
  component: Modal,
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
    onClose: () => {},
  },
};
