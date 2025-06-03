import { IProduct } from '@/src/types/product.interface'
import { convertPrice } from '@/src/utils/converPrice'
import { getDiscountPercent } from '@/src/utils/getDiscountPercent'
import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface ProductPriceProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	product: IProduct
	variant?: 'catalog' | 'page'
}

const ProductPrice: FC<PropsWithChildren<ProductPriceProps>> = ({
	product,
	variant,
	className
}) => {
	return (
		<div className={cn('pr-2', className)}>
			{product.discount > 0 && (
				<div className='flex gap-2'>
					<span className='opacity-50 line-through text-base'>
						{convertPrice(product.price)}
					</span>
					<span
						className={`${
							variant !== 'page' && 'hidden'
						} text-base bg-red-400 rounded-full text-white px-1.5`}
					>
						{getDiscountPercent(product.price, product.discount)}
					</span>
				</div>
			)}
			<div className=''>
				<span className={`${product.discount > 0 && 'text-pink-500'}`}>
					{convertPrice(
						product.discount > 0
							? product.price - product.discount
							: product.price
					)}
				</span>
			</div>
		</div>
	)
}

export default ProductPrice
