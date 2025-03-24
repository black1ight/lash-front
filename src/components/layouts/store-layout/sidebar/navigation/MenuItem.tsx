'use client'

import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IMenuItem } from './menu.interface'

interface MenuItemProps {
	route: IMenuItem
}

export function MenuItem({ route }: MenuItemProps) {
	const pathname = usePathname()

	return (
		<Link
			href={route.link}
			className={cn(
				'flex gap-2 items-center p-2 rounded-lg hover:bg-stone-100 text-sm spa',
				{
					'text-pink-600 bg-bg shadow': pathname === route.link
				}
			)}
		>
			<route.icon strokeWidth={1} size={20} className='text-pink-600' />
			<span>{route.value}</span>
		</Link>
	)
}
