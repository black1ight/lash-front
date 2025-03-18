import { IProduct } from '@/src/types/product.interface'
import { FC } from 'react'
import ProductItem from './ProductItem'

interface ProductsProps {
	products: IProduct[]
}

const Products: FC<ProductsProps> = ({ products }) => {
	return (
		<section className='grid grid-cols-4 gap-10 justify-between'>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</section>
	)
}

export default Products
