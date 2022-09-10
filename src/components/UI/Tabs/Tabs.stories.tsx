import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './Tabs';

export default {
	title: 'Tabs',
	component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => (
	<div style={{ padding: '10px' }}>
		<Tabs tabs={tabs} />
	</div>
);

const tabs = [
	{ txt: 'Таб 1', content: <div>Контент таба 1</div> },
	{ txt: 'Таб 2', content: <div>Контент таба 2</div> },
	{ txt: 'Таб 3', content: <div>Контент таба 3</div> },
];

export const Example = Template.bind({});
