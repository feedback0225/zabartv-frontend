import { convertTimestampToDate } from '@/helpers/convertTimestampToDate';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Title } from '@/UI/Title/Title';
import classNames from 'classnames';
import { Fragment } from 'react';
import styles from './Purchases.module.scss';

export const Purchases = () => {
	const { history } = useTypedSelector((state) => state.user);

	const data = history?.map((el) => {
		const date = convertTimestampToDate(el.start_date, 'DD.MM.YY');

		const periodStartPath = convertTimestampToDate(el.start_date, 'DD.MM');
		const periodFinishPath = convertTimestampToDate(el.finish_date, 'DD.MM');
		const period = `с ${periodStartPath}. по ${periodFinishPath}`;

		return { date, period, price: '12€' };
	});

	console.log(history);

	return (
		<>
			{history.map((item, idx) => (
				<Fragment key={idx}>
					{item.hasOwnProperty('order_id') ? (
						<div className={styles.table}>
							<div className={styles.top}>
								<span className={styles.nameCol}>Когда куплен</span>
								<span className={styles.nameCol}>Период активности</span>
								<span className={styles.nameCol}>Цена</span>
							</div>
							{data.map((item) => {
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
						<Title level="h3" size="small" style={{ color: '#fff' }}>
							{/* @ts-ignore */}
							{item}
						</Title>
					)}
				</Fragment>
			))}
		</>
	);
};
