import { FC } from "react"
import { SubscribeIcon } from "@/icons"
import { Button, ButtonProps } from "@/UI/Button/Button"
import { useActions } from "@/hooks/useActions"

export const SubscribeButton: FC<ButtonProps> = ({className, ...props}) => {

  const {showSubscribeModal} = useActions()

  const handleShowModal = () => showSubscribeModal(true)

  return (
    <Button
      size='small'
      variant='gradient'
      className={className}
      icon={<SubscribeIcon />}
      onClick={handleShowModal}
      {...props}
    >
        Оформить подписку
    </Button>
  )
}
