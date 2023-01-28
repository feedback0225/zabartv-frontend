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
import { IRegisterResponse } from '@/types/IUser';
import { useRouter } from 'next/router';
import { RoutesEnum } from '@/constants/routes';
import { useEffect, useState } from 'react';
import styles from './RegisterModal.module.scss';
import axios from '@/utils/axios';
import * as Yup from 'yup';

export const RegisterModal = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
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
			.oneOf([Yup.ref('password'), null], doNotMatchPasswordsMessage),
	});

	const {
		handleSubmit,
		control,
		formState: { errors },
		clearErrors,
		reset,
	} = useForm({
		defaultValues: {
			password: '',
			password_confirm: '',
		},
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		setErrorMessages([]);
		clearErrors();
		reset();
	}, [isVisibleRegisterModal]);

	const register = async ({ name, email, password, password_confirm, ip }: IRegisterResponse) => {
		try {
			const { data } = await axios({
				url: '/session/sign-up',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				method: 'post',
				data: `username=${name}&email=${email}&password=${password}&password_confirm=${password_confirm}&ip=${ip}`,
			});

			return data;
		} catch (error) {
			console.error(error);
		}
	};

	const handleRegister = handleSubmit(async (form) => {
		const { password, password_confirm } = form;

		try {
			setIsLoading(true);
			const data = await register({ name, email, password, password_confirm, ip }).finally(() =>
				setIsLoading(false)
			);

			/* Такой костыль из-за того что бекендер просто возвращает массив со строками, а не обьект */
			if (!data?.hasOwnProperty('id')) {
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
									errorMessage={errors?.password?.message}
									error={errors?.hasOwnProperty('password')}
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
									error={errors?.hasOwnProperty('password_confirm')}
								/>
							);
						}}
					/>
					{errorMessages ? (
						<ModalErrorMessage>Не удалось зарегистрироваться</ModalErrorMessage>
					) : null}
				</ModalInputs>
				<ModalButton spinner={isLoading}>Зарегистрироваться</ModalButton>
			</form>
		</Modal>
	);
};
