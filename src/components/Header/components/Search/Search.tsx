import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useActions } from '@/hooks/useActions';
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { useOnClickOutside } from 'usehooks-ts';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CloseIcon, SearchIcon } from '@/icons';
import { TextField } from '@/UI/TextField/TextField';
import styles from './Search.module.scss';
import classNames from 'classnames';

export const Search = () => {
    
    const {visible} = useTypedSelector(state => state.searchReducer)
    const {setSearch, setVisible} = useActions()
    const [value, setValue] = useState<string>('')
    const formRef = useRef<HTMLFormElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const submitForm = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        setSearch(value)
        router.push(`/search/${value}`)
    }

    useEffect(() => {
        setVisible(false)
        setValue('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router])

    useOnClickOutside(formRef, () => setVisible(false))
    
    useEffect(() => {
        if(visible) {
            inputRef?.current?.focus()
        }
    }, [visible])

    const handleClose = () => {
        inputRef?.current?.blur()
        setVisible(false)
    }

    return (
        <form onSubmit={submitForm} ref={formRef} action="#" className={classNames(styles.form, visible && styles.visible)}>
            <TextField
                variant='dark'
                className={styles.search}
                ref={inputRef}
                type="search"
                value={value}
                onChange={handleChange}
                placeholder='Поиск...'
            />
            <ButtonBase
                type='button'
                className={styles.close}
                onClick={handleClose}
            >
                <CloseIcon />
            </ButtonBase>
            <span className={styles.icon}>
                <SearchIcon />
            </span>
        </form>
    )
}