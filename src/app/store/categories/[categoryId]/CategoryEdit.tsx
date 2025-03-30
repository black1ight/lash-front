'use client'

import { CategoryService } from '@/src/services/category.service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { CategoryForm } from '../CategoryForm'

export function CategoryEdit() {
	const params = useParams<{ categoryId: string }>()

	const { data: category } = useQuery({
		queryKey: ['get category'],
		queryFn: () => CategoryService.getById(params.categoryId)
	})
	return <CategoryForm category={category} />
}
