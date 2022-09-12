import { Carousel } from '@/components/Carousel/Carousel';
import { SwiperSlide } from 'swiper/react';
import { NextLink } from '@/components/NextLink/NextLink';
import styles from './Hero.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

export const Hero = () => {
	const items = [
		{ href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке1' },
		{ href: '/movie', source: '/main-bg2.jpg', alt: 'Подпись к картинке2' },
		{ href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке3' },
		{ href: '/movie', source: '/main-bg2.jpg', alt: 'Подпись к картинке4' },
		{ href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке5' },
		{ href: '/movie', source: '/main-bg2.jpg', alt: 'Подпись к картинке6' },
	];

	const breakpoints = {
		769: {
			spaceBetween: 24,
		},
	};

	return (
		<section className={styles.hero}>
			<div className={classNames('container', styles.container)}>
				<Carousel
					prevBtnClass={styles.prev}
					nextBtnClass={styles.next}
					className={styles.slider}
					spaceBetween={15}
					loop={true}
					breakpoints={breakpoints}
					centeredSlides={true}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
				>
					{items.map((el) => (
						<SwiperSlide key={el.alt} className={styles.slide}>
							{el.href ? (
								<NextLink href={el.href}>
									<a className={styles.item}>
										<Image
											priority
											quality={100}
											src={el.source}
											alt={el.alt}
											layout="fill"
										/>
									</a>
								</NextLink>
							) : (
								<div className={styles.item}>
									<Image
										priority
										quality={100}
										src={el.source}
										alt={el.alt}
										layout="fill"
									/>
								</div>
							)}
						</SwiperSlide>
					))}
				</Carousel>
			</div>
		</section>
	);
};
