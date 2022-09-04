import { Modal } from "@/UI/Modal/Modal"
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { RoutesEnum } from "@/constants/routes";
import { SubscribeIcon } from "@/icons"
import Link from "next/link";

export const SubscribeModal = () => {

    const {ModalTitle, ModalDesc, ModalButton, ModalLink} = Modal;

    const {isVisibleSubscribeModal} = useTypedSelector(state => state.modalReducer)

    const {showSubscribeModal} = useActions()

    const handleClose = () => showSubscribeModal(false)

    return (
        <Modal gradient open={isVisibleSubscribeModal} onClose={handleClose}>
            <ModalTitle>Подиска ZabarTV</ModalTitle>
            <ModalDesc>Покажем уникальные сериалы и фильмы. Подберем кино по интересам и настроению. Для вас и вашей семьи.</ModalDesc>
            <Link href={RoutesEnum.Subscribe} passHref>
                <ModalButton
                    as='link'
                    variant='white' 
                    icon={<SubscribeIcon />}
                >
                    Оформить подписку за 12€
                </ModalButton>
            </Link>
        </Modal>
    )
}