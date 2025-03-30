import { axiosClassic, axiosWithAuth } from '../api/api.interceptor'
import { IReview } from '../types/review.interface'

const REVIEWS = 'reviews'

type TypeData = {
	text: string
	rating: number
}

export const ReviewsService = {
	async getAll() {
		const { data } = await axiosClassic<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
		return data
	},

	async getById(reviewsId: number | string) {
		return await axiosWithAuth<IReview>({
			url: `${REVIEWS}/${reviewsId}`,
			method: 'GET'
		})
	},

	async getAverageByProduct(productId: number | string) {
		return await axiosWithAuth<{ rating: number }>({
			url: `${REVIEWS}/average-by-product/${productId}`,
			method: 'GET'
		})
	},

	async create(productId: number, data: TypeData) {
		return await axiosWithAuth<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		})
	},

	async update(reviewsId: number, data: TypeData) {
		return await axiosWithAuth<IReview>({
			url: `${REVIEWS}/${reviewsId}`,
			method: 'PUT',
			data
		})
	},

	async delete(reviewsId: number) {
		return await axiosWithAuth<IReview>({
			url: `${REVIEWS}/${reviewsId}`,
			method: 'DELETE'
		})
	}
}
