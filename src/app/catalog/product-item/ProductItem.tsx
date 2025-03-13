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
		<div className='relative w-max mx-auto'>
			<div>
				<FavoriteButton className='' productId={product.id} size={20} />
				<AddToCartButton className='' product={product} size={20} />
				<Image
					width={250}
					height={250}
					src={product.images[0]}
					alt={product.name}
				/>
			</div>
			<h3 className='mt-2'>{product.name}</h3>
			<Link href={product.slug}>
				<div className='text-rose-600 text-sm font-semibold'>
					{product.category.name}
				</div>
			</Link>
			<ProductRating product={product} />
			<div className='text-xl font-semibold'>{convertPrice(product.price)}</div>
		</div>
	)
}

export default ProductItem
