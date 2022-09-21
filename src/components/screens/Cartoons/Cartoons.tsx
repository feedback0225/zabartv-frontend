import { Grid } from '@/UI/Grid/Grid';
import { Tabs } from '@/UI/Tabs/Tabs';
import { Title } from '@/UI/Title/Title';
import classNames from 'classnames';
import styles from './Cartoons.module.scss';

export const Cartoons = () => {
	const data = [
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

	const tabs = [
		{ txt: 'Вайнахские', content: <Grid data={data} /> },
		{ txt: 'СССР', content: <Grid data={data} /> },
		{ txt: 'Современные', content: <Grid data={data} /> },
	];

	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>
				<Title className={styles.title}>Мультфильмы</Title>
				<Tabs className={styles.tabs} tabs={tabs} />
			</div>
		</section>
	);
};
