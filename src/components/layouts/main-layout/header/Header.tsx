'use client'

import { Loader } from '@/src/components/ui/Loader'
import { CABINET_URL, PUBLIC_URL } from '@/src/config/url.config'
import { useProfile } from '@/src/hooks/useProfile'
import { User } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { CiLogout } from 'react-icons/ci'

const Header: FC = () => {
	const { profile, isLoading, logout } = useProfile()

	return (
		<div className='bg-black/90 col-span-6 p-4 flex rounded-lg'>
			<Link
				href={PUBLIC_URL.home()}
				className='text-2xl text-pink-500 px-2 py-1 tracking-tighter font-light shadow'
			>
				<span className='font-semibold'>Lashé</span>
				<span className='text-white/50'>Store</span>
			</Link>
			<div className='ml-auto flex items-center text-white/50 rounded-lg'>
				{isLoading ? (
					<Loader size='sm' />
				) : (
					<Link href={CABINET_URL.home()}>
						{profile ? (
							<div className='flex gap-2 items-center px-2 py-1'>
								<span>{profile?.email}</span>
								<span onClick={logout} className='cursor-pointer text-pink-500'>
									<CiLogout size={24} />
								</span>
							</div>
						) : (
							<User />
						)}
					</Link>
				)}
			</div>
		</div>
	)
}

export default Header
