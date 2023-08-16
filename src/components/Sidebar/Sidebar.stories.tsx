import {
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentCheckIcon,
  ExclamationCircleIcon,
  FolderOpenIcon,
  HomeIcon,
  NewspaperIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "../Avatar";
import { Sidebar } from "./Sidebar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Others/Sidebar",
  component: Sidebar,
  tags: [],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    spacing: true,
    logo: "https://switchdreams.com.br/og_image.png",
    children: (
      <>
        <Sidebar.Logo logo="https://switchdreams.com.br/og_image.png"></Sidebar.Logo>
        <Sidebar.Group>
          <Sidebar.Item label="Home" href="" icon={HomeIcon}></Sidebar.Item>
          <Sidebar.Dropdown
            label="Dashboard"
            icon={ChartPieIcon}
            options={[
              { label: "Overview", href: "" },
              { label: "Notifications", href: "" },
              { label: "Analytics", href: "" },
              { label: "Reports", href: "" },
            ]}
          ></Sidebar.Dropdown>
          <Sidebar.Dropdown
            label="Projects"
            icon={FolderOpenIcon}
            options={[
              { label: "Project 1", href: "" },
              { label: "Project 2", href: "" },
              { label: "Project 3", href: "" },
            ]}
          ></Sidebar.Dropdown>
          <Sidebar.Item label="Tasks" href="" icon={DocumentCheckIcon}></Sidebar.Item>
          <Sidebar.Item label="Reporting" href="" icon={NewspaperIcon}></Sidebar.Item>
          <Sidebar.Item label="Users" href="" icon={UsersIcon}></Sidebar.Item>
        </Sidebar.Group>
        <Sidebar.Footer>
          <Sidebar.Item label="Support" href="" icon={ExclamationCircleIcon}></Sidebar.Item>
          <Sidebar.Item label="Settings" href="" icon={Cog6ToothIcon}></Sidebar.Item>
          <hr className="mb-10 mt-8 h-px w-full" />
          <Sidebar.User>
            <Avatar name="F" avatarUrl="" size="sm"></Avatar>
          </Sidebar.User>
        </Sidebar.Footer>
      </>
    ),
  },
};
