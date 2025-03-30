import { NO_INDEX_PAGE } from '@/src/constants/seo.constants'
import { Metadata } from 'next'
import { CategoryEdit } from './CategoryEdit'

export const metadata: Metadata = {
	title: 'Редагувати категорію',
	...NO_INDEX_PAGE
}

export default function CategoryEditPage() {
	return <CategoryEdit />
}
