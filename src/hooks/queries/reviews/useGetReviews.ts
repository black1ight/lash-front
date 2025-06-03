import { ReviewsService } from '@/src/services/review.service'
import { IReview } from '@/src/types/review.interface'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export function useGetReviews(
	productId: string | number,
	initialData: IReview[]
) {
	const { data: reviews, isPending: isLoadingReviews } = useQuery<IReview[]>({
		queryKey: ['get reviews for product'],
		queryFn: () => {
			return productId
				? ReviewsService.getByProductId(productId)
				: ReviewsService.getAll()
		},
		initialData
	})

	return useMemo(
		() => ({ reviews, isLoadingReviews }),
		[reviews, isLoadingReviews]
	)
}
