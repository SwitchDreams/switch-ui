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
import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import Avatar from "../Avatar";
import { Sidebar } from "./Sidebar";

const meta = {
  title: "Others/Sidebar",
  component: Sidebar,
  tags: [],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<any> = () => (
  <div className="flex">
    <Sidebar absolute={false}>
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
        <Sidebar.Item label="Tasks" href="" icon={DocumentCheckIcon} active={true}></Sidebar.Item>
        <Sidebar.Item label="Reporting" href="" icon={NewspaperIcon}></Sidebar.Item>
        <Sidebar.Item label="Users" href="" icon={UsersIcon}></Sidebar.Item>
      </Sidebar.Group>
      <Sidebar.Footer>
        <Sidebar.Item label="Support" href="" icon={ExclamationCircleIcon}></Sidebar.Item>
        <Sidebar.Item label="Settings" href="" icon={Cog6ToothIcon}></Sidebar.Item>
        <hr className="mb-10 mt-8 h-px w-full" />
        <Sidebar.User title="Switch Dreams" subTitle="@switchDreams">
          <Avatar name="F" avatarUrl="" size="sm"></Avatar>
        </Sidebar.User>
      </Sidebar.Footer>
    </Sidebar>
    <h1 className="ml-10 text-error-300">
      Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e
      vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de
      tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a
      cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente
      inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo
      passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de
      editoração eletrônica como Aldus PageMaker.
    </h1>
  </div>
);

export const WithPage: Story = Template;

export const Default: Story = {
  args: {
    logo: "https://switchdreams.com.br/og_image.png",
    hoverColor: "bg-primary-300",
    hover: true,
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
          <Sidebar.Item label="Tasks" href="" icon={DocumentCheckIcon} active={true}></Sidebar.Item>
          <Sidebar.Item label="Reporting" href="" icon={NewspaperIcon}></Sidebar.Item>
          <Sidebar.Item label="Users" href="" icon={UsersIcon} active={true}></Sidebar.Item>
        </Sidebar.Group>
        <Sidebar.Footer>
          <Sidebar.Item label="Support" href="" icon={ExclamationCircleIcon}></Sidebar.Item>
          <Sidebar.Item label="Settings" href="" icon={Cog6ToothIcon}></Sidebar.Item>
          <hr className="mb-10 mt-8 h-px w-full" />
          <Sidebar.User title="Switch Dreams" subTitle="@switchDreams">
            <Avatar name="F" avatarUrl="" size="sm"></Avatar>
          </Sidebar.User>
        </Sidebar.Footer>
      </>
    ),
  },
};
