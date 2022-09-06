import { FC, PropsWithChildren } from 'react';
import styles from './Title.module.scss';
import classNames from 'classnames';

export interface TitleProps {
	className?: string;
	level?: Levels;
	size?: 'small' | 'large' | 'medium';
}

type Levels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Title: FC<PropsWithChildren<TitleProps>> = ({
	className,
	size = 'large',
	level = 'h1',
	children,
	...props
}) => {
	const Tag = `${level}` as keyof JSX.IntrinsicElements;

	return (
		<Tag
			className={classNames(
				styles.title,
				size === 'medium' && styles.medium,
				size === 'large' && styles.large,
				size === 'small' && styles.small,
				className
			)}
			{...props}
		>
			{children}
		</Tag>
	);
};
