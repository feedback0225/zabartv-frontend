import { Tabs } from '@/components/UI/Tabs/Tabs'
import { Title } from '@/components/UI/Title/Title'
import { MusicCarousel } from './components/MusicCarousel/MusicCarousel'
import classNames from 'classnames'
import styles from './Music.module.scss'

export const Music = () => {

    const data = [
        {poster: '/poster.jpg', id: 1, name: 'Концерт Billie', status: 'Подписка'},
        {poster: '/poster.jpg', id: 2, name: 'Концерт Billie', status: 'Подписка'},
        {poster: '/poster.jpg', id: 3, name: 'Концерт Billie', status: 'Подписка'},
        {poster: '/poster.jpg', id: 4, name: 'Концерт Billie', status: 'Подписка'},
        {poster: '/poster.jpg', id: 5, name: 'Концерт Billie', status: 'Подписка'},
        {poster: '/poster.jpg', id: 6, name: 'Концерт Billie', status: 'Подписка'},
        {poster: '/poster.jpg', id: 7, name: 'Концерт Billie', status: 'Подписка'},
        {poster: '/poster.jpg', id: 8, name: 'Концерт Billie', status: 'Подписка'},
        {poster: '/poster.jpg', id: 9, name: 'Концерт Billie', status: 'Подписка'},
        {poster: '/poster.jpg', id: 10, name: 'Концерт Billie', status: 'Подписка'},
    ]

    const tabs = [
        {txt: 'Концерты', content: <MusicCarousel data={data} />},
        {txt: 'Клипы', content: <MusicCarousel data={data} />},
        {txt: 'Топ-5', content: <MusicCarousel data={data} />},
    ]
    
    return (
        <section className={styles.music}>
            <div className={classNames('container', styles.container)}>
                <Title level='h2' size='medium' className={styles.title}>Музыка</Title>
                <Tabs tabs={tabs} />
            </div>
        </section>
    )
}