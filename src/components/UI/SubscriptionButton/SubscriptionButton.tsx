import { SubscriptionIcon } from "@/components/Icons/Icons"
import { RoutesEnum } from "@/constants/routes"
import { FC } from "react"
import { Button } from "../Button/Button"
import Link from "next/link"

interface SubscriptionButtonProps {
    className?: string;
}

export const SubscriptionButton: FC<SubscriptionButtonProps> = ({className}) => {
  return (
    <Link href={RoutesEnum.Subscription} passHref>
        <Button
            as='link'
            size='small'
            gradient
            className={className}
            icon={<SubscriptionIcon />}
        >
            Оформить подписку
        </Button>
    </Link>
  )
}
