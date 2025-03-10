import { instance } from '../api/api.interceptor'
import { IUser } from '../types/user.interface'

const USER = 'users'

type UserType = {
	email: string
	password?: string
	name?: string
	phone?: string
	avatarPath?: string
}

export const UserService = {
	async getProfile() {
		return await instance<IUser[]>({
			url: `${USER}/profile`,
			method: 'GET'
		})
	},

	async update(data: UserType) {
		return await instance<IUser>({
			url: `${USER}/profile`,
			method: 'PUT',
			data
		})
	},

	async toggleFavorite(productId: number) {
		return await instance<IUser>({
			url: `${USER}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
