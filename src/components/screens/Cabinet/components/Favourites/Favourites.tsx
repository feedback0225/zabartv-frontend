import { Grid } from '../Grid/Grid';
import { MovieItem } from '../index';

export const Favourites = () => {
	const data = [
		{
			href: '/movie',
			image: '/movie.jpg',
			id: 1,
			type: 'Сериал',
			title: 'RRR',
		},
		{
			href: '/movie',
			image: '/movie.jpg',
			id: 2,
			type: 'Фильм',
			title: 'Молодой человек',
		},
		{
			href: '/movie',
			image: '/movie.jpg',
			id: 3,
			type: 'Сериал',
			title: 'RRR',
		},
		{
			href: '/movie',
			image: '/movie.jpg',
			id: 4,
			type: 'Фильм',
			title: 'Молодой человек',
		},
	];

	return (
		<Grid>
			{data.map((item) => (
				<MovieItem favourite key={item.id} item={item} />
			))}
		</Grid>
	);
};
