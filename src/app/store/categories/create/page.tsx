import { NO_INDEX_PAGE } from '@/src/constants/seo.constants'
import { Metadata } from 'next'
import { CategoryForm } from '../CategoryForm'

export const metadata: Metadata = {
	title: 'Створити категорію',
	...NO_INDEX_PAGE
}

export default function CreateCategoryPage() {
	return <CategoryForm />
}
