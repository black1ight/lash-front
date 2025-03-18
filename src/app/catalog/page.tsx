import { ProductService } from '@/src/services/product/product.service'
import type { Metadata } from 'next'
import { NextPage } from 'next'
import { cookies } from 'next/headers'
import Catalog from './Catalog'

interface Props {}

export const metadata: Metadata = {
	title: 'Catalog'
}

const CatalogPage: NextPage<Props> = async ({}) => {
	const cookieStore = await cookies()
	const refreshToken = cookieStore.get('refreshToken')

	const data = await ProductService.getAll()

	return (
		<div>
			<Catalog data={data} />
		</div>
	)
}

export default CatalogPage
