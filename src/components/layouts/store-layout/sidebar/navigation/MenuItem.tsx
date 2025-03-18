import { IMenuItem } from './menu.interface'

interface MenuItemProps {
	route: IMenuItem
}

export function MenuItem({ route }: MenuItemProps) {
	return (
		<div className='flex gap-2 items-center'>
			<route.icon strokeWidth={1} size={20} className='text-sky-600' />
			<span>{route.value}</span>
		</div>
	)
}
