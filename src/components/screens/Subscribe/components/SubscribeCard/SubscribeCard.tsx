import { FC } from 'react';
import { Title } from '@/UI/Title/Title';
import { SubscribeIcon } from '@/icons';
import { Button } from '@/UI/Button/Button';
import { Counter } from '@/UI/Counter/Counter';
import styles from './SubscribeCard.module.scss';
import classNames from 'classnames';

interface SubscribeCardProps {
	card: any;
}

export const SubscribeCard: FC<SubscribeCardProps> = ({ card }) => {
	const { title, price, desc, time, hasIncrement, caption, year } = card;

	return (
		<div className={classNames(styles.card, year && styles.year)}>
			<Title level="h2" size="medium" className={styles.title}>
				{title}
				<span>&nbsp;{price}</span>
			</Title>
			<p className={styles.desc}>
				{desc}
				<span>&nbsp;{time}</span>
			</p>
			{hasIncrement && <Counter className={styles.counter} initialValue={30} caption="Дней" />}
			<Button variant="gradient" className={styles.btn} icon={<SubscribeIcon />}>
				Оформить подписку
			</Button>
			{caption && <span className={styles.caption}>{caption}</span>}
		</div>
	);
};
