import { ButtonHTMLAttributes, DOMAttributes, PropsWithChildren } from 'react';
import { Title } from '@/UI/Title/Title';
import { TextField, TextFieldProps } from '@/UI/TextField/TextField';
import { Button, ButtonProps } from '@/UI/Button/Button';
import { Link, LinkProps } from '@/UI/Link/Link';
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { CloseIcon } from '@/components/Icons/Icons';
import styles from './Modal.module.scss';
import { Portal } from '@/components/Portal/Portal';
import { CSSTransition } from 'react-transition-group';
import { useLockedBody } from 'usehooks-ts';

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

function Modal({children, open, onClose}: PropsWithChildren<ModalProps>) {

    const {ModalContent, ModalClose} = Modal

    useLockedBody(open)

    return (
        <CSSTransition
            in={open}
            timeout={300}
            classNames='modal'
        >
            <Portal id='modal'>
                {open && (
                    <div onClick={onClose} className={styles.modal}>
                        <ModalContent onClick={e => e.stopPropagation()}>
                            {children}
                            <ModalClose onClick={onClose}  />
                        </ModalContent>
                    </div>
                )}
            </Portal>
        </CSSTransition>
    )
}

module Modal {

    export const ModalContent = ({children, ...props}: PropsWithChildren<DOMAttributes<HTMLDivElement>>) => {
        return <div className={styles.content} {...props}>{children}</div>
    }

    export const ModalTitle = ({children}: PropsWithChildren<{}>) => {
        return <Title className={styles.title} level='h2' size='medium'>{children}</Title>
    }

    export const ModalInputs = ({children}: PropsWithChildren<{}>) => {
        return <div className={styles.inputs}>{children}</div>
    }

    export const ModalInput = ({...props}: TextFieldProps) => {
        return <TextField className={styles.input} {...props} />
    }

    export const ModalButton = ({children, ...props}: PropsWithChildren<ButtonProps>) => {
        return <Button className={styles.btn}>{children}</Button>
    }

    export const ModalLink = ({children, href}: PropsWithChildren<LinkProps>) => {
        return <Link href={href} className={styles.link}>{children}</Link>
    }

    export const ModalClose = ({...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
        return (
            <ButtonBase className={styles.close} {...props}>
                <CloseIcon />
            </ButtonBase>
        )
    }
}

export {Modal}