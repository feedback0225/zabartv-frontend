import { ChangeEvent, FC, FormEvent, InputHTMLAttributes, useRef, useState } from 'react'
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { EditIcon, CloseIcon } from '@/icons'
import { Link } from '@/UI/Link/Link';
import classNames from 'classnames'
import styles from './TextField.module.scss'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    date?: boolean;
    mask?: string;
    maskChar?: string;
    value: string;
    as?: 'input' | 'mask';
    onChange:any;
}

export const TextField: FC<TextFieldProps> = ({className, onChange, type, value, as = 'input', date, label, ...props}) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [isEdited, setIsEdited] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState(value)

    const closeField = () => {
        inputRef.current?.blur()
        setIsEdited(false)
    }

    const handleEditField = () => {
        if(!isEdited) {
            setIsEdited(true)
            inputRef.current?.focus()
        } else {
            setInputValue(value)
            closeField()
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const applyChanges = () => {
        onChange(inputValue)
        closeField()
    }

    return (
        <div className={styles.field}>
            <span className={styles.label}>{label}</span>
            <input
                ref={inputRef}
                className={classNames(styles.input, !isEdited && styles.value)}
                type={isEdited ? 'text' : type}
                placeholder={value}
                value={inputValue}
                onChange={handleChange}
                {...props}
            />
            <ButtonBase type='button' onClick={handleEditField} className={styles.btn}>
                {!isEdited ? <EditIcon /> : <CloseIcon />}
            </ButtonBase>
            {isEdited && <Link as='button' onClick={applyChanges} className={styles.apply}>Сохранить изменения</Link>}
        </div>
    )
}