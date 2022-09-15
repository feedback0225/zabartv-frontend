import { IPackage } from '@/types/IPackage';
import { Title } from '@/UI/Title/Title';
import classNames from 'classnames';
import { FC } from 'react';
import { SubscribeCard } from './components/SubscribeCard/SubscribeCard';
import styles from './Subscribe.module.scss';

interface SubscribeProps {
	data: IPackage[];
}

export const Subscribe: FC<SubscribeProps> = ({ data }) => {
	/* const data = [
		{
			id: 1,
			title: '30 дней за',
			price: '12€',
			desc: 'Или 159€',
			time: 'за 12 месяцев',
			hasIncrement: true,
		},
		{
			id: 2,
			title: '1 год за',
			price: '120€',
			desc: 'Единоразово 9€',
			year: true,
			time: 'в месяц',
			caption: 'Выгода: 24€',
		},
	]; */

	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>
				<Title className={styles.title}>Подиска ZabarTV</Title>
				<p className={styles.desc}>
					Покажем уникальные сериалы и фильмы. Подберем кино по интересам и настроению. Для вас
					и вашей семьи.
				</p>
				<div className={styles.cards}>
					{data?.map((card) => (
						<SubscribeCard key={card.id} card={card} />
					))}
				</div>
			</div>
		</section>
	);
};
