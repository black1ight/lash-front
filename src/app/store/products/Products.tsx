'use client'

import Button from '@/src/components/ui/button/Button'
import { DataTable } from '@/src/components/ui/data-table/DataTable'
import DataTableLoading from '@/src/components/ui/data-table/DataTableLoading'
import Heading from '@/src/components/ui/Heading'
import { STORE_URL } from '@/src/config/url.config'
import { useGetProducts } from '@/src/hooks/queries/products/useGetProducts'
import { convertPrice } from '@/src/utils/converPrice'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { IProductColumn, productColumns } from './ProductColumns'

export function Products() {
	const { products, isLoading } = useGetProducts()

	const formattedProducts: IProductColumn[] = products
		? products.products.map(product => ({
				id: product.id.toString(),
				title: product.name,
				description: product.description,
				price: convertPrice(product.price),
				category: product.category.name
		  }))
		: []

	return (
		<div className=''>
			{isLoading ? (
				<DataTableLoading />
			) : (
				<>
					<div className='flex items-center space-y-3'>
						<Heading title='Товари' description='Всі товари' />
						<div className='ml-auto'>
							<Link href={STORE_URL.productCreate()}>
								<Button variant='dark'>
									<Plus size={20} className='mr-2' />
									Створити
								</Button>
							</Link>
						</div>
					</div>
					<div className='bg-white p-4 rounded-lg'>
						<DataTable
							columns={productColumns}
							data={formattedProducts}
							filtersKey='title'
						/>
					</div>
				</>
			)}
		</div>
	)
}
