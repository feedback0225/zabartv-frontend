import SwiperClass, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { SliderButton } from '@/components/UI/SliderButton/SliderButton';
import 'swiper/css';
import styles from './Hero.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

export const Hero = () => {

    const items = [
        {href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке1'},
        {href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке2'},
        {href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке3'},
        {href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке4'},
        {href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке5'},
        {href: '/movie', source: '/main-bg.jpg', alt: 'Подпись к картинке6'}
    ]

    const navigationPrevRef = useRef<HTMLButtonElement>(null)
    const navigationNextRef = useRef<HTMLButtonElement>(null)

    const navigation = {
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
    }

    const breakpoints = {
        577: {
            spaceBetween: 25,
        },
    }

    const onSwiper = (swiper: SwiperClass) => {
        setTimeout(() => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
        })
    }

    return (
        <section className={styles.hero}>
            <div className={classNames('container', styles.container)}>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView='auto'
                    onSwiper={onSwiper}
                    className={styles.slider}
                    spaceBetween={15}
                    navigation={navigation}
                    breakpoints={breakpoints}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                >
                    <SliderButton className={styles.prev} dir='left' ref={navigationPrevRef}/>
                    <SliderButton className={styles.next} dir='right' ref={navigationNextRef}/>
                    {items.map(el => (
                        <SwiperSlide key={el.alt} className={styles.slide}>
                            <Link href={el.href}>
                                <a className={styles.item}>
                                    <Image
                                        quality={100}
                                        src={el.source}
                                        alt={el.alt}
                                        layout='fill'
                                    />
                                </a>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}