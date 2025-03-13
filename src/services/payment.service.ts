import { instance } from '../api/api.interceptor'
import { IPaymentResponce } from '../types/payment.interface'

const PAYMENT = 'payment'

export const PaymentService = {
	async createPayment(amount: number) {
		return instance.post<IPaymentResponce>(PAYMENT, { amount })
	}
}
