import { ProductService } from '@/src/services/product/product.service'
import { NextPage } from 'next'
import Catalog from './Catalog'

interface Props {}

const CatalogPage: NextPage<Props> = async ({}) => {
	const { data: products } = await ProductService.getAll()

	return (
		<div>
			<Catalog products={products.products} />
		</div>
	)
}

export default CatalogPage
