import { FC } from 'react';
import { Carousel } from '@/components/Carousel/Carousel';
import { MovieItem } from '@/UI/MovieItem/MovieItem';
import { SwiperSlide } from 'swiper/react';
import styles from './HumorCarousel.module.scss';

interface HumorCarouselProps {
	//временно
	data: any[];
}

export const HumorCarousel: FC<HumorCarouselProps> = ({ data }) => {
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
				{data.map((item) => (
					<SwiperSlide className={styles.item} key={item.id}>
						<MovieItem item={item} />
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};
