import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Текст кнопки',
};

export const Stroke = Template.bind({});
Stroke.args = {
	children: 'Текст кнопки',
	variant: 'stroke',
};

export const Dark = Template.bind({});
Dark.args = {
	children: 'Текст кнопки',
	variant: 'dark',
};

export const Gradient = Template.bind({});
Gradient.args = {
	children: 'Текст кнопки',
	variant: 'gradient',
};

export const White = Template.bind({});
White.args = {
	children: 'Текст кнопки',
	variant: 'white',
};
