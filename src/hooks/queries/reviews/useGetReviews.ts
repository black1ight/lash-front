import { ReviewsService } from '@/src/services/review.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export function useGetReviews() {
	const { data: reviews, isPending: isLoadingReviews } = useQuery({
		queryKey: ['get reviews for store dashboard'],
		queryFn: () => ReviewsService.getAll()
	})

	return useMemo(
		() => ({ reviews, isLoadingReviews }),
		[reviews, isLoadingReviews]
	)
}
