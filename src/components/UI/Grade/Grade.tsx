import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './Grade.module.scss';

interface GradeProps {
	value: number;
	setValue: (idx: number) => void;
}

export const Grade: FC<GradeProps> = ({ value, setValue }) => {
	const [hover, setHover] = useState<number | null>(null);

	return (
		<div className={styles.container}>
			<div className={styles.grades}>
				{[...Array(10)].map((_, idx) => {
					const ratingValue = idx + 1;

					const isActive = ratingValue <= (hover || value);

					return (
						<label
							key={idx}
							className={classNames(styles.label, isActive && styles.active)}
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(null)}
						>
							<input
								className={styles.radio}
								type="radio"
								value={ratingValue}
								onClick={() => setValue(ratingValue)}
							/>
							{ratingValue}
						</label>
					);
				})}
			</div>
			<div className={styles.row}>
				<span className={styles.caption}>Очень плохо</span>
				<span className={styles.caption}>Отлично</span>
			</div>
		</div>
	);
};
