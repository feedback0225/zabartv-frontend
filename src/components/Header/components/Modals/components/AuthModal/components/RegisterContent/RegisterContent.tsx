import { useTypedActions } from '@/hooks/useTypedActions';
import { Modal } from '@/UI/Modal/Modal';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { requiredFieldMessage, incorrectlyFieldMessage } from '@/constants/validation';
import * as Yup from 'yup';

export const RegisterContent = () => {
	const { ModalInputs, ModalInput, ModalButton } = Modal;

	const { setEmail } = useTypedActions((state) => state.register);
	const { showAuthModal, showRegisterModal } = useTypedActions((state) => state.modal);

	const schema = Yup.object().shape({
		email: Yup.string().email(incorrectlyFieldMessage).required(requiredFieldMessage),
	});

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
		},
		resolver: yupResolver(schema),
	});

	const handleRegister = handleSubmit((data) => {
		const { email } = data;

		setEmail(email);
		showAuthModal(false);
		showRegisterModal(true);
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
			</ModalInputs>
			<ModalButton>Подтвердить почту</ModalButton>
		</form>
	);
};
