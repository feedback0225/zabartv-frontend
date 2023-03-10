import { useState } from "react"
// hooks
import { useTypedActions } from "@/hooks/useTypedActions"
import { useTypedSelector } from "@/hooks/useTypedSelector"
// components/UI
import { Modal } from "@/UI/Modal/Modal"
import { Title } from "@/UI/Title/Title"
// components/icons
import { CardIcon, BitcoinIcon } from "@/icons"
//
import styles from './SubscriptionModal.module.scss'
import classNames from "classnames"


const SubscriptionModal = () => {
    const [paymentMethod, setPaymentMethod] = useState<string>('card')

    const { isVisibleSubscriptionModal } = useTypedSelector((state: any) => state.modal)

    const { showSubscriptionModal } = useTypedActions((state: any) => state.modal)

    const handleClose = () => showSubscriptionModal(false);

    const { ModalTitle, ModalDesc, ModalButton } = Modal;

    return (
        <Modal
            // variant="grade"
            fullscreen={true}
            open={isVisibleSubscriptionModal}
            onClose={handleClose}
            className={styles.modal}
        >
            <ModalTitle className={styles.modal_title}>
                <div className={styles.left}>
                    Выберите способ оплаты
                </div>
                <div className={styles.right}>
                    <Title className={styles.top} size="small">
                        1 год <span>за 120€</span>
                    </Title>
                    <Title className={styles.bottom} size="small">
                        <s>220€</s>
                    </Title>
                </div>
            </ModalTitle>
            <div className={styles.content}>
                <button className={classNames(styles.paymentMethod, paymentMethod === 'card' ? styles.active : styles.noactive)}>
                    <div className={styles.left}>
                        <span className={styles.icon}>
                            <CardIcon />
                        </span>
                        <span className={styles.text}>Картой через эквайринг банка</span>
                    </div>
                    <span className={styles.right}>12,99€</span>
                </button>
                <button className={classNames(styles.paymentMethod, paymentMethod === 'bitcoin' ? styles.active : styles.noactive, styles.twoBtn)}>
                    <div className={styles.left}>
                        <span className={styles.icon}>
                            <BitcoinIcon />
                        </span>
                        <span className={styles.text}>Криптовалютой и картой</span>
                    </div>
                    <span className={styles.right}>12,99€</span>
                </button>
            </div>
            <ModalButton className={styles.buy}>
                ОПЛАТИТЬ
            </ModalButton>
        </Modal>
    )
}


export default SubscriptionModal