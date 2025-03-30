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
	const subRoute = route.link.split('/').slice(2).join('/')

	return (
		<Link
			href={route.link}
			className={cn(
				'flex gap-2 items-center p-2 rounded-lg hover:bg-black/5 text-sm',
				{
					'text-pink-500 bg-black/5':
						(route.link.split('/').slice(2).join('/').length &&
							pathname.includes(subRoute)) ||
						route.link === pathname
				}
			)}
		>
			<route.icon strokeWidth={1.5} size={20} className='' />
			<span>{route.value}</span>
		</Link>
	)
}
