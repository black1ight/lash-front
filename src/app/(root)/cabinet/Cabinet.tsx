'use client'

import { DataTable } from '@/src/components/ui/data-table/DataTable'
import Heading from '@/src/components/ui/Heading'
import { useLogout } from '@/src/hooks/useLogout'
import { useProfile } from '@/src/hooks/useProfile'
import { EnumOrderStatus } from '@/src/types/order.interface'
import { convertPrice } from '@/src/utils/converPrice'
import { formattedDate } from '@/src/utils/formattedDate'
import { IOrderColumns, orderColumns } from './OrderColumns'

export function Cabinet() {
	const { profile } = useProfile()
	const { logout } = useLogout()

	if (!profile) return null

	const formattedOrders: IOrderColumns[] = profile?.orders.map(order => ({
		id: order.id,
		products: order.items.map(item => ({
			image: item.product.images[0],
			name: item.product.name
		})),
		createdAt: formattedDate(order.createdAt),
		status:
			order.status === EnumOrderStatus.PENDING ? 'В очікуванні' : 'Сплачено',
		total: convertPrice(order.total)
	}))

	return (
		<div className='space-y-4'>
			<Heading title='Ваші замовлення' />
			<DataTable columns={orderColumns} data={formattedOrders} />
		</div>
	)
}
