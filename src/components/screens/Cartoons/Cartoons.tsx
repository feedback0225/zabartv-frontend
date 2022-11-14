import { Category } from '@/components/Category/Category';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { IMovieItem } from '@/types/IMovieItem';
import { Grid } from '@/UI/Grid/Grid';
import { MovieItem } from '@/UI/MovieItem/MovieItem';

export const Cartoons = () => {
	const { data } = useTypedSelector((state) => state.category);

	const { content, child_items, films } = { ...data[0] };

	const tabs =
		child_items?.map((tab, idx) => {
			const txt = tab.content.title;

			const data = films?.items[idx] as IMovieItem[];

			return {
				txt,
				content: <Grid items={data} renderItem={(item) => <MovieItem item={item} />} />,
			};
		}) || [];

	return (
		<Category>
			<Category.Title>{content?.title_in_nav}</Category.Title>
			<Category.Tabs tabs={tabs} />
		</Category>
	);
};
