'use client'

import { PUBLIC_URL } from '@/src/config/url.config'
import Link from 'next/link'
import { FC } from 'react'
import { HeaderSearch } from './HeaderSearch'
import { HeaderMenu } from './header-menu/HeaderMenu'

const Header: FC = () => {
	return (
		<div className='bg-black/90 text-white col-span-6 p-4 flex items-center rounded-lg'>
			<Link
				href={PUBLIC_URL.home()}
				className='text-2xl text-pink-500 px-2 py-1 tracking-tighter font-light shadow'
			>
				<span className='font-semibold'>Lashé</span>
				<span className='text-white/50'>Store</span>
			</Link>
			<HeaderSearch />
			<HeaderMenu />
		</div>
	)
}

export default Header
