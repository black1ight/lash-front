import { NextPage } from 'next'
import CatalogPage from './catalog/page'

const HomePage: NextPage = async () => {
	return (
		<div className='p-4'>
			<CatalogPage />
		</div>
	)
}

export default HomePage
