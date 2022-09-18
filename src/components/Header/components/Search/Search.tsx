import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useTypedActions } from '@/hooks/useTypedActions';
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { useOnClickOutside } from 'usehooks-ts';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CloseIcon, SearchIcon } from '@/icons';
import { TextField } from '@/UI/TextField/TextField';
import styles from './Search.module.scss';
import classNames from 'classnames';

interface SearchProps {
	className?: string;
}

export const Search: FC<SearchProps> = ({ className }) => {
	const { isSearchVisible } = useTypedSelector((state) => state.search);
	const { setSearch, setVisibleSearch } = useTypedActions((state) => state.search);
	const [value, setValue] = useState<string>('');
	const formRef = useRef<HTMLFormElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const router = useRouter();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const submitForm = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
		e.preventDefault();
		setSearch(value);
		router.push(`/search/${value}`);
	};

	useEffect(() => {
		setVisibleSearch(false);
		setValue('');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router]);

	useOnClickOutside(formRef, () => setVisibleSearch(false));

	useEffect(() => {
		if (isSearchVisible) {
			inputRef?.current?.focus();
		}
	}, [isSearchVisible]);

	const handleClose = () => {
		inputRef?.current?.blur();
		setVisibleSearch(false);
	};

	return (
		<form
			onSubmit={submitForm}
			ref={formRef}
			action="#"
			className={classNames(styles.form, isSearchVisible && styles.visible, className)}
		>
			<TextField
				variant="dark"
				className={styles.search}
				ref={inputRef}
				type="search"
				value={value}
				onChange={handleChange}
				placeholder="Поиск..."
			/>
			<ButtonBase type="button" className={styles.close} onClick={handleClose}>
				<CloseIcon />
			</ButtonBase>
			<span className={styles.icon}>
				<SearchIcon />
			</span>
		</form>
	);
};
