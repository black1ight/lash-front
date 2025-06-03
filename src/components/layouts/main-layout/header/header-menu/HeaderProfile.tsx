import { Loader } from '@/src/components/ui/Loader'
import { CABINET_URL } from '@/src/config/url.config'
import { useProfile } from '@/src/hooks/useProfile'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'

export function HeaderProfile() {
	const { profile, isLoading, logout } = useProfile()

	return (
		<div className='flex max-sm:order-1 items-center text-white/50 hover:text-white rounded-lg'>
			{isLoading ? (
				<Loader size='sm' />
			) : (
				<>
					<Link href={CABINET_URL.home()}>
						{profile ? (
							<div className='flex gap-2 items-center px-2 py-1 rounded-lg border border-transparent hover:border hover:border-white/50'>
								<span>{profile?.email}</span>
							</div>
						) : (
							<User />
						)}
					</Link>
					{profile && (
						<span
							onClick={logout}
							className='cursor-pointer text-pink-500/50 hover:text-pink-500 pl-2'
						>
							<LogOut />
						</span>
					)}
				</>
			)}
		</div>
	)
}
