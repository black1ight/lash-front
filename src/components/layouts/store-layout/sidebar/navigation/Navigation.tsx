'use client'

import { STORE_URL } from '@/src/config/url.config'
import cn from 'clsx'
import { Album, BarChart, FolderKanban, Settings, Star } from 'lucide-react'
import { IMenuItem } from './menu.interface'
import { MenuItem } from './MenuItem'

export function Navigation() {
	const routes: IMenuItem[] = [
		{
			icon: BarChart,
			link: STORE_URL.home(),
			value: 'Статистика'
		},
		{
			icon: FolderKanban,
			link: STORE_URL.products(),
			value: 'Товари'
		},
		{
			icon: Album,
			link: STORE_URL.categories(),
			value: 'Категорії'
		},
		{
			icon: Star,
			link: STORE_URL.reviews(),
			value: 'Відгуки'
		},
		{
			icon: Settings,
			link: STORE_URL.settings(),
			value: 'Налаштування'
		}
	]

	return (
		<div className={cn(' p-3 rounded-lg')}>
			<div className={cn('flex flex-col gap-3')}>
				{routes.map(route => (
					<MenuItem key={route.value} route={route} />
				))}
			</div>
		</div>
	)
}
