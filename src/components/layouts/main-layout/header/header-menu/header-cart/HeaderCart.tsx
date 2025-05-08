'use client'
import { Button } from '@/src/components/ui/Button'
import Heading from '@/src/components/ui/Heading'
import ConfirmModal from '@/src/components/ui/modals/ConfirmModal'
import { Sheet, SheetContent, SheetTrigger } from '@/src/components/ui/Sheet'
import { useActions } from '@/src/hooks/useActions'
import { useAppSelector } from '@/src/store/store'
import { ICartItem } from '@/src/types/cart.interface'
import emptyCart from '@/src/uploads/empty-cart.png'
import { convertPrice } from '@/src/utils/converPrice'
import { DialogTitle } from '@radix-ui/react-dialog'
import Image from 'next/image'
import { CartItem } from './CartItem'

export function HeaderCart() {
	const { items } = useAppSelector(state => state.cart)

	const { reset } = useActions()

	const getTotalCartPrice = (items: ICartItem[]) => {
		return items.reduce((acc, item) => acc + item.price, 0)
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost'>Кошик</Button>
			</SheetTrigger>
			<SheetContent className='py-6'>
				<DialogTitle>
					<Heading title='Кошик' className='text-xl text-center' />
				</DialogTitle>
				{items.length ? (
					<>
						<ConfirmModal
							description='Видалити всі обрані товари?'
							handleClick={() => reset()}
						>
							<Button
								className='ml-auto mx-4 px-2 py-1 text-sm border rounded-lg bg-neutral-100 hover:bg-neutral-200 cursor-pointer'
								variant='outline'
							>
								Очистити кошик
							</Button>
						</ConfirmModal>
						<ul className='p-4 pt-0 overflow-y-auto'>
							{items?.map(item => {
								return <CartItem key={item.id} item={item} />
							})}
						</ul>
						<div className='flex justify-center items-center p-4 space-x-4 w-full  border-t border-b mt-auto bg-black/90'>
							<span className='text-2xl text-white'>
								{convertPrice(getTotalCartPrice(items))}
							</span>
							<Button variant='outline'>Оформити</Button>
						</div>
					</>
				) : (
					<Image
						className='mx-auto'
						width={300}
						height={300}
						sizes='100vw'
						src={emptyCart}
						alt='emptyCart'
					/>
				)}
			</SheetContent>
		</Sheet>
	)
}
