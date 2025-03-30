'use client'

import { useGetCategories } from '@/src/hooks/queries/categories/useGetCategories'
import { ProductService } from '@/src/services/product/product.service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { ProductForm } from '../ProductForm'

export function ProductEdit() {
	const params = useParams<{ productId: string }>()
	const { data: product } = useQuery({
		queryKey: ['get product'],
		queryFn: () => ProductService.getById(params.productId)
	})
	const { categories } = useGetCategories()
	return (
		<ProductForm product={product?.data} categories={categories?.data || []} />
	)
}
