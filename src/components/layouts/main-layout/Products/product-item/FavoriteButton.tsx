'use client'

import { useProfile } from '@/src/hooks/useProfile'
import { UserService } from '@/src/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'

interface FavoriteButonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	productId: number
	size: number
}

const FavoriteButton: FC<PropsWithChildren<FavoriteButonProps>> = ({
	productId,
	className,
	size
}) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['toggle-favorite'],
		mutationFn: () => UserService.toggleFavorite(productId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get-profile'] })
		}
	})

	const isExists = profile?.favorites.some(
		favorite => favorite.product.id === productId
	)
	return (
		<div
			className={cn(
				`${
					isExists ? 'text-pink-600' : 'text-stone-500'
				} absolute right-2 top-2 `,
				className
			)}
		>
			<button
				className='cursor-pointer transition hover:scale-110'
				onClick={() => mutate()}
			>
				{isExists ? (
					<IoIosHeart size={size} />
				) : (
					<IoIosHeartEmpty size={size} />
				)}
			</button>
		</div>
	)
}

export default FavoriteButton
