import type { Metadata } from 'next'
import Header from '../components/layouts/main-layout/header/Header'
import Sidebar from '../components/layouts/main-layout/sidebar.tsx/Sidebar'
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
					<QueryProvider>
						<div className='grid grid-cols-6 bg-body gap-2 p-2'>
							<Header />
							<Sidebar />
							<main className='col-span-5 bg-bg rounded-md'>{children}</main>
						</div>
					</QueryProvider>
				</ReduxProvider>
			</body>
		</html>
	)
}
