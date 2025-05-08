'use client'

import { PUBLIC_URL } from '@/src/config/url.config'
import { useProfile } from '@/src/hooks/useProfile'
import { UserService } from '@/src/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
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
				`cursor-pointer transition hover:scale-110 ${'text-pink-500'} absolute right-2 top-2 `,
				className
			)}
		>
			{profile ? (
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
			) : (
				<Link
					href={PUBLIC_URL.auth()}
					className='cursor-pointer transition hover:scale-110'
				>
					<IoIosHeartEmpty size={size} />
				</Link>
			)}
		</div>
	)
}

export default FavoriteButton
