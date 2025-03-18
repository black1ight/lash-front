import type { NextPage } from 'next'
import CatalogPage from './catalog/page'

const HomePage: NextPage = async () => {
	return (
		<div className=''>
			<CatalogPage />
		</div>
	)
}

export default HomePage
