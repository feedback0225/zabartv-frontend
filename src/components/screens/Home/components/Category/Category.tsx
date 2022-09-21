import { Tabs } from '@/UI/Tabs/Tabs';
import { Title } from '@/UI/Title/Title';
import { CategoryCarousel } from './components/CategoryCarousel/CategoryCarousel';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import classNames from 'classnames';
import styles from './Category.module.scss';

export const Category = () => {
	const { data } = useTypedSelector((state) => state.home);

	return (
		<>
			{data?.map((category) => {
				const {
					id,
					child_items,
					films,
					content: { title_in_nav },
				} = category;

				const tabs = child_items?.map((tab, idx) => {
					const txt = tab.content.title;

					const data = films.items[idx];

					return { txt, content: <CategoryCarousel data={data} /> };
				});

				return (
					<section key={id} className={styles.section}>
						<div className={classNames('container', styles.container)}>
							<Title level="h2" size="medium" className={styles.title}>
								{title_in_nav}
							</Title>
							<Tabs tabs={tabs} />
						</div>
					</section>
				);
			})}
		</>
	);
};
