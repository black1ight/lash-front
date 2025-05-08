import { IProductsData } from '@/src/types/product.interface'
import Catalog from './catalog/Catalog'
import { HeroSection } from './hero/Hero'
interface HomeProps {
	productsData: IProductsData
}
export function Home({ productsData }: HomeProps) {
	return (
		<div>
			<HeroSection title='Наш асортимент - твій креативний простір' />
			<Catalog data={productsData} />
		</div>
	)
}
