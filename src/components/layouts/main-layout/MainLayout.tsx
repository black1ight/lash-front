import { FC, PropsWithChildren } from 'react'
import { Footer } from './footer/Footer'
import Header from './header/Header'
import Sidebar from './sidebar.tsx/Sidebar'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='grid grid-cols-6 bg-body gap-2 p-2'>
			<Header />
			<Sidebar />
			<main className='bg-bg col-span-5 border rounded-lg p-4 text-text'>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default MainLayout
