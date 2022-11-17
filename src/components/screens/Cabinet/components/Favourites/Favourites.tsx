import { IMovie } from '@/types/IMovie';
import { Title } from '@/UI/Title/Title';
import { FC } from 'react';
import { Grid } from '../Grid/Grid';
import { MovieItem } from '../index';

interface FavouritesProps {
	favorites: [IMovie[]];
}

export const Favourites: FC<FavouritesProps> = ({ favorites }) => {
	const isNotEpty = favorites.length > 0;

	const FavoritesList = (
		<Grid>
			{favorites.map((el) => {
				const item = el[0];

				return <MovieItem favourite key={item.id} item={item} />;
			})}
		</Grid>
	);

	const EmptyTitle = (
		<Title level="h3" size="small">
			Список избранного пуст
		</Title>
	);

	return isNotEpty ? FavoritesList : EmptyTitle;
};
