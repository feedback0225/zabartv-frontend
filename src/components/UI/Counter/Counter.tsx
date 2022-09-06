import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import classNames from 'classnames';
import { FC, useState } from 'react';
import styles from './Counter.module.scss';

interface CounterProps {
	initialValue: number;
	caption?: string;
	className?: string;
}

export const Counter: FC<CounterProps> = ({
	initialValue,
	caption,
	className,
}) => {
	const [value, setValue] = useState<number>(initialValue);

	const handleDecrement = () => setValue(value - initialValue);
	const handleIncrement = () => setValue(value + initialValue);

	return (
		<div className={classNames(styles.counter, className)}>
			<ButtonBase
				onClick={handleDecrement}
				className={styles.decrement}
				aria-label="Минус"
				disabled={value === initialValue}
			/>
			<span className={styles.value}>
				{value} {caption}
			</span>
			<ButtonBase
				onClick={handleIncrement}
				className={styles.increment}
				aria-label="Плюс"
			/>
		</div>
	);
};
