import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	rank: number
	discount: number
	description: string
	price: number
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
}

export interface IProductInput {
	name: string
	description: string
	price: number
	discount: number
	images: string[]
	categoryId: number
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}

export interface IProductsData {
	length: number
	products: IProduct[]
}
