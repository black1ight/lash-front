'use client'

import { PUBLIC_URL } from '@/src/config/url.config'
import { useActions } from '@/src/hooks/useActions'
import { useUser } from '@/src/hooks/useUser'
import Link from 'next/link'
import { FC } from 'react'
import { CiLogout } from 'react-icons/ci'

const Header: FC = () => {
	const { user } = useUser()
	const { logout } = useActions()
	return (
		<div className='col-span-6 p-4 bg-bg flex rounded-md'>
			<Link
				href={PUBLIC_URL.home()}
				className='text-2xl text-rose-500 bg-white px-2 py-1 rounded-md'
			>
				LoGo
			</Link>
			<div className='ml-auto flex gap-2 items-center bg-white px-2 py-1 rounded-md'>
				<span>{user?.email}</span>
				<span onClick={logout} className='text-teal-700 cursor-pointer'>
					<CiLogout size={24} />
				</span>
			</div>
		</div>
	)
}

export default Header
