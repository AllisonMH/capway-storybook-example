import { Meta, Story } from '@storybook/angular';
import  Heroes  from './header.component';

export default {
  title: 'Updated Title',
  component: Heroes,
} as Meta;

const Template: Story = (args) => ({
  props:args,
});

export const FirstStory = Template.bind({});
FirstStory.args= {
 
};