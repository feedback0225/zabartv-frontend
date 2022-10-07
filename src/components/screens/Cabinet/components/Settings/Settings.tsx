import { getMe, updateUserData } from '@/api';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { IUser } from '@/types/IUser';
import { Checkbox } from '@/UI/Checkbox/Checkbox';
import { FC, useState } from 'react';
import { CabinetInput } from '../index';
import styles from './Settings.module.scss';

interface SettingsProps {
	data: IUser;
}

export const Settings: FC<SettingsProps> = ({ data }) => {
	const { email, date_of_birth } = data;

	// const [password, setPassword] = useState('');

	const [isSubscribedEmail, setIsSubscribedEmail] = useState<boolean>(false);

	const handleSubscribeEmail = () => setIsSubscribedEmail(!isSubscribedEmail);

	const dispatch = useAppDispatch();

	const applyEmail = async (email: string) => {
		await updateUserData({ email });

		dispatch(getMe());
	};

	/* const applyDate = async (newDate: string) => {
		await updateUserData({ email, date_of_birth: newDate, password });
	};

	const applyPassword = async (newPassword: string) => {
		setPassword(newPassword);

		await updateUserData({ email, date_of_birth, password: newPassword });
	}; */

	return (
		<div className={styles.settings}>
			<div className={styles.row}>
				<CabinetInput
					label="Электронная почта"
					type="email"
					value={email}
					applyChanges={applyEmail}
				/>
				{/* <CabinetInput label="Пароль" type="password" value={password} applyChanges={applyPassword} />
				<CabinetInput
					label="Дата рождения"
					type="text"
					value={date_of_birth}
					applyChanges={applyDate}
				/> */}
			</div>
			<Checkbox
				checked={isSubscribedEmail}
				onChange={handleSubscribeEmail}
				label="Получать новости и спецпредложния на эл.почту"
			/>
		</div>
	);
};
