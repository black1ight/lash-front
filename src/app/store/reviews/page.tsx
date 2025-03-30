import { NO_INDEX_PAGE } from '@/src/constants/seo.constants'
import { Metadata } from 'next'
import { Reviews } from './Reviews'

export const metadata: Metadata = {
	title: 'Відгуки',
	...NO_INDEX_PAGE
}

export default function ReviewsPage() {
	return <Reviews />
}
