import { CategoryService } from '@/src/services/category.service'
import { ProductService } from '@/src/services/product/product.service'
import { NextPage } from 'next'
import Catalog from '../../catalog/Catalog'

interface CategoryPageProps {
	params: Promise<{
		slug: string
	}>
}

export const generateStaticParams = async () => {
	const categories = await CategoryService.getAll()

	const paths = categories.data.map(category => {
		return { slug: `${category.slug}` }
	})

	return paths
}

export const getProducts = async (slug: string) => {
	const category = await CategoryService.getBySlug(slug)
	const products = await ProductService.getByCategory(slug)
	return { category, products }
}

const CategoryPage: NextPage<CategoryPageProps> = async ({
	params
}: {
	params: Promise<{ slug: string }>
}) => {
	const { slug } = await params
	const { category, products } = await getProducts(slug)

	return (
		<Catalog
			data={products}
			slug={slug}
			title={category.name}
			description={category.name}
		/>
	)
}

export default CategoryPage
