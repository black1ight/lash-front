import { axiosWithAuth } from '../api/api.interceptor'

const STATISTICS = 'statistics'

export type TypeStatisticsResponse = {
	name: string
	value: number
}[]

export const OrderService = {
	async getMain() {
		return axiosWithAuth<TypeStatisticsResponse>({
			url: `${STATISTICS}/main`,
			method: 'GET'
		})
	}
}
