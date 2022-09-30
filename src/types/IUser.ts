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

export interface IUser {}
