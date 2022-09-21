import { ButtonHTMLAttributes, forwardRef, PropsWithChildren, useEffect } from 'react';
import { TitleProps } from '@/UI/Title/Title';
import { TextField, TextFieldProps } from '@/UI/TextField/TextField';
import { ButtonProps } from '@/UI/Button/Button';
import { LinkProps } from '@/UI/Link/Link';
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { CloseIcon } from '@/icons';
import { Portal } from '@/components/Portal/Portal';
import { CSSTransition } from 'react-transition-group';
import { useLockedBody } from 'usehooks-ts';
import styles from './Modal.module.scss';
import classNames from 'classnames';

interface ModalProps {
	open: boolean;
	variant?: 'grade' | 'gradient';
	fullscreen?: boolean;
	gradient?: boolean;
	onClose: () => void;
}

interface ModalTitleProps extends TitleProps {
	activeClassName?: boolean;
}

function Modal({ children, variant, open, fullscreen, onClose }: PropsWithChildren<ModalProps>) {
	useLockedBody(open);

	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => event.code === 'Escape' && onClose();

		document.addEventListener('keydown', handleEscapeKey);

		return () => document.removeEventListener('keydown', handleEscapeKey);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<CSSTransition in={open} timeout={300} classNames="modal">
			<Portal rootId="#modal">
				{open && (
					<div
						onClick={onClose}
						className={classNames(styles.modal, fullscreen && styles.fullscreen)}
					>
						<div
							className={classNames(
								styles.content,
								variant === 'gradient' && styles.gradient,
								variant === 'grade' && styles.grade
							)}
							onClick={(e) => e.stopPropagation()}
						>
							{children}
							<Modal.Close onClick={onClose} />
						</div>
					</div>
				)}
			</Portal>
		</CSSTransition>
	);
}

module Modal {
	export const Title = ({
		children,
		activeClassName,
		size = 'medium',
		className,
		...props
	}: PropsWithChildren<ModalTitleProps>) => {
		return (
			<Title
				className={classNames(styles.title, activeClassName && styles.titleActive, className)}
				level="h2"
				size={size}
				{...props}
			>
				{children}
			</Title>
		);
	};

	export const Tabs = ({ children }: PropsWithChildren<{}>) => {
		return <div className={styles.tabs}>{children}</div>;
	};

	export const Desc = ({ children }: PropsWithChildren<{}>) => {
		return <p className={styles.desc}>{children}</p>;
	};

	export const Inputs = ({ children }: PropsWithChildren<{}>) => {
		return <div className={styles.inputs}>{children}</div>;
	};

	export const Input = ({ ...props }: TextFieldProps) => {
		return <TextField className={styles.input} {...props} />;
	};

	export const Button = forwardRef(({ children, ...props }: PropsWithChildren<ButtonProps>, ref) => {
		return (
			<Button className={styles.btn} {...props}>
				{children}
			</Button>
		);
	});

	export const Link = forwardRef(({ children, ...props }: PropsWithChildren<LinkProps>, ref) => {
		return (
			<Link className={styles.link} {...props}>
				{children}
			</Link>
		);
	});

	export const Close = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
		return (
			<ButtonBase className={styles.close} {...props}>
				<CloseIcon />
			</ButtonBase>
		);
	};

	Button.displayName = 'Button.tsx';
	Link.displayName = 'Link.tsx';
}

export { Modal };
