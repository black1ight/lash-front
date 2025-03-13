import { IProduct } from '@/src/types/product.interface'
import { FC } from 'react'
import ProductItem from './product-item/ProductItem'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<section className='grid grid-cols-4 gap-8'>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</section>
	)
}

export default Catalog
