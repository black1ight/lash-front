import { IProduct } from '@/src/types/product.interface'
import ProductItem from './ProductItem'

interface ProductsProps {
	products: IProduct[]
}

export function Products({ products }: ProductsProps) {
	return (
		<section className='grid max-sm:grid-cols-1 grid-cols-4 gap-10 justify-between'>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</section>
	)
}
