import { FC } from "react"
import { Carousel } from "@/components/Carousel/Carousel"
import { MusicItem } from "@/components/UI/MusicItem/MusicItem"
import { SwiperSlide } from "swiper/react"
import styles from './MusicCarousel.module.scss'

interface MusicCarouselProps {
    //временно
    data: any[]
}

export const MusicCarousel: FC<MusicCarouselProps> = ({data}) => {
    return (
        <Carousel className={styles.slider}>
            {data.map(item => (
                <SwiperSlide className={styles.item} key={item.id}>
                    <MusicItem item={item} />
                </SwiperSlide>
            ))}
        </Carousel>
    )
}