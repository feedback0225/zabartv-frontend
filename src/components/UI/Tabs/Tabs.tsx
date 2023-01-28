import { FC, Fragment, ReactNode, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from 'react-tabs';

import classNames from 'classnames';

import styles from './Tabs.module.scss';
import axios from '@/utils/axios';
import { Grid } from '@/UI/Grid/Grid';
import { MovieItem } from '@/UI/MovieItem/MovieItem';

export type TabItem = {
	txt: string;
	id?: string;
	condition?: unknown;
	content: ReactNode;
};

interface TabsProps {
	tabs: TabItem[];
	className?: string;
}

const getStoreLocal = (name: string) => {
	if (typeof localStorage !== 'undefined') {
		const ls = localStorage.getItem(name);
		return ls ? JSON.parse(ls) : null;
	}
	return null;
};

export const Tabs: FC<TabsProps> = ({ className, tabs }) => {
	// ${tabs[0].txt - unique identificator
	const [activeTab, setActiveTab] = useState(getStoreLocal(`lastCategory-${tabs[0]?.txt}`));
	const [activePage, setActivePage] = useState(0);
	const [newFilms, setNewFilms] = useState<any>([]);

	useEffect(() => {
		setTimeout(() => {
			setActiveTab(getStoreLocal(`lastCategory-${tabs[0]?.txt}`));
		}, 1000);
	}, []);

	const handleChangeCategory = (id: any) => {
		setActiveTab(id);
		localStorage.setItem(`lastCategory-${tabs[0].txt}`, String(id));
	};

	const handleShowMore = async (id: string) => {
		try {
			let { data } = await axios({
				url: `/items/selectforids?id=${id}-${activePage + 1}`,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				method: 'get',
			});

			data = data.items.map((tab: any, i: number) => {
				const data = tab.items;
				const txt = i;

				return {
					txt,
					content: (
						<Grid
							items={data}
							renderItem={(el) => {
								const item = el[0];

								return <MovieItem item={item} />;
							}}
						/>
					),
				};
			});

			setActivePage(activePage + 1);
			setNewFilms(data);
			return data;
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<ReactTabs
			selectedTabClassName={styles.selected}
			selectedIndex={activeTab ? +activeTab : 0}
			onSelect={(id) => handleChangeCategory(id)}
			className={classNames(styles.tabs, className)}
		>
			<div className={styles.wrapper}>
				<TabList className={styles.list}>
					{tabs.map((el: TabItem) => {
						const { txt, condition = true } = el;
						return (
							<Fragment key={txt}>
								{condition ? <Tab className={styles.tab}>{txt}</Tab> : null}
							</Fragment>
						);
					})}
				</TabList>
			</div>
			{tabs.map((el: TabItem) => {
				const { txt, content, id, condition = true } = el;
				return (
					<Fragment key={txt}>
						{condition ? (
							<TabPanel>
								{content}
								{/* <button onClick={() => handleShowMore(id)}>Показать еще</button> */}
							</TabPanel>
						) : null}
					</Fragment>
				);
			})}
			{/* {newFilms.map((el: TabItem) => {
				const { txt, content, id, condition = true } = el;
				return (
					<Fragment key={txt}>
						<TabPanel>
							{content}
							<button onClick={() => handleShowMore(id)}>Показать еще</button>
						</TabPanel>
					</Fragment>
				);
			})} */}
		</ReactTabs>
	);
};
