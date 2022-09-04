import { ButtonHTMLAttributes, forwardRef, PropsWithChildren, useEffect } from 'react'
import { Title, TitleProps } from '@/UI/Title/Title'
import { TextField, TextFieldProps } from '@/UI/TextField/TextField'
import { Button, ButtonProps } from '@/UI/Button/Button'
import { Link, LinkProps } from '@/UI/Link/Link'
import { ButtonBase } from '@/components/ButtonBase/ButtonBase'
import { CloseIcon } from '@/icons'
import { Portal } from '@/components/Portal/Portal'
import { CSSTransition } from 'react-transition-group'
import { useLockedBody } from 'usehooks-ts'
import styles from './Modal.module.scss'
import classNames from 'classnames'

interface ModalProps {
    open: boolean;
    fullscreen?: boolean;
    gradient?: boolean;
    onClose: () => void;
}

function Modal({children, open, fullscreen, gradient, onClose}: PropsWithChildren<ModalProps>) {

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
                    <div onClick={onClose} className={
                        classNames(
                            styles.modal,
                            fullscreen && styles.fullscreen
                        )}
                    >
                        <div className={classNames(styles.content, gradient && styles.gradient)} onClick={e => e.stopPropagation()}>
                            {children}
                            <ModalClose onClick={onClose}  />
                        </div>
                    </div>
                )}
            </Portal>
        </CSSTransition>
    )
}

module Modal {

    export const ModalTitle = ({children, size = 'medium', ...props}: PropsWithChildren<TitleProps>) => {
        return <Title className={styles.title} level='h2' size={size} {...props}>{children}</Title>
    }

    export const ModalDesc = ({children}: PropsWithChildren<{}>) => {
        return <p className={styles.desc}>{children}</p>
    }

    export const ModalInputs = ({children}: PropsWithChildren<{}>) => {
        return <div className={styles.inputs}>{children}</div>
    }

    export const ModalInput = ({...props}: TextFieldProps) => {
        return <TextField className={styles.input} {...props} />
    }

    export const ModalButton = forwardRef(({children, ...props}: PropsWithChildren<ButtonProps>, ref) => {
        return <Button className={styles.btn} {...props}>{children}</Button>
    })

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

    ModalButton.displayName = 'Modal.tsx'
}

export {Modal}