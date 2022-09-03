import { PlayIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react"
import styles from './MusicItem.module.scss'

interface MusicItemProps {
    item: any;
}

export const MusicItem: FC<MusicItemProps> = ({item}) => {

    const {poster, id, title, status} = item

    return (
        <Link href='/music'>
            <a className={styles.item}>
                <div className={styles.top}>
                    <Image
                        priority
                        quality={100}
                        unoptimized
                        layout="fill"
                        src={poster}
                        alt={title}
                    />
                    <span className={styles.play}>
                        <PlayIcon />
                    </span>
                </div>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.status}>{status}</span>
            </a>
        </Link>
    )
}