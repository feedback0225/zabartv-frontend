import { FC } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
	name: string;
}

export const Avatar: FC<AvatarProps> = ({ name }) => {
	const letter = name[0];

	return (
		<div data-testid="avatar" className={styles.avatar}>
			{letter}
		</div>
	);
};
