import type { Metadata } from 'next'
import { SITE_DESCRIPTION, SITE_NAME } from '../constants/seo.constants'
import ReduxProvider from '../providers/ReduxProvider'
import './globals.css'
import QueryProvider from './QueryProvider'

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ua'>
			<body>
				<ReduxProvider>
					<QueryProvider>{children}</QueryProvider>
				</ReduxProvider>
			</body>
		</html>
	)
}
