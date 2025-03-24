import { STORE_URL } from '@/src/config/url.config'
import { ProductService } from '@/src/services/product/product.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useDeleteProduct = () => {
	const queryClient = useQueryClient()
	const params = useParams<{ productId: string }>()
	const router = useRouter()
	const { mutate: deleteProduct, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete product'],
		mutationFn: () => ProductService.delete(params.productId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard']
			})
			toast.success('Товар видалено')
			router.push(STORE_URL.products())
		},
		onError() {
			toast.error('Помилка при видаленні товару')
		}
	})

	return useMemo(
		() => ({
			deleteProduct,
			isLoadingDelete
		}),
		[deleteProduct, isLoadingDelete]
	)
}
