import { Button } from '@/src/components/ui/Button'
import { IReviewProduct } from '@/src/types/review.interface'
import { ColumnDef } from '@tanstack/react-table'

export interface IReviewColumn {
	id: number
	createdAt: string
	rating: string
	username: string
	product: IReviewProduct
}

export const reviewColumns: ColumnDef<IReviewColumn>[] = [
	{
		accessorKey: 'createdAt',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Дата створення
				</Button>
			)
		}
	},
	{
		accessorKey: 'rating',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Рейтинг
				</Button>
			)
		}
	},
	{
		accessorKey: 'username',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Клієнт
				</Button>
			)
		}
	},
	{
		accessorKey: 'product',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Товар
				</Button>
			)
		},

		cell: ({ row }) => {
			const product = row.original.product
			return (
				<div className='flex items-center gap-2 w-[200px] overflow-hidden'>
					<img
						src={product.images[0]}
						alt={product.name}
						className='w-10 h-10 object-cover'
					/>
					<span className='w-[150px] whitespace-nowrap overflow-hidden text-ellipsis'>
						{product.name}
					</span>
				</div>
			)
		}
	}
]
