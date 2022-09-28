import { useTypedSelector } from '@/hooks/useTypedSelector';
import styles from './RegisterModal.module.scss';
import { register } from '@/api';
import { useTypedActions } from '@/hooks/useTypedActions';
import { Modal } from '@/UI/Modal/Modal';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { requiredFieldMessage, doNotMatchPasswordsMessage } from '@/constants/validation';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import * as Yup from 'yup';

export const RegisterModal = () => {
	const { isVisibleRegisterModal } = useTypedSelector((state) => state.modal);

	const { email, data } = useTypedSelector((state) => state.register);

	const { showRegisterModal } = useTypedActions((state) => state.modal);

	const { ModalTitle, ModalInputs, ModalInput, ModalButton } = Modal;

	const handleClose = () => showRegisterModal(false);

	const dispatch = useAppDispatch();

	const schema = Yup.object().shape({
		password: Yup.string().required(requiredFieldMessage),
		password_confirm: Yup.string()
			.required(requiredFieldMessage)
			.oneOf([Yup.ref('password'), null], doNotMatchPasswordsMessage),
	});

	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			password: '',
			password_confirm: '',
		},
		resolver: yupResolver(schema),
	});

	const handleRegister = handleSubmit((data) => {
		const { password, password_confirm } = data;

		// showRegisterModal(false);

		// reset();

		console.log(data);

		dispatch(register({ email, password, password_confirm, ip: '197.28.191.251' }));
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
				</ModalInputs>
				<ModalButton>Зарегистрироваться</ModalButton>
			</form>
		</Modal>
	);
};
