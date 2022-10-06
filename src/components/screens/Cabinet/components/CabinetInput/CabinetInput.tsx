import { ChangeEvent, FC, InputHTMLAttributes, useRef, useState } from 'react';
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { EditIcon, CloseIcon } from '@/icons';
import { Link } from '@/UI/Link/Link';
import classNames from 'classnames';
import styles from './CabinetInput.module.scss';

export interface CabinetInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	date?: boolean;
	value: string;
	applyChanges: (value: string) => void;
}

export const CabinetInput: FC<CabinetInputProps> = ({
	className,
	applyChanges,
	type,
	value,
	date,
	label,
	...props
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isEdited, setIsEdited] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>(value);

	const closeField = () => {
		inputRef.current?.blur();
		setIsEdited(false);
	};

	const handleEditInput = () => {
		if (!isEdited) {
			setIsEdited(true);
			inputRef.current?.focus();
		} else {
			setInputValue(value);
			closeField();
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleApplyChanges = () => {
		applyChanges(inputValue);
		closeField();
	};

	return (
		<div data-testid="cabinet-input-item" className={styles.item}>
			<span className={styles.label}>{label}</span>
			<input
				data-testid="cabinet-input"
				ref={inputRef}
				className={classNames(styles.input, !isEdited && styles.value)}
				type={isEdited ? 'text' : type}
				placeholder={value}
				value={inputValue}
				onChange={handleChange}
				{...props}
			/>
			{isEdited && (
				<Link
					disabled={inputValue.length === 0}
					as="button"
					onClick={handleApplyChanges}
					className={styles.apply}
				>
					Сохранить изменения
				</Link>
			)}
			<ButtonBase
				data-testid="cabinet-input-button"
				type="button"
				onClick={handleEditInput}
				className={styles.btn}
			>
				{!isEdited ? <EditIcon /> : <CloseIcon />}
			</ButtonBase>
		</div>
	);
};
