'use client'

import { Button } from '@/src/components/ui/Button'
import { DataTable } from '@/src/components/ui/data-table/DataTable'
import DataTableLoading from '@/src/components/ui/data-table/DataTableLoading'
import Heading from '@/src/components/ui/Heading'
import { STORE_URL } from '@/src/config/url.config'
import { useGetCategories } from '@/src/hooks/queries/categories/useGetCategories'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { CategoryColumns, ICategoryColumn } from './CategoryColumns'

export function Categories() {
	const { categories, isLoadingCategories } = useGetCategories()
	const formattedCategories: ICategoryColumn[] = categories?.data
		? categories.data.map(category => ({
				id: category.id,
				createdAt: category.createdAt,
				name: category.name,
				slug: category.slug
		  }))
		: []
	return (
		<div>
			{isLoadingCategories ? (
				<DataTableLoading />
			) : (
				<>
					<div className='flex space-y-4'>
						<Heading
							title={`Категорії (${categories?.data.length})`}
							description='Всі категорії'
						/>
						<div className='ml-auto'>
							<Link
								className='flex items-center'
								href={STORE_URL.categoryCreate()}
							>
								<Button variant='default'>
									<Plus size={18} />
									Створити
								</Button>
							</Link>
						</div>
					</div>
					<div>
						<DataTable
							columns={CategoryColumns}
							data={formattedCategories}
							filtersKey='name'
						/>
					</div>
				</>
			)}
		</div>
	)
}
