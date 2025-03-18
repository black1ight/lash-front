import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './services/auth/auth.helper'

export async function middleware(request: NextRequest) {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = request.url.includes('/auth')

	if (isAuthPage) {
		if (refreshToken) {
			return NextResponse.redirect(new URL('/', request.url))
		}
		return NextResponse.next()
	}

	if (refreshToken === undefined) {
		return NextResponse.redirect(new URL('/auth', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/auth', '/store/:path*', '/category/:path*']
}
