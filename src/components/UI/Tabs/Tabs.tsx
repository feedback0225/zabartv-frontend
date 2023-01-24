import { FC, Fragment, ReactNode, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from 'react-tabs';

import classNames from 'classnames';

import styles from './Tabs.module.scss';;

export type TabItem = {
	txt: string;
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

	const handleChangeCategory = (id: any) => {
		setActiveTab(id);
		localStorage.setItem(`lastCategory-${tabs[0].txt}`, String(id));
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
								{condition ? (
									<Tab
										className={styles.tab}
									>
										{txt}
									</Tab>
								) : null}
							</Fragment>
						);
					})}
				</TabList>
			</div>
			{tabs.map((el: TabItem) => {
				const { txt, content, condition = true } = el;

				return (
					<Fragment key={txt}>{condition ? <TabPanel>{content}</TabPanel> : null}</Fragment>
				);
			})}
		</ReactTabs>
	);
};
