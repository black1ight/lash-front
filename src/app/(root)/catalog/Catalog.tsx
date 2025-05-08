'use client'

import { Products } from '@/src/components/layouts/main-layout/Products/product-item/Products'
import SortDropdown from '@/src/components/layouts/main-layout/sort/SortDropdown'
import { Button } from '@/src/components/ui/Button'
import Heading from '@/src/components/ui/Heading'
import { ProductService } from '@/src/services/product/product.service'
import { enumProductSort } from '@/src/services/product/product.types'
import { IProductsData } from '@/src/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { FC, useState } from 'react'

interface CatalogProps {
	title?: string
	description?: string
	data: IProductsData
	slug?: string
}

const Catalog: FC<CatalogProps> = ({
	data,
	slug = '',
	title = 'Каталог',
	description
}) => {
	const [page, setPage] = useState(1)
	const [sortType, setSortType] = useState<enumProductSort>(
		enumProductSort.RANK
	)
	const searchParams = useSearchParams()
	const searchTerm = searchParams.get('searchTerm') ?? ''

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

	const { data: searchData, isLoading: isSearchLoading } = useQuery({
		queryKey: ['products search', searchTerm],
		queryFn: () => ProductService.getAll({ searchTerm }),
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

	const productsData =
		searchTerm && searchData
			? searchData.products
			: slug && categoryResponse
			? categoryResponse.products
			: response.products

	return (
		<div className='p-4'>
			<Heading
				title={searchTerm ? `'${searchTerm}'` : title}
				description={searchTerm ? 'Результати пошкуку...' : description}
			/>
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			{data?.length > 0 ? (
				<Products products={productsData} />
			) : (
				<h3 className='text-xl text-center p-10'>Товари відсутні</h3>
			)}
			{response?.length > 8 && (
				<Button
					onClick={() => setPage(page + 1)}
					className='mt-10 mx-auto '
					variant='outline'
					size='sm'
				>
					more
				</Button>
			)}
		</div>
	)
}

export default Catalog
