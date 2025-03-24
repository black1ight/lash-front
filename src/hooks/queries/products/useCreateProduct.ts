import { STORE_URL } from '@/src/config/url.config'
import { ProductService } from '@/src/services/product/product.service'
import { IProductInput } from '@/src/types/product.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useCreateProduct = () => {
	const queryClient = useQueryClient()
	const router = useRouter()
	const { mutate: createProduct, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create product'],
		mutationFn: (data: IProductInput) => ProductService.create(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard']
			})
			toast.success('Товар створено')
			router.push(STORE_URL.products())
		},
		onError() {
			toast.error('Помилка при створенні товару')
		}
	})

	return useMemo(
		() => ({
			createProduct,
			isLoadingCreate
		}),
		[createProduct, isLoadingCreate]
	)
}
