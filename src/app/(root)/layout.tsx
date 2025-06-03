'use client'

import MainLayout from '@/src/components/layouts/main-layout/MainLayout'
import { removeTargetItem } from '@/src/store/cart/cart.slice'
import { useAppDispatch, useAppSelector } from '@/src/store/store'
import { CircleMinus, CirclePlus } from 'lucide-react'
import { PropsWithChildren, useEffect } from 'react'
import toast from 'react-hot-toast'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	const dispatch = useAppDispatch()
	const { targetItem } = useAppSelector(state => state.cart)
	useEffect(() => {
		targetItem &&
			toast(
				<div className='flex gap-4 items-center text-sm'>
					{targetItem?.action === 'add' ? (
						<CirclePlus size={80} className={'text-green-500'} />
					) : (
						<CircleMinus size={80} className={'text-pink-500'} />
					)}
					<div>
						<span className='font-semibold text-blue-500'>
							{targetItem?.product.name}
						</span>{' '}
						було{' '}
						<span
							className={`${
								targetItem?.action === 'add'
									? 'text-green-500'
									: 'text-pink-500'
							}`}
						>
							{targetItem?.action === 'add'
								? 'додано до кошика'
								: 'видалено з кошика'}
						</span>
					</div>
				</div>
			)
		dispatch(removeTargetItem())
	}, [targetItem])
	return <MainLayout>{children}</MainLayout>
}

// Стилизовать тост
