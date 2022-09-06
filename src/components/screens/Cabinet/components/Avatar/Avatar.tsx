import { FC } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
	name: string;
}

export const Avatar: FC<AvatarProps> = ({ name }) => {
	return <div className={styles.avatar}>{name[0]}</div>;
};
