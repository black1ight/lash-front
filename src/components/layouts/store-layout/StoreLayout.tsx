import { FC, PropsWithChildren } from 'react'
import { Footer } from '../main-layout/footer/Footer'
import Header from '../main-layout/header/Header'
import Sidebar from '../main-layout/sidebar.tsx/Sidebar'

const StoreLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='grid grid-cols-6 bg-white gap-2 p-2'>
			<Header />
			<Sidebar />
			<main className='bg-bg col-span-5 border rounded-lg p-4 text-text'>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default StoreLayout
