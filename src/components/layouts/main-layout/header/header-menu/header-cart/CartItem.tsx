import { Button } from '@/src/components/ui/Button'
import ConfirmModal from '@/src/components/ui/modals/ConfirmModal'
import { useActions } from '@/src/hooks/useActions'
import { ICartItem } from '@/src/types/cart.interface'
import { convertPrice } from '@/src/utils/converPrice'
import { Trash } from 'lucide-react'
import Image from 'next/image'

interface CartItemProps {
	item: ICartItem
}

export function CartItem({ item }: CartItemProps) {
	const { product } = item
	const { addToCart, removeFromCart, changeQuantity } = useActions()
	if (!item) return <div>Кошик порожній</div>
	return (
		<li className='grid grid-cols-6 text-sm py-4 not-last:border-b hover:bg-neutral-100'>
			<Image
				className='col-span-2 border'
				width={0}
				height={0}
				sizes='100vw'
				style={{ width: '70px', aspectRatio: '1/1', objectFit: 'cover' }}
				src={product.images[0]}
				alt={product.name}
			/>
			<div className='col-span-3 flex flex-col gap-2 justify-center'>
				<span>{product.name}</span>
				<div className='space-x-4 mb-auto'>
					<Button
						onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
						className='size-6 leading-0 active:-translate-y-0.5'
						variant='default'
					>
						-
					</Button>
					<span>{item.quantity}</span>
					<Button
						onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
						className='size-6 leading-0 active:-translate-y-0.5'
						variant='default'
					>
						+
					</Button>
				</div>
			</div>
			<div className='col-span-1 text-center flex flex-col justify-between'>
				<span>{convertPrice(item.price)}</span>

				<ConfirmModal
					description='Видалити товар?'
					handleClick={() => removeFromCart(item)}
				>
					<Button
						className='mx-auto mt-auto text-neutral-400 hover:text-pink-600 cursor-pointer hover:bg-white'
						size='icon'
						variant='outline'
					>
						<Trash className='' size={20} />
					</Button>
				</ConfirmModal>
			</div>
		</li>
	)
}
