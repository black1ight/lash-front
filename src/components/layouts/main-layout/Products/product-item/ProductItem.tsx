import { IProduct } from '@/src/types/product.interface'
import { convertPrice } from '@/src/utils/converPrice'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className='w-full rounded-md overflow-hidden bg-white p-2 shadow'>
			<div className='relative'>
				<FavoriteButton className='' productId={product.id} size={20} />
				<AddToCartButton className='' product={product} size={20} />
				<Link className='' href={product.slug}>
					<Image
						className='rounded-t-md'
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '100%', height: 'auto' }}
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
			</div>
			<h3 className='mt-2'>{product.name}</h3>
			<Link href={`/category/${product.category.slug}`}>
				<div className='text-blue-500 text-sm font-semibold'>
					{product.category.name}
				</div>
			</Link>
			<ProductRating product={product} />
			{product.discount > 0 && (
				<span className='opacity-80 mr-3 line-through'>
					{convertPrice(product.price)}
				</span>
			)}
			<span className={`text-xl ${product.discount > 0 && 'text-pink-600'}`}>
				{convertPrice(
					product.discount > 0
						? product.price - product.discount
						: product.price
				)}
			</span>
		</div>
	)
}

export default ProductItem
