import { axiosClassic } from '@/src/api/api.interceptor'
import { IAuthData, IAuthResponse } from '@/src/types/auth.types'
import { saveTokenStorage } from './auth.helper'

export const AuthService = {
	async main(type: 'login' | 'register', data: IAuthData) {
		const response = await axiosClassic<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}
		return response.data
	},
	async getNewToken() {
		const response = await axiosClassic<IAuthResponse>({
			url: `/auth/login/access-token`,
			method: 'POST'
		})

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}
		return response.data
	},

	async logout() {
		return await axiosClassic({
			url: `/auth/logout`,
			method: 'POST'
		})
	}
}
