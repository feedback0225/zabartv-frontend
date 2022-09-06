import { FC, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import classNames from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps {
	icon?: ReactNode;
	size?: 'large' | 'medium' | 'small';
	onClick?: () => void;
	as?: 'link' | 'button';
	variant?: 'white' | 'dark' | 'gradient';
	disabled?: boolean;
	className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = forwardRef(
	(
		{
			as = 'button',
			disabled,
			children,
			variant,
			icon,
			size = 'medium',
			className,
			...props
		},
		ref
	) => {
		const proxy = {
			link: 'a',
			button: ButtonBase,
		};

		const Element = proxy[as];

		return (
			<Element
				disabled={disabled}
				className={classNames(
					styles.btn,
					size === 'large' && styles.large,
					size === 'medium' && styles.medium,
					size === 'small' && styles.small,
					variant === 'gradient' && styles.gradient,
					variant === 'white' && styles.white,
					variant === 'dark' && styles.dark,
					className
				)}
				{...props}
			>
				{icon && <span className={styles.icon}>{icon}</span>}
				{children}
			</Element>
		);
	}
);

Button.displayName = 'Button.tsx';
