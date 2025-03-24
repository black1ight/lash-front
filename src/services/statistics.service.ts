import { axiosWithAuth } from '../api/api.interceptor'
import {
	IMainStatistics,
	IMiddleStatistics
} from '../types/statistics.interface'

const STATISTICS = 'statistics'

export const StatisticService = {
	async getMain() {
		return axiosWithAuth<IMainStatistics[]>({
			url: `${STATISTICS}/main`,
			method: 'GET'
		})
	},
	async getMiddle() {
		return axiosWithAuth<IMiddleStatistics>({
			url: `${STATISTICS}/middle`,
			method: 'GET'
		})
	}
}
