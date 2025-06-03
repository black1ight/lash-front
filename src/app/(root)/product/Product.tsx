'use client'

import ProductRating from '@/src/components/layouts/main-layout/Products/product-item/ProductRating'
import ProductPrice from '@/src/components/layouts/main-layout/Products/ProductPrice'
import { Button } from '@/src/components/ui/Button'
import { addToCart } from '@/src/store/cart/cart.slice'
import { useAppDispatch } from '@/src/store/store'
import { IProduct } from '@/src/types/product.interface'
import ProductImages from './ProductImages'
import { ProductOptions } from './ProductOptions'
import { Reviews } from './Reviews'
import Slider from './Slider'
//
interface ProductProps {
	product: IProduct
	similarProducts: IProduct[]
}

export function Product({ product, similarProducts }: ProductProps) {
	const dispatch = useAppDispatch()
	const textParagrafs = product.description.split('\n')

	return (
		<div className='space-y-4 p-4 max-sm:p-2'>
			<div className='grid grid-cols-3 gap-4'>
				<ProductImages product={product} />
				<Slider slides={product.images} />
				<div className='max-sm:col-span-3 col-span-2 flex flex-col'>
					<div className=''>
						<h3 className='text-xl font-semibold'>{product.name}</h3>
						<ProductRating product={product} />
					</div>
					<ProductOptions colors={['pink', 'blue']} />
					<div className='mt-auto'>
						<p className='text-teal-500'>В наявності</p>
						<ProductPrice
							product={product}
							variant='page'
							className='text-3xl pb-4'
						/>

						<div className='flex gap-2 max-md:w-full w-1/2'>
							<Button
								onClick={() =>
									dispatch(
										addToCart({
											product,
											quantity: 1,
											price: product.price
										})
									)
								}
								className='w-1/2 cursor-pointer'
								size='lg'
							>
								До кошика
							</Button>
							<Button
								className='w-1/2 bg-pink-500 hover:bg-pink-600 cursor-pointer'
								size='lg'
							>
								Придбати
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`border rounded-lg p-4 bg-neutral-50 ${
					product.images.length > 1 ? 'min-lg:mt-34 mt-10' : 'mt-14'
				} text-sm`}
			>
				{textParagrafs.map((p, index) => {
					if (p.length > 0) {
						return (
							<p
								key={`${p}-${index}`}
								className={`${
									textParagrafs.at(-1) === textParagrafs[index] && 'inline'
								}`}
							>
								{p}
							</p>
						)
					} else if (
						p.length == 0 &&
						textParagrafs.at(-1) !== textParagrafs[index]
					) {
						return <br key={`${p}-${index}`} />
					}
				})}
			</div>
			<Reviews product={product} />
		</div>
	)
}
