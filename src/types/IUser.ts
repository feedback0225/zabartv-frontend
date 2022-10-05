export interface IRegisterResponse {
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

export interface IUser {
	avatar_base_url: string;
	avatar_path: string;
	date_of_birth: Date;
	email: string;
	first_name: string;
	id: number;
	last_name: string;
	status: number;
	username: string;
}
