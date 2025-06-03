'use client'

import { PUBLIC_URL } from '@/src/config/url.config'
import Link from 'next/link'
import { FC } from 'react'
import { HeaderSearch } from './HeaderSearch'
import { BurgerMenu } from './header-menu/BurgerMenu'
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
			<BurgerMenu />
			<div className='max-sm:hidden'>
				<HeaderMenu />
			</div>
		</div>
	)
}

export default Header
