import { STORE_URL } from '@/src/config/url.config'
import { CategoryService } from '@/src/services/category.service'
import { ICategoryInput } from '@/src/types/category.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useCreateCategory = () => {
	const queryClient = useQueryClient()
	const router = useRouter()
	const {
		mutate: createCategory,
		isPending: isLoadingCreateCategory,
		data: responseCreateCategory
	} = useMutation({
		mutationKey: ['create category'],
		mutationFn: (data: ICategoryInput) => CategoryService.create(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get category for store dashboard']
			})
			toast.success('Категорію створено')
			router.push(STORE_URL.categories())
		},
		onError() {
			toast.error('Помилка при створенні категорії')
		}
	})

	return useMemo(
		() => ({
			createCategory,
			isLoadingCreateCategory,
			responseCreateCategory
		}),
		[createCategory, isLoadingCreateCategory, responseCreateCategory]
	)
}
