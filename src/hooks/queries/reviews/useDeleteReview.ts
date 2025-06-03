import { ReviewsService } from '@/src/services/review.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useDeleteReview = () => {
	const queryClient = useQueryClient()
	const { mutate: deleteReview, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete review'],
		mutationFn: (reviewId: number) => ReviewsService.delete(reviewId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get reviews for product']
			})
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard']
			})
			toast.success('Відгук видалено')
		},
		onError() {
			toast.error('Помилка при видаленні відгуку')
		}
	})

	return useMemo(
		() => ({
			deleteReview,
			isLoadingDelete
		}),
		[deleteReview, isLoadingDelete]
	)
}
