import { PlayIcon } from "@/components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react"
import styles from './MusicItem.module.scss'

interface MusicItemProps {
    item: any;
}

export const MusicItem: FC<MusicItemProps> = ({item}) => {

    const {poster, id, name, status} = item

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
                        alt={name}
                    />
                    <span className={styles.play}>
                        <PlayIcon />
                    </span>
                </div>
                <h3 className={styles.name}>{name}</h3>
                <span className={styles.status}>{status}</span>
            </a>
        </Link>
    )
}