import { ReviewsService } from '@/src/services/review.service'
import { IReviewInput } from '@/src/types/review.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useCreateReview = () => {
	const queryClient = useQueryClient()
	// const router = useRouter()
	// const params = useParams()

	const { mutate: createReview, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create review'],
		mutationFn: (data: IReviewInput) =>
			ReviewsService.create(data.productId, {
				rating: data.rating,
				text: data.text
			}),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get review for product']
			})
			queryClient.invalidateQueries({
				queryKey: ['get reviews for product']
			})
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard']
			})
			toast.success('Відгук створено')
			// router.push(PUBLIC_URL.product(`${params.slug}`))
		},
		onError() {
			toast.error('Помилка при створенні відгуку')
		}
	})

	return useMemo(
		() => ({
			createReview,
			isLoadingCreate
		}),
		[createReview, isLoadingCreate]
	)
}
