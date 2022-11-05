import { RuIcon, CeIcon, ArrowIcon } from '@/icons';
import { FC, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import classNames from 'classnames';
import styles from './Lang.module.scss';
import { getSessionId } from '@/utils/getSessionId';
interface LangProps {
	className?: string;
}

export const Lang: FC<LangProps> = ({ className }) => {
	const { locale, asPath } = useRouter();
	const [active, setActive] = useState<boolean>(false);
	const langRef = useRef<HTMLDivElement>(null);

	const toggleActive = () => {
		setActive(!active);
	};

	useOnClickOutside(langRef, () => setActive(false));

	const items = [
		{ icon: <RuIcon />, txt: 'Русский язык', locale: 'ru', code: 'ru-RU' },
		//Я указал коды языков чтобы они синхронизировались в бэке
		{ icon: <CeIcon />, txt: 'Чеченский язык', locale: 'ce', code: 'che_CHE' },
	];
	const setSessionid = (el: string) => {
		const session_id = getSessionId();
		//Я сделал апи вызов прямо здесь. потом его измените
		//Делаем запрос на изменения языка. И все теперь пр запросах указывайе session_id категории придуд в выбранном языке
		fetch(
			`http://appsignals.coderman.top/api/v1/languages/index?lang=${el}&session_id=${session_id}&token=dev-token`
		)
			.then((response) => response.json())
			.then((data) => console.log(data));
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
						key={el.locale}
						className={classNames(styles.item, locale === el.locale && styles.selected)}
					>
						<NextLink href={asPath} locale={el.locale}>
							<a onClick={() => setSessionid(el.code)} className={styles.link}>
								{el.icon}
								<span className={styles.txt}>{el.txt}</span>
							</a>
						</NextLink>
					</li>
				))}
			</ul>
			<span className={styles.arrow}>
				<ArrowIcon />
			</span>
		</div>
	);
};
