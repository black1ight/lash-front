import { STORE_URL } from '@/src/config/url.config'
import { CategoryService } from '@/src/services/category.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useDeleteCategory = () => {
	const queryClient = useQueryClient()
	const params = useParams<{ categoryId: string }>()
	const router = useRouter()
	const { mutate: deleteCategory, isPending: isLoadingDeleteCategory } =
		useMutation({
			mutationKey: ['delete category'],
			mutationFn: () => CategoryService.delete(params.categoryId),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['get category from store dashboard']
				})
				toast.success('Категорію видалено')
				router.push(STORE_URL.products())
			},
			onError() {
				toast.error('Помилка при видаленні категорії')
			}
		})

	return useMemo(
		() => ({
			deleteCategory,
			isLoadingDeleteCategory
		}),
		[deleteCategory, isLoadingDeleteCategory]
	)
}
