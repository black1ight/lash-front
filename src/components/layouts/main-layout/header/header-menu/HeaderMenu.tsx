import { Button } from '@/src/components/ui/Button'
import { CABINET_URL, PUBLIC_URL, STORE_URL } from '@/src/config/url.config'
import { useProfile } from '@/src/hooks/useProfile'
import cn from 'clsx'
import Link from 'next/link'
import { HTMLAttributes } from 'react'
import { HeaderCart } from './header-cart/HeaderCart'
import { HeaderProfile } from './HeaderProfile'

interface HeaderMenuProps extends HTMLAttributes<HTMLDivElement> {}

export function HeaderMenu({ className }: HeaderMenuProps) {
	const { profile } = useProfile()
	return (
		<div
			className={cn(
				'flex flex-wrap max-sm:py-10 gap-2 text-white/50',
				className
			)}
		>
			<Link href={STORE_URL.root()}>
				<Button variant='ghost'>Магазин</Button>
			</Link>
			<Link href={CABINET_URL.favorites()}>
				<Button
					className='relative'
					variant='ghost'
				>
					Обране
					{(profile?.favorites?.length ?? 0) > 0 && (
						<span className='absolute w-4 h-4 text-xs flex items-center justify-center text-black/80 bg-pink-500 rounded-full top-[1px] right-[1px]'>
							{profile?.favorites.length}
						</span>
					)}
				</Button>
			</Link>
			<Link href={PUBLIC_URL.catalog()}>
				<Button variant='ghost'>Каталог</Button>
			</Link>
			<HeaderCart />
			<HeaderProfile />
		</div>
	)
}
