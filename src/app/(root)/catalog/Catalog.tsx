'use client'

import Products from '@/src/components/layouts/main-layout/Products/product-item/Products'
import SortDropdown from '@/src/components/layouts/main-layout/sort/SortDropdown'
import { Button } from '@/src/components/ui/Button'
import Heading from '@/src/components/ui/Heading'
import { ProductService } from '@/src/services/product/product.service'
import { enumProductSort } from '@/src/services/product/product.types'
import { IProductsData } from '@/src/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'

interface CatalogProps {
	data: IProductsData
	slug?: string
}

const Catalog: FC<CatalogProps> = ({ data, slug = '' }) => {
	const [page, setPage] = useState(1)
	const [sortType, setSortType] = useState<enumProductSort>(
		enumProductSort.RANK
	)

	const { data: response, isLoading } = useQuery({
		queryKey: ['products', sortType, page],
		queryFn: () =>
			ProductService.getAll({
				page,
				perPage: 8,
				sort: sortType
			}),
		initialData: data,
		enabled: !slug
	})

	const { data: categoryResponse } = useQuery({
		queryKey: ['products-by-category', sortType, page],
		queryFn: () =>
			ProductService.getByCategory(slug, {
				page,
				perPage: 8,
				sort: sortType
			}),
		initialData: data,
		enabled: !!slug
	})

	return (
		<div className='p-4'>
			<Heading title='Catalog' />
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			<Products
				products={
					slug && categoryResponse
						? categoryResponse.products
						: response.products
				}
			/>
			<Button
				onClick={() => setPage(page + 1)}
				className='mt-10 mx-auto '
				variant='outline'
				size='sm'
			>
				more
			</Button>
		</div>
	)
}

export default Catalog
