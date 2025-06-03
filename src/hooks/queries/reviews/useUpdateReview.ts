import { ReviewsService } from '@/src/services/review.service'
import { IReviewInput } from '@/src/types/review.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useUpdateReview = () => {
	const queryClient = useQueryClient()
	const router = useRouter()
	const { mutate: updateReview, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update review'],
		mutationFn: (data: IReviewInput) =>
			ReviewsService.update(data.reviewId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get review on product']
			})
			queryClient.invalidateQueries({
				queryKey: ['get reviews for product']
			})
			toast.success('Відгук оновлено')
		},
		onError() {
			toast.error('Помилка при оновленні відгуку')
		}
	})

	return useMemo(
		() => ({
			updateReview,
			isLoadingUpdate
		}),
		[updateReview, isLoadingUpdate]
	)
}
