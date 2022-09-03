import styles from './Support.module.scss';
import { Title } from '@/UI/Title/Title'
import { TelegramIcon } from '@/icons';

export const Support = () => {
    return (
        <div className={styles.item}>
            <Title className={styles.title} level='h2' size='small'>Поддержка в Телеграм</Title>
            <p className={styles.desc}>Мы всегда готовы вам помочь. Наши операторы онлайн 24/7</p>
            <a href="#" className={styles.link}>
                НАПИСАТЬ В  ПОДДЕРЖКУ
                <TelegramIcon />
            </a>
        </div>
    )
}