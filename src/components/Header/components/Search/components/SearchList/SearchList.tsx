import { FC, useEffect, useState } from 'react';
import axios from '@/utils/axios';
import styles from './SearchList.module.scss';
import { IMovie } from '@/types/IMovie';
import { SearchItem } from '../SearchItem/SearchItem';

interface SearchListProps {
	value: string;
}

interface SearchData {
	items: [IMovie][];
}

export const SearchList: FC<SearchListProps> = ({ value }) => {
	const [data, setData] = useState<SearchData | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const search = async () => {
		try {
			setIsLoading(true);

			const { data } = await axios
				.get('/items/search', {
					params: {
						search_data: value.toLowerCase(),
						type: 'limit',
					},
				})
				.finally(() => setIsLoading(false));

			setData(data);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		search();
	}, [value]);

	const List = (
		<div className={styles.list}>
			{data?.items.map((item, idx) => (
				<SearchItem key={idx} item={item} />
			))}
		</div>
	);

	return data?.items?.length! > 0 ? List : null;
};
