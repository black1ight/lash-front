import { Metadata } from 'next'
import Header from '../components/ui/header/Header'
import Sidebar from '../components/ui/sidebar.tsx/Sidebar'
import AuthProvider from '../providers/auth-providers/AuthProvider'
import ReduxProvider from '../providers/ReduxProvider'
import './globals.css'
import QueryProvider from './QueryProvider'

export const metadata: Metadata = {
	title: {
		default: 'lash-store | beauty-shopp',
		template: '',
		absolute: ''
	},
	description: 'lashes and more to you work'
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<ReduxProvider>
					<AuthProvider Component={{ isOnlyUser: true }}>
						<QueryProvider>
							<div>
								<Header />
								<div className='grid grid-cols-6'>
									<Sidebar />
									<main className='col-span-5'>{children}</main>
								</div>
							</div>
						</QueryProvider>
					</AuthProvider>
				</ReduxProvider>
			</body>
		</html>
	)
}
