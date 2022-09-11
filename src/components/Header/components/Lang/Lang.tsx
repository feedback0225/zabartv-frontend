import { RuIcon, CeIcon, ArrowIcon } from '@/icons';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { LanguageSwitchLink } from '@/components/LanguageSwitchLink/LanguageSwitchLink';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './Lang.module.scss';

export const Lang = () => {
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
		{ icon: <RuIcon />, locale: 'ru' },
		{ icon: <CeIcon />, locale: 'ce' },
	];

	return (
		<div
			ref={langRef}
			onClick={toggleActive}
			className={classNames(styles.lang, active && styles.active)}
		>
			<ul className={classNames('list-reset', styles.list)}>
				{items.map((el) => (
					<li
						key={el.locale}
						className={classNames(styles.item, locale === el.locale && styles.selected)}
					>
						<LanguageSwitchLink locale={el.locale} className={styles.link}>
							{el.icon}
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
