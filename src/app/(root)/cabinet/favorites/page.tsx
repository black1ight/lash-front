import { Metadata } from 'next'
import { Favorites } from './Favorites'

export const metadata: Metadata = {
	title: 'Обрані товари'
}

export default function FavoritesPage() {
	return <Favorites />
}
