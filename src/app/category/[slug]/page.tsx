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
	return await ProductService.getByCategory(slug)
}

const CategoryPage: NextPage<CategoryPageProps> = async ({
	params
}: {
	params: Promise<{ slug: string }>
}) => {
	const { slug } = await params
	const products = await getProducts(slug)

	return <Catalog data={products} slug={slug} />
}

export default CategoryPage
