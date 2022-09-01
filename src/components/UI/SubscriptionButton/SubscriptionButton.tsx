import { SubscriptionIcon } from "@/components/Icons/Icons"
import { FC } from "react"
import { Button } from "../Button/Button"

interface SubscriptionButtonProps {
    className?: string;
}

export const SubscriptionButton: FC<SubscriptionButtonProps> = ({className}) => {
  return (
    <Button
      size='small'
      gradient
      className={className}
      icon={<SubscriptionIcon />}
    >
        Оформить подписку
    </Button>
  )
}
