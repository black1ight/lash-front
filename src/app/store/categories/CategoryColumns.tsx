import { Button } from '@/src/components/ui/Button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/src/components/ui/dropdown-menu'
import { PUBLIC_URL, STORE_URL } from '@/src/config/url.config'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, ExternalLink, MoreHorizontal, Pencil } from 'lucide-react'
import Link from 'next/link'

export interface ICategoryColumn {
	id: number
	createdAt: string
	name: string
	slug: string
}

export const CategoryColumns: ColumnDef<ICategoryColumn>[] = [
	{
		accessorKey: 'name',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Назва
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			)
		}
	},
	{
		accessorKey: 'actions',
		header: 'Дії',
		cell: ({ row }) => (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='ghost' className='h-8 w-8 p-0'>
						<MoreHorizontal className='h-4 w-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Дії</DropdownMenuLabel>
					<Link href={PUBLIC_URL.category(row.original.slug)} target='_blank'>
						<DropdownMenuItem>
							<ExternalLink className='size-4 mr-2' />
							Сторінка з категорією
						</DropdownMenuItem>
					</Link>
					<Link href={STORE_URL.categoryEdit(row.original.id.toString())}>
						<DropdownMenuItem>
							<Pencil className='size-4 mr-2' />
							Редагувати
						</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	}
]
