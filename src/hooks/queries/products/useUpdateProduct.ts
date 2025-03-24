import { STORE_URL } from '@/src/config/url.config'
import { ProductService } from '@/src/services/product/product.service'
import { IProductInput } from '@/src/types/product.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useUpdateProduct = () => {
	const params = useParams<{ productId: string }>()
	const queryClient = useQueryClient()
	const router = useRouter()
	const { mutate: updateProduct, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update product'],
		mutationFn: (data: IProductInput) =>
			ProductService.update(params.productId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard']
			})
			toast.success('Товар оновлено')
			router.push(STORE_URL.products())
		},
		onError() {
			toast.error('Помилка при оновленні товару')
		}
	})

	return useMemo(
		() => ({
			updateProduct,
			isLoadingUpdate
		}),
		[updateProduct, isLoadingUpdate]
	)
}
