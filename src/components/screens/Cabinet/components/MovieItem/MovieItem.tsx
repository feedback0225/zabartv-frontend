import { FC } from 'react';
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { FavouriteIcon } from '@/icons';
import axios from '@/utils/axios';
import NextLink from 'next/link';
import Image from 'next/image';
import styles from './MovieItem.module.scss';
import { IMovie } from '@/types/IMovie';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { getFavorites } from '@/reducers/user/thunks';

interface MovieItemProps {
	item: IMovie;
	favourite?: boolean;
}

export const MovieItem: FC<MovieItemProps> = ({ item, favourite }) => {
	const { preview_base_url, preview_path, film_path, id, type, content } = item;

	const url = `${preview_base_url}/${preview_path}`;

	const { title } = content;

	const category = type === 1 ? 'Фильм' : 'Сериал';

	const dispatch = useAppDispatch();

	const handleToggleFavorites = async () => {
		try {
			await axios.get('/items/updatewishlist', {
				params: {
					film_id: id,
				},
			});

			await dispatch(getFavorites());
		} catch (e: unknown) {
			console.error(e);
		}
	};

	return (
		<div className={styles.item}>
			<div className={styles.top}>
				<NextLink href={`/movie/${id}`}>
					<a className={styles.poster}>
						<Image
							priority
							quality={100}
							layout="fill"
							className={styles.image}
							src={url}
							alt={title}
						/>
					</a>
				</NextLink>
				{favourite && (
					<ButtonBase onClick={handleToggleFavorites} className={styles.btn}>
						<FavouriteIcon />
					</ButtonBase>
				)}
			</div>
			<span className={styles.status}>{category}</span>
			<NextLink href={`/movie/${id}`}>
				<a className={styles.title}>{title}</a>
			</NextLink>
		</div>
	);
};
