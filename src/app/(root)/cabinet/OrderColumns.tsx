import { Button } from '@/src/components/ui/Button'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

export interface IOrderColumns {
	id: number
	products: {
		image: string
		name: string
	}[]
	createdAt: string
	status: string
	total: string
}

export const orderColumns: ColumnDef<IOrderColumns>[] = [
	{
		accessorKey: 'id',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					№
					<ArrowUpDown />
				</Button>
			)
		}
	},
	{
		accessorKey: 'products',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Товари
					<ArrowUpDown />
				</Button>
			)
		},
		cell: ({ row }) => {
			const products = row.original.products
			return (
				<div className='w-[200px] space-y-2 overflow-hidden'>
					{products.map((product, id) => (
						<div className='flex' key={`${product.name}=${id}`}>
							<img
								src={product.image}
								alt={product.name}
								className='w-10 h-10 object-cover'
							/>
							<span className='w-[150px] whitespace-nowrap overflow-hidden text-ellipsis'>
								{product.name}
							</span>
						</div>
					))}
				</div>
			)
		}
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Дата оплати
					<ArrowUpDown />
				</Button>
			)
		}
	},
	{
		accessorKey: 'status',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Статус
					<ArrowUpDown />
				</Button>
			)
		}
	},
	{
		accessorKey: 'total',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Сума
					<ArrowUpDown />
				</Button>
			)
		}
	}
]
