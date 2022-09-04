import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Checkbox } from '@/UI/Checkbox/Checkbox'
import { TextField } from '../index'
import styles from './Settings.module.scss'

export const Settings = () => {

    const {isSubscribedEmail, email, password, date} = useTypedSelector(state => state.userReducer)
    const {setSubscribedEmail, setEmail, setPassword, setDate} = useActions()

    const handleSubscribeEmail = () => setSubscribedEmail()

    return (
        <div className={styles.settings}>
            <div className={styles.row}>
                <TextField
                    label='Электронная почта'
                    type='email'
                    value={email}
                    onChange={setEmail}
                />
                <TextField
                    label='Пароль'
                    type='password'
                    value={password}
                    onChange={setPassword}
                />
                <TextField
                    label='Дата рождения'
                    type='text'
                    value={date}
                    onChange={setDate}
                />
            </div>
            <Checkbox
                checked={isSubscribedEmail}
                onChange={handleSubscribeEmail}
                label='Получать новости и спецпредложния на эл.почту'
            />
        </div>
    )
}