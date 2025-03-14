import { IUser } from '@/src/types/user.interface'

export interface IUserState {
	email: string
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export interface IAuthData {
	data: IEmailPassword
	type: AuthType
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
