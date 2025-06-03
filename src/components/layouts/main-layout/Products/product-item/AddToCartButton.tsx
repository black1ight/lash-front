'use client'

import { useActions } from '@/src/hooks/useActions'
import { useCart } from '@/src/hooks/useCart'
import { IProduct } from '@/src/types/product.interface'
import cn from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'
import { IoCartOutline, IoCartSharp } from 'react-icons/io5'

interface AddToCartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	product: IProduct
	size: number
}

const AddToCartButton: FC<AddToCartButtonProps> = ({
	product,
	className,
	size
}) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentItem =
		items?.find(cartItem => cartItem.product.id === product.id) || null
	return (
		<div className={cn(`${'text-blue-500'} absolute left-2 top-2 `, className)}>
			<button
				className='cursor-pointer transition hover:scale-110'
				onClick={() =>
					currentItem
						? removeFromCart(currentItem)
						: addToCart({
								product,
								quantity: 1,
								price: product.price
								// size: selectedSize
						  })
				}
			>
				{currentItem ? (
					<IoCartSharp size={size} />
				) : (
					<IoCartOutline size={size} />
				)}
			</button>
		</div>
	)
}

export default AddToCartButton
