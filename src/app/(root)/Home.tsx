import { IProductsData } from '@/src/types/product.interface'
import Catalog from './catalog/Catalog'
interface HomeProps {
	productsData: IProductsData
}
export function Home({ productsData }: HomeProps) {
	return (
		<div>
			<Catalog data={productsData} />
		</div>
	)
}
