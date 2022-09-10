import { RoutesEnum } from '@/constants/routes';
import { Social } from '@/components/Footer/components/Social/Social';
import { Support } from './components/Support/Support';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { FC } from 'react';

interface FooterProps {
	sticky?: boolean;
}

export const Footer: FC<FooterProps> = ({ sticky }) => {
	const menu = [
		{
			title: 'О нас',
			items: [
				{ href: RoutesEnum.About, txt: 'О компании' },
				{ href: '/', txt: 'Вакансии' },
				{ href: '/', txt: 'Программа бета-тестирования' },
				{ href: '/', txt: 'Информация для партнёров' },
				{ href: '/', txt: 'Размещение рекламы' },
				{ href: RoutesEnum.Policy, txt: 'Пользовательское соглашение' },
				{ href: RoutesEnum.Policy, txt: 'Политика конфиденциальности' },
				{ href: '/', txt: 'Комплаенс' },
			],
		},
		{
			title: 'Разделы',
			items: [
				{ href: RoutesEnum.Humor, txt: 'Юмор' },
				{ href: RoutesEnum.Music, txt: 'Музыка' },
				{ href: RoutesEnum.Cartoons, txt: 'Мульфильмы' },
				{ href: RoutesEnum.Tv, txt: 'ТВ' },
				{ href: RoutesEnum.Films, txt: 'Фильмы' },
				{ href: RoutesEnum.Series, txt: 'Сериалы' },
				{ href: RoutesEnum.New, txt: 'New' },
				{ href: RoutesEnum.Subscribe, txt: 'Выбор подписки' },
			],
		},
	];

	return (
		<footer className={classNames(styles.footer, sticky && styles.sticky)}>
			<div className={styles.top}>
				<div className={classNames('container', styles.topContainer)}>
					<div className={styles.left}>
						{menu.map((item) => {
							const { title, items } = item;

							return (
								<div key={title} className={styles.col}>
									<h2 className={styles.title}>{title}</h2>
									<ul className={classNames('list-reset', styles.list)}>
										{items.map((el) => (
											<li key={el.txt} className={styles.item}>
												<Link href={el.href}>
													<a className={styles.link}>{el.txt}</a>
												</Link>
											</li>
										))}
									</ul>
								</div>
							);
						})}
					</div>
					<Support />
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={classNames('container', styles.bottomContainer)}>
					<span className={styles.copy}>© 2022 ООО «ZabarTV»</span>
					<Social />
					<p className={styles.desc}>
						Дизайн и разработка -&nbsp;
						<a href="https://rusodot.ru/" className={styles.descLink}>
							RUSO
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};
