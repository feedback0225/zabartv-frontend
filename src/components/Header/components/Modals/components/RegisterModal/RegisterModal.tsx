import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useTypedActions } from '@/hooks/useTypedActions';
import { Modal } from '@/UI/Modal/Modal';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	requiredFieldMessage,
	doNotMatchPasswordsMessage,
	shortPasswordMessage,
} from '@/constants/validation';
import { register } from '@/api';
import { useRouter } from 'next/router';
import { RoutesEnum } from '@/constants/routes';
import { useState } from 'react';
import styles from './RegisterModal.module.scss';
import * as Yup from 'yup';

export const RegisterModal = () => {
	const [errorMessages, setErrorMessages] = useState<string[]>([]);
	const { isVisibleRegisterModal } = useTypedSelector((state) => state.modal);
	const { email, name, ip } = useTypedSelector((state) => state.auth);
	const { showRegisterModal } = useTypedActions((state) => state.modal);
	const { ModalTitle, ModalInputs, ModalInput, ModalButton, ModalErrorMessage } = Modal;
	const { push } = useRouter();
	const { setUser } = useTypedActions((state) => state.auth);
	const handleClose = () => showRegisterModal(false);

	const schema = Yup.object().shape({
		password: Yup.string().min(6, shortPasswordMessage).required(requiredFieldMessage),
		password_confirm: Yup.string()
			.required(requiredFieldMessage)
			.min(6, shortPasswordMessage)
			.oneOf([Yup.ref('password'), null], doNotMatchPasswordsMessage),
	});

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			password: '',
			password_confirm: '',
		},
		resolver: yupResolver(schema),
	});

	const handleRegister = handleSubmit(async (form) => {
		const { password, password_confirm } = form;

		try {
			const data = await register({ name, email, password, password_confirm, ip });

			/* Такой костыль из-за того что бекендер просто возвращает массив со строками, а не обьект */
			if (!data.hasOwnProperty('id')) {
				setErrorMessages(data);
			} else {
				setUser(data);

				push(RoutesEnum.Cabinet);

				showRegisterModal(false);
			}
		} catch (error) {
			console.error(error);
		}
	});

	return (
		<Modal className={styles.modal} fullscreen open={isVisibleRegisterModal} onClose={handleClose}>
			<ModalTitle>Регистрация</ModalTitle>
			<form action="#" noValidate onSubmit={handleRegister}>
				<ModalInputs>
					<Controller
						name="password"
						control={control}
						render={({ field: { value, onChange } }) => {
							return (
								<ModalInput
									name="password"
									type="password"
									placeholder="Придумайте пароль"
									value={value}
									onChange={onChange}
									errorMessage={errors.password?.message}
									error={errors.hasOwnProperty('password')}
								/>
							);
						}}
					/>
					<Controller
						name="password_confirm"
						control={control}
						render={({ field: { value, onChange } }) => {
							return (
								<ModalInput
									name="password_confirm"
									type="password"
									placeholder="Повторите пароль"
									value={value}
									onChange={onChange}
									errorMessage={errors.password_confirm?.message}
									error={errors.hasOwnProperty('password_confirm')}
								/>
							);
						}}
					/>
					{errorMessages.length > 0
						? errorMessages?.map((error) => (
								<ModalErrorMessage key={error}>{error}</ModalErrorMessage>
						  ))
						: null}
				</ModalInputs>
				<ModalButton>Зарегистрироваться</ModalButton>
			</form>
		</Modal>
	);
};
