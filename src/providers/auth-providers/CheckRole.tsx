import { useAuth } from '@/src/hooks/useAuth'
import { usePathname, useRouter } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from './auth-page.types'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component,
	children
}) => {
	const { user } = useAuth()
	const isOnlyUser = Component?.isOnlyUser || false
	const router = useRouter()
	const pathname = usePathname()

	if (user && isOnlyUser) return <>{children}</>
	pathname !== '/auth' && router.replace('/auth')
	return <>{children}</>
}

export default CheckRole
