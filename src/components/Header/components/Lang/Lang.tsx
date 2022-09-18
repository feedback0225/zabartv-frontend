import { RuIcon, CeIcon, ArrowIcon } from '@/icons';
import { FC, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { LanguageSwitchLink } from '@/components/LanguageSwitchLink/LanguageSwitchLink';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './Lang.module.scss';

interface LangProps {
	className?: string;
}

export const Lang: FC<LangProps> = ({ className }) => {
	const {
		query: { locale },
	} = useRouter();
	const [active, setActive] = useState<boolean>(false);
	const langRef = useRef<HTMLDivElement>(null);

	const toggleActive = () => {
		setActive(!active);
	};

	useOnClickOutside(langRef, () => setActive(false));

	const items = [
		{ icon: <RuIcon />, txt: 'Русский язык', locale: 'ru' },
		{ icon: <CeIcon />, txt: 'Чеченский язык', locale: 'ce' },
	];

	return (
		<div
			ref={langRef}
			onClick={toggleActive}
			className={classNames(styles.lang, active && styles.active, className)}
		>
			<ul className={classNames('list-reset', styles.list)}>
				{items.map((el) => (
					<li
						key={el.locale}
						className={classNames(styles.item, locale === el.locale && styles.selected)}
					>
						<LanguageSwitchLink locale={el.locale} className={styles.link}>
							{el.icon}
							<span className={styles.txt}>{el.txt}</span>
						</LanguageSwitchLink>
					</li>
				))}
			</ul>
			<span className={styles.arrow}>
				<ArrowIcon />
			</span>
		</div>
	);
};
