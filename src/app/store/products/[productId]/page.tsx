import { NO_INDEX_PAGE } from '@/src/constants/seo.constants'
import { Metadata } from 'next'
import { ProductEdit } from './ProductEdit'

export const metadata: Metadata = {
	title: 'Редагування продукта',
	...NO_INDEX_PAGE
}

export default function ProductEditPage() {
	return <ProductEdit />
}
