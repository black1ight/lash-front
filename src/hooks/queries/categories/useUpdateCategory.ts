import { STORE_URL } from '@/src/config/url.config'
import { CategoryService } from '@/src/services/category.service'
import { ICategoryInput } from '@/src/types/category.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useUpdateCategory = () => {
	const params = useParams<{ categoryId: string }>()
	const queryClient = useQueryClient()
	const router = useRouter()
	const { mutate: updateCategory, isPending: isLoadingUpdateCategory } =
		useMutation({
			mutationKey: ['update category'],
			mutationFn: (data: ICategoryInput) =>
				CategoryService.update(params.categoryId, data),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['get category for store dashboard']
				})
				toast.success('Категорію оновлено')
				router.push(STORE_URL.categories())
			},
			onError() {
				toast.error('Помилка при оновленні категорії')
			}
		})

	return useMemo(
		() => ({
			updateCategory,
			isLoadingUpdateCategory
		}),
		[updateCategory, isLoadingUpdateCategory]
	)
}
