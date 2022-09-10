import { Carousel } from '@/components/Carousel/Carousel';
import { VideoItem } from '@/UI/VideoItem/VideoItem';
import { SwiperSlide } from 'swiper/react';
import styles from './SeasonsCarousel.module.scss';

export const SeasonsCarousel = () => {
	const data = [
		{
			poster: '/poster.jpg',
			id: 1,
			title: 'Серия 1',
			desc: 'Но пока работу по специальности ему найти не удается, он зарабатывает на жизнь ремонтом яхт. Нихан Сезин – дочь бизнесмена Ондера. Она талантливая художница. Фирма ее отца находится на грани банкротства, ее готова поглотить компания, возглавляемая ',
		},
		{
			poster: '/poster.jpg',
			id: 2,
			title: 'Серия 2',
			desc: 'Но пока работу по специальности ему найти не удается, он зарабатывает на жизнь ремонтом яхт. Нихан Сезин – дочь бизнесмена Ондера. Она талантливая художница. ',
		},
		{
			poster: '/poster.jpg',
			id: 3,
			title: 'Серия 1',
			desc: 'Но пока работу по специальности ему найти не удается, он зарабатывает на жизнь ремонтом яхт. Нихан Сезин – дочь бизнесмена Ондера. Она талантливая художница. Фирма ее отца находится на грани банкротства, ее готова поглотить компания, возглавляемая ',
		},
		{
			poster: '/poster.jpg',
			id: 4,
			title: 'Серия 2',
			desc: 'Но пока работу по специальности ему найти не удается, он зарабатывает на жизнь ремонтом яхт. Нихан Сезин – дочь бизнесмена Ондера. Она талантливая художница. ',
		},
		{
			poster: '/poster.jpg',
			id: 5,
			title: 'Серия 1',
			desc: 'Но пока работу по специальности ему найти не удается, он зарабатывает на жизнь ремонтом яхт. Нихан Сезин – дочь бизнесмена Ондера. Она талантливая художница. Фирма ее отца находится на грани банкротства, ее готова поглотить компания, возглавляемая ',
		},
		{
			poster: '/poster.jpg',
			id: 6,
			title: 'Серия 2',
			desc: 'Но пока работу по специальности ему найти не удается, он зарабатывает на жизнь ремонтом яхт. Нихан Сезин – дочь бизнесмена Ондера. Она талантливая художница. ',
		},
		{
			poster: '/poster.jpg',
			id: 7,
			title: 'Серия 1',
			desc: 'Но пока работу по специальности ему найти не удается, он зарабатывает на жизнь ремонтом яхт. Нихан Сезин – дочь бизнесмена Ондера. Она талантливая художница. Фирма ее отца находится на грани банкротства, ее готова поглотить компания, возглавляемая ',
		},
		{
			poster: '/poster.jpg',
			id: 8,
			title: 'Серия 1',
			desc: 'Но пока работу по специальности ему найти не удается, он зарабатывает на жизнь ремонтом яхт. Нихан Сезин – дочь бизнесмена Ондера. Она талантливая художница. Фирма ее отца находится на грани банкротства, ее готова поглотить компания, возглавляемая ',
		},
		{
			poster: '/poster.jpg',
			id: 9,
			title: 'Серия 2',
			desc: 'Но пока работу по специальности ему найти не удается, он зарабатывает на жизнь ремонтом яхт. Нихан Сезин – дочь бизнесмена Ондера. Она талантливая художница. ',
		},
		{
			poster: '/poster.jpg',
			id: 10,
			title: 'Серия 2',
			desc: 'Но пока работу по специальности ему найти не удается, он зарабатывает на жизнь ремонтом яхт. Нихан Сезин – дочь бизнесмена Ондера. Она талантливая художница. ',
		},
	];

	const breakpoints = {
		769: {
			slidesPerView: 3,
		},
		1025: {
			slidesPerView: 4,
		},
	};

	return (
		<Carousel
			className={styles.slider}
			prevBtnClass={styles.btn}
			nextBtnClass={styles.btn}
			breakpoints={breakpoints}
			spaceBetween={24}
		>
			{data.map((item) => (
				<SwiperSlide className={styles.item} key={item.id}>
					<VideoItem item={item} />
				</SwiperSlide>
			))}
		</Carousel>
	);
};