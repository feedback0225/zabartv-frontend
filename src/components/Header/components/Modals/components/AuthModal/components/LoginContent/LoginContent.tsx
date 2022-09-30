import { Modal } from '@/UI/Modal/Modal';
import { useTypedActions } from '@/hooks/useTypedActions';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	requiredFieldMessage,
	incorrectlyFieldMessage,
	requiredPasswordMessage,
} from '@/constants/validation';
import * as Yup from 'yup';
import { login } from '@/api';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export const LoginContent = () => {
	const { ModalInputs, ModalInput, ModalButton } = Modal;

	const { showAuthModal } = useTypedActions((state) => state.modal);

	const schema = Yup.object().shape({
		email: Yup.string().email(incorrectlyFieldMessage).required(requiredFieldMessage),
		password: Yup.string().required(requiredPasswordMessage),
	});

	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});

	const dispatch = useAppDispatch();

	const { data } = useTypedSelector((state) => state.login);

	const handleRegister = handleSubmit((data) => {
		const { email, password } = data;

		showAuthModal(false);

		reset();

		dispatch(login({ identity: email, password, rememberMe: 1, ip: '197.28.191.251' }));
	});

	return (
		<form action="#" noValidate onSubmit={handleRegister}>
			<ModalInputs>
				<Controller
					name="email"
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<ModalInput
								errorMessage={errors.email?.message}
								error={errors.hasOwnProperty('email')}
								value={value}
								onChange={onChange}
								name="email"
								type="email"
								placeholder="Электронная почта"
							/>
						);
					}}
				/>
				<Controller
					name="password"
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<ModalInput
								type="password"
								placeholder="Введите пароль"
								value={value}
								name="password"
								onChange={onChange}
								errorMessage={errors.password?.message}
								error={errors.hasOwnProperty('password')}
							/>
						);
					}}
				/>
			</ModalInputs>
			<ModalButton>Войти в аккаунт</ModalButton>
		</form>
	);
};
