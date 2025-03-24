import { ProductService } from '@/src/services/product/product.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetProducts = () => {
	const { data: products, isLoading } = useQuery({
		queryKey: ['get products for store dashboard'],
		queryFn: () => ProductService.getAll()
	})

	return useMemo(() => ({ products, isLoading }), [products, isLoading])
}
