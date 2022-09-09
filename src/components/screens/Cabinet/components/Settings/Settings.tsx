import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Checkbox } from '@/UI/Checkbox/Checkbox';
import { CabinetInput } from '../index';
import styles from './Settings.module.scss';

export const Settings = () => {
	const { isSubscribedEmail, email, password, date } = useTypedSelector(
		(state) => state.userReducer
	);
	const { setSubscribedEmail, setEmail, setPassword, setDate } = useActions();

	const handleSubscribeEmail = () => setSubscribedEmail();

	return (
		<div className={styles.settings}>
			<div className={styles.row}>
				<CabinetInput
					label="Электронная почта"
					type="email"
					value={email}
					applyChanges={setEmail}
				/>
				<CabinetInput
					label="Пароль"
					type="password"
					value={password}
					applyChanges={setPassword}
				/>
				<CabinetInput
					label="Дата рождения"
					type="text"
					value={date}
					applyChanges={setDate}
				/>
			</div>
			<Checkbox
				checked={isSubscribedEmail}
				onChange={handleSubscribeEmail}
				label="Получать новости и спецпредложния на эл.почту"
			/>
		</div>
	);
};
