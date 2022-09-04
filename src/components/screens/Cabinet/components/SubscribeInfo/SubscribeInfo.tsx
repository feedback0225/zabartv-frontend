import { Link } from '@/components/UI/Link/Link';
import { Title } from '@/UI/Title/Title';
import { FC } from 'react'
import styles from './SubscribeInfo.module.scss'

interface SubscribeInfoProps {
    info: any;
}

export const SubscribeInfo: FC<SubscribeInfoProps> = ({info}) => {

    const {title, price, desc} = info

    return (
        <div className={styles.card}>
            <Title level='h2' size='medium' className={styles.title}>
                {title}
                <span>&nbsp;{price}</span>
            </Title>
            <p className={styles.desc}>
                {desc}
            </p>
            <Link as='button' className={styles.btn}>Продлить подписку</Link>
        </div>
    )
}