import { Grid } from '@/UI/Grid/Grid';
import { Tabs } from '@/UI/Tabs/Tabs';
import { Title } from '@/UI/Title/Title';
import classNames from 'classnames';
import styles from './Cartoons.module.scss';

export const Cartoons = () => {
	const data = [
		{
			image: '/movie.jpg',
			id: 1,
			title: 'RRR',
			rating: 7.2,
			genre: 'Комедия',
			type: 'Фильм',
			time: '1 час 33 минуты',
			year: 2022,
			age: '6+',
			status: 'Подписка',
		},
		{
			image: '/movie.jpg',
			id: 2,
			title: 'Молодой человек',
			rating: 7.2,
			genre: 'Комедия',
			type: 'Фильм',
			time: '1 час 33 минуты',
			year: 2022,
			age: '6+',
			status: 'Подписка',
		},
		{
			image: '/movie.jpg',
			id: 3,
			title: 'RRR',
			rating: 7.2,
			genre: 'Комедия',
			type: 'Фильм',
			time: '1 час 33 минуты',
			year: 2022,
			age: '6+',
			status: 'Подписка',
		},
		{
			image: '/movie.jpg',
			id: 4,
			title: 'Молодой человек',
			rating: 7.2,
			genre: 'Комедия',
			type: 'Фильм',
			time: '1 час 33 минуты',
			year: 2022,
			age: '6+',
			status: 'Подписка',
		},
		{
			image: '/movie.jpg',
			id: 5,
			title: 'RRR',
			rating: 7.2,
			genre: 'Комедия',
			type: 'Фильм',
			time: '1 час 33 минуты',
			year: 2022,
			age: '6+',
			status: 'Подписка',
		},
		{
			image: '/movie.jpg',
			id: 6,
			title: 'Молодой человек',
			rating: 7.2,
			genre: 'Комедия',
			type: 'Фильм',
			time: '1 час 33 минуты',
			year: 2022,
			age: '6+',
			status: 'Подписка',
		},
		{
			image: '/movie.jpg',
			id: 7,
			title: 'RRR',
			rating: 7.2,
			genre: 'Комедия',
			type: 'Фильм',
			time: '1 час 33 минуты',
			year: 2022,
			age: '6+',
			status: 'Подписка',
		},
		{
			image: '/movie.jpg',
			id: 8,
			title: 'Молодой человек',
			rating: 7.2,
			genre: 'Комедия',
			type: 'Фильм',
			time: '1 час 33 минуты',
			year: 2022,
			age: '6+',
			status: 'Подписка',
		},
		{
			image: '/movie.jpg',
			id: 9,
			title: 'RRR',
			rating: 7.2,
			genre: 'Комедия',
			type: 'Фильм',
			time: '1 час 33 минуты',
			year: 2022,
			age: '6+',
			status: 'Подписка',
		},
		{
			image: '/movie.jpg',
			id: 10,
			title: 'Молодой человек',
			rating: 7.2,
			genre: 'Комедия',
			type: 'Фильм',
			time: '1 час 33 минуты',
			year: 2022,
			age: '6+',
			status: 'Подписка',
		},
		{
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
		{
			image: '/movie.jpg',
			id: 12,
			title: 'Молодой человек',
			rating: 7.2,
			genre: 'Комедия',
			type: 'Фильм',
			time: '1 час 33 минуты',
			year: 2022,
			age: '6+',
			status: 'Подписка',
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
				<Tabs tabs={tabs} />
			</div>
		</section>
	);
};
