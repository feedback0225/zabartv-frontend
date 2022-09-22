import { Grid } from '../Grid/Grid';
import { MovieItem } from '../index';

export const Views = () => {
	const data = [
		{
			image: '/movie.jpg',
			id: 1,
			type: 'Сериал',
			title: 'RRR',
		},
		{
			image: '/movie.jpg',
			id: 2,
			type: 'Фильм',
			title: 'Молодой человек',
		},
		{
			image: '/movie.jpg',
			id: 3,
			type: 'Сериал',
			title: 'RRR',
		},
		{
			image: '/movie.jpg',
			id: 4,
			type: 'Фильм',
			title: 'Молодой человек',
		},
	];

	return (
		<Grid>
			{data.map((item) => (
				<MovieItem key={item.id} item={item} />
			))}
		</Grid>
	);
};
