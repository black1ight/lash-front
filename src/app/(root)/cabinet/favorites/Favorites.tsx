'use client'

import { Products } from '@/src/components/layouts/main-layout/Products/product-item/Products'
import Heading from '@/src/components/ui/Heading'
import { useProfile } from '@/src/hooks/useProfile'

export function Favorites() {
	const { profile } = useProfile()
	const products = profile?.favorites.map(item => item.product)
	return (
		<div className='space-y-10'>
			<Heading title='Обрані товари' />
			{products?.length ? (
				<Products products={products} />
			) : (
				<div className='text-xl text-center'>Товарів немає</div>
			)}
		</div>
	)
}
