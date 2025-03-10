import { getContentType } from '@/app/api/api.helper'
import { instance } from '@/app/api/api.interceptor'
import { IAuthResponse, IEmailPassword } from '@/app/store/user/user.interface'
import axios from 'axios'
import Cookies from 'js-cookie'
import { saveToStorage } from './auth.helper'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await instance<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response.data
	},

	async getNewToken() {
		const refreshToken = Cookies.get('refresh-token')
		const response = await axios.post<string, { data: IAuthResponse }>(
			process.env.SERVER_URL + '/auth/login/access-token',
			{ refreshToken },
			{
				headers: getContentType()
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response
	}
}
