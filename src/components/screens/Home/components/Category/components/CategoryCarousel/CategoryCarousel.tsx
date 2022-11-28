import { FC } from 'react';
import { Carousel } from '@/components/Carousel/Carousel';
import { MovieItem } from '@/UI/MovieItem/MovieItem';
import { SwiperSlide } from 'swiper/react';
import styles from './CategoryCarousel.module.scss';
import { IMovieItem } from '@/types/IMovieItem';

interface CategoryCarouselProps {
	data: {
		items: [IMovieItem[]];
	};
}

export const CategoryCarousel: FC<CategoryCarouselProps> = ({ data }) => {
	const breakpoints = {
		769: {
			slidesPerView: 3,
		},
		1025: {
			slidesPerView: 4,
		},
	};

	return (
		<div className={styles.container}>
			<Carousel className={styles.slider} breakpoints={breakpoints} spaceBetween={24}>
				{data?.items?.map((el) => {
					const item = el[0];

					return (
						<SwiperSlide className={styles.item} key={item.id}>
							<MovieItem item={item} />
						</SwiperSlide>
					);
				})}
			</Carousel>
		</div>
	);
};
