import axios, { CreateAxiosDefaults } from 'axios'
import { getAccessToken, removeFromStorage } from '../services/auth/auth.helper'
import { AuthService } from '../services/auth/auth.service'
import { errorCatch, getContentType } from './api.helper'

const options: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
	headers: getContentType(),
	withCredentials: true
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

// export const instance = axios.create({
// 	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
// 	headers: getContentType(),
// 	withCredentials: true
// })

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewToken()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeFromStorage()
				}
			}
		}
		throw error
	}
)

export { axiosClassic, axiosWithAuth }
