import { CategoryService } from '@/src/services/category.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetCategories = () => {
	const { data: categories, isPending: isLoadingCategories } = useQuery({
		queryKey: ['get categories for store dashboard'],
		queryFn: () => CategoryService.getAll()
	})

	return useMemo(
		() => ({ categories, isLoadingCategories }),
		[categories, isLoadingCategories]
	)
}
