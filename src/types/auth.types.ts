export type AuthType = 'login' | 'register'

export interface IAuthData {
	email: string
	password: string
	phone: string
}

export interface IAuthResponse {
	user: {
		id: number
		email: string
	}
	accessToken: string
}
