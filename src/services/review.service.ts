import { instance } from '../api/api.interceptor'
import { IReview } from '../types/review.interface'

const REVIEWS = 'reviews'

type TypeData = {
	text: string
	rating: number
}

export const ReviewsService = {
	async getAll() {
		return await instance<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async getById(reviewsId: number | string) {
		return await instance<IReview>({
			url: `${REVIEWS}/${reviewsId}`,
			method: 'GET'
		})
	},

	async getAverageByProduct(productId: number | string) {
		return await instance<{ rating: number }>({
			url: `${REVIEWS}/average-by-product/${productId}`,
			method: 'GET'
		})
	},

	async create(productId: number, data: TypeData) {
		return await instance<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		})
	},

	async update(reviewsId: number, data: TypeData) {
		return await instance<IReview>({
			url: `${REVIEWS}/${reviewsId}`,
			method: 'PUT',
			data
		})
	},

	async delete(reviewsId: number) {
		return await instance<IReview>({
			url: `${REVIEWS}/${reviewsId}`,
			method: 'DELETE'
		})
	}
}
