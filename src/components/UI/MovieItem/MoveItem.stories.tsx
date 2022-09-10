import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MovieItem } from './MovieItem';

export default {
	title: 'MovieItem',
	component: MovieItem,
} as ComponentMeta<typeof MovieItem>;

const Template: ComponentStory<typeof MovieItem> = (args) => <MovieItem {...args} />;

export const Example = Template.bind({});
Example.args = {
	item: {
		image: '/movie.jpg',
		id: 11,
		title: 'RRR',
		rating: 7.2,
		genre: 'Комедия',
		type: 'Фильм',
		time: '1 час 33 минуты',
		year: 2022,
		age: '6+',
		status: 'Подписка',
	},
};
