import { NO_INDEX_PAGE } from '@/src/constants/seo.constants'
import { Metadata, NextPage } from 'next'
import { Products } from './Products'

export const metadata: Metadata = {
	title: 'Товари',
	...NO_INDEX_PAGE
}

interface Props {}

const ProductsPage: NextPage<Props> = ({}) => {
	return <Products />
}

export default ProductsPage
