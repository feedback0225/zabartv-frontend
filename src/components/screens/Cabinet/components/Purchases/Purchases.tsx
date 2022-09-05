import classNames from 'classnames';
import styles from './Purchases.module.scss'

export const Purchases = () => {

    const data = [
        {date: '22.08.22', period: 'с 22.08. по 22.09', price: '12€'},
        {date: '22.07.22', period: 'с 22.07. по 22.08', price: '12€'},
        {date: '22.06.22', period: 'с 22.06. по 22.08', price: '12€'},
    ]

    return (
        <div className={styles.table}>
            <div className={styles.top}>
                <span className={styles.nameCol}>Когда куплен</span>
                <span className={styles.nameCol}>Период активности</span>
                <span className={styles.nameCol}>Цена</span>
            </div>
            {data.map(item => {
                const {date, period, price} = item

                return (
                    <div key={date} className={styles.rows}>
                        <div className={classNames(styles.col, styles.date)}>{date}</div>
                        <div className={styles.col}>{period}</div>
                        <div className={styles.col}>{price}</div>
                    </div>
                )
            })}
        </div>
    )
}