import type { Meta, StoryFn } from "@storybook/react";

import { Pagination } from ".";

// Mais sobre como configurar histórias em: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: "Others/Pagination",
  component: Pagination,
  parameters: {
    tags: [],
  },
};

export default meta;

type PaginationProps = React.ComponentProps<typeof Pagination>;

// Mais sobre a escrita de histórias com args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />;

export const Default: StoryFn<PaginationProps> = Template.bind({});
Default.args = {
  pages: 5,
  currentPage: 1,
  shape: "circle",
  outline: false,
  visiblePagesRange: 5,
};
