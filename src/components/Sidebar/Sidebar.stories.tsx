import { XMarkIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "../Avatar";
import { Sidebar } from "./Sidebar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <Sidebar.Logo logo="https://switchdreams.com.br/og_image.png"></Sidebar.Logo>
        <Sidebar.Group>
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
            icon={XMarkIcon}
          ></Sidebar.Item>
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
          ></Sidebar.Item>
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
            icon={XMarkIcon}
          ></Sidebar.Item>
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
            icon={XMarkIcon}
          ></Sidebar.Item>
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
            icon={XMarkIcon}
          ></Sidebar.Item>
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
            icon={XMarkIcon}
          ></Sidebar.Item>
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
            icon={XMarkIcon}
          ></Sidebar.Item>
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
            icon={XMarkIcon}
          ></Sidebar.Item>
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
            icon={XMarkIcon}
          ></Sidebar.Item>
        </Sidebar.Group>
        <Sidebar.Footer>
          <Sidebar.Item
            label="tamo on"
            href="https://www.youtube.com/watch?v=z45yFtHivuY"
            icon={XMarkIcon}
          ></Sidebar.Item>
          <Sidebar.Dropdown
            label="Bom dia"
            options={[
              { label: "Pokemon", href: "" },
              { label: "Digimon", href: "" },
              { label: "Naruto", href: "" },
            ]}
          ></Sidebar.Dropdown>
          <hr className="mb-10 mt-8 h-px w-full" />
          <Sidebar.User>
            <Avatar name="F" avatarUrl="" size="sm"></Avatar>
          </Sidebar.User>
        </Sidebar.Footer>
      </>
    ),
  },
};
