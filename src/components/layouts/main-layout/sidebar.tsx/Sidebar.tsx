'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from '../../store-layout/sidebar/navigation/Navigation'
import Category from './category/Category'

const Sidebar = () => {
	const pathname = usePathname()
	return (
		<aside className='p-4 h-screen col-span-1 bg-bg rounded-lg'>
			{pathname.includes('store') ? <Navigation /> : <Category />}
		</aside>
	)
}

export default Sidebar
