import { NO_INDEX_PAGE } from '@/src/constants/seo.constants'
import { Metadata } from 'next'
import { Categories } from './Categories'

export const metadaa: Metadata = {
	title: 'Категорії',
	...NO_INDEX_PAGE
}

export default function CategoriesPage() {
	return <Categories />
}
