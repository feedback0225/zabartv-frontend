import { FC } from 'react';
import { Title } from '@/UI/Title/Title';
import { SubscribeIcon } from '@/icons';
import { Button } from '@/UI/Button/Button';
import { Counter } from '@/UI/Counter/Counter';
import { useTranslation } from 'next-i18next';
import { IPackage } from '@/types/IPackage';
import styles from './SubscribeCard.module.scss';
import classNames from 'classnames';

interface SubscribeCardProps {
	card: IPackage;
}

export const SubscribeCard: FC<SubscribeCardProps> = ({ card }) => {
	const {
		content: { title, badge_1 },
		price,
		period,
		visible,
	} = card;

	const { t } = useTranslation('common');

	const normalPrice = Number(price);
	const isMonthPackage = period <= 30;
	const priceInYear = normalPrice * 12 + 15;
	const priceInMonth = normalPrice / 12 - 1;

	const convertPrice = () => (isMonthPackage ? priceInYear : priceInMonth);

	return (
		<>
			{visible ? (
				<div className={classNames(styles.card, !isMonthPackage && styles.year)}>
					<Title level="h2" size="medium" className={styles.title}>
						{title}
						&nbsp;за
						<span>&nbsp;{normalPrice}€</span>
					</Title>
					<p className={styles.desc}>
						{isMonthPackage ? 'Или' : 'Единоразово'}
						&nbsp;{convertPrice()}
						<span>
							€&nbsp;
							{isMonthPackage ? 'за 12 месяцев' : 'в месяц'}
						</span>
					</p>
					{isMonthPackage && (
						<Counter className={styles.counter} initialValue={30} caption="Дней" />
					)}
					<Button variant="gradient" className={styles.btn} icon={<SubscribeIcon />}>
						{t('subscribe_button')}
					</Button>
					{badge_1 && <span className={styles.badge}>{badge_1}</span>}
				</div>
			) : null}
		</>
	);
};
