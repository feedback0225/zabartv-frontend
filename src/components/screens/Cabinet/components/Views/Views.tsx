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
	];

	return (
		<Grid>
			{data.map((item) => (
				<MovieItem key={item.id} item={item} />
			))}
		</Grid>
	);
};
