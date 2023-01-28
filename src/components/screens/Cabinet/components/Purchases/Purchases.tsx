import { convertTimestampToDate } from '@/utils/convertTimestampToDate';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Title } from '@/UI/Title/Title';
import { Fragment } from 'react';
import classNames from 'classnames';
import styles from './Purchases.module.scss';
import { useTranslation } from 'next-i18next';

export const Purchases = () => {
	const { history } = useTypedSelector((state: any) => state.user);

	const data = history?.map((el: any) => {
		const date = convertTimestampToDate(el.start_date, 'DD.MM.YY');

		const periodStartPath = convertTimestampToDate(el.start_date, 'DD.MM');
		const periodFinishPath = convertTimestampToDate(el.finish_date, 'DD.MM');
		const period = `с ${periodStartPath}. по ${periodFinishPath}`;
		const price = `${Number(el.package_price)}€`;

		return { date, period, price };
	});

	const { t } = useTranslation();

	return (
		<>
			{history.map((item: any, idx: any) => (
				<Fragment key={idx}>
					{item?.hasOwnProperty('order_id') ? (
						<div className={styles.table}>
							<div className={styles.top}>
								<span className={styles.nameCol}>Когда куплен</span>
								<span className={styles.nameCol}>Период активности</span>
								<span className={styles.nameCol}>Цена</span>
							</div>
							{data.map((item: any) => {
								const { date, period, price } = item;

								return (
									<div key={date} className={styles.rows}>
										<div className={classNames(styles.col, styles.date)}>{date}</div>
										<div className={styles.col}>{period}</div>
										<div className={styles.col}>{price}</div>
									</div>
								);
							})}
						</div>
					) : (
						<Title className={styles.errorMessage} level="h3" size="small">
							{t('Нет покупок')}
						</Title>
					)}
				</Fragment>
			))}
		</>
	);
};
