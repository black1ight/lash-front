import { NO_INDEX_PAGE } from '@/src/constants/seo.constants'
import { Metadata } from 'next'
import { CreateProduct } from './CreateProduct'

export const metadata: Metadata = {
	title: 'Створення товару',
	...NO_INDEX_PAGE
}

export default function CreateProductPage() {
	return <CreateProduct />
}
