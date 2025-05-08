import { ProductService } from '@/src/services/product/product.service'
import { Metadata } from 'next'
import { Product } from '../Product'

export const generateStaticParams = async () => {
	const products = await ProductService.getAll()

	const paths = products.products.map(product => {
		return { slug: `${product.slug}` }
	})

	return paths
}

export const getProducts = async (slug: string) => {
	const product = await ProductService.getBySlug(slug)
	const similarsrProducts = await ProductService.getSimilar(slug)
	return { product, similarsrProducts }
}

export async function generateMetadata({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> {
	const { slug } = await params
	const { product } = await getProducts(slug)

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			images: [
				{
					url: product.images[0],
					width: 100,
					height: 100,
					alt: product.name
				}
			]
		}
	}
}

export default async function ProductPage({
	params
}: {
	params: { slug: string }
}) {
	const { slug } = await params
	const { product, similarsrProducts } = await getProducts(slug)
	return <Product product={product} similarProducts={similarsrProducts} />
}
