import { Title } from '@/UI/Title/Title';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	requiredFieldMessage,
	doNotMatchPasswordsMessage,
	shortPasswordMessage,
} from '@/constants/validation';
import { TextField } from '@/UI/TextField/TextField';
import { Button } from '@/UI/Button/Button';
import React, { useEffect, useState } from 'react';
import styles from './Recovery.module.scss';
import * as Yup from 'yup';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import axios from '@/utils/axios';
import { RoutesEnum } from '@/constants/routes';

export const Recovery = () => {
	const {
		query: { token },
		push,
	} = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errorMessages, setErrorMessages] = useState<string[]>([]);

	const schema = Yup.object().shape({
		password: Yup.string().min(6, shortPasswordMessage).required(requiredFieldMessage),
		password_confirm: Yup.string()
			.required(requiredFieldMessage)
			.oneOf([Yup.ref('password'), null], doNotMatchPasswordsMessage),
	});

	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			password: '',
			password_confirm: '',
		},
		resolver: yupResolver(schema),
	});

	const request = async (password: string) => {
		try {
			setIsLoading(true);

			const { data } = await axios({
				url: `/session/password-reset`,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				method: 'post',
				data: `token=${token}&password=${password}`,
			}).finally(() => setIsLoading(false));

			return data;
		} catch (e) {
			console.error(e);
		}
	};

	const handleRecovery = handleSubmit(async (form) => {
		const { password } = form;

		console.log(token);

		try {
			setIsLoading(true);

			const data = await request(password);

			if (!data?.hasOwnProperty('status')) {
				setErrorMessages(data);
			} else {
				if (data.status === 'success') {
					push(RoutesEnum.Home);
				}
			}
		} catch (error) {
			console.error(error);
		} finally {
			reset();
		}
	});

	return (
		<section className={styles.section}>
			<div className={classNames('container', styles.container)}>
				<Title className={styles.title}>Восстановление пароля</Title>
				<form className={styles.form} action="#" noValidate onSubmit={handleRecovery}>
					<h2 className={styles.formTitle}>Укажите новый пароль</h2>
					<div className={styles.formContainer}>
						<div className={styles.inputs}>
							<Controller
								name="password"
								control={control}
								render={({ field: { value, onChange } }) => {
									return (
										<TextField
											className={styles.input}
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
										<TextField
											className={styles.input}
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
							{errorMessages?.length > 0
								? errorMessages?.map((error) => (
										<span className={styles.error} key={error}>
											{error}
										</span>
								  ))
								: null}
						</div>
						<Button variant="gradient" className={styles.btn} spinner={isLoading}>
							Изменить пароль
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
};
