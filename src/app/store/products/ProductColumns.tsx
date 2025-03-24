import Button from '@/src/components/ui/button/Button'
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel
} from '@/src/components/ui/dropdown-menu'
import { PUBLIC_URL, STORE_URL } from '@/src/config/url.config'
import {
	DropdownMenu,
	DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, ExternalLink, MoreHorizontal, Pencil } from 'lucide-react'
import Link from 'next/link'

export interface IProductColumn {
	id: string
	title: string
	description: string
	price: string
	category: string
}

export const productColumns: ColumnDef<IProductColumn>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Назва
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'price',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Ціна
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'category',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Категорія
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'actions',
		header: 'Дії',
		cell: ({ row }) => {
			;<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='light' className='h-8 w-8 p-0'>
						<MoreHorizontal className='h-4 w-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Дії</DropdownMenuLabel>
					<Link href={PUBLIC_URL.product(row.original.id)} target='_blank'>
						<DropdownMenuItem>
							<ExternalLink className='size-4 mr-2' />
							Сторінка з продуктом
						</DropdownMenuItem>
					</Link>
					<Link href={STORE_URL.productEdit(row.original.id)} target='_blank'>
						<DropdownMenuItem>
							<Pencil className='size-4 mr-2' />
							Редагувати
						</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>
		}
	}
]
