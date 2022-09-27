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
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});

	const handleRegister = handleSubmit((data) => {});

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
