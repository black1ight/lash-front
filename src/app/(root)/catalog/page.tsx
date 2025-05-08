import { ProductService } from '@/src/services/product/product.service'
import { Metadata } from 'next'
import Catalog from './Catalog'

export const metadata: Metadata = {
	title: 'Каталог товарів'
}

async function getProducts() {
	const data = await ProductService.getAll()
	return data
}

export default async function CatalogPage() {
	const data = await getProducts()
	return <Catalog data={data} />
}
