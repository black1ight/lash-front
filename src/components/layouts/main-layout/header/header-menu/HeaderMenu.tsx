import { Button } from '@/src/components/ui/Button'
import { CABINET_URL, PUBLIC_URL, STORE_URL } from '@/src/config/url.config'
import Link from 'next/link'
import { HeaderCart } from './header-cart/HeaderCart'
import { HeaderProfile } from './HeaderProfile'

export function HeaderMenu() {
	return (
		<div className='flex gap-2 text-white/50'>
			<Link href={STORE_URL.root()}>
				<Button variant='ghost'>Магазин</Button>
			</Link>
			<Link href={CABINET_URL.favorites()}>
				<Button variant='ghost'>Обране</Button>
			</Link>
			<Link href={PUBLIC_URL.catalog()}>
				<Button variant='ghost'>Каталог</Button>
			</Link>
			<HeaderCart />
			<HeaderProfile />
		</div>
	)
}
