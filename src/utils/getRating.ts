import { IReview } from '../types/review.interface'

export const getRating = (reviews: IReview[]) => {
	return Math.round(
		reviews.reduce((acc, review) => {
			return acc + review.rating
		}, 0) / reviews.length
	)
}
