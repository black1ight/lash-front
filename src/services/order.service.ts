import { axiosWithAuth } from '../api/api.interceptor'
import { IOrder } from '../types/order.interface'

const ORDERS = 'orders'

export const OrderService = {
	async getAll() {
		return axiosWithAuth<IOrder[]>({
			url: ORDERS,
			method: 'GET'
		})
	}
}
