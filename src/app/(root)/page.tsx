import { ProductService } from '@/src/services/product/product.service'
import { Metadata } from 'next'
import { Home } from './Home'

export const metadata: Metadata = {
	title: 'Наш асортимент - твій креативний простір'
}

async function getProducts() {
	const data = await ProductService.getAll()
	return data
}

export default async function HomePage() {
	const data = await getProducts()
	return <Home productsData={data} />
}
