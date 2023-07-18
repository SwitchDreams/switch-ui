import SimpleButton from './index';
import { ButtonType } from './types';
import { StoryFn } from '@storybook/react';
import { Meta } from '@storybook/react';

export default {
  title: 'Buttons/SimpleButton',
  component: SimpleButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
      'tonal', 
      'primary', 
      'primary-outlined', 
      'gray-outlined', 
      'primary-text', 
      'gray-test',
      'primary-link',
      'gray-link'],
      control: { type: 'select' },
    },
    size: {
      options: [
        'extra-large',
        'large',
        'medium',
        'small',
        'extra-small'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof SimpleButton>;

const Template: StoryFn<typeof SimpleButton> = (args: ButtonType) => (
  <SimpleButton {...args} />
);

export const Variations = Template.bind({});

Variations.args = {
  variant: 'primary',
  label: 'botao',
  disabled: false,
  size: 'md',
  onClick: undefined,
};