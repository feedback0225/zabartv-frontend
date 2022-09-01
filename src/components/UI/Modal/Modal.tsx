import { ButtonHTMLAttributes, PropsWithChildren, useEffect } from 'react'
import { Title } from '@/UI/Title/Title'
import { TextField, TextFieldProps } from '@/UI/TextField/TextField'
import { Button, ButtonProps } from '@/UI/Button/Button'
import { Link, LinkProps } from '@/UI/Link/Link'
import { ButtonBase } from '@/components/ButtonBase/ButtonBase'
import { CloseIcon } from '@/components/Icons/Icons'
import { Portal } from '@/components/Portal/Portal'
import { CSSTransition } from 'react-transition-group'
import { useLockedBody } from 'usehooks-ts'
import FocusTrap from 'focus-trap-react'
import styles from './Modal.module.scss'

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

function Modal({children, open, onClose}: PropsWithChildren<ModalProps>) {

    const {ModalClose} = Modal

    useLockedBody(open)

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => event.code === 'Escape' && onClose()
      
        document.addEventListener('keydown', handleEscapeKey)
        
        return () => document.removeEventListener('keydown', handleEscapeKey)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <CSSTransition
            in={open}
            timeout={300}
            classNames='modal'
        >
            <Portal id='modal'>
                {open && (
                    <FocusTrap active={open}>
                        <div onClick={onClose} className={styles.modal}>
                            <div className={styles.content} onClick={e => e.stopPropagation()}>
                                {children}
                                <ModalClose onClick={onClose}  />
                            </div>
                        </div>
                    </FocusTrap>
                )}
            </Portal>
        </CSSTransition>
    )
}

module Modal {

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