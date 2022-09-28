import { useTypedSelector } from '@/hooks/useTypedSelector';
import { IMovieItem } from '@/types/IMovieItem';
import { Grid } from '@/UI/Grid/Grid';
import { Tabs } from '@/UI/Tabs/Tabs';
import { Title } from '@/UI/Title/Title';
import classNames from 'classnames';
import styles from './Cartoons.module.scss';

export const Cartoons = () => {
	const { data } = useTypedSelector((state) => state.category);

	const { content, child_items, films } = { ...data[0] };

	const tabs =
		child_items?.map((tab, idx) => {
			const txt = tab.content.title;

			const data = films?.items[idx] as IMovieItem[];

			return { txt, content: <Grid data={data} /> };
		}) || [];

	const mockData = [
		{
			id: 1,
			content: { title: 'Фильм 1' },
			img_base_url: '/movie.jpg',
			options: [
				{
					filter_id: 1,
					option_value: '2013',
				},
				{
					filter_id: 2,
					option_value: '3+',
				},
			],
			img_path: '',
			rating: '7.2',
			hours: 1,
			minutes: 32,
		},
	];

	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>
				<Title className={styles.title}>{content?.title_in_nav}</Title>
				<Tabs className={styles.tabs} tabs={tabs} />
			</div>
		</section>
	);
};
