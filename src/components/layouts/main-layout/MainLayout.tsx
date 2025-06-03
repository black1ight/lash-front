import { FC, PropsWithChildren } from 'react'
import { Footer } from './footer/Footer'
import Header from './header/Header'
import Sidebar from './sidebar.tsx/Sidebar'
import { SideMenu } from './sidebar.tsx/SideMenu'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='grid grid-cols-6 bg-body gap-2 p-2'>
			<Header />
			<SideMenu />
			<Sidebar />
			<main className='bg-bg col-span-5 max-sm:col-span-6 border rounded-lg p-4 max-sm:p-2 text-text'>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default MainLayout
