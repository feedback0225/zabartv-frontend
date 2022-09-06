import { Title } from '@/UI/Title/Title';
import classNames from 'classnames';
import { SubscribeCard } from './components/SubscribeCard/SubscribeCard';
import styles from './Subscribe.module.scss';

export const Subscribe = () => {
	const data = [
		{
			title: '30 дней за',
			price: '12€',
			desc: 'Или 159€',
			time: 'за 12 месяцев',
			hasIncrement: true,
		},
		{
			title: '1 год за',
			price: '120€',
			desc: 'Единоразово 9€',
			year: true,
			time: 'в месяц',
			caption: 'Выгода: 24€',
		},
	];

	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>
				<Title className={styles.title}>Подиска ZabarTV</Title>
				<p className={styles.desc}>
					Покажем уникальные сериалы и фильмы. Подберем кино по
					интересам и настроению. Для вас и вашей семьи.
				</p>
				<div className={styles.cards}>
					{data.map((card) => (
						<SubscribeCard key={card.title} card={card} />
					))}
				</div>
			</div>
		</section>
	);
};
