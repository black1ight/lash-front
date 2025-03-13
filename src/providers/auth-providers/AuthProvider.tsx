'use client'

import { useActions } from '@/src/hooks/useActions'
import { useAuth } from '@/src/hooks/useAuth'
import { getAccessToken } from '@/src/services/auth/auth.helper'
import { setUser } from '@/src/store/user/user.slice'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TypeComponentAuthFields } from './auth-page.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component,
	children
}) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()
	const pathname = usePathname()
	const dispatch = useDispatch()

	const isOnlyUser = Component?.isOnlyUser || false

	useEffect(() => {
		const storedUser = localStorage.getItem('user')
		if (storedUser) {
			dispatch(setUser(JSON.parse(storedUser)))
		}
	}, [])

	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) {
			logout()
		}
	}, [pathname])
	return isOnlyUser ? (
		<DynamicCheckRole Component={Component}>{children}</DynamicCheckRole>
	) : (
		<>{children}</>
	)
}

export default AuthProvider
