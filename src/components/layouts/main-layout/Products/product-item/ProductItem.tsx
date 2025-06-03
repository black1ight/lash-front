import { PUBLIC_URL } from '@/src/config/url.config'
import { IProduct } from '@/src/types/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ProductPrice from '../ProductPrice'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import ProductInfoLabel from './ProductInfoLabel'
import ProductRating from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className='w-full rounded-md overflow-hidden bg-white shadow-lg hover:scale-105 hover:shadow-xl transition'>
			<div className='relative '>
				<FavoriteButton className='z-10' productId={product.id} size={22} />
				<AddToCartButton className='z-10' product={product} size={22} />

				<Link
					className='relative after:content-[""] after:absolute after:inset-0 after:bg-black/5'
					href={PUBLIC_URL.product(product.slug)}
				>
					<Image
						className='rounded-t-md'
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
						src={product.images[0]}
						alt={product.name}
					/>
					<ProductInfoLabel product={product} />
				</Link>
			</div>
			<h3 className='mt-2 px-2 overflow-hidden line-clamp-2 text-ellipsis leading-[1.5em] min-h-[3em]'>
				{product.name}
			</h3>
			<div className='flex items-center pb-1'>
				<div>
					<Link href={`/category/${product.category.slug}`}>
						<div className='text-blue-500 text-sm font-semibold px-2'>
							{product.category.name}
						</div>
					</Link>
					<ProductRating product={product} className='px-2' />
				</div>
				<ProductPrice
					product={product}
					className='ml-auto mt-auto font-semibold'
				/>
			</div>
		</div>
	)
}

export default ProductItem
