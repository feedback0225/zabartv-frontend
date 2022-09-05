import { FC } from "react"
import { ButtonBase } from "@/components/ButtonBase/ButtonBase"
import { FavouriteIcon } from '@/icons'
import Image from "next/image"
import Link from "next/link"
import styles from './FavouritesItem.module.scss'

interface FavouritesItemProps {
    item: any;
}

export const FavouritesItem: FC<FavouritesItemProps> = ({item}) => {

    const {image, href, title, type} = item

    return (
        <div className={styles.item}>
            <div className={styles.top}>
                <Image
                    priority
                    quality={100}
                    unoptimized
                    layout="fill"
                    className={styles.image}
                    src={image}
                    alt={title}
                />
                <ButtonBase className={styles.btn}>
                    <FavouriteIcon />
                </ButtonBase>
            </div>
            <span className={styles.status}>{type}</span>
            <Link href={href}>
                <a className={styles.title}>{title}</a>
            </Link>
        </div>
    )
}