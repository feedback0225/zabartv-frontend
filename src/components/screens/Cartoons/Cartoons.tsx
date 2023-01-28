import { Category } from '@/components/Category/Category';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Grid } from '@/UI/Grid/Grid';
import { MovieItem } from '@/UI/MovieItem/MovieItem';

export const Cartoons = () => {
	const { data } = useTypedSelector((state: any) => state.category);

	const { content, child_items }: any = { ...data[0] };

	const tabs =
		child_items?.map((tab: any, idx: any) => {
			const txt = tab.content.title;
			const id = tab.id

			const data = tab?.films?.items;

			return {
				txt,
				id,
				content: (
					<Grid
						items={data}
						renderItem={(el) => {
							const item = el[0];

							return <MovieItem item={item} />;
						}}
					/>
				),
			};
		}) || [];

	return (
		<Category>
			<Category.Title>{content?.title_in_nav}</Category.Title>
			<Category.Tabs tabs={tabs} />
		</Category>
	);
};
