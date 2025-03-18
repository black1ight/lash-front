import { Metadata } from 'next'
import Home from './Home'

export const metadata: Metadata = {
	title: 'Наш асортимент - твій креативний простір.'
}

export default function HomePage() {
	return <Home />
}
