export const PRODUCT = 'products'

export type TypeProduct = {
	name: string
	description?: string
	price: number
	images: string[]
	categoryId: number
}

export type TypeDataFilters = {
	sort?: enumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}

export enum enumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}
