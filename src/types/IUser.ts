export interface IRegisterResponse {
	name: string;
	email: string;
	password: string;
	password_confirm: string;
	ip: string;
}

export interface ILoginResponse {
	identity: string;
	password: string;
	rememberMe: number;
	ip: string;
}

export interface IHistoryPayment {
	order_id: number,
    package_id: number,
    start_date: string,
    subscribe_period: 15,
    finish_date: string,
    payment_status: number,
    subscribe_status: number,
    payment_method: number
}

export interface IUser {
	avatar_base_url: string;
	avatar_path: string;
	date_of_birth: string;
	email: string;
	first_name: string;
	id?: number;
	last_name: string;
	status?: number;
	username: string;
}

export interface IUpdateResponse {
	date_of_birth: string,
	email: string,
	password: string,
}