import { RoutesEnum } from '@/constants/routes';
import { Social } from '@/components/Footer/components/Social/Social';
import { Support } from './components/Support/Support';
import NextLink from 'next/link';
import { FC } from 'react';
import classNames from 'classnames';
import styles from './Footer.module.scss';
import { useTranslation } from 'next-i18next';

interface FooterProps {
	sticky?: boolean;
}

export const Footer: FC<FooterProps> = ({ sticky }) => {
	const menu = [
		{
			title: 'About us',
			items: [
				{ href: RoutesEnum.About, txt: 'About' },
				{ href: '/', txt: 'Jobs' },
				{ href: '/', txt: 'Beta Program' },
				{ href: '/', txt: 'Information for partners' },
				{ href: '/', txt: 'Advertising placement' },
				{ href: RoutesEnum.Policy, txt: 'Terms of use' },
				{ href: RoutesEnum.Policy, txt: 'Privacy Policy' },
				{ href: '/', txt: 'Humor' },
			],
		},
		{
			title: 'Sections',
			items: [
				{ href: RoutesEnum.Humor, txt: 'Юмор' },
				{ href: RoutesEnum.Music, txt: 'Music' },
				{ href: RoutesEnum.Cartoons, txt: 'Cartoons' },
				{ href: RoutesEnum.Tv, txt: 'Tv' },
				{ href: RoutesEnum.Films, txt: 'Films' },
				{ href: RoutesEnum.Series, txt: 'Series' },
				{ href: RoutesEnum.New, txt: 'New' },
				{ href: RoutesEnum.Subscribe, txt: 'Subscribe' },
			],
		},
	];
	const { t } = useTranslation();

	return (
		<footer className={classNames(styles.footer, sticky && styles.sticky)}>
			<div className={styles.top}>
				<div className={classNames('container', styles.topContainer)}>
					<div className={styles.left}>
						{menu.map((item) => {
							const { title, items } = item;

							return (
								<div key={title} className={styles.col}>
									<h2 className={styles.title}>{t(title)}</h2>
									<ul className={classNames('list-reset', styles.list)}>
										{items.map((el) => (
											<li key={el.txt} className={styles.item}>
												<NextLink href={el.href}>
													<a className={styles.link}>{t(el.txt)}</a>
												</NextLink>
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
						<a
							target={'_blank'}
							rel={'noreferrer'}
							href="https://rusodot.ru/"
							className={styles.descLink}
						>
							RUSO
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};
