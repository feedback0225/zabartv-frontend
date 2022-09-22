import { RuIcon, CeIcon, ArrowIcon } from '@/icons';
import { FC, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { useTypedActions } from '@/hooks/useTypedActions';
import classNames from 'classnames';
import styles from './Lang.module.scss';

interface LangProps {
	className?: string;
}

export const Lang: FC<LangProps> = ({ className }) => {
	const { lang } = useTypedSelector((state) => state.lang);
	const { setLang } = useTypedActions((state) => state.lang);
	const [active, setActive] = useState<boolean>(false);
	const langRef = useRef<HTMLDivElement>(null);

	const toggleActive = () => {
		setActive(!active);
	};

	useOnClickOutside(langRef, () => setActive(false));

	const items = [
		{ icon: <RuIcon />, txt: 'Русский язык', lang: 'ru' },
		{ icon: <CeIcon />, txt: 'Чеченский язык', lang: 'ce' },
	];

	const handleChangeLang = (lang: string) => {
		setLang(lang);
	};

	return (
		<div
			ref={langRef}
			onClick={toggleActive}
			className={classNames(styles.lang, active && styles.active, className)}
		>
			<ul className={classNames('list-reset', styles.list)}>
				{items.map((el) => (
					<li
						key={el.lang}
						className={classNames(styles.item, lang === el.lang && styles.selected)}
					>
						<ButtonBase onClick={() => handleChangeLang(el.lang)} className={styles.link}>
							{el.icon}
							<span className={styles.txt}>{el.txt}</span>
						</ButtonBase>
					</li>
				))}
			</ul>
			<span className={styles.arrow}>
				<ArrowIcon />
			</span>
		</div>
	);
};
