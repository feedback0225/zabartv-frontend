import { IMovie } from '@/types/IMovie';
import { Title } from '@/UI/Title/Title';
import { FC } from 'react';
import { Grid } from '../Grid/Grid';
import { MovieItem } from '../index';

interface ViewsProps {
	viewed: [IMovie[]];
}

export const Views: FC<ViewsProps> = ({ viewed }) => {
	const isNotEpty = viewed.length > 0;

	const ViewsList = (
		<Grid>
			{viewed.map((el) => {
				const item = el[0];

				return <MovieItem key={item.id} item={item} />;
			})}
		</Grid>
	);

	const EmptyTitle = (
		<Title level="h3" size="small">
			Список просмотренного пуст
		</Title>
	);

	return isNotEpty ? ViewsList : EmptyTitle;
};
